import React from 'react';

const Footer = () => {
	return (
		<div className=' mdl:inline-flex xl:items-center justify-center w-full py-6 gap-4'>
			<p className=''>
				Developed By{' '}
				<a href='https://github.com/akashhadli' target='_blank'>
					<span className='text-titleFont text-textGreen'>Aakash Hadli</span>
				</a>
			</p>
		</div>
	);
};

export default Footer;
