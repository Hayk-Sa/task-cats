import styled from "styled-components";

export const GalleryWrapper = styled.section`
	height: 100vh;
	overflow: auto;
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

	&&& img {
		width: 100%;
		box-shadow: var(--shadow);
	}
`;
