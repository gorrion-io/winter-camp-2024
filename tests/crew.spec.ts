import { CrewMember, loadCrewMembers, jsonParser, yamlParser, isValidCrewMember, mapToCrewMember, combineCrewLists } from '../lib/crew';
import fs from 'fs/promises';
import yaml from 'js-yaml';

jest.mock('fs/promises');

describe('Crew', () => {
  describe('loadCrewMembers', () => {
    it('should load and parse crew members from a file', async () => {
      (fs.readFile as jest.Mock).mockResolvedValue(JSON.stringify([{ name: 'John Doe', nationality: 'American', age: 35, profession: 'Engineer' }]));
      const crewMembers = await loadCrewMembers('path/to/file', jsonParser);
      expect(crewMembers).toEqual([{ fullName: 'John Doe', nationality: 'American', age: 35, profession: 'Engineer' }]);
    });
  });

  describe('isValidCrewMember', () => {
    it('should validate a crew member', () => {
      const isValid = isValidCrewMember({ name: 'John Doe', nationality: 'American', age: 35, profession: 'Engineer' });
      expect(isValid).toBe(true);
    });
  });

  describe('mapToCrewMember', () => {
    it('should map raw data to a CrewMember', () => {
      const crewMember = mapToCrewMember({ name: 'John Doe', nationality: 'American', age: 35, profession: 'Engineer' });
      expect(crewMember).toEqual({ fullName: 'John Doe', nationality: 'American', age: 35, profession: 'Engineer' });
    });
  });

  describe('combineCrewLists', () => {
    it('should combine crew lists from JSON and YAML files', async () => {
      (fs.readFile as jest.Mock)
        .mockResolvedValueOnce(JSON.stringify([{ name: 'John Doe', nationality: 'American', age: 35, profession: 'Engineer' }]))
        .mockResolvedValueOnce(yaml.dump([{ name: 'Jane Doe', nationality: 'American', age: 34, profession: 'Scientist' }]));
      const crewMembers = await combineCrewLists('path/to/json', 'path/to/yaml');
      expect(crewMembers).toEqual([
        { fullName: 'John Doe', nationality: 'American', age: 35, profession: 'Engineer' },
        { fullName: 'Jane Doe', nationality: 'American', age: 34, profession: 'Scientist' },
      ]);
    });
  });
});