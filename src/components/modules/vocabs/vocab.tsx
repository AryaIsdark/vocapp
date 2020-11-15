import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as api from "api/apiFunctions";
import { Divider } from "antd";
import moment from "moment";
import {
  ReadOutlined,
  LoadingOutlined,
  ArrowLeftOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const Vocab = () => {
  const history = useHistory();
  const { id } = useParams() as any;
  const [data, setData] = useState({
    _id: "",
    wordId: "",
    definition: "",
    groupId: "",
    createdAt: "",
  });
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = (await api.getVocabulary(id)) as any;
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className={"vocab"}>
      {" "}
      <>
        <div className={"search-result"}>
          <h1 className={"word"}>
            <b>
              <ReadOutlined translate={""} /> {data.wordId}
            </b>
          </h1>
          <Divider />
          <p className={"definition"}>{data.definition}</p>
          <p className={"createdAt"}>
            {moment(data.createdAt).fromNow()} -
            {moment(data.createdAt).format("MM/DD/YYYY")}
          </p>
          {loading && <LoadingOutlined translate={"loading"} spin />}
        </div>
        <div className={"actions"}>
          <button className={"secondary"}>
            <ArrowLeftOutlined
              translate={"go back"}
              onClick={() => history.replace("/")}
            />
          </button>

          <button className={"danger"} onClick={() => {}}>
            <DeleteOutlined translate={"delete"} />
          </button>
        </div>
      </>
    </div>
  );
};

export default Vocab;
