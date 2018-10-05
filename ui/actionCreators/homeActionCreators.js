import * as HomeActions from '../actionTypes'

export function getHomeDate(date=''){
return {
    type:HomeActions.GET_HOME_DATA,
    data
}
}