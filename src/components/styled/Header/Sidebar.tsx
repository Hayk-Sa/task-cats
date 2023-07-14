import styled, { css } from "styled-components";

interface SidebarProps {
	isShown: boolean;
}

const Sidebar = styled.div<SidebarProps>`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 276px;
	height: 100%;
	flex-direction: column;
	padding: 66px 20px;
	background: #2c2c2c;
	color: #fff;
	transition: transform 0.25s ease;
	will-change: transform;
	transform: translateX(-100%);
	overflow-y: auto;
	z-index: 6;
	${(props) =>
		props.isShown
			? css`
					transform: translateX(0);
					box-shadow: -0.125rem 0 1.25rem 0 #343851;
			  `
			: ``};
`;

export default Sidebar;
