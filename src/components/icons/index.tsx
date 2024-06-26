import { TComponentBasicProps } from '@/types/types';

export const SearchIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M14.0835 14.5834L18.1668 18.6667L14.0835 14.5834ZM1.8335 9.33337C1.8335 10.2526 2.01456 11.1629 2.36634 12.0122C2.71812 12.8614 3.23374 13.6331 3.88375 14.2831C4.53376 14.9331 5.30543 15.4487 6.15471 15.8005C7.00399 16.1523 7.91424 16.3334 8.8335 16.3334C9.75275 16.3334 10.663 16.1523 11.5123 15.8005C12.3616 15.4487 13.1332 14.9331 13.7832 14.2831C14.4333 13.6331 14.9489 12.8614 15.3007 12.0122C15.6524 11.1629 15.8335 10.2526 15.8335 9.33337C15.8335 7.47686 15.096 5.69638 13.7832 4.38363C12.4705 3.07087 10.69 2.33337 8.8335 2.33337C6.97698 2.33337 5.1965 3.07087 3.88375 4.38363C2.57099 5.69638 1.8335 7.47686 1.8335 9.33337V9.33337Z'
				{...{
					className: svgElementClassName,
				}}
				strokeWidth='3.1544'
				fillRule='evenodd'
				clipRule='evenodd'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	</div>
);

export const GraphicsIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => {
	return (
		<div
			{...{
				style: styles,
				className,
			}}>
			<svg
				{...(applyToSvgEl
					? {
							className: svgElementClassName,
					  }
					: {
							className: 'fill-none',
					  })}
				viewBox='0 0 64 64'
				xmlns='http://www.w3.org/2000/svg'>
				<g opacity='0.8'>
					<g opacity='0.8'>
						<path
							d='M11.234 38.6425C15.7057 39.2939 20.1838 39.9341 24.6703 40.4744C24.7617 42.5637 24.8494 44.6509 24.9334 46.736C25.0235 48.7846 27.5271 49.139 28.3637 47.3502L31.2336 41.1505C35.7382 41.5566 40.2564 41.8109 44.7895 41.7994C45.1698 41.8035 45.5414 41.6855 45.8496 41.4627C46.1578 41.2399 46.3864 40.9241 46.5018 40.5617C46.6172 40.1994 46.6133 39.8095 46.4907 39.4495C46.3681 39.0896 46.1332 38.7784 45.8206 38.5618C42.4432 36.1419 39.0533 33.6747 36.0821 30.7626C37.2171 28.3324 38.3516 25.9003 39.4856 23.4662C40.2129 23.0311 40.9424 22.5923 41.6644 22.1492C43.0418 21.309 42.5964 19.4678 41.5381 18.9366C41.7817 17.2319 38.8996 16.5076 38.0358 18.3604L36.803 21.0014C34.8724 22.1634 32.9391 23.2956 31.0033 24.3979C30.5255 23.5666 30.1038 22.7042 29.7409 21.8167C28.8201 19.549 28.4247 17.133 25.8541 16.1907C24.855 15.8238 23.4931 16.663 23.5569 17.7881C23.7463 21.2753 23.9272 24.7658 24.0994 28.2596C19.6106 30.7073 15.0764 33.0671 10.4969 35.3389C8.78049 36.1614 9.61965 38.4065 11.234 38.6425ZM29.1313 37.4316L28.0327 37.3212C27.9251 34.9795 27.8143 32.6377 27.7003 30.2956C28.4354 29.8901 29.1684 29.4882 29.9035 29.0827C30.5395 29.922 31.2103 30.73 31.9161 31.5067C30.9855 33.477 30.0573 35.452 29.1313 37.4316ZM39.364 38.1824C37.1791 38.0951 34.9992 37.9591 32.8243 37.7745L34.5246 34.133C36.0653 35.5587 37.6872 36.922 39.3662 38.1787L39.364 38.1824ZM34.1911 26.6377C33.9783 27.0977 33.7617 27.5555 33.5489 28.0155C33.3602 27.7909 33.1759 27.5589 32.9915 27.3268L34.1911 26.6377ZM27.4775 25.2253C27.5876 25.4391 27.6977 25.6529 27.8159 25.8614L27.9689 26.1301L27.532 26.3749L27.4775 25.2253ZM24.529 36.9188C22.0528 36.6203 19.5805 36.2892 17.111 35.9448C19.5269 34.7093 21.9267 33.4444 24.3102 32.1502C24.3728 33.7403 24.4381 35.3287 24.506 36.9154L24.529 36.9188Z'
							{...{
								className: svgElementClassName,
							}}
							fillRule='evenodd'
							clipRule='evenodd'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</g>
				</g>
			</svg>
		</div>
	);
};

export const ArrowRightIcon = ({
	svgElementClassName,
	applyToSvgEl = false,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 20 20'
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M4.1665 10H15.8332'
				{...{
					className: svgElementClassName,
				}}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.5'
			/>
			<path
				d='M10 4.16666L15.8333 9.99999L10 15.8333'
				{...{
					className: svgElementClassName,
				}}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.5'
			/>
		</svg>
	</div>
);

export const ArrowDownIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			width='19'
			height='18'
			viewBox='0 0 19 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M14.75 6.375L9.5 11.625L4.25 6.375'
				{...{
					className: svgElementClassName,
				}}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	</div>
);
export const CommentsIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z'
				{...{
					className: svgElementClassName,
				}}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	</div>
);

export const ApplicantsIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 25 24'
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M18.095 10.9314C19.6973 10.9314 20.9971 9.63249 20.9971 8.03016C20.9971 6.42782 19.6973 5.12891 18.095 5.12891'
				{...{
					className: svgElementClassName,
				}}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M19.4292 14.085C19.9077 14.118 20.3834 14.1858 20.8519 14.2912C21.5027 14.4186 22.2855 14.6854 22.5642 15.2693C22.742 15.6433 22.742 16.0787 22.5642 16.4536C22.2864 17.0375 21.5027 17.3034 20.8519 17.4372'
				{...{
					className: svgElementClassName,
				}}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M6.79011 10.9314C5.18777 10.9314 3.88794 9.63249 3.88794 8.03016C3.88794 6.42782 5.18777 5.12891 6.79011 5.12891'
				{...{
					className: svgElementClassName,
				}}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M5.45589 14.085C4.97739 14.118 4.50164 14.1858 4.03322 14.2912C3.38239 14.4186 2.59956 14.6854 2.32181 15.2693C2.14306 15.6433 2.14306 16.0787 2.32181 16.4536C2.59864 17.0375 3.38239 17.3034 4.03322 17.4372'
				{...{
					className: svgElementClassName,
				}}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M12.4379 14.71C15.6847 14.71 18.4586 15.2013 18.4586 17.1675C18.4586 19.1329 15.7031 19.6425 12.4379 19.6425C9.19015 19.6425 6.41724 19.1512 6.41724 17.185C6.41724 15.2187 9.17274 14.71 12.4379 14.71Z'
				{...{
					className: svgElementClassName,
				}}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M12.4378 11.9049C10.2965 11.9049 8.57959 10.188 8.57959 8.04575C8.57959 5.90442 10.2965 4.1875 12.4378 4.1875C14.5792 4.1875 16.2961 5.90442 16.2961 8.04575C16.2961 10.188 14.5792 11.9049 12.4378 11.9049Z'
				{...{
					className: svgElementClassName,
				}}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	</div>
);

