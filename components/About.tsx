import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import {
	profileImg,
	html,
	css,
	js,
	react,
	node,
	tailwind,
	express,
	bootstrap,
	git,
	mysql,
} from '@/public/assets';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<motion.section
			id='about'
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, delay: 1.5 }}
			className='max-w-containerSmall h-screen justify-center mx-auto py-32 lgl:py-32 flex flex-col gap-8'
		>
			<SectionTitle title='About Me' />
			<div className='flex flex-col mdl:flex-row gap-16'>
				<div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
					<p>
						Hello, I am Aakash and i enjoy building things that live on the
						Internet. My interest in Web Development started in{' '}
						<span className='text-textGreen'>2022</span>, since then I have been
						constantly learning and applying those things in my projects.
					</p>
					<p>
						Fast-Forward to today, and I had the oportunity to work as an intern
						at an small{' '}
						<span className='text-textGreen'>MERN Stack Start-Up</span> where I
						worked on an amazing project during my final year of my Graduation.
					</p>
					<p>
						Here are a few Technologies that I have been working with recently:
					</p>
					<ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 mt-6 gap-4'>
						<li className='flex items-center gap-2'>
							<Image src={html} alt='htmlImg' className='w-5 h-5' /> HTML
						</li>
						<li className='flex items-center gap-2'>
							<Image src={css} alt='htmlImg' className='w-5 h-5' />
							CSS
						</li>
						<li className='flex items-center gap-2'>
							<Image src={js} alt='htmlImg' className='w-5 h-5' />
							JavaScript (ES6+)
						</li>
						<li className='flex items-center gap-2'>
							<Image src={react} alt='htmlImg' className='w-5 h-5' />
							React
						</li>
						<li className='flex items-center gap-2'>
							<Image src={node} alt='htmlImg' className='w-5 h-5' />
							Node.js
						</li>
						<li className='flex items-center gap-2'>
							<Image src={express} alt='htmlImg' className='w-5 h-5' />
							Express.js
						</li>
						<li className='flex items-center gap-2'>
							<Image src={tailwind} alt='htmlImg' className='w-5 h-5' />
							Tailwind CSS
						</li>
						<li className='flex items-center gap-2'>
							<Image src={bootstrap} alt='htmlImg' className='w-5 h-5' />
							Bootstrap
						</li>
						<li className='flex items-center gap-2'>
							<Image src={git} alt='htmlImg' className='w-5 h-5' />
							Git
						</li>
						<li className='flex items-center gap-2'>
							<Image src={mysql} alt='htmlImg' className='w-5 h-5' />
							MySQL
						</li>
					</ul>
				</div>
				<motion.div
					initial={{ x: 50, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.5 }}
					className='w-full lgl:w-1/3 h-80 relative group'
				>
					<div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
						<div className='w-80 h-full relative z-20 flex pl-6 lgl:pl-0'>
							<Image
								src={profileImg}
								alt='profileImg'
								className='lgl:group-hover:-translate-x-1 lgl:group-hover:-translate-y-1 transition-transform duration-300'
							/>
							<div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
						</div>
					</div>
					<div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300'></div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default About;
