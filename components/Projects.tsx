import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import { customt3d, ecommerce, foodpanda, gymscript } from '@/public/assets';
import { FiGithub } from 'react-icons/fi';
import { RxOpenInNewWindow } from 'react-icons/rx';

const Projects = () => {
	return (
		<section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
			<SectionTitle title='Sites I have Built' />
			<div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
				{/* one */}
				<div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
					<div className='flex flex-col xl:flex-row gap-6'>
						<a
							className='w-full xl:w-1/2 h-auto relative group'
							href='https://gymscript.netlify.app'
							target='_blank'
						>
							<div>
								<Image
									className='w-full flex flex-col items-center justify-center gap-28 mt-10'
									src={gymscript}
									alt='GymScript Image'
								/>
							</div>
						</a>
						<div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
							<p className='font-titleFont text-textGreen text-sm tracking-wide'>
								Top Projects
							</p>
							<h3 className='text-2xl font-bold'>GymScript Gym Website</h3>
							<p className='bg-[#202020] text-sm md:text-base p-2 md:p-6 rounded-md'>
								An Gym guide Website where you can search for different types of
								exercises, and also search based on{' '}
								<span className='text-textGreen'>Body Parts & Equipments</span>{' '}
								that you want to focus on. Once you click on a certain exercise
								it also{' '}
								<span className='text-textGreen'>
									similar videos, similar target muscle exercises and similar
									equipment exercises sections
								</span>
								.
							</p>
							<ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
								<li>React</li>
								<li>JavaScript</li>
								<li>Mui</li>
								<li>Rapid API</li>
								<li>Tailwind CSS</li>
							</ul>
							<div className='text-2xl flex gap-4'>
								<a
									className='hover:text-textGreen duration-300'
									href='https://github.com/akashhadli/GymScript-Fitness-Guide-Project'
									target='_blank'
								>
									<FiGithub />
								</a>
								<a
									className='hover:text-textGreen duration-300'
									href='https://gymscript.netlify.app'
									target='_blank'
								>
									<RxOpenInNewWindow />
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* two */}
				<div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
					<div className='flex flex-col xl:flex-row-reverse gap-6'>
						<a
							className='w-full xl:w-1/2 h-auto relative group'
							href='https://fooodpanda.netlify.app'
							target='_blank'
						>
							<div>
								<Image
									className='w-full flex flex-col items-center justify-center gap-28 mt-10'
									src={foodpanda}
									alt='FoodPanda Image'
								/>
							</div>
						</a>
						<div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
							<p className='font-titleFont text-textGreen text-sm tracking-wide'>
								Top Projects
							</p>
							<h3 className='text-2xl font-bold'>Food Panda 2.0</h3>
							<p className='bg-[#202020] text-sm md:text-base p-2  xl:-mr-16 md:p-6 rounded-md'>
								A Food ordering website which is a mock-up of foodpanda&apos;s
								website. It has a Top Rated Menu section in which you can{' '}
								<span className='text-textGreen'>filter</span> the dishes based
								on <span className='text-textGreen'>type and price</span>.
							</p>
							<ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
								<li>React</li>
								<li>JavaScript</li>
								<li>Tailwind CSS</li>
								<li>React Icons</li>
							</ul>
							<div className='text-2xl flex gap-4'>
								<a
									className='hover:text-textGreen duration-300'
									href='https://github.com/akashhadli/food-panda'
									target='_blank'
								>
									<FiGithub />
								</a>
								<a
									className='hover:text-textGreen duration-300'
									href='https://fooodpanda.netlify.app'
									target='_blank'
								>
									<RxOpenInNewWindow />
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* three */}
				<div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
					<div className='flex flex-col xl:flex-row gap-6'>
						<a
							className='w-full xl:w-1/2 h-auto relative group'
							href=''
							target='_blank'
						>
							<div>
								<Image
									className='w-full flex flex-col items-center justify-center gap-28 mt-10'
									src={customt3d}
									alt='GymScript Image'
								/>
							</div>
						</a>
						<div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
							<p className='font-titleFont text-textGreen text-sm tracking-wide'>
								Top Projects
							</p>
							<h3 className='text-2xl font-bold'>Custom T-Shirt Website</h3>
							<p className='bg-[#202020] text-sm md:text-base p-2 md:p-6 rounded-md'>
								A Custom T-Shirt designing website built using{' '}
								<span className='text-textGreen'>
									React, Tailwind CSS and ThreeJS
								</span>
								. This is the project that i built while learning ThreeJS. I
								have also used{' '}
								<span className='text-textGreen tracking-wide'>
									OpenAI&apos;s DALL-E API
								</span>{' '}
								to generate different Logo and T-shirt pattern and apply it to
								t-shirt 3D model. It also has{' '}
								<span className='text-textGreen'>
									Color Picker & custom Logo image picker
								</span>
								. You can also toggle ON and OFF the logo or the pattern
								individually.
							</p>
							<ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
								<li>React</li>
								<li>JavaScript</li>
								<li>Tailwind CSS</li>
								<li>DALL-E API</li>
								<li>ThreeJS</li>
							</ul>
							<div className='text-2xl flex gap-4'>
								<a
									className='hover:text-textGreen duration-300'
									href='https://github.com/akashhadli/custom-t-shirt-website-ThreeJS'
									target='_blank'
								>
									<FiGithub />
								</a>
								<a
									className='hover:text-textGreen duration-300'
									href=''
									target='_blank'
								>
									<RxOpenInNewWindow />
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* four */}
				<div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
					<div className='flex flex-col xl:flex-row-reverse gap-6'>
						<a
							className='w-full xl:w-1/2 h-auto relative group'
							href='https://ecommerce-shop-project.netlify.app'
							target='_blank'
						>
							<div>
								<Image
									className='w-full flex flex-col items-center justify-center gap-28 mt-10'
									src={ecommerce}
									alt='Ecommerce Image'
								/>
							</div>
						</a>
						<div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
							<p className='font-titleFont text-textGreen text-sm tracking-wide'>
								Top Projects
							</p>
							<h3 className='text-2xl font-bold'>E-Commerce Website</h3>
							<p className='bg-[#202020] text-sm md:text-base p-2  xl:-mr-16 md:p-6 rounded-md'>
								An E-Commerce website using data from FakeStore API, has
								<span className='text-textGreen'>
									{' '}
									fully functional cart
								</span>{' '}
								and Product details page.
							</p>
							<ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
								<li>React</li>
								<li>JavaScript</li>
								<li>Mui</li>
								<li>FakeStore API</li>
								<li>Tailwind CSS</li>
							</ul>
							<div className='text-2xl flex gap-4'>
								<a
									className='hover:text-textGreen duration-300'
									href='https://github.com/akashhadli/ecommerce-project'
									target='_blank'
								>
									<FiGithub />
								</a>
								<a
									className='hover:text-textGreen duration-300'
									href='https://ecommerce-shop-project.netlify.app'
									target='_blank'
								>
									<RxOpenInNewWindow />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
