import React, { Suspense, useCallback, useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import Routes from "router/Routes";
import { useTranslation } from "react-i18next";
import * as api from "api/apiFunctions";
import { useDispatch, useSelector } from "react-redux";
import * as vocabActions from "store/vocabs/actions";
import * as auth from "auth/auth";
import { useHistory } from "react-router-dom";
import * as meSelectors from "store/me/selectors";
import Header from "components/modules/header/header";

const App = () => {
  const { t } = useTranslation("preload", { useSuspense: false });
  const dispatch = useDispatch();
  const history = useHistory();
  const vocabularyGroupId = useSelector(meSelectors.getFirstVocabularyGroup);
  const user = useSelector(meSelectors.me);

  const getData = useCallback(async () => {
    try {
      const response = (await api.getVocabularies(vocabularyGroupId)) as any;
      dispatch(vocabActions.setData(response.data.data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, vocabularyGroupId]);

  useEffect(() => {
    const loggedInUser = auth.getLoggedInUser();
    !!loggedInUser ? getData() : history.replace("/login");
  }, [getData, history, dispatch]);

  return (
    <div className="App">
      <Suspense fallback={<>{t("loading...")}</>}>
        <div className="header">
          <Header user={user} />
        </div>
        <div className="app-container">
          <Routes />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
