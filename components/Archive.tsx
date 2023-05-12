import React from 'react';
import ArchiveCard from './ArchiveCard';

const Archive = () => {
	return (
		<div className='max-w-contentContainer mx-auto px-4 py-24'>
			<div className='w-full flex flex-col items-center'>
				<h2 className='text-3xl font-titleFont font-semibold'>
					Other Projects
				</h2>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
				<ArchiveCard
					title='Tourism Webiste'
					des='A Simple Tourism webaite built on React Library, TailwindCSS for styling, has elegant and user-friendly UI/UX design.'
					listItem={['React', 'TailwindCSS', 'Mui']}
				/>
				<ArchiveCard
					title='To Do App with Firebase Auth'
					des='A Simple To - Do Web Application with CRUD operations and Google
					Firebase Authentication for user Login and storing data.'
					listItem={['React', 'Firebase', 'Mui']}
				/>
				<ArchiveCard
					title='YouTube Clone'
					des='A clone of popular video streaming website built on ReactJS and TailwindCSS. The users can search for any of the channels or a particular video. It uses RapidAPI’s YouTube API to gett all the videos.'
					listItem={['React', 'Firebase', 'Mui']}
				/>
			</div>
		</div>
	);
};

export default Archive;
