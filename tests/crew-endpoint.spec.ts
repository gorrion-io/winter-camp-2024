import { createMocks } from 'node-mocks-http';
import handler from '../pages/api/crew';
import { CrewMember, combineCrewLists } from '../lib/crew';

// Mockujemy funkcję combineCrewLists, aby zwracała z góry zdefiniowane dane
jest.mock('../lib/crew', () => ({
  ...jest.requireActual('../lib/crew'), // importujemy wszystkie rzeczywiste eksporty
  combineCrewLists: jest.fn(() => Promise.resolve([
    // Tutaj definiujemy mock danych, które mają być zwrócone
    { fullName: 'Alice Johnson', nationality: 'USA', age: 35, profession: 'Engineer' },
    { fullName: 'Bob Smith', nationality: 'USA', age: 32, profession: 'Pilot' },
    // Dodaj więcej mock danych według potrzeb
  ])),
}));

describe('/api/crew', () => {
    it('should return the first page of crew members sorted by fullName', async () => {
        const { req, res } = createMocks({
          method: 'GET',
          query: {
            page: '1',
          },
        });
    
        await handler(req, res);
    
        expect(res._getStatusCode()).toBe(200);
        const data = JSON.parse(res._getData());
        expect(data.crew).toBeInstanceOf(Array);
        expect(data.crew.length).toBeLessThanOrEqual(8);
        expect(data.page).toBe(1);
        expect(data.totalPages).toBeGreaterThanOrEqual(1);
        expect(data.crew).toEqual(data.crew.sort((a: CrewMember, b: CrewMember) => a.fullName.localeCompare(b.fullName)));
      });
    
      it('should handle pagination and return the correct page', async () => {
        const { req, res } = createMocks({
          method: 'GET',
          query: {
            page: '2',
          },
        });
    
        await handler(req, res);
    
        expect(res._getStatusCode()).toBe(200);
        const data = JSON.parse(res._getData());
        expect(data.page).toBe(2);
      });
    
      it('should return an empty array if the page is out of range', async () => {
        const { req, res } = createMocks({
          method: 'GET',
          query: {
            page: '9999', // Assuming this page number is out of range
          },
        });
    
        await handler(req, res);
    
        expect(res._getStatusCode()).toBe(200);
        const data = JSON.parse(res._getData());
        expect(data.crew).toEqual([]);
        expect(data.page).toBe(9999);
      });
    
      it('should return a 400 error if the page parameter is invalid', async () => {
        const { req, res } = createMocks({
          method: 'GET',
          query: {
            page: 'invalid',
          },
        });
    
        await handler(req, res);
    
        expect(res._getStatusCode()).toBe(400);
        const data = JSON.parse(res._getData());
        expect(data.error).toBe('Bad Request');
      });
    
      // Add more tests as needed to cover different scenarios and edge cases
    });

  afterAll(() => {
    jest.restoreAllMocks(); // Przywracamy oryginalne implementacje po zakończeniu testów
  });