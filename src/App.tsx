import React, { Suspense, useCallback, useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import Routes from "router/Routes";
import { useTranslation } from "react-i18next";
import * as api from "api/apiFunctions";
import { useDispatch } from "react-redux";
import * as vocabActions from "store/vocabs/actions";

const App = () => {
  const { t } = useTranslation("preload", { useSuspense: false });
  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    try {
      const response = (await api.getVocabularies()) as any;
      dispatch(vocabActions.setData(response.data.data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div className="App">
      <Suspense fallback={<>{t("loading...")}</>}>
        <Routes />
      </Suspense>
    </div>
  );
};

export default App;
