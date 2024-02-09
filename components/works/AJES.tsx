import React from 'react';
import { motion } from 'framer-motion';
import { TiArrowRight } from 'react-icons/ti';

const AJES = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.2 }}
			className='w-full'
		>
			<h3 className='flex gap-1 font-medium text-xl font-titleFont'>
				Contract{' '}
				<span className='text-textGreen tracking-wide ml-2'>
					{' '}
					@AJ Enterprise Solutions
				</span>
			</h3>
			<p className='text-sm mt-1 font-medium text-textDark'>
				Nov 2023 - Feb 2024
			</p>
			<ul>
				<li className='text-text-base flex gap-2 text-textDark'>
					<span className='text-textGreen mt-1'>
						<TiArrowRight />
					</span>
					Work with variety of different languages, platforms, frameworks and
					database management systems such as JavaScript, React, Mongoose,
					MongoDB and Digital Ocean.
				</li>
				<li className='text-text-base flex gap-2 text-textDark'>
					<span className='text-textGreen mt-1'>
						<TiArrowRight />
					</span>
					Worked on Website for Creating Invoices for Placed Orders Project, in
					which i made sure that the entire site for responsive and user
					friendly.
				</li>
				<li className='text-text-base flex gap-2 text-textDark'>
					<span className='text-textGreen mt-1'>
						<TiArrowRight />
					</span>
					Added features such as Search and Filter By Date, which also had
					options to extract the filtered data into a csv/excel or PDF file.
				</li>
				<li className='text-text-base flex gap-2 text-textDark'>
					<span className='text-textGreen mt-1'>
						<TiArrowRight />
					</span>
					Styled the entire Front-End using custom CSS.
				</li>
			</ul>
		</motion.div>
	);
};

export default AJES;
