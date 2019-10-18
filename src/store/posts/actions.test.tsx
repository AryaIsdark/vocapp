import * as actions from "./actions"
import {ApiOkResponse} from 'apisauce'
import * as api from 'api/apiFunctions'

jest.mock('api/apiFunctions', () => ({
  getPosts: jest.fn()
}));

describe("store/posts/actions", () => {
  it("can load data", async() => {

    const getpostsSpy = jest
      .spyOn(api, 'getPosts')
      .mockImplementation(() =>
          Promise.resolve({
            data: [{id:1,title:'testPost'}],
          } as ApiOkResponse<any>),
        );

    const dispatch = jest.fn();
    
    await actions.loadData()(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(1);
    
    getpostsSpy.mockRestore()

  });
});
