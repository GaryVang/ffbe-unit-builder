//Materia panel
// Contains 4 sub-panels:
//		Name, img= unit image, stats+special abilities
import React from 'react';
import MatSubPanel from './MateriaSubPanel';

const Panel4 = () => {
	return (
		<div className='materiapanel'>
			<MatSubPanel className='mat1' />
			<MatSubPanel className='mat2' />
			<MatSubPanel className='mat3' />
			<MatSubPanel className='mat4' />
		</div>
	);
}

export default Panel4;