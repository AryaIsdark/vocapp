import { postLogs } from 'api/logs';

const INTERVAL = 10000;

type LogMethod = 'error' | 'warning' | 'information';

const pendingMessages: Record<LogMethod, any[]> = {
  error: [],
  warning: [],
  information: [],
};

export const push = (method: LogMethod, message: any) => {
  pendingMessages[method].push(JSON.stringify(message));
};

const sendPendingMessages = () => {
  const promises = Object.entries(pendingMessages)
    .filter(([method, messages]) => messages.length > 0)
    .map(([method, messages]) =>
      postLogs(method, messages).then((response) => {
        if (response.ok) {
          delete pendingMessages[method as LogMethod];
        }
      }),
    );

  return Promise.all(promises);
};

const persistLogs = () => {
  setTimeout(function run() {
    sendPendingMessages().finally(() => {
      setTimeout(run, INTERVAL);
    });
  }, INTERVAL);

  window.addEventListener('onbeforeunload', sendPendingMessages);
};

export default persistLogs;
