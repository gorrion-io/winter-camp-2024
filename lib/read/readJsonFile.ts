import { promises as fs } from 'fs';

export const readJsonFile = async <T>(filePath: string): Promise<T> => {
    try {
        if (!filePath.endsWith('.json'))
            throw new Error('File is not a JSON file');
        const file = await fs.readFile(process.cwd() + filePath, 'utf8');
        return JSON.parse(file) as T;
    } catch (err) {
        throw err;
    }
};
