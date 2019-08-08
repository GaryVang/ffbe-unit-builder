import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='searchbox'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search units'
				onChange={searchChange}
		/>
		</div>
	);
}

export default SearchBox;