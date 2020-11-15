import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { SearchOutlined, SmileOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import Vocabs from "../vocabs/vocabs";
import { useSelector } from "react-redux";
import * as vocabsSelector from "store/vocabs/selectors";

const SearchScreen = () => {
  const [query, setQuery] = useState(null);
  const history = useHistory();
  const savedVocabs = useSelector(vocabsSelector.data);
  const [vocabs, setVocabs] = useState(savedVocabs);

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setQuery(value);
    const filteredVocabs = savedVocabs.filter((element: any) => {
      if (element.wordId.toLowerCase().includes(value.toLowerCase())) {
        return element;
      }
      return null;
    });
    setVocabs(filteredVocabs);
  };

  const handleSearchClick = () => {
    history.push(`/search/${query}`);
  };

  useEffect(() => {
    setVocabs(savedVocabs);
  }, [savedVocabs]);
  return (
    <div className={"search-screen"}>
      <Input
        style={{ textAlign: "center" }}
        placeholder={"Search for a word..."}
        onChange={handleInputChange}
      />
      <Vocabs data={vocabs} />
      {!vocabs.length && query && (
        <>
          <div className={"search-no-data"}>
            <SmileOutlined
              style={{ fontSize: "40px" }}
              translate={"no search result"}
            />
            <h3>
              Your dictionary doesn't include this word, wanna search the web?
            </h3>
          </div>
          <div className={"actions"}>
            <button className={"primary"} onClick={handleSearchClick}>
              <SearchOutlined translate={""} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchScreen;
