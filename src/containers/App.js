import React from 'react';
import SearchBox from '../components/SearchBox';
import DropDownUnit from '../components/DropDownUnit';
import './App.css';

function App() {
	//const { onSearchChange } = this.props;
	return (
	<div className="App">
	  <h1 className='header'>FFBE Unit Builder</h1>
	  <SearchBox />
	  <DropDownUnit />
	</div>
	);
}

export default App;
