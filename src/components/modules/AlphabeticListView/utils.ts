const collator = new Intl.Collator('en', {
  numeric: true,
  sensitivity: 'base',
});

export const groupCollectionAlphabetically = <
  T extends Record<string, any>,
  K extends Extract<keyof T, string>
>(
  list: T[],
  key: K,
): Record<string, T[]> => {
  const sortedList = [...list].sort((a: T, b: T) =>
    collator.compare(a[key], b[key]),
  );

  return sortedList.reduce(
    (groupedCollection: Record<string, T[]>, item: T) => {
      const firstCharacter = String(item[key]).charAt(0).toLowerCase();

      if (!groupedCollection[firstCharacter]) {
        groupedCollection[firstCharacter] = [];
      }

      groupedCollection[firstCharacter].push(item);

      return groupedCollection;
    },
    {},
  );
};