export const DeleteIcon = ({
	svgElementClassName,
	applyToSvgEl = false,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 18 18'
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M14.4933 7.10107C14.4933 7.10107 14.0861 12.1523 13.8498 14.2801C13.7373 15.2963 13.1096 15.8918 12.0813 15.9106C10.1246 15.9458 8.1656 15.9481 6.2096 15.9068C5.22035 15.8866 4.6031 15.2836 4.49285 14.2853C4.2551 12.1388 3.8501 7.10107 3.8501 7.10107'
				{...{
					className: svgElementClassName,
				}}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
			/>
			<path
				d='M15.531 4.67969H2.8125'
				{...{
					className: svgElementClassName,
				}}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
			/>
			<path
				d='M13.0804 4.67974C12.4917 4.67974 11.9847 4.26349 11.8692 3.68674L11.6869 2.77474C11.5744 2.35399 11.1934 2.06299 10.7592 2.06299H7.58443C7.15018 2.06299 6.76918 2.35399 6.65668 2.77474L6.47443 3.68674C6.35893 4.26349 5.85193 4.67974 5.26318 4.67974'
				{...{
					className: svgElementClassName,
				}}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
			/>
		</svg>
	</div>
);

export const ClockIcon = ({
	svgElementClassName,
	applyToSvgEl = false,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 18 18'
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_522_24843)'>
				<path
					d='M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z'
					{...{
						className: svgElementClassName,
					}}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
				/>
				<path d='M9 4.5V9L12 10.5' fill='white' />
				<path
					d='M9 4.5V9L12 10.5'
					{...{
						className: svgElementClassName,
					}}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
				/>
			</g>
			<defs>
				<clipPath id='clip0_522_24843'>
					<rect width='18' height='18' fill='white' />
				</clipPath>
			</defs>
		</svg>
	</div>
);

export const RoadsIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 55 54'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_1042_5742)'>
				<path
					d='M50.7473 39.6733L36.9688 15.1877H49.2032C49.6412 15.1974 50.0665 15.0398 50.3925 14.7471C50.7185 14.4544 50.9208 14.0485 50.9582 13.612C50.9735 13.3812 50.9412 13.1497 50.8633 12.9319C50.7854 12.714 50.6636 12.5146 50.5053 12.3458C50.347 12.1771 50.1558 12.0427 49.9434 11.951C49.731 11.8593 49.5021 11.8122 49.2707 11.8127H5.45268C5.01646 11.8058 4.59384 11.9645 4.27009 12.257C3.94634 12.5494 3.74555 12.9537 3.70822 13.3884C3.6929 13.6192 3.72519 13.8508 3.80311 14.0686C3.88102 14.2864 4.00289 14.4859 4.16115 14.6546C4.3194 14.8234 4.51066 14.9577 4.72304 15.0495C4.93542 15.1412 5.16439 15.1882 5.39572 15.1877H17.6976L3.91916 39.6733C3.74229 39.9877 3.67082 40.3505 3.71524 40.7085C3.75965 41.0665 3.91762 41.4008 4.16596 41.6625C4.33032 41.8312 4.52726 41.9648 4.74483 42.0551C4.96239 42.1454 5.19604 42.1905 5.43158 42.1877H24.802C25.0257 42.1877 25.2404 42.0988 25.3986 41.9406C25.5568 41.7824 25.6457 41.5677 25.6457 41.344V37.1822C25.6399 36.7467 25.7991 36.3251 26.0914 36.0023C26.3838 35.6794 26.7875 35.4792 27.2214 35.4419C27.4523 35.4266 27.6838 35.4589 27.9016 35.5368C28.1194 35.6147 28.3189 35.7366 28.4876 35.8949C28.6564 36.0531 28.7908 36.2444 28.8825 36.4568C28.9742 36.6691 29.0212 36.8981 29.0207 37.1294V41.3482C29.0207 41.572 29.1096 41.7866 29.2679 41.9448C29.4261 42.103 29.6407 42.1919 29.8645 42.1919H49.2222C49.4577 42.1947 49.6914 42.1496 49.909 42.0593C50.1265 41.969 50.3235 41.8354 50.4878 41.6667C50.7391 41.4062 50.9 41.0718 50.9468 40.7129C50.9935 40.3539 50.9235 39.9895 50.7473 39.6733ZM29.0207 29.5315C29.0207 29.979 28.8429 30.4082 28.5265 30.7247C28.21 31.0412 27.7808 31.219 27.3332 31.219C26.8857 31.219 26.4564 31.0412 26.14 30.7247C25.8235 30.4082 25.6457 29.979 25.6457 29.5315V26.1565C25.6457 25.7089 25.8235 25.2797 26.14 24.9632C26.4564 24.6468 26.8857 24.469 27.3332 24.469C27.7808 24.469 28.21 24.6468 28.5265 24.9632C28.8429 25.2797 29.0207 25.7089 29.0207 26.1565V29.5315ZM29.0207 18.5627C29.0207 19.0103 28.8429 19.4395 28.5265 19.756C28.21 20.0724 27.7808 20.2502 27.3332 20.2502C26.8857 20.2502 26.4564 20.0724 26.14 19.756C25.8235 19.4395 25.6457 19.0103 25.6457 18.5627V16.8752C25.6457 16.4277 25.8235 15.9984 26.14 15.682C26.4564 15.3655 26.8857 15.1877 27.3332 15.1877C27.7808 15.1877 28.21 15.3655 28.5265 15.682C28.8429 15.9984 29.0207 16.4277 29.0207 16.8752V18.5627Z'
					{...{
						className: svgElementClassName,
					}}
					strokeLinecap='round'
					strokeLinejoin='round'
					clipRule='evenodd'
					fillRule='evenodd'
					strokeWidth='1.5'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1042_5742'>
					<rect
						width='54'
						height='54'
						{...{
							className: svgElementClassName,
						}}
						strokeLinecap='round'
						strokeLinejoin='round'
						clipRule='evenodd'
						fillRule='evenodd'
						strokeWidth='1.5'
						transform='translate(0.333252)'
					/>
				</clipPath>
			</defs>
		</svg>
	</div>
);

