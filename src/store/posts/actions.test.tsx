import * as actions from "./actions"
import { ActionTypes } from './types'
import mockData from './data.json'

describe("store/posts/actions", () => {
  it("can load data", () => {
    expect(actions.loadData())
      .toMatchObject(
        {
          type: ActionTypes.SET_DATA,
          payload: {
            data: mockData
          }
        }
      )
  });
});
