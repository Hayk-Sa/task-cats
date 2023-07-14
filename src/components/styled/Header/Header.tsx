import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import {
	selectCategories,
	selectCurrentCategory,
} from "../../../features/counter/counterSlice";
import { useEffect } from "react";
interface HeaderProps {
	isShown: boolean;
	clickHandle?: () => void;
}

const NavInner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
`;

const NavLink = styled(Link)`
	width: 100%;
	margin-bottom: 16px;
	color: #fff;
	text-decoration: none;
`;

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

const Header = ({ isShown, clickHandle }: HeaderProps) => {
	const categories = useAppSelector(selectCategories);
	let currentCategoryId = useAppSelector(selectCurrentCategory);
	const dispatch = useAppDispatch();
	const categoriesNames = categories?.map((item) => {
		return <p>{item.name}</p>;
	});

	return (
		<NavInner>
			<Sidebar isShown={true}>
				<NavLink to="">Home</NavLink>
				<NavLink to="/category">{categoriesNames}</NavLink>
			</Sidebar>
		</NavInner>
	);
};

export default Header;
