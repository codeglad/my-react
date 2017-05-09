import React, { Component  } from 'react';
import { bindActionCreators } from 'redux';

import BugItem from './BugItem';


import bugActions from '../actions/bugActions';
import { connect } from 'react-redux';

//var actions = bindActionCreators(bugActions, store.dispatch)

class BugTracker extends Component{
	
	componentDidMount(){
		console.log(this);
	}
	onAddNewClick(){
		var bugName = this.refs.txtBugName.value;

		this.props.addNew(bugName);
	}
	onRemoveClosedClick(){
		this.props.removeClosed();
	}
	render(){
		var bugs = this.props.bugs;
		var bugItems  = bugs.map(bug => <BugItem toggle={this.props.toggle} key={bug.id} model={bug}></BugItem>);

		var closedCount = bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
		return(
			<div>
				<section className="stats">
					<span className="closed">{closedCount}</span>
					<span> / </span>
					<span>{bugs.length}</span>
				</section>
				<section className="edit">
					<label htmlFor="">Bug Name :</label>
					<input type="text" ref="txtBugName" />
					<input type="button" value="Create" onClick={this.onAddNewClick.bind(this)} />
				</section>
				<section className="list">
					<ol>
						{bugItems}
					</ol>
					<input type="button" value="Remove Closed" onClick={this.onRemoveClosedClick.bind(this)} />
				</section>
			</div>
		)
	}
}

function mapStateToPros(state){
	return {
		bugs : state.bugs
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators(bugActions, dispatch);
}
export default connect(mapStateToPros, mapDispatchToProps)(BugTracker);








