import ReactHtmlParser from 'react-html-parser';

const RichTexEditor = ({ value }: { value: string }) => {
	const parsedData = ReactHtmlParser(value);
	return (
		<div className='w-full h-fit prose lg:prose-xl text-bodyText'>
			{parsedData}
		</div>
	);
};
export default RichTexEditor;
