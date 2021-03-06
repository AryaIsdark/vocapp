import * as api from "api/apiFunctions";
import * as meActions from "store/me/actions";
import store from "store/store";

export const getLoggedInUser = () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const user = JSON.parse(loggedInUser);
    store.dispatch(meActions.loadData(user._id) as any);
    return user;
  }
};
export const authenticate = async (data: any) => {
  try {
    const response = (await api.authenticate(data)) as any;
    const user = response.data && response.data.data;

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      store.dispatch(meActions.loadData(user._id) as any);
    }
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