export const EnergyIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 54 54'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_1046_5709)'>
				<path
					d='M37.125 48.9375C37.125 49.3851 36.9472 49.8143 36.6308 50.1308C36.3143 50.4472 35.8851 50.625 35.4375 50.625H18.5625C18.115 50.625 17.6858 50.4472 17.3693 50.1308C17.0528 49.8143 16.875 49.3851 16.875 48.9375C16.875 48.49 17.0528 48.0607 17.3693 47.7443C17.6858 47.4278 18.115 47.25 18.5625 47.25H35.4375C35.8851 47.25 36.3143 47.4278 36.6308 47.7443C36.9472 48.0607 37.125 48.49 37.125 48.9375ZM45.5625 21.9375C45.5698 24.7507 44.9343 27.5283 43.7045 30.0584C42.4747 32.5885 40.6832 34.8043 38.4666 36.5365C38.0521 36.8542 37.7158 37.2624 37.4833 37.73C37.2508 38.1976 37.1282 38.7122 37.125 39.2344V40.5C37.125 41.3951 36.7695 42.2536 36.1365 42.8865C35.5036 43.5194 34.6451 43.875 33.75 43.875H20.25C19.3549 43.875 18.4965 43.5194 17.8635 42.8865C17.2306 42.2536 16.875 41.3951 16.875 40.5V39.2344C16.8747 38.7184 16.756 38.2094 16.5282 37.7465C16.3004 37.2835 15.9695 36.879 15.5609 36.5639C13.3498 34.8419 11.5595 32.6395 10.3254 30.1234C9.09125 27.6073 8.44568 24.8434 8.43753 22.0409C8.38269 11.9876 16.508 3.61549 26.5528 3.37502C29.0279 3.31537 31.4898 3.75144 33.7938 4.65755C36.0978 5.56367 38.1972 6.92151 39.9686 8.65118C41.7399 10.3808 43.1473 12.4474 44.108 14.7291C45.0687 17.0109 45.5632 19.4618 45.5625 21.9375ZM38.7893 19.9674C38.3518 17.5232 37.1758 15.2718 35.4199 13.5163C33.664 11.7607 31.4123 10.5853 28.9681 10.1482C28.7495 10.1114 28.5258 10.1179 28.3098 10.1675C28.0938 10.2171 27.8897 10.3088 27.7091 10.4373C27.5285 10.5658 27.375 10.7286 27.2573 10.9164C27.1396 11.1042 27.0601 11.3134 27.0232 11.532C26.9864 11.7505 26.993 11.9742 27.0426 12.1902C27.0922 12.4062 27.1838 12.6104 27.3123 12.791C27.4408 12.9716 27.6036 13.1251 27.7914 13.2428C27.9793 13.3604 28.1884 13.44 28.407 13.4768C31.9022 14.0653 34.868 17.0311 35.4607 20.5327C35.5275 20.9257 35.7313 21.2824 36.0359 21.5395C36.3405 21.7967 36.7264 21.9377 37.125 21.9375C37.2204 21.9369 37.3156 21.9292 37.4098 21.9143C37.8509 21.839 38.244 21.5916 38.5027 21.2265C38.7614 20.8614 38.8645 20.4085 38.7893 19.9674Z'
					{...{
						className: svgElementClassName,
					}}
					strokeLinecap='round'
					strokeLinejoin='round'
					clipRule='evenodd'
					fillRule='evenodd'
					strokeWidth='1.5'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1046_5709'>
					<rect
						width='54'
						height='54'
						{...{
							className: svgElementClassName,
						}}
						strokeLinecap='round'
						strokeLinejoin='round'
						clipRule='evenodd'
						fillRule='evenodd'
						strokeWidth='1.5'
					/>
				</clipPath>
			</defs>
		</svg>
	</div>
);

export const TradeIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			width='55'
			height='54'
			viewBox='0 0 55 54'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_1042_6613)'>
				<path
					d='M51.2916 43.875H47.9166V28.6875C47.9166 28.677 47.9166 28.6685 47.9166 28.658C47.9166 28.6474 47.9166 28.5968 47.9166 28.5673C47.9166 28.5377 47.9166 28.5082 47.9166 28.4808C47.9177 28.4703 47.9177 28.4597 47.9166 28.4491L44.7526 6.27329C44.6339 5.46678 44.2288 4.72996 43.6114 4.19773C42.9939 3.66549 42.2054 3.37343 41.3902 3.37501H37.568C36.7565 3.37848 35.9731 3.67283 35.36 4.20461C34.7469 4.73639 34.3449 5.47036 34.2268 6.27329L31.7883 23.3402L23.6166 17.2125C23.3659 17.0245 23.0678 16.91 22.7557 16.8818C22.4436 16.8537 22.1298 16.913 21.8495 17.0532C21.5692 17.1933 21.3334 17.4088 21.1687 17.6753C21.0039 17.9419 20.9166 18.2491 20.9166 18.5625V25.3125L10.1166 17.2125C9.86591 17.0245 9.5678 16.91 9.25567 16.8818C8.94355 16.8537 8.62976 16.913 8.34945 17.0532C8.06915 17.1933 7.83341 17.4088 7.66865 17.6753C7.50389 17.9419 7.41663 18.2491 7.41663 18.5625V43.875H4.04163C3.59407 43.875 3.16485 44.0528 2.84838 44.3693C2.53192 44.6857 2.35413 45.115 2.35413 45.5625C2.35413 46.0101 2.53192 46.4393 2.84838 46.7557C3.16485 47.0722 3.59407 47.25 4.04163 47.25H51.2916C51.7392 47.25 52.1684 47.0722 52.4849 46.7557C52.8013 46.4393 52.9791 46.0101 52.9791 45.5625C52.9791 45.115 52.8013 44.6857 52.4849 44.3693C52.1684 44.0528 51.7392 43.875 51.2916 43.875ZM23.4479 38.8125H17.5416C17.0941 38.8125 16.6649 38.6347 16.3484 38.3182C16.0319 38.0018 15.8541 37.5726 15.8541 37.125C15.8541 36.6775 16.0319 36.2482 16.3484 35.9318C16.6649 35.6153 17.0941 35.4375 17.5416 35.4375H23.4479C23.8954 35.4375 24.3246 35.6153 24.6411 35.9318C24.9576 36.2482 25.1354 36.6775 25.1354 37.125C25.1354 37.5726 24.9576 38.0018 24.6411 38.3182C24.3246 38.6347 23.8954 38.8125 23.4479 38.8125ZM37.7916 38.8125H31.8854C31.4378 38.8125 31.0086 38.6347 30.6921 38.3182C30.3757 38.0018 30.1979 37.5726 30.1979 37.125C30.1979 36.6775 30.3757 36.2482 30.6921 35.9318C31.0086 35.6153 31.4378 35.4375 31.8854 35.4375H37.7916C38.2392 35.4375 38.6684 35.6153 38.9849 35.9318C39.3013 36.2482 39.4791 36.6775 39.4791 37.125C39.4791 37.5726 39.3013 38.0018 38.9849 38.3182C38.6684 38.6347 38.2392 38.8125 37.7916 38.8125ZM36.6673 27L34.868 25.65L37.568 6.75001H41.3902L44.2843 27H36.6673Z'
					{...{
						className: svgElementClassName,
					}}
					strokeLinecap='round'
					strokeLinejoin='round'
					clipRule='evenodd'
					fillRule='evenodd'
					strokeWidth='1.5'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1042_6613'>
					<rect
						width='54'
						height='54'
						{...{
							className: svgElementClassName,
						}}
						strokeLinecap='round'
						strokeLinejoin='round'
						clipRule='evenodd'
						fillRule='evenodd'
						strokeWidth='1.5'
						transform='translate(0.666626)'
					/>
				</clipPath>
			</defs>
		</svg>
	</div>
);

