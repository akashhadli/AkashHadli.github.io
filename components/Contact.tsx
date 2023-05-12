import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
	return (
		<section
			id='contact'
			className='max-w-contentContainer h-screen mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
		>
			<h2 className='font-titleFont text-3xl text-textLight font-semibold flex items-center tracking-wide'>
				Contact Me
			</h2>
			<p className='max-w-[600px] text-center text-textDark'>
				Ping me, I will try my best to get back to you.
			</p>
			<a href='mailto:aakashhadli@gmail.com'>
				<button className='w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300'>
					Say Hello
				</button>
			</a>
			<motion.div
				animate={{
					scale: [1, 2, 2, 1, 1],
					rotate: [0, 0, 270, 270, 0],
					borderRadius: ['20%', '20%', '50%', '50%', '20%'],
				}}
			/>
		</section>
	);
};

export default Contact;
