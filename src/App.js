import React, { Suspense } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Routes from 'router/Routes'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { t } = useTranslation('preload', { useSuspense: false });

  return (
    <div className="App">
      <Suspense fallback={t('loading...')}>
        <Routes />
      </Suspense>
    </div>
  );
}

export default App;
