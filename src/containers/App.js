import React from 'react';
import TopPanel from '../components/TopPanel';
import Panel2 from '../components/Panel2';
import Panel3 from '../components/Panel3';
import Panel4 from '../components/Panel4';
import Panel5 from '../components/Panel5';

import EqSelectPanel from '../components/EqSelectPanel';

import './App.css';

function App() {
	//const { onSearchChange } = this.props;
	return (
		<div className="App" id='container'>
		  <h1 className='header'>FFBE Unit Builder</h1>

		  <TopPanel />

		  <Panel2 />
		  <Panel3 />
		  <Panel4 />
		  <Panel5 />
		  <EqSelectPanel />
		</div>
	);
}

export default App;
