import {ActionTypes} from './types'
import mockData from './data.json'


export const loadData = () => {
    return {
        type: ActionTypes.SET_DATA,
        payload: {data: mockData}
    }
}