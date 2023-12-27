export const parseToNumber = (value:unknown) : number | null => {
    const parsedValue = Number(value);
    if (isNaN(parsedValue)) return null;
    return parsedValue;
};
