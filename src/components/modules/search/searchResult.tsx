import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as api from "api/apiFunctions";
import { Divider, notification } from "antd";
import {
  ReadOutlined,
  LoadingOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import * as meSelectors from "store/me/selectors";
import * as vocabActions from "store/vocabs/actions";

const SearchResult = () => {
  const history = useHistory();
  const { query } = useParams() as any;
  const [definition, setDefinition] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);
  const defaultGroup = useSelector(meSelectors.getFirstVocabularyGroup);
  const dispatch = useDispatch();

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
      const response = await api.postVocabulary({
        wordId: query,
        definition: definition,
        groupId: defaultGroup,
      });
      const { data: insertedId } = response.data as any;
      dispatch(vocabActions.loadData());
      history.replace("/");
      notification.success({
        message: "Item added to dictionary, click to see",
        onClick: () => history.replace(`/vocabs/${insertedId}`),
        duration: 2,
      });
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
