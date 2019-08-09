//Provides unit info: name, img, stats, tdh/tdw stats, 
// ailment, element, killer
import React from 'react';

const Panel2 = () => {
	return (
		<div className='statpanel grid-container'>
			<div className='unitname'>Lightning</div>
			<div className='stats'>Stats</div>
			<div className='unitimg'>
				<img src="/lightning-image.png" alt='failed'  />
			</div>
			<div className='weapontype'>weapontype</div>
			<div className='killers'>killers</div>
			<div className='ailment'>ailment</div>
			<div className='element'>element</div>

		</div>
	);
}

export default Panel2;