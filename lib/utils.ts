import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const checkPageQuery = (value: unknown): number | null => {
	const checkedValue = Number(value);
	if (!checkedValue) return null;
	return checkedValue;
};
