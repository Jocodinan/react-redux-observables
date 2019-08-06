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