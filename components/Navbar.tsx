import { logo1 } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { easeIn, motion } from 'framer-motion';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { ImCodepen } from 'react-icons/im';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FiGithub } from 'react-icons/fi';

const Navbar = () => {
	const ref = useRef<string | any>('');
	const [showMenu, setShowMenu] = useState(false);
	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		setShowMenu(false);
		const href = e.currentTarget.href;
		const targetId = href.replace(/.*\#/, '');
		const el = document.getElementById(targetId);
		el?.scrollIntoView({
			behavior: 'smooth',
		});

		// update the classname of clicked link
		const links = document.querySelectorAll('.nav-link');
		links.forEach((link) => {
			link.classList.remove('active');
		});
		e.currentTarget.classList.add('active');
	};

	const handleClick = (e: any) => {
		if (e.target.contains(ref.current)) {
			setShowMenu(false);
		}
	};

	return (
		<div className='w-full shadow-navbarShadow h-16 lg:h-[8vh] sticky top-0 z-50 bg-bodyColor px-4'>
			<div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
				<motion.div
					initial={{ x: -50, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Image className='w-14' src={logo1} alt='logo' />
				</motion.div>
				<div className='hidden mdl:inline-flex items-center gap-7'>
					<ul className='flex text-[14px] gap-7'>
						<Link
							href='#home'
							onClick={handleScroll}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
						>
							<motion.li
								initial={{ x: 50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.2 }}
							>
								Home
							</motion.li>
						</Link>
						<Link
							href='#about'
							onClick={handleScroll}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
						>
							<motion.li
								initial={{ x: 50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.2, delay: 0.2 }}
							>
								About
							</motion.li>
						</Link>
						<Link
							href='#experience'
							onClick={handleScroll}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
						>
							<motion.li
								initial={{ x: 50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.2, delay: 0.4 }}
							>
								Experience
							</motion.li>
						</Link>
						<Link
							href='#project'
							onClick={handleScroll}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
						>
							<motion.li
								initial={{ x: 50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.2, delay: 0.6 }}
							>
								Projects
							</motion.li>
						</Link>
						<Link
							href='#contact'
							onClick={handleScroll}
							className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
						>
							<motion.li
								initial={{ x: 50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.2, delay: 0.8 }}
							>
								Contact
							</motion.li>
						</Link>
					</ul>
					<a href='/assets/Aakash_hadli.pdf' target='_blank'>
						<motion.button
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 }}
							className='px-4 py-2 rounded-md text-textGreen text-[14px] border border-textGreen hover:bg-hoverColor duration-300'
						>
							Resume
						</motion.button>
					</a>
				</div>
				{/* toggle icon */}
				<div
					onClick={() => setShowMenu(true)}
					className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'
				>
					<span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
					<span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
					<span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
				</div>
				{showMenu && (
					<div
						ref={(node) => (ref.current = node)}
						onClick={handleClick}
						className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
					>
						<motion.div
							initial={{ x: 20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.1 }}
							className='w-[70%] h-full overflow-y-scroll scrollbar-none bg-[#112240] flex flex-col items-center px-4 py-10 relative'
						>
							<RxDoubleArrowRight
								onClick={() => setShowMenu(false)}
								className='text-3xl text-textLight cursor-pointer hover:text-textGreen absolute top-4 right-4'
							/>
							<div className='flex flex-col items-start gap-7'>
								<ul className='flex flex-col items-start gap-7'>
									<Link
										href='#home'
										onClick={handleScroll}
										className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
									>
										<motion.li
											initial={{ x: 50, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{ duration: 0.2, ease: easeIn }}
										>
											Home
										</motion.li>
									</Link>
									<Link
										href='#about'
										onClick={handleScroll}
										className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
									>
										<motion.li
											initial={{ x: 50, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{ duration: 0.2, delay: 0.2, ease: easeIn }}
										>
											About
										</motion.li>
									</Link>
									<Link
										href='#experience'
										onClick={handleScroll}
										className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
									>
										<motion.li
											initial={{ x: 50, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{ duration: 0.2, delay: 0.4, ease: easeIn }}
										>
											Experience
										</motion.li>
									</Link>
									<Link
										href='#project'
										onClick={handleScroll}
										className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
									>
										<motion.li
											initial={{ x: 50, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{ duration: 0.2, delay: 0.6, ease: easeIn }}
										>
											Projects
										</motion.li>
									</Link>
									<Link
										href='#contact'
										onClick={handleScroll}
										className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
									>
										<motion.li
											initial={{ x: 50, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{ duration: 0.2, delay: 0.8, ease: easeIn }}
										>
											Contact
										</motion.li>
									</Link>
								</ul>
								<a href='/assets/Aakash_hadli.pdf' target='_blank'>
									<motion.button
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1, ease: easeIn }}
										className='px-4 py-2 rounded-md text-textGreen text-[14px] border border-textGreen hover:bg-hoverColor duration-300'
									>
										Resume
									</motion.button>
								</a>
								<div className='flex items-center flex-row gap-5'>
									<motion.a
										initial={{ y: 50, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.2, delay: 0.8 }}
										href='https://github.com/akashhadli'
										target='_blank'
									>
										<span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
											<FiGithub />
										</span>
									</motion.a>
									<motion.a
										initial={{ y: 50, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.2, delay: 0.8 }}
										href='https://www.linkedin.com/in/akash-hadli-09632b242/'
										target='_blank'
									>
										<span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
											<SlSocialLinkedin />
										</span>
									</motion.a>
									<motion.a
										initial={{ y: 50, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.2, delay: 0.8 }}
										href='https://codepen.io/Aakash-'
										target='_blank'
									>
										<span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
											<ImCodepen />
										</span>
									</motion.a>
								</div>
							</div>
						</motion.div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
