import React, { useMemo } from "react";
import styled from "styled-components";
import { QueueData } from "../../types/queueData";
import { getFormattedTime, getGravatarUrl } from "../../utils";
import Content from "./Content";
import CustomerCard from "./CustomerCard";
import Name from "./Name";
import ProfilePicture, { PROFILE_SIZE } from "./ProfilePicture";

const ExpectedTime = styled.div`
	margin-top: 0.8em;
	font-size: 14px;
	font-weight: 600;
	color: #0078d4; /* blue tone */
	letter-spacing: 0.03em;
`;

const StyledImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-top-left-radius: 0.2em;
	border-top-right-radius: 0.2em;
	box-shadow: 0 2px 8px rgb(0 0 0 / 0.15);
	transition: transform 0.3s ease;

	${CustomerCard}:hover & {
		transform: scale(1.05);
	}
`;

interface CustomerProps {
	name: QueueData["queue"]["customersToday"][number]["customer"]["name"];
	emailAddress: QueueData["queue"]["customersToday"][number]["customer"]["emailAddress"];
	expectedTime: QueueData["queue"]["customersToday"][number]["expectedTime"];
}

const Customer = React.memo(
	({ name, emailAddress, expectedTime }: CustomerProps) => {
		const gravatarUrl = useMemo(
			() => getGravatarUrl(emailAddress, PROFILE_SIZE.width),
			[emailAddress]
		);

		return (
			<CustomerCard>
				<ProfilePicture>
					{gravatarUrl ? (
						<StyledImg src={gravatarUrl} alt={`${name} avatar`} />
					) : null}
				</ProfilePicture>
				<Content>
					<Name>{name}</Name>
					<ExpectedTime>
						Expected Time: {getFormattedTime(expectedTime)}
					</ExpectedTime>
				</Content>
			</CustomerCard>
		);
	}
);

export default Customer;
