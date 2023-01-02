export const upperFirst = (string: string): string => {
  if (!string) {
    return '';
  }
  return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
};

export const kebabToPascalCase = (string: string | undefined | null): string => {
  if (!string) {
    return '';
  }

  return string
    .split('-')
    .map((str) => upperFirst(str.split('/').map(upperFirst).join('/')))
    .join('');
};
