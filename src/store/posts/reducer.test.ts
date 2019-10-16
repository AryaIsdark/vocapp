import reducer from "./reducer"
import * as actions from './actions'
export {reducer} from './reducer'

describe('store/posts/reducer',()=>{
    it('can load data', ()=>{
        expect(reducer(undefined, actions.loadData())).toMatchSnapshot();
    })
})