import React from 'react';
import { render } from '@testing-library/react';
import AlphabeticListView from './AlphabeticListView';

const dataSource = [
  { name: 'arya', account: '12312312' },
  { name: 'booboo', account: '12312312' },
];

const setup = () =>
  render(
    <AlphabeticListView
      onRenderRow={(value: Record<string, any>) => <div key={value.name} />}
      dataSource={dataSource}
      indexKey={'name'}
      dataTestId={'name'}
    />,
  );

describe('components/elements/AlphabeticListView/AlphabeticListView', () => {
  it('renders correctly', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
