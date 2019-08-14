import { fromJS } from 'immutable';

export function generalStates(state = fromJS({
	isLoading: false,
	searchValue: '',
	data: []
}), action) {
	switch (action.type) {
		case 'GET_USERS':
			return state.set('isLoading', true);
		case 'USERS_RECEIVED':
			return state.withMutations((map) => {
				map.set('data', fromJS(action.data))
					.set('isLoading', false)
			})
		case 'CHANGE_SEARCH_VALUE':
			return state.set('searchValue', action.value);
		default:
			return state;
	}
}