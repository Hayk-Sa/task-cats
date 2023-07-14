import { useState, FC, useEffect } from "react";
import Container from "./components/styled/Container";
import Header from "./components/styled/Header/Header";
import Overlay from "./components/Overlay";
import { GalleryWrapper } from "./components/styled/GalleryWrapper";
import Router from "./Routes";
import Fetcher from "./features/counter/Fetcher";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "./app/hooks";
import { setLimit, setPage } from "./features/counter/counterSlice";

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 10px;
	width: 100%;

	&&& button {
		padding: 8px 15px;
	}
`;

const App: FC = () => {
	const [isShown, setIsShown] = useState(false);
	const navigate = useNavigate();
	const match = useMatch("/");
	const dispatch = useAppDispatch();
	const [currentLimit, setCurrentLimit] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		navigate("/");
	}, []);

	const updateBodyStyles = (): void => {
		if (isShown) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}
	};

	const toggle = () => {
		setIsShown(!isShown);
		updateBodyStyles();
	};
	return (
		<div>
			<Fetcher>
				<Header clickHandle={toggle} isShown={isShown} />
				<Container>
					<div style={{ paddingTop: 74 }}>
						<GalleryWrapper>
							<Router />
						</GalleryWrapper>
						<ButtonWrapper>
							{!match && (
								<button
									onClick={() => {
										setCurrentLimit((prev) => prev + 10);
										setCurrentPage((prev) => prev + 1);
										dispatch(setLimit(String(currentLimit)));
										dispatch(setPage(String(currentPage)));
									}}
								>
									Load More
								</button>
							)}
						</ButtonWrapper>
					</div>
				</Container>
				<Overlay clickHandle={toggle} isShown={isShown} />
			</Fetcher>
		</div>
	);
};

export default App;
