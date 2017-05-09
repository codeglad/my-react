var bugActions = {
	addNew : function(bugName){
		return {
			type : 'ADD_NEW',
			payload : {
				bugName : bugName
			}
		};
	},
	toggle : function(bug){
		return {
			type : 'TOGGLE',
			payload : bug
		}
	},
	removeClosed : function(){
		return {
			type : 'REMOVE_CLOSED'
		}
	}
};
export default bugActions;