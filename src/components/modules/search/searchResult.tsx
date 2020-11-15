import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as api from "api/apiFunctions";
import { Divider } from "antd";
import {
  ReadOutlined,
  LoadingOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

const SearchResult = () => {
  const history = useHistory();
  const { query } = useParams() as any;
  const [definition, setDefinition] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  const translate = async (value: string) => {
    setLoading(true);
    try {
      const response = (await api.getTranslation(value)) as any;
      response.data.data.error
        ? setError("No definition found")
        : setDefinition(
            response.data.data.results[0].lexicalEntries[0].entries[0].senses[0]
              .definitions[0]
          );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      await api.postVocabulary({
        wordId: query,
        definition: definition,
      });
      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    translate(query);
  }, [query]);

  return (
    <>
      <div className={"search-result"}>
        <h1 className={"word"}>
          <b>
            <ReadOutlined translate={""} /> {query}
          </b>
        </h1>
        <Divider />
        <p className={"definition"}>{definition}</p>
        <p className={"error"}>{error}</p>
        {loading && <LoadingOutlined translate={"loading"} spin />}
      </div>
      <div className={"actions"}>
        <button className={"secondary"}>
          <ArrowLeftOutlined
            translate={"go back"}
            onClick={() => history.replace("/")}
          />
        </button>
        {definition && (
          <button className={"primary"} onClick={handleSave}>
            Save
          </button>
        )}
      </div>
    </>
  );
};

export default SearchResult;
