import React from 'react';
import { motion } from 'framer-motion';
import { TiArrowRight } from 'react-icons/ti';

const Powaha = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.2 }}
			className='w-full'
		>
			<h3 className='flex gap-1 font-medium text-xl font-titleFont'>
				Intern{' '}
				<span className='text-textGreen tracking-wide ml-2'>
					{' '}
					@Powaha Infotech
				</span>
			</h3>
			<p className='text-sm mt-1 font-medium text-textDark'>
				Jan 2023 - June 2023
			</p>
			<ul>
				<li className='text-text-base flex gap-2 text-textDark'>
					<span className='text-textGreen mt-1'>
						<TiArrowRight />
					</span>
					Work with variety of different languages, platforms, frameworks and
					database management systems such as JavaScript, React, ReactNative,
					MySQL and OVI Panel.
				</li>
				<li className='text-text-base flex gap-2 text-textDark'>
					<span className='text-textGreen mt-1'>
						<TiArrowRight />
					</span>
					Worked on Smart Ticketing System Project, in which i wrote API&apos;s
					for the Mobile App to interface with MySQL Databse and created the
					Admin Dashboard part of the WebSite.
				</li>
				<li className='text-text-base flex gap-2 text-textDark'>
					<span className='text-textGreen mt-1'>
						<TiArrowRight />
					</span>
					Styled the entire Front-End using Bootstrap Components, TailwindCSS &
					React-Icons.
				</li>
			</ul>
		</motion.div>
	);
};

export default Powaha;
