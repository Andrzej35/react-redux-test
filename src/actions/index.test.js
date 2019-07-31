import * as actions from './index'
import * as types from './types'
import { isTaggedTemplateExpression } from '@babel/types';

describe('actions', () => {
    it('should create an action to filter the Magnitude digit', () => {
        const id = '1.1'
        const expectedAction = {
            type: types.FILTER_BY_MAGNITUDE,
            payload: id
        }
        expect(actions.filterByMagnitude(id)).toEqual(expectedAction)
    })
})
