import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { ImCodepen } from 'react-icons/im';

const Banner = () => {
	return (
		<section
			id='home'
			className='max-w-contentContainer h-screen justify-center mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'
		>
			<motion.h3
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 1 }}
				className='text-lg font-titleFont tracking-wide text-textGreen'
			>
				Hi, My name is
			</motion.h3>
			<motion.h1
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 1.1 }}
				className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
			>
				Aakash Hadli.{' '}
				<span className='text-textDark mt-2 lgl:mt-4'>
					I build things for the Web.
				</span>
			</motion.h1>
			<motion.p
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 1.2 }}
				className='text-base md:max-w-[650px] text-textDark font-medium'
			>
				I am a Web Developer. I have good grasp on the core fundamentals of
				Front-End Development and skilled in creating user-friendly & responsive
				Web Applications using React and its ecosystem.
			</motion.p>
			<div className='flex flex-row gap-5'>
				<motion.a
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.3 }}
					href='https://github.com/akashhadli'
					target='_blank'
				>
					<span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
						<FiGithub />
					</span>
				</motion.a>
				<motion.a
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.4 }}
					href='https://www.linkedin.com/in/akash-hadli-09632b242/'
					target='_blank'
				>
					<span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
						<SlSocialLinkedin />
					</span>
				</motion.a>
				<motion.a
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.5 }}
					href='https://codepen.io/Aakash-'
					target='_blank'
				>
					<span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
						<ImCodepen />
					</span>
				</motion.a>
			</div>
		</section>
	);
};

export default Banner;
