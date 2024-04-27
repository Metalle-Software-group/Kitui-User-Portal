import parse from 'html-react-parser';

const RichTexEditor = ({ value }: { value: string }) => {
	const parsedData = parse(value);

	return (
		<div className='w-full h-fit prose lg:prose-xl text-bodyText'>
			{parsedData}
		</div>
	);
};
export default RichTexEditor;
