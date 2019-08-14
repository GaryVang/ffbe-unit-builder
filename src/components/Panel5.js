//Esper Panel
// Contains 4-5 sub-panels:
//		Name, img, stats,
//		special abilities (might include killers in this category)
import React from 'react';

const Panel5 = () => {
	return (
		<div className='esperpanel'>
			<div className='espername'>Diablos</div>
			<div className='esperstat' />
			<div className='esperimg'>
				<img src='https://gamepedia.cursecdn.com/exvius_gamepedia_en/9/97/Esper-Diabolos-Thumbnail-3.png?version=43c90310dfb12af6c84ae713cdd4091b' alt='failed' />
			</div>
			<div className='esperability' />

		</div>
	);
}

export default Panel5;