export const YSportIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 55 54'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_1042_7722)'>
				<path
					d='M20.3408 7.77511C20.2047 7.69093 20.0954 7.56978 20.0255 7.42579C19.9557 7.28181 19.9282 7.12094 19.9464 6.96194C19.9645 6.80295 20.0275 6.65239 20.1279 6.52783C20.2284 6.40327 20.3622 6.30985 20.5138 6.25847C23.5914 5.19807 26.8664 4.83625 30.1013 5.19928C33.3361 5.56232 36.4495 6.64109 39.2155 8.3573C39.3157 8.4205 39.4015 8.5041 39.4673 8.60265C39.5331 8.70121 39.5774 8.81252 39.5973 8.92933C39.6172 9.04614 39.6122 9.16583 39.5828 9.28061C39.5534 9.39539 39.5001 9.50268 39.4264 9.5955C36.9841 12.7165 33.989 15.362 30.5903 17.4002C27.8448 13.5448 24.3609 10.2731 20.3408 7.77511ZM27.5781 18.9843C24.4973 14.7806 20.4443 11.3854 15.7656 9.08925C15.6316 9.02419 15.4826 8.99632 15.3342 9.00857C15.1857 9.02081 15.0433 9.07272 14.9218 9.15886C11.1342 11.8681 8.30282 15.7083 6.83447 20.1276C6.79759 20.2406 6.78499 20.3601 6.79751 20.4783C6.81003 20.5965 6.84739 20.7108 6.90714 20.8135C6.96689 20.9163 7.04767 21.0053 7.1442 21.0746C7.24073 21.144 7.35083 21.1922 7.46729 21.216C9.66896 21.6906 11.9144 21.9324 14.1667 21.9375C18.7987 21.94 23.3755 20.9322 27.5781 18.9843ZM49.4734 24.6143C48.937 19.7216 46.7679 15.1524 43.3161 11.6437C43.232 11.5582 43.1305 11.4916 43.0186 11.4484C42.9067 11.4053 42.7868 11.3864 42.6671 11.3932C42.5473 11.4 42.4303 11.4322 42.324 11.4878C42.2177 11.5434 42.1245 11.621 42.0505 11.7154C39.3808 15.1165 36.1151 18.0041 32.4128 20.2373C33.5694 22.2411 34.5267 24.3536 35.271 26.5443C38.293 25.7251 41.4105 25.3108 44.5417 25.3125C45.8808 25.3125 47.2188 25.3879 48.5495 25.5382C48.6733 25.5505 48.7983 25.5353 48.9156 25.4937C49.0329 25.452 49.1395 25.3849 49.2278 25.2972C49.3161 25.2095 49.3839 25.1034 49.4264 24.9864C49.4688 24.8694 49.4849 24.7445 49.4734 24.6206V24.6143ZM36.2033 29.7822C36.8285 32.4418 37.1435 35.1649 37.142 37.897C37.1407 40.5121 36.8499 43.1189 36.275 45.67C36.2383 45.8263 36.2468 45.9898 36.2997 46.1413C36.3526 46.2929 36.4477 46.4262 36.5737 46.5256C36.6997 46.6251 36.8514 46.6865 37.0111 46.7027C37.1708 46.7189 37.3318 46.6892 37.4753 46.6171C40.6745 45.0122 43.4337 42.6507 45.5132 39.7375C47.5927 36.8243 48.9296 33.4475 49.408 29.9003C49.4224 29.7897 49.4148 29.6773 49.3856 29.5697C49.3563 29.462 49.306 29.3613 49.2375 29.2732C49.1691 29.1851 49.0838 29.1115 48.9867 29.0566C48.8896 29.0016 48.7826 28.9665 48.6718 28.9532C44.5005 28.4164 40.2643 28.703 36.2033 29.797V29.7822ZM32.0605 27.5779C31.3804 25.5834 30.5049 23.6608 29.447 21.8383C24.679 24.1289 19.4563 25.3164 14.1667 25.3125C11.694 25.3126 9.22818 25.0545 6.80916 24.5425C6.69245 24.5179 6.57184 24.5183 6.4553 24.5437C6.33875 24.5691 6.22892 24.6189 6.13304 24.6899C6.03716 24.7609 5.95742 24.8514 5.89907 24.9554C5.84073 25.0594 5.8051 25.1747 5.79455 25.2935C5.75096 25.856 5.72846 26.4248 5.72705 27C5.72594 30.0038 6.34342 32.9757 7.54101 35.7306C8.7386 38.4854 10.4906 40.9641 12.688 43.0122C12.7807 43.0972 12.8912 43.1603 13.0114 43.1971C13.1316 43.2338 13.2586 43.2433 13.3829 43.2247C13.5073 43.2061 13.6259 43.1599 13.7301 43.0896C13.8343 43.0192 13.9215 42.9265 13.9853 42.8182C18.1024 35.8322 24.4782 30.4587 32.0605 27.5843V27.5779ZM16.6325 44.9824C16.5771 45.0792 16.5414 45.186 16.5275 45.2967C16.5136 45.4074 16.5218 45.5197 16.5516 45.6273C16.5814 45.7347 16.6323 45.8353 16.7012 45.923C16.7701 46.0107 16.8558 46.0839 16.9531 46.1383C21.3645 48.6116 26.4957 49.4828 31.4762 48.6042C31.6244 48.5783 31.7627 48.5126 31.8764 48.4142C31.9901 48.3157 32.0749 48.1882 32.1217 48.0452C33.2096 44.7745 33.7651 41.3502 33.767 37.9033C33.7674 35.5286 33.5028 33.1613 32.9781 30.8453C26.0663 33.5383 20.2937 38.531 16.6325 44.9824Z'
					{...{
						className: svgElementClassName,
					}}
					strokeLinecap='round'
					strokeLinejoin='round'
					clipRule='evenodd'
					fillRule='evenodd'
					strokeWidth='1.5'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1042_7722'>
					<rect
						width='54'
						height='54'
						{...{
							className: svgElementClassName,
						}}
						strokeLinecap='round'
						strokeLinejoin='round'
						clipRule='evenodd'
						fillRule='evenodd'
						strokeWidth='1.5'
						transform='translate(0.666626)'
					/>
				</clipPath>
			</defs>
		</svg>
	</div>
);

export const HealthCareIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 54 54'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_1042_7936)'>
				<path
					d='M50.6249 19.8281C50.6249 34.5938 28.7317 46.5455 27.7993 47.0391C27.5536 47.1713 27.2789 47.2405 26.9999 47.2405C26.7208 47.2405 26.4462 47.1713 26.2004 47.0391C25.4938 46.6594 12.7953 39.7216 6.65074 29.9763C6.57148 29.8487 6.52774 29.7022 6.52405 29.552C6.52036 29.4018 6.55685 29.2533 6.62975 29.1219C6.70265 28.9905 6.80931 28.881 6.93871 28.8046C7.06811 28.7282 7.21556 28.6878 7.36582 28.6875H15.1874C15.4653 28.6877 15.7389 28.6192 15.984 28.4882C16.2291 28.3572 16.438 28.1677 16.5922 27.9366L18.5624 24.9834L23.9075 32.9991C24.1123 33.3062 24.4122 33.5378 24.7612 33.6582C25.1102 33.7786 25.4891 33.7812 25.8397 33.6656C26.2114 33.5401 26.5291 33.2916 26.7404 32.9611L29.5902 28.6875H33.7499C33.9812 28.688 34.2102 28.6409 34.4226 28.5492C34.6349 28.4575 34.8262 28.3231 34.9845 28.1544C35.1427 27.9857 35.2646 27.7862 35.3425 27.5684C35.4204 27.3505 35.4527 27.119 35.4374 26.8882C35.3996 26.4545 35.1993 26.051 34.8765 25.7588C34.5538 25.4666 34.1325 25.3071 33.6971 25.3125H28.6874C28.4095 25.3123 28.1358 25.3808 27.8908 25.5118C27.6457 25.6428 27.4368 25.8323 27.2825 26.0634L25.3124 29.0166L19.9672 21.0009C19.7624 20.6938 19.4625 20.4622 19.1135 20.3418C18.7645 20.2215 18.3857 20.2188 18.035 20.3344C17.6634 20.4599 17.3456 20.7084 17.1343 21.0389L14.2846 25.3125H4.96324C4.78291 25.313 4.60717 25.2557 4.46178 25.149C4.31639 25.0424 4.20899 24.8919 4.15535 24.7198C3.64639 23.1388 3.38317 21.489 3.37488 19.8281C3.37879 16.3608 4.75791 13.0366 7.20969 10.5848C9.66147 8.13303 12.9857 6.75391 16.453 6.75C20.8089 6.75 24.6226 8.62312 26.9999 11.7893C29.3771 8.62312 33.1909 6.75 37.5468 6.75C41.0141 6.75391 44.3383 8.13303 46.7901 10.5848C49.2418 13.0366 50.621 16.3608 50.6249 19.8281Z'
					{...{
						className: svgElementClassName,
					}}
					strokeLinecap='round'
					strokeLinejoin='round'
					clipRule='evenodd'
					fillRule='evenodd'
					strokeWidth='1.5'
					transform='translate(0.666626)'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1042_7936'>
					<rect
						width='54'
						height='54'
						{...{
							className: svgElementClassName,
						}}
						strokeLinecap='round'
						strokeLinejoin='round'
						clipRule='evenodd'
						fillRule='evenodd'
						strokeWidth='1.5'
						transform='translate(0.666626)'
					/>
				</clipPath>
			</defs>
		</svg>
	</div>
);

