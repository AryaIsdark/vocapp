import { groupCollectionAlphabetically } from './utils';

const dataSource = [
  { name: 'arya', account: '12312312' },
  { name: 'booboo', account: '12312312' },
];

describe('groupCollectionAlphabetically', () => {
  it('Should return correct grouped list', () => {
    const result = groupCollectionAlphabetically(dataSource, 'name');
    const expectedList = {
      a: [{ name: 'arya', account: '12312312' }],
      b: [{ name: 'booboo', account: '12312312' }],
    };

    expect(result).toMatchObject(expectedList);
  });
});
