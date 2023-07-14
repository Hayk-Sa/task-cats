import styled from "styled-components";

export const NavToggle = styled.button`
	padding: 0;
	background: transparent;
	border: 0;
	border-radius: 3px;
	outline: 0;
	cursor: pointer;
`;

export const NavClose = styled(NavToggle)`
	position: absolute;
	top: 16px;
	left: 16px;
`;
