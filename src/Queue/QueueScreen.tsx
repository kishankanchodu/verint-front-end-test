import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import styled from "styled-components";
import { fetchQueueData } from "../mockApi";
import { QueueDataResponse } from "../types/queueData";
import { throttle } from "../utils";
import Customer from "./components/Customer";
import { RefreshButton } from "./components/RefreshButton";
import { SearchInput } from "./components/SearchInput";

const Container = styled.div`
	max-width: 600px;
	margin: 30px auto;
	padding: 16px;
	font-family: "Ubuntu", sans-serif;
`;

const ControlsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 16px; // Adds space between search and button horizontally
	margin-bottom: 24px; // Adds space below the controls before the list
`;

const CardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px; /* space between cards horizontally and vertically */
	justify-content: center;
	margin-top: 16px;
`;

const THROTTLE_TIME = 30000;

export default function QueueScreen() {
	const [customers, setCustomers] = useState<
		QueueDataResponse["queueData"]["queue"]["customersToday"]
	>([]);
	const [search, setSearch] = useState("");
	const [canRefresh, setCanRefresh] = useState(true);
	const [cooldown, setCooldown] = useState(0);
	const cooldownRef = useRef<NodeJS.Timeout | undefined>(undefined);

	const fetchCustomers = useCallback(() => {
		fetchQueueData()
			.then((response) => response.json())
			.then((json) => {
				setCustomers(json.queueData.queue.customersToday);
			});
	}, []);

	useEffect(() => {
		fetchCustomers();
		const interval = setInterval(fetchCustomers, THROTTLE_TIME);
		return () => clearInterval(interval);
	}, [fetchCustomers]);

	useEffect(() => {
		if (!canRefresh) {
			cooldownRef.current = setInterval(() => {
				setCooldown((prev) => {
					if (prev <= 1) {
						clearInterval(cooldownRef.current);
						setCanRefresh(true);
						return 0;
					}
					return prev - 1;
				});
			}, 1000);
		}
		return () => clearInterval(cooldownRef.current);
	}, [canRefresh]);

	const throttledRefresh = useCallback(
		() =>
			throttle(() => {
				fetchCustomers();
				setCanRefresh(false);
				setCooldown(THROTTLE_TIME / 1000);
			}, THROTTLE_TIME)(),
		[fetchCustomers]
	);

	const filteredCustomers = useMemo(() => {
		const filterLower = search.toLowerCase();
		return customers.filter(({ customer }) =>
			customer.name.toLowerCase().includes(filterLower)
		);
	}, [customers, search]);

	return (
		<Container>
			<ControlsWrapper>
				<SearchInput
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search customers..."
				/>

				<RefreshButton
					data-testid="refresh_button"
					onClick={throttledRefresh}
					disabled={!canRefresh}
					title={
						canRefresh
							? "Refresh Now"
							: `Please wait ${cooldown}s to refresh`
					}
				>
					{canRefresh ? "Refresh" : `Refresh in ${cooldown}s`}
				</RefreshButton>
			</ControlsWrapper>

			{filteredCustomers.length === 0 ? (
				<p>No customers found.</p>
			) : (
				<CardsContainer>
					{filteredCustomers.map(({ customer, expectedTime }) => (
						<Customer
							key={customer.id}
							name={customer.name}
							emailAddress={customer.emailAddress}
							expectedTime={expectedTime}
						/>
					))}
				</CardsContainer>
			)}
		</Container>
	);
}
