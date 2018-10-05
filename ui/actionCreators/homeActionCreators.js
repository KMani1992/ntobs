import * as HomeActions from '../actionTypes/Home'


export function getHomeDate(data) {
    return {
        type: HomeActions.GET_HOME_DATA,
        data
    }
}