export const AgricultureAndLivestockIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 55 54'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_1042_7739)'>
				<path
					d='M43.6619 31.8662C41.6389 33.096 39.3153 33.7428 36.9478 33.7351C34.9644 33.7194 33.0034 33.3137 31.1765 32.5412C29.7686 34.5289 29.015 36.906 29.0208 39.3418V45.5624C29.0213 45.7937 28.9742 46.0227 28.8825 46.2351C28.7908 46.4475 28.6564 46.6387 28.4877 46.797C28.3189 46.9552 28.1195 47.0771 27.9016 47.155C27.6838 47.2329 27.4523 47.2652 27.2215 47.2499C26.7877 47.2121 26.3843 47.0118 26.0921 46.689C25.7998 46.3663 25.6404 45.945 25.6458 45.5097V42.8856L17.4994 34.7392C16.2884 35.191 15.0076 35.4273 13.7151 35.4374C11.9358 35.4418 10.1898 34.9549 8.66952 34.0304C4.07319 31.2376 1.59889 24.8104 2.07772 16.8306C2.10183 16.4178 2.27669 16.0281 2.56911 15.7357C2.86153 15.4433 3.25114 15.2684 3.66397 15.2443C11.6437 14.7739 18.071 17.2398 20.8554 21.8361C21.9493 23.6377 22.4269 25.7465 22.2159 27.8436C22.2028 28.0061 22.1429 28.1613 22.0435 28.2905C21.944 28.4196 21.8093 28.5172 21.6555 28.5715C21.5018 28.6257 21.3357 28.6342 21.1772 28.596C21.0187 28.5578 20.8747 28.4745 20.7626 28.3562L16.7126 24.1164C16.3935 23.8133 15.9687 23.6468 15.5287 23.6524C15.0886 23.658 14.6682 23.8354 14.357 24.1465C14.0458 24.4577 13.8685 24.8781 13.8629 25.3182C13.8573 25.7582 14.0238 26.183 14.3269 26.5021L25.6922 38.1564C25.7048 37.9918 25.7196 37.8273 25.7365 37.6649C26.1055 34.5361 27.4861 31.6135 29.6683 29.3413L40.3397 18.0646C40.6563 17.7482 40.8343 17.319 40.8345 16.8714C40.8347 16.4238 40.6571 15.9945 40.3407 15.6778C40.0244 15.3612 39.5952 15.1832 39.1476 15.183C38.7 15.1828 38.2706 15.3604 37.954 15.6768L27.618 26.6075C27.5146 26.7171 27.3837 26.797 27.2389 26.8389C27.0941 26.8807 26.9407 26.883 26.7948 26.8456C26.6488 26.8081 26.5155 26.7322 26.4088 26.6258C26.3021 26.5194 26.2258 26.3864 26.1879 26.2405C25.188 22.5533 25.6289 18.883 27.5379 15.7316C31.3052 9.51317 40.0718 6.18457 50.9899 6.82582C51.4027 6.84993 51.7924 7.02479 52.0848 7.31721C52.3772 7.60963 52.552 7.99924 52.5762 8.41207C53.209 19.3323 49.8804 28.0989 43.6619 31.8662Z'
					{...{
						className: svgElementClassName,
					}}
					strokeLinecap='round'
					strokeLinejoin='round'
					clipRule='evenodd'
					fillRule='evenodd'
					strokeWidth='1.5'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1042_7739'>
					<rect
						width='54'
						height='54'
						{...{
							className: svgElementClassName,
						}}
						strokeLinecap='round'
						strokeLinejoin='round'
						clipRule='evenodd'
						fillRule='evenodd'
						strokeWidth='1.5'
						transform='translate(0.333252)'
					/>
				</clipPath>
			</defs>
		</svg>
	</div>
);

export const WaterIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 55 54'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_1042_7776)'>
				<path
					d='M37.3698 10.0723C34.7642 7.06312 31.8317 4.35346 28.6264 1.99337C28.3427 1.79461 28.0046 1.68799 27.6582 1.68799C27.3118 1.68799 26.9737 1.79461 26.69 1.99337C23.4906 4.35444 20.5638 7.06407 17.9635 10.0723C12.1648 16.7316 9.10413 23.7516 9.10413 30.375C9.10413 35.2981 11.0598 40.0195 14.541 43.5007C18.0221 46.9818 22.7435 48.9375 27.6666 48.9375C32.5897 48.9375 37.3112 46.9818 40.7923 43.5007C44.2734 40.0195 46.2291 35.2981 46.2291 30.375C46.2291 23.7516 43.1684 16.7316 37.3698 10.0723ZM39.4475 32.3452C39.0099 34.7893 37.834 37.0407 36.0781 38.7963C34.3221 40.5518 32.0705 41.7273 29.6262 42.1643C29.5362 42.1788 29.4453 42.1865 29.3541 42.1875C28.9308 42.1874 28.523 42.0282 28.2116 41.7415C27.9002 41.4548 27.7079 41.0616 27.6729 40.6397C27.6378 40.2179 27.7626 39.7983 28.0224 39.4641C28.2823 39.13 28.6582 38.9057 29.0757 38.8357C32.5709 38.2472 35.5367 35.2814 36.1294 31.7799C36.2044 31.3385 36.4516 30.9449 36.8168 30.6858C37.1819 30.4267 37.635 30.3233 38.0764 30.3982C38.5178 30.4732 38.9113 30.7204 39.1704 31.0855C39.4295 31.4507 39.533 31.9038 39.458 32.3452H39.4475Z'
					{...{
						className: svgElementClassName,
					}}
					strokeLinecap='round'
					strokeLinejoin='round'
					clipRule='evenodd'
					fillRule='evenodd'
					strokeWidth='1.5'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1042_7776'>
					<rect
						width='54'
						height='54'
						{...{
							className: svgElementClassName,
						}}
						strokeLinecap='round'
						strokeLinejoin='round'
						clipRule='evenodd'
						fillRule='evenodd'
						strokeWidth='1.5'
						transform='translate(0.666626)'
					/>
				</clipPath>
			</defs>
		</svg>
	</div>
);

export const HomeIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				{...{
					className: svgElementClassName,
				}}
			/>
		</svg>
	</div>
);

export const SettingsIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M10.675 21V15.375H12.175V17.45H21V18.95H12.175V21H10.675ZM3 18.95V17.45H9.175V18.95H3ZM7.675 14.8V12.75H3V11.25H7.675V9.15H9.175V14.8H7.675ZM10.675 12.75V11.25H21V12.75H10.675ZM14.825 8.625V3H16.325V5.05H21V6.55H16.325V8.625H14.825ZM3 6.55V5.05H13.325V6.55H3Z'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				{...{
					className: svgElementClassName,
				}}
			/>
		</svg>
	</div>
);

export const CloseIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M5.1875 15.6875L4.3125 14.8125L9.125 10L4.3125 5.1875L5.1875 4.3125L10 9.125L14.8125 4.3125L15.6875 5.1875L10.875 10L15.6875 14.8125L14.8125 15.6875L10 10.875L5.1875 15.6875Z'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				{...{
					className: svgElementClassName,
				}}
			/>
		</svg>
	</div>
);

