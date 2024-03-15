'use client';
import { Alert } from '@/components/cards/Alert';
import Image from 'next/image';
import { Featured } from '@/constants';
import { FindJobsCard } from '@/components/cards/FindJobsCard';
import { SloganWithCategory } from '@/components/reusables/Slogan';
import { UploadDocsCard } from '@/components/cards/UploadDocsCard';
import { JobDetails } from '@/components/cards/JobDetails';
import { CommentForm } from '@/components/reusables/CommentForm';

export default function () {
	return (
		<main className='w-full h-[100dvh] space-y-10'>
			<section>
				<SloganWithCategory
					title={'Public Health Officer'}
					category={'Youth & Culture'}
					type={'Attachment'}
					location={'Mwingi'}
					datePosted={'2 days ago'}
					comments={0}
					slogan={
						'Make a real difference in your community by joining a vibrant team dedicated to serving the public good.'
					}
				/>
			</section>

			<section className='px-[100px] pb-[100px] space-y-10'>
				<section className='flex w-full'>
					<section className='w-[70%] space-y-10'>
						<JobDetails
							about={
								'The County Government is seeking a passionate and dedicated Public Health Educator to join our team and play a vital role in educating the community about critical health issues.'
							}
							responsibility={[
								'Develop and deliver informative materials: Create engaging presentations, brochures, and other resources to educate the public on a variety of topics, including disease prevention, healthy lifestyles, and community health initiatives.',
								'Conduct outreach programs: Organize workshops, seminars, and community events to reach diverse populations and raise awareness about important health concerns.',
								'Collaborate with stakeholders: Work closely with local organizations, healthcare professionals, and community leaders to develop and implement effective health promotion strategies.',
								'Provide individual and group education: Offer individual consultations and facilitate group discussions to empower individuals to make informed choices about their health.',
								'Evaluate program effectiveness: Assess the impact of your educational efforts and adapt programming accordingly to ensure continuous improvement.',
							]}
							qualifications={[
								'Bachelors degree in public health, health education, or a related field.',
								'Experience developing and delivering health education materials and programs.',
								'Strong public speaking and presentation skills.',
								'Ability to work independently and as part of a team.',
							]}
							benefits={[
								'Competitive salary and benefits package.',
								'Opportunity to make a real difference in the lives of others.',
								'Be part of a passionate team dedicated to improving community health.',
							]}
							comments={[
								{
									name: 'Musyoka Juma',
									comment: 'Seems good',
									timeline: 'a min ago',
								},
								{
									name: 'Tom Brady',
									comment: 'Seems good',
									timeline: 'a min ago',
								},
							]}
							remark={
								'If you are passionate about public health, have a strong desire to educate others, and are committed to making a positive impact in your community, we encourage you to apply!'
							}
						/>
						<CommentForm />
					</section>
					<section className='w-[30%] space-y-10'>
						<UploadDocsCard />
					</section>
				</section>
				<section className='space-y-5'>
					<div className='flex w-full justify-between'>
						<p className='font-[700] text-[30px] leading-[36px]'>
							You May Also Be Interested In
						</p>
						<button className='flex space-x-2 items-center'>
							<p className='font-[600] text-[14px] leading-[20px] text-mainGreen'>
								See All Jobs
							</p>
							<Image
								src='/icons/arrowRight.svg'
								alt='arrow'
								width={20}
								height={20}
								priority
							/>
						</button>
					</div>
					<div className='grid grid-cols-2 gap-[16px]'>
						{Featured.slice(0, 2).map((job) => (
							<FindJobsCard
								key={job.name}
								name={job.name}
								category={job.category}
								type={job.type}
								location={job.location}
								datePosted={job.datePosted}
								description={job.description}
								comments={job.comments}
								width='600px'
							/>
						))}
					</div>
				</section>
				<section>
					<Alert
						name={'Never Miss Your Dream Job!'}
						icon={''}
						description={
							'Sign up for job alerts and get notified straight to your inbox when openings matching your profession are posted. Dont wait, register today and take the first step towards your perfect career!'
						}
						buttonText={'Get Job Alerts Now!'}
					/>
				</section>
			</section>
		</main>
	);
}
