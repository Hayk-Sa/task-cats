import React from "react";
import styled from "styled-components";

const Empty = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const EmptyPage = () => {
	return (
		<Empty>
			<h1>Please Select Category</h1>
		</Empty>
	);
};

export default EmptyPage;