export const DocumentsIcon = ({
	svgElementClassName,
	applyToSvgEl = false,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 24 24'
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M14.4064 14.8714H7.78809'
				{...{
					className: svgElementClassName,
				}}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
			/>
			<path
				d='M14.4064 11.0335H7.78809'
				{...{
					className: svgElementClassName,
				}}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
			/>
			<path
				d='M10.3137 7.20492H7.78833'
				{...{
					className: svgElementClassName,
				}}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M14.5828 2.52051C14.5828 2.52051 7.54557 2.52417 7.53457 2.52417C5.00457 2.53976 3.43799 4.20442 3.43799 6.74359V15.1733C3.43799 17.7253 5.01649 19.3963 7.56849 19.3963C7.56849 19.3963 14.6048 19.3936 14.6167 19.3936C17.1467 19.378 18.7142 17.7124 18.7142 15.1733V6.74359C18.7142 4.19159 17.1348 2.52051 14.5828 2.52051Z'
				{...{
					className: svgElementClassName,
				}}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
			/>
		</svg>
	</div>
);

export const FBIcon = ({
	roundRingClassnames = 'stroke-bodyText',
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 44 44'
			xmlns='http://www.w3.org/2000/svg'>
			<rect
				strokeWidth='0.881826'
				x='1.41821'
				y='0.440913'
				rx='18.5591'
				width='36'
				height='36'
				{...{ className: roundRingClassnames }}
			/>
			<path
				strokeWidth='.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				{...{
					className: svgElementClassName,
				}}
				d='M25.0229 9H22.0229C20.6969 9 19.4251 9.52678 18.4874 10.4645C17.5497 11.4021 17.0229 12.6739 17.0229 14V17H14.0229V21H17.0229V29H21.0229V21H24.0229L25.0229 17H21.0229V14C21.0229 13.7348 21.1283 13.4804 21.3158 13.2929C21.5034 13.1054 21.7577 13 22.0229 13H25.0229V9Z'
			/>
			<defs>
				<rect
					transform='translate(9.47729 8.5)'
					{...{
						className: svgElementClassName,
					}}
				/>
			</defs>
		</svg>
	</div>
);

export const XIcon = ({
	roundRingClassnames = 'stroke-bodyText',
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			title: 'Share on X',
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 44 44'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				strokeWidth='.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				{...{
					className: svgElementClassName,
				}}
				d='M23.4296 28.625L18.5738 21.7038L12.4951 28.625H9.92334L17.4329 20.0772L9.92334 9.375H16.526L21.1025 15.8981L26.8366 9.375H29.4084L22.2473 17.5269L30.0323 28.625H23.4296ZM26.2935 26.6738H24.5621L13.6056 11.3263H15.3373L19.7254 17.4715L20.4842 18.5379L26.2935 26.6738Z'
			/>
			<defs>
				<rect
					transform='translate(9.47729 8.5)'
					width='21'
					height='21'
					{...{
						className: svgElementClassName,
					}}
				/>
			</defs>

			<rect
				strokeWidth='0.881826'
				width='36'
				height='36'
				y='0.440913'
				rx='18.5591'
				x='1.41821'
				{...{ className: roundRingClassnames }}
			/>
		</svg>
	</div>
);

export const LinkIcon = ({
	roundRingClassnames = 'stroke-bodyText',
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			title: 'Copy job link',
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 44 44'
			xmlns='http://www.w3.org/2000/svg'>
			<rect
				{...{ className: roundRingClassnames }}
				x='1.41821'
				y='0.440913'
				rx='18.5591'
				width='36'
				height='36'
				strokeWidth='0.881826'
			/>

			<path
				strokeWidth='.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				{...{
					className: svgElementClassName,
				}}
				d='M16.9316 24H14.9316C13.6056 24 12.3338 23.4732 11.3961 22.5355C10.4584 21.5979 9.93164 20.3261 9.93164 19C9.93164 17.6739 10.4584 16.4021 11.3961 15.4645C12.3338 14.5268 13.6056 14 14.9316 14H16.9316'
			/>

			<path
				strokeWidth='.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				{...{
					className: svgElementClassName,
				}}
				d='M22.9316 14H24.9316C26.2577 14 27.5295 14.5268 28.4672 15.4645C29.4049 16.4021 29.9316 17.6739 29.9316 19C29.9316 20.3261 29.4049 21.5979 28.4672 22.5355C27.5295 23.4732 26.2577 24 24.9316 24H22.9316'
			/>

			<path
				strokeWidth='.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				{...{
					className: svgElementClassName,
				}}
				d='M15.9316 19H23.9316'
			/>

			<defs>
				<clipPath id='clip0_748_14856'>
					<rect
						transform='translate(9.47729 8.5)'
						{...{
							className: svgElementClassName,
						}}
					/>
				</clipPath>
			</defs>
		</svg>
	</div>
);

export const InstagramIcon = ({
	roundRingClassnames = 'stroke-bodyText',
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			title: 'Share on Instagram',
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 44 44'
			xmlns='http://www.w3.org/2000/svg'>
			<rect
				{...{ className: roundRingClassnames }}
				x='1.41821'
				y='0.440913'
				rx='18.5591'
				width='36'
				height='36'
				strokeWidth='0.881826'
			/>
			<path
				strokeWidth='.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				{...{
					className: svgElementClassName,
				}}
				d='M24.0686 9H14.0686C11.3072 9 9.0686 11.2386 9.0686 14V24C9.0686 26.7614 11.3072 29 14.0686 29H24.0686C26.83 29 29.0686 26.7614 29.0686 24V14C29.0686 11.2386 26.83 9 24.0686 9Z'
			/>

			<path
				strokeWidth='.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				{...{
					className: svgElementClassName,
				}}
				d='M23.0686 18.3701C23.192 19.2023 23.0498 20.0523 22.6623 20.7991C22.2748 21.5459 21.6617 22.1515 20.9102 22.5297C20.1587 22.908 19.307 23.0397 18.4763 22.906C17.6457 22.7723 16.8783 22.3801 16.2834 21.7852C15.6885 21.1903 15.2963 20.4229 15.1626 19.5923C15.029 18.7616 15.1606 17.91 15.5389 17.1584C15.9171 16.4069 16.5227 15.7938 17.2695 15.4063C18.0163 15.0188 18.8663 14.8766 19.6986 15.0001C20.5475 15.1259 21.3334 15.5215 21.9402 16.1284C22.5471 16.7352 22.9427 17.5211 23.0686 18.3701Z'
			/>

			<path
				strokeWidth='.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				{...{
					className: svgElementClassName,
				}}
				d='M24.5686 13.5H24.5786'
			/>
			<defs>
				<clipPath id='clip0_748_14856'>
					<rect
						transform='translate(9.47729 8.5)'
						{...{
							className: svgElementClassName,
						}}
					/>
				</clipPath>
			</defs>
		</svg>
	</div>
);

