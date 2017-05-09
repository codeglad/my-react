import React from 'react';

function BugItem({model, toggle}){
	var classNames = 'bugname ' + (model.isClosed ? 'closed' : '');
	return (<li key={model.id}>
		<span className={classNames} onClick={() => toggle(model)}>{model.name}</span>
	</li>);
}

export default BugItem;