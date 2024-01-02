
import fs from 'fs/promises';
import { jsonParser, yamlParser, loadCrewMembers, combineCrewLists } from '../lib/crew';

jest.mock('fs/promises');

describe('Crew Members Parser', () => {
  const mockJsonData = '[{"fullName": "John Doe", "nationality": "American", "age": 35, "profession": "Engineer"}]';
  const mockYamlData = '- fullName: "Jane Doe"\n  nationality: "Canadian"\n  age: 32\n  profession: "Pilot"';

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('jsonParser', () => {
    it('should parse JSON data correctly', () => {
      const result = jsonParser(mockJsonData);
      expect(result).toEqual([
        { fullName: 'John Doe', nationality: 'American', age: 35, profession: 'Engineer' },
      ]);
    });
  });

  describe('yamlParser', () => {
    it('should parse YAML data correctly', () => {
      const result = yamlParser(mockYamlData);
      expect(result).toEqual([
        { fullName: 'Jane Doe', nationality: 'Canadian', age: 32, profession: 'Pilot' },
      ]);
    });
  });

  describe('loadCrewMembers', () => {
    it('should load and parse crew members from a file', async () => {
      (fs.readFile as jest.Mock).mockResolvedValue(mockJsonData);
      const result = await loadCrewMembers('path/to/json', jsonParser);
      expect(result).toEqual([
        { fullName: 'John Doe', nationality: 'American', age: 35, profession: 'Engineer' },
      ]);
    });

    it('should throw an error if the file cannot be read', async () => {
      (fs.readFile as jest.Mock).mockRejectedValue(new Error('File not found'));
      await expect(loadCrewMembers('path/to/nonexistent', jsonParser)).rejects.toThrow('File not found');
    });
  });

  describe('combineCrewLists', () => {
    it('should combine JSON and YAML crew lists', async () => {
      (fs.readFile as jest.Mock)
        .mockResolvedValueOnce(mockJsonData)
        .mockResolvedValueOnce(mockYamlData);
      const result = await combineCrewLists('path/to/json', 'path/to/yaml');
      expect(result).toEqual([
        { fullName: 'John Doe', nationality: 'American', age: 35, profession: 'Engineer' },
        { fullName: 'Jane Doe', nationality: 'Canadian', age: 32, profession: 'Pilot' },
      ]);
    });

    it('should throw an error if there is a problem combining lists', async () => {
      (fs.readFile as jest.Mock).mockRejectedValue(new Error('Error reading file'));
      await expect(combineCrewLists('path/to/json', 'path/to/yaml')).rejects.toThrow('Error combining crew lists');
    });
  });
});