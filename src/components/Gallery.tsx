import { useAppSelector } from "../app/hooks";
import { selectImages } from "../features/counter/counterSlice";

const Gallery = () => {
	const images = useAppSelector(selectImages);

	return (
		<>
			{images?.map(({ url, id }, idx) => (
				<img src={url} key={idx} alt={id} />
			))}
		</>
	);
};

export default Gallery;
