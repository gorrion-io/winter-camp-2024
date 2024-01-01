import { describe, it, expect, vi } from 'vitest';
import { readFile } from 'fs/promises';
import { readJsonFile, readYamlFile } from '@/lib/utils/read-files';

vi.mock('fs/promises');


describe('read-files', () => {

  describe('readJsonFile', () => {
    it('reads and parses a JSON file correctly', async () => {
      const fakeData = { key: 'value' };
      vi.mocked(readFile).mockResolvedValue(JSON.stringify(fakeData));

      const result = await readJsonFile('test.json');
      expect(result).toEqual(fakeData);
    });

    it('throws an error for non-JSON files', async () => {
      await expect(readJsonFile('test.txt')).rejects.toThrow('Invalid file type must be a json file');
    });
  });

  describe('readYamlFile', () => {
    it('reads and parses a YAML file correctly', async () => {
      const fakeData = { key: 'value' };
      const fakeJsonData = JSON.stringify(fakeData);
      vi.mocked(readFile).mockResolvedValue(fakeJsonData);

      const result = await readYamlFile('test.yaml');
      expect(result).toEqual(fakeData);
    });

    it('throws an error for non-YAML files', async () => {
      await expect(readYamlFile('test.json')).rejects.toThrow('Invalid file type must be a yaml file');
    });
  });

});
