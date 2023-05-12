import React from 'react';
import { TbBrandGithubCopilot } from 'react-icons/tb';
interface Props {
	title: string;
	des: string;
	listItem: string[];
}

const ArchiveCard = ({ title, des, listItem }: Props) => {
	return (
		<div className='w-full h-80 rounded-lg bg-[#202020] p-7 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
			<div>
				<TbBrandGithubCopilot className='text-4xl hover:text-textGreen cursor-pointer' />
			</div>
			<div className='flex flex-col gap-4'>
				<h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>
					{title}
				</h2>
				<p className='text-sm mt-3'>{des}</p>
				<ul className='text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap'>
					{listItem.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ArchiveCard;
