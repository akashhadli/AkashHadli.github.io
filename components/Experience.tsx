import React from 'react';
import SectionTitle from './SectionTitle';
import Powaha from './works/Powaha';

const Experience = () => {
	return (
		<section
			id='experience'
			className='max-w-containerxs h-screen justify-center flex flex-col mx-auto py-10 lgl:py-24 px-4'
		>
			<SectionTitle title='Where I have Worked..' />
			<div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
				<ul className='md:w-32 flex flex-col'>
					<li className='border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm corsor-pointer duartion-300 px-8 font-medium'>
						Powaha Infotech
					</li>
				</ul>
				<Powaha />
			</div>
		</section>
	);
};

export default Experience;
