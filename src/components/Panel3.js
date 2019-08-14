//Equipment panel
// Contains 6 sub-panels:
//		Name, img, element, 1H/2H, 
//		stats(including abilities), enhancements
import React from 'react';
import EqSubPanel from './EqSubPanel';

const Panel3 = () => {
	return (
		<div className='equipmentpanel'>
			<EqSubPanel className='r-hand' />
			<EqSubPanel className='l-hand' />
			<EqSubPanel className='head' />
			<EqSubPanel className='body' />
			<EqSubPanel className='acc1' />
			<EqSubPanel className='acc2' />
		</div>
	);
}

export default Panel3;