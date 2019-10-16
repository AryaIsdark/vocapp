import * as actions from "./actions"
import { ActionTypes } from './types'
import mockData from './data.json'

const mockDispatch = jest.fn()

describe("store/posts/actions", () => {
  it.skip("can load data", () => {
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
