export function getUsers(){
	return {
		type: 'GET_USERS'
	}
}

export function usersReceived(data){
	return {
		type: 'USERS_RECEIVED',
		data
	}
}

export function changeSearchValue(value){
	return {
		type: 'CHANGE_SEARCH_VALUE',
		value
	}
}