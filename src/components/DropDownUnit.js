import React from 'react';

const DropDownUnit = () => {
	return (
		<div className='pa100'>
			<select 
				className='pa300 ba b--green bg-lightest-blue'
				size='3'
				//onChange={}
			>
				<option value='Olive'>Olive</option>
				<option value='Lightning'>Lightning</option>
				<option value='Zidane'>Zidane</option>
				<option value='Vivi'>Vivi</option>
				<option value='Garnet'>Garnet</option>
			</select>
		</div>
	);
}

export default DropDownUnit;