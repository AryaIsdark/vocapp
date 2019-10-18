import * as actions from "./actions"
import {ApiOkResponse} from 'apisauce'
import * as api from 'api/apiFunctions'
import { ActionTypes } from "./types";

jest.mock('api/apiFunctions', () => ({
  getPosts: jest.fn()
}));

describe("store/posts/actions", () => {
  it("can load data", async() => {
    const mockData = [{id:1,title:'testPost'}]
    const getPostsSpy = jest
      .spyOn(api, 'getPosts')
      .mockImplementation(() =>
          Promise.resolve({
            data: mockData,
          } as ApiOkResponse<any>),
        );

    const dispatch = jest.fn();

    await actions.loadData()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(actions.setHasError(false));
    expect(dispatch).toHaveBeenCalledWith(actions.setIsLoading(true));
    expect(dispatch).toHaveBeenCalledWith({type:ActionTypes.SET_DATA, payload: {data: mockData} })
    expect(dispatch).toHaveBeenCalledWith(actions.setIsLoading(false));
    expect(dispatch).toHaveBeenCalledTimes(4);
    
    getPostsSpy.mockRestore()

  });
});
