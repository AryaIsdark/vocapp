import { create, ApiResponse } from "apisauce";
import error from "error/error";

export const createResponseTransform = () => (response: ApiResponse<any>) => {
  const { ok, data, problem, originalError, status, config } = response;
  if (!ok) {
    if (data && data.errors && data.errors.length && data.errors[0].details) {
      data.errors.forEach(({ details }: any) => {
        details.forEach(({ errorText }: any) => {
          error.addErrorEvent(errorText);
        });
      });
    } else {
      const msg = originalError ? originalError.message : problem;
      error.addErrorEvent(msg);
    }

    const isLogRequest =
      config && config.url && config.url.includes("/api/v1/logs");

    if ((!status || status > 500) && !!originalError && !isLogRequest) {
      // TODO: Remove ts-ignore when Logger has been typed
      // @ts-ignore
      log.error("Error:", getLoggableResponse(originalError));
    }

    // Apisauce doesn't throw on errors which makes error handling unneccesarly
    // hard and unintuitive when using Promises or async/await.
    throw response;
  }
};

export const api = create({
  baseURL: "https://vocapp-api.herokuapp.com/api/v1",
  // baseURL: "http://localhost:8001/api/v1",
});

api.addResponseTransform(createResponseTransform());
