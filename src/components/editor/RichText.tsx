import parse from 'html-react-parser';

const RichTexEditor = ({ value }: { value: string }) => {
	const parsedData = parse(value);
	console.log(parsedData, 'Morph');

	return (
		<div className='w-full h-fit prose lg:prose-xl text-bodyText'>
			{parsedData}
		</div>
	);
};
export default RichTexEditor;
