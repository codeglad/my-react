function bugsReducer(currentState = [], action){
	switch(action.type){
		case 'ADD_NEW' :
			var bugName = action.payload.bugName;
			var newBugId = currentState.length === 0
				? 1 : currentState.reduce((result, bug) => result > bug.id ? result : bug.id, 0) + 1;
			var newBug = {
				id : newBugId,
				name : bugName,
				isClosed : false
			};
			return currentState.concat([newBug]);
		case 'TOGGLE' :
			var bugToToggle = action.payload;
			return currentState.map(bug => {
				if (bug !== bugToToggle) return bug;
				return {
					id : bug.id,
					name : bug.name,
					isClosed : !bug.isClosed
				}
			});
		case 'REMOVE_CLOSED':
			return currentState.filter(bug => !bug.isClosed);
		default : 
			return currentState;
	}
}
export default bugsReducer;