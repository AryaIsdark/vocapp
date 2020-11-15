import React from "react";
import AlphabeticListView from "../AlphabeticListView/AlphabeticListView";

const Vocabs = ({ data }: { data: any }) => {
  return (
    <div className={"vocabs"}>
      <AlphabeticListView
        dataSource={data}
        dataTestId={"vocabs"}
        indexKey={"wordId"}
        onRenderRow={(item: any) => (
          <div key={item._id} className={"item"}>
            <div className={"word"}>{item.wordId}</div>
            <div className={"definition"}>
              {item.definition.substring(0, 30)}
              {item.definition.length > 30 && "..."}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Vocabs;