export const FunnelIcon = ({
	svgElementClassName,
	applyToSvgEl = false,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			viewBox='0 0 20 20'
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M5 10H15M2.5 5H17.5M7.5 15H12.5'
				{...{
					className: svgElementClassName,
				}}
				strokeLinejoin='round'
				strokeLinecap='round'
				strokeWidth='1.67'
			/>
		</svg>
	</div>
);

export const HelpIcon = ({
	svgElementClassName,
	applyToSvgEl = false,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			viewBox='0 0 16 16'
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_748_19144)'>
				<path
					d='M6.05998 5.99967C6.21672 5.55412 6.52608 5.17841 6.93328 4.9391C7.34048 4.69978 7.81924 4.6123 8.28476 4.69215C8.75028 4.772 9.17252 5.01402 9.4767 5.37536C9.78087 5.7367 9.94735 6.19402 9.94665 6.66634C9.94665 7.99967 7.94665 8.66634 7.94665 8.66634M7.99998 11.333H8.00665M14.6666 7.99967C14.6666 11.6816 11.6819 14.6663 7.99998 14.6663C4.31808 14.6663 1.33331 11.6816 1.33331 7.99967C1.33331 4.31778 4.31808 1.33301 7.99998 1.33301C11.6819 1.33301 14.6666 4.31778 14.6666 7.99967Z'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					{...{
						className: svgElementClassName,
					}}
				/>
			</g>
			<defs>
				<clipPath id='clip0_748_19144'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	</div>
);

export const CheckMarkIcon = ({
	svgElementClassName,
	applyToSvgEl = false,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			viewBox='0 0 24 24'
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M7.5364 11.73C7.18492 11.3785 6.61508 11.3785 6.2636 11.73C5.91213 12.0814 5.91213 12.6513 6.2636 13.0027L9.53043 16.2696C9.8819 16.621 10.4517 16.621 10.8032 16.2696L18.5364 8.5364C18.8879 8.18492 18.8879 7.61508 18.5364 7.2636C18.1849 6.91213 17.6151 6.91213 17.2636 7.2636L10.1668 14.3604L7.5364 11.73Z'
				{...{
					className: svgElementClassName,
				}}
				strokeLinejoin='round'
				strokeLinecap='round'
				strokeWidth='1.67'
			/>
		</svg>
	</div>
);

export const CrossMarkIcon = ({
	svgElementClassName,
	applyToSvgEl = false,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			viewBox='0 0 24 24'
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M10.6712 12L7.27521 8.60406C6.90826 8.23711 6.90826 7.64216 7.27521 7.27521C7.64216 6.90826 8.23711 6.90826 8.60406 7.27521L12 10.6712L15.3959 7.27521C15.7629 6.90826 16.3578 6.90826 16.7248 7.27521C17.0917 7.64216 17.0917 8.23711 16.7248 8.60406L13.3288 12L16.7248 15.3959C17.0917 15.7629 17.0917 16.3578 16.7248 16.7248C16.3578 17.0917 15.7629 17.0917 15.3959 16.7248L12 13.3288L8.60406 16.7248C8.23711 17.0917 7.64216 17.0917 7.27521 16.7248C6.90826 16.3578 6.90826 15.7629 7.27521 15.3959L10.6712 12Z'
				{...{
					className: svgElementClassName,
				}}
				strokeLinejoin='round'
				strokeLinecap='round'
				strokeWidth='1.67'
			/>
		</svg>
	</div>
);

export const WorkIcon = ({
	svgElementClassName,
	applyToSvgEl = false,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			viewBox='0 0 61 60'
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M27.4279 8.79745C25.752 8.79745 24.3263 9.962 23.9261 11.5316H37.3829C36.9827 9.962 35.5569 8.79745 33.8811 8.79745H27.4279ZM41.1848 11.5316H46.1372C51.3899 11.5316 55.667 15.8607 55.667 21.1771C55.667 21.1771 55.5169 23.4278 55.4669 26.5619C55.4619 26.81 55.3418 27.0531 55.1442 27.1999C53.9411 28.0885 52.8406 28.8227 52.7405 28.8733C48.5885 31.6581 43.7635 33.6176 38.6235 34.5923C38.2883 34.6581 37.9581 34.4834 37.7881 34.1847C36.3473 31.6885 33.656 30.0632 30.6545 30.0632C27.673 30.0632 24.9566 31.6708 23.4734 34.1695C23.3008 34.4631 22.9756 34.6328 22.643 34.5695C17.5454 33.5923 12.7205 31.6353 8.59346 28.8986L6.19225 27.2277C5.99215 27.1012 5.86709 26.8733 5.86709 26.6201C5.79205 25.329 5.66699 21.1771 5.66699 21.1771C5.66699 15.8607 9.94413 11.5316 15.1968 11.5316H20.1242C20.5995 7.86074 23.676 5 27.4279 5H33.8811C37.633 5 40.7095 7.86074 41.1848 11.5316ZM54.8166 32.0381L54.7165 32.0887C49.664 35.4811 43.586 37.7343 37.2078 38.671C36.3073 38.7976 35.4069 38.2153 35.1567 37.3039C34.6065 35.2279 32.8306 33.8609 30.7045 33.8609H30.6795H30.6295C28.5034 33.8609 26.7275 35.2279 26.1772 37.3039C25.9271 38.2153 25.0267 38.7976 24.1262 38.671C17.748 37.7343 11.67 35.4811 6.61747 32.0887C6.59245 32.0634 6.34233 31.9115 6.14223 32.0381C5.91712 32.1647 5.91712 32.4685 5.91712 32.4685L6.0922 45.3798C6.0922 50.6962 10.3443 55 15.597 55H45.712C50.9646 55 55.2168 50.6962 55.2168 45.3798L55.4169 32.4685C55.4169 32.4685 55.4169 32.1647 55.1918 32.0381C55.0667 31.9621 54.9166 31.9875 54.8166 32.0381ZM32.5304 42.6456C32.5304 43.7089 31.705 44.5444 30.6545 44.5444C29.629 44.5444 28.7785 43.7089 28.7785 42.6456V39.3798C28.7785 38.3419 29.629 37.4811 30.6545 37.4811C31.705 37.4811 32.5304 38.3419 32.5304 39.3798V42.6456Z'
				{...{
					className: svgElementClassName,
				}}
				fillRule='evenodd'
				clipRule='evenodd'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	</div>
);

export const ProfileIcon = ({
	svgElementClassName,
	applyToSvgEl = false,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			viewBox='0 0 24 24'
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			xmlns='http://www.w3.org/2000/svg'>
			<circle
				cx='12.0788'
				cy='7.27803'
				r='4.77803'
				{...{
					className: svgElementClassName,
				}}
				fillRule='evenodd'
				clipRule='evenodd'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>

			<path
				d='M4.50002 18.7014C4.49873 18.3655 4.57385 18.0338 4.7197 17.7312C5.17736 16.8158 6.46798 16.3307 7.53892 16.111C8.31128 15.9462 9.09431 15.8361 9.88217 15.7815C11.3408 15.6534 12.8079 15.6534 14.2666 15.7815C15.0544 15.8367 15.8374 15.9468 16.6099 16.111C17.6808 16.3307 18.9714 16.7701 19.4291 17.7312C19.7224 18.348 19.7224 19.064 19.4291 19.6808C18.9714 20.6419 17.6808 21.0813 16.6099 21.2918C15.8384 21.4635 15.0551 21.5767 14.2666 21.6305C13.0794 21.7311 11.8866 21.7495 10.6968 21.6854C10.4222 21.6854 10.1568 21.6854 9.88217 21.6305C9.09663 21.5773 8.31632 21.4641 7.54807 21.2918C6.46798 21.0813 5.18652 20.6419 4.7197 19.6808C4.5746 19.3747 4.49955 19.0402 4.50002 18.7014Z'
				{...{
					className: svgElementClassName,
				}}
				fillRule='evenodd'
				clipRule='evenodd'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	</div>
);

export const CameraIcon = ({
	svgElementClassName,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			width='52'
			height='52'
			viewBox='0 0 52 52'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g filter='url(#filter0_dd_1260_23741)'>
				<rect x='11' y='8' width='30' height='30' rx='4' fill='white' />
				<path
					d='M28.2918 15.6666H23.7085L21.4168 18.4166H18.6668C18.1806 18.4166 17.7143 18.6098 17.3705 18.9536C17.0267 19.2974 16.8335 19.7637 16.8335 20.25V28.5C16.8335 28.9862 17.0267 29.4525 17.3705 29.7963C17.7143 30.1401 18.1806 30.3333 18.6668 30.3333H33.3335C33.8197 30.3333 34.286 30.1401 34.6299 29.7963C34.9737 29.4525 35.1668 28.9862 35.1668 28.5V20.25C35.1668 19.7637 34.9737 19.2974 34.6299 18.9536C34.286 18.6098 33.8197 18.4166 33.3335 18.4166H30.5835L28.2918 15.6666Z'
					{...{
						className: svgElementClassName,
					}}
					fillRule='evenodd'
					clipRule='evenodd'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M26 26.6666C27.5188 26.6666 28.75 25.4354 28.75 23.9166C28.75 22.3978 27.5188 21.1666 26 21.1666C24.4812 21.1666 23.25 22.3978 23.25 23.9166C23.25 25.4354 24.4812 26.6666 26 26.6666Z'
					stroke='#4B5563'
					fillRule='evenodd'
					clipRule='evenodd'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<filter
					id='filter0_dd_1260_23741'
					x='0'
					y='0'
					width='52'
					height='52'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feMorphology
						radius='1'
						operator='erode'
						in='SourceAlpha'
						result='effect1_dropShadow_1260_23741'
					/>
					<feOffset dy='2' />
					<feGaussianBlur stdDeviation='2' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.101961 0 0 0 0 0.219608 0 0 0 0 0.376471 0 0 0 0.1 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_1260_23741'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feMorphology
						radius='1'
						operator='erode'
						in='SourceAlpha'
						result='effect2_dropShadow_1260_23741'
					/>
					<feOffset dy='3' />
					<feGaussianBlur stdDeviation='6' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.109804 0 0 0 0 0.215686 0 0 0 0 0.352941 0 0 0 0.16 0'
					/>
					<feBlend
						mode='normal'
						in2='effect1_dropShadow_1260_23741'
						result='effect2_dropShadow_1260_23741'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect2_dropShadow_1260_23741'
						result='shape'
					/>
				</filter>
			</defs>
		</svg>
	</div>
);

export const DropFileIcon = ({
	svgElementClassName,
	applyToSvgEl = false,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			viewBox='0 0 24 24'
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M13.2441 6.13013L12.4121 5.39132V6.504V14.496C12.4121 14.7239 12.2279 14.908 12.0001 14.908C11.7895 14.908 11.6121 14.7415 11.6121 14.496V6.504V5.39717L10.7815 6.12882L7.75754 8.79282L7.75215 8.79757L7.7469 8.80247C7.58699 8.95173 7.34757 8.92773 7.22811 8.78071L7.21729 8.76739L7.20559 8.75484C7.0632 8.60228 7.06886 8.35118 7.24131 8.20029L7.24132 8.2003L7.24399 8.19793L11.732 4.21392L11.7321 4.21401L11.7403 4.20639C11.8564 4.0986 12.0309 4.06927 12.1911 4.14557L12.2681 4.21392L16.7561 8.19793L16.7561 8.19794L16.7588 8.20029C16.9325 8.35224 16.9405 8.6126 16.807 8.76765C16.656 8.93922 16.4055 8.94462 16.2532 8.80248L16.2533 8.80236L16.2441 8.79413L13.2441 6.13013ZM5.30806 18.192V18.692H5.80806H18.1921H18.6921V18.192V16.896C18.6921 16.6854 18.8586 16.508 19.1041 16.508C19.3319 16.508 19.4921 16.6682 19.4921 16.896V19.104C19.4921 19.3167 19.3231 19.492 19.1041 19.492H4.89606C4.6922 19.492 4.50806 19.3079 4.50806 19.104V16.896C4.50806 16.6769 4.68335 16.508 4.89606 16.508C5.14153 16.508 5.30806 16.6854 5.30806 16.896V18.192Z'
				{...{
					className: svgElementClassName,
				}}
				fillRule='evenodd'
				clipRule='evenodd'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12.9121 6.504V14.496C12.9121 15 12.5041 15.408 12.0001 15.408C11.4961 15.408 11.1121 15 11.1121 14.496V6.504L8.08806 9.168C7.72806 9.504 7.15206 9.48 6.84006 9.096C6.50406 8.736 6.52806 8.16 6.91206 7.824L11.4001 3.84C11.7361 3.528 12.2401 3.528 12.6001 3.816C12.6001 3.84 12.6001 3.84 12.6001 3.84L17.0881 7.824C17.4721 8.16 17.4961 8.736 17.1841 9.096C16.8481 9.48 16.2721 9.504 15.9121 9.168L12.9121 6.504ZM18.1921 16.896C18.1921 16.392 18.6001 16.008 19.1041 16.008C19.6081 16.008 19.9921 16.392 19.9921 16.896V19.104C19.9921 19.584 19.6081 19.992 19.1041 19.992H4.89606C4.41606 19.992 4.00806 19.584 4.00806 19.104V16.896C4.00806 16.392 4.41606 16.008 4.89606 16.008C5.40006 16.008 5.80806 16.392 5.80806 16.896V18.192H18.1921V16.896Z'
				{...{
					className: svgElementClassName,
				}}
				fillRule='evenodd'
				clipRule='evenodd'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	</div>
);

export const MessageIcon = ({
	svgElementClassName,
	applyToSvgEl,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			style: styles,
			className,
		}}>
		<svg
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			{...(applyToSvgEl
				? {
						className: svgElementClassName,
				  }
				: {
						className: 'fill-none',
				  })}
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M18.75 0.5H2.25003C1.8522 0.5 1.47067 0.658035 1.18937 0.93934C0.908061 1.22064 0.750026 1.60218 0.750026 2V17C0.748331 17.2859 0.829157 17.5662 0.982808 17.8074C1.13646 18.0485 1.35641 18.2401 1.61628 18.3594C1.81486 18.4516 2.03109 18.4996 2.25003 18.5C2.60215 18.4992 2.9426 18.3736 3.21096 18.1456C3.21544 18.1427 3.21953 18.1392 3.22315 18.1353L6.2344 15.5H18.75C19.1479 15.5 19.5294 15.342 19.8107 15.0607C20.092 14.7794 20.25 14.3978 20.25 14V2C20.25 1.60218 20.092 1.22064 19.8107 0.93934C19.5294 0.658035 19.1479 0.5 18.75 0.5ZM18.75 14H6.2344C5.88117 13.9998 5.53922 14.1243 5.26878 14.3516L5.25753 14.3619L2.25003 17V2H18.75V14ZM6.75003 6.5C6.75003 6.30109 6.82904 6.11032 6.9697 5.96967C7.11035 5.82902 7.30111 5.75 7.50003 5.75H13.5C13.6989 5.75 13.8897 5.82902 14.0304 5.96967C14.171 6.11032 14.25 6.30109 14.25 6.5C14.25 6.69891 14.171 6.88968 14.0304 7.03033C13.8897 7.17098 13.6989 7.25 13.5 7.25H7.50003C7.30111 7.25 7.11035 7.17098 6.9697 7.03033C6.82904 6.88968 6.75003 6.69891 6.75003 6.5ZM6.75003 9.5C6.75003 9.30109 6.82904 9.11032 6.9697 8.96967C7.11035 8.82902 7.30111 8.75 7.50003 8.75H13.5C13.6989 8.75 13.8897 8.82902 14.0304 8.96967C14.171 9.11032 14.25 9.30109 14.25 9.5C14.25 9.69891 14.171 9.88968 14.0304 10.0303C13.8897 10.171 13.6989 10.25 13.5 10.25H7.50003C7.30111 10.25 7.11035 10.171 6.9697 10.0303C6.82904 9.88968 6.75003 9.69891 6.75003 9.5Z'
				{...{
					className: svgElementClassName,
				}}
				strokeLinecap='round'
				strokeLinejoin='round'
				clipRule='evenodd'
				fillRule='evenodd'
			/>
		</svg>
	</div>
);
