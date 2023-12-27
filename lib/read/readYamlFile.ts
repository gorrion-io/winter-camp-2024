import { promises as fs } from 'fs';
import { parse } from 'yaml';

export const readYamlFile = async <T>(filePath: string): Promise<T> => {
	try {
		if (!filePath.endsWith('.yaml')) throw new Error('File is not a YAML file');
		const file = await fs.readFile(process.cwd() + filePath, 'utf8');
		return parse(file) as T;
	} catch (err) {
		throw err;
	}
};
