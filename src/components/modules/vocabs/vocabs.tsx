import React from "react";

const Vocabs = ({ data }: { data: any }) => {
  return (
    <div className={"vocabs"}>
      {!!data.length &&
        data.map((item: any) => (
          <div key={item._id} className={"item"}>
            <div className={"word"}>{item.wordId}</div>
            <div className={"definition"}>
              {item.definition.substring(0, 30)}
              {item.definition.length > 30 && "..."}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Vocabs;
