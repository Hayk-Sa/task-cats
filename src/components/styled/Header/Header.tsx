import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import {
	selectCategories,
	setCurrentCategory,
} from "../../../features/counter/counterSlice";

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
	align-items: self-end;
	background-color: #333;
	width: 100%;
	height: 50px;
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
	const dispatch = useAppDispatch();

	return (
		<NavInner>
			<Sidebar isShown={true}>
				<NavLink to="">Home</NavLink>
				{categories?.map((item) => (
					<NavLink
						onClick={() => {
							dispatch(setCurrentCategory(String(item.id)));
						}}
						key={item.id}
						to={String(item.id)}
					>
						{item.name}
					</NavLink>
				))}
			</Sidebar>
		</NavInner>
	);
};

export default Header;
