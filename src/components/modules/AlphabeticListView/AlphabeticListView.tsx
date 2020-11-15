import React from "react";
import { Divider } from "antd";
import "./AlphabeticListView.less";
import { groupCollectionAlphabetically } from "./utils";

interface Props<T, K> {
  dataSource: T[];
  indexKey: K;
  onRenderRow: (value: T) => React.ReactElement;
  dataTestId: string;
}

const AlphabeticListView = <T, K extends Extract<keyof T, string>>({
  dataSource,
  indexKey,
  onRenderRow,
  dataTestId,
}: Props<T, K>) => {
  const groupedList = groupCollectionAlphabetically(dataSource, indexKey);
  if (!groupedList) {
    return null;
  }

  return (
    <div className="AlphabeticListView" data-testid={dataTestId}>
      {Object.entries(groupedList).map(([key, value]) => (
        <div key={key} className={"AlphabeticListView__container"}>
          <Divider type={"horizontal"} orientation={"left"}>
            <strong className={"AlphabeticListView__group-header"}>
              {key.toUpperCase()}
            </strong>
          </Divider>
          {value.map(onRenderRow)}
        </div>
      ))}
    </div>
  );
};

export default AlphabeticListView;
