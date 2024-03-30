import ReactHtmlParser from 'react-html-parser';

const RichTexEditor = ({ value }: { value: string }) => {
	const parsedData = ReactHtmlParser(value);
	return <div className='w-full h-fit prose lg:prose-xl'>{parsedData}</div>;
};
export default RichTexEditor;
