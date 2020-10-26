const getSlug = (value: string): string => {
  return value
    .replace(/[^-a-zA-Z0-9\s+]+/gi, '')
    .replace(/\s+/gi, '-')
    .toLowerCase();
};

export default getSlug;
