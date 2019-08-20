import React from 'react';
import SearchBox from './SearchBox';
import EqSubPanel from './EqSubPanel';

const EqSelectPanel = () => {
	return (
		<div className='eqselectpanel'>
			<SearchBox className='eqsearchbox' />
			<button className='buttonsort'>Sort</button>
			<button className='buttonfilter'>Filter</button>
			<EqSubPanel />
			<EqSubPanel />
			<EqSubPanel />
			<EqSubPanel />
			<EqSubPanel />
			<EqSubPanel />
			<EqSubPanel />
			<EqSubPanel />
			<EqSubPanel />
			<EqSubPanel />
		</div>
	);
}

export default EqSelectPanel;