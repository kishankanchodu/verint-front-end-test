import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as mockApi from "../mockApi";
import * as utils from "../utils";
import QueueScreen from "./QueueScreen";

describe("CustomerList Component", () => {
	beforeEach(() => {
		jest.useFakeTimers();
		jest.spyOn(utils, "throttle").mockImplementation((fn) => () => fn());
		jest.spyOn(mockApi, "fetchQueueData").mockResolvedValue({
			json: async () => ({
				queueData: {
					queue: {
						customersToday: [
							{
								customer: {
									id: "1",
									name: "Alice",
									emailAddress: "alice@example.com",
								},
								expectedTime: new Date().toISOString(),
							},
							{
								customer: {
									id: "2",
									name: "Bob",
									emailAddress: "bob@example.com",
								},
								expectedTime: new Date().toISOString(),
							},
						],
					},
				},
			}),
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
		jest.useRealTimers();
	});

	it("renders customers from API", async () => {
		render(<QueueScreen />);
		await waitFor(() => {
			expect(screen.getByText(/Alice/i)).toBeInTheDocument();
			expect(screen.getByText(/Bob/i)).toBeInTheDocument();
		});
	});

	it("filters customers by name", async () => {
		render(<QueueScreen />);
		await waitFor(() => screen.getByText(/Alice/i));

		fireEvent.change(screen.getByPlaceholderText(/search customers/i), {
			target: { value: "Bob" },
		});

		expect(screen.queryByText(/Alice/i)).not.toBeInTheDocument();
		expect(screen.getByText(/Bob/i)).toBeInTheDocument();
	});

	it('displays "No customers found" on no search match', async () => {
		render(<QueueScreen />);
		await waitFor(() => screen.getByText(/Alice/i));

		fireEvent.change(screen.getByPlaceholderText(/search customers/i), {
			target: { value: "Zebra" },
		});

		expect(screen.getByText(/no customers found/i)).toBeInTheDocument();
	});

	it("disables refresh button initially and enables after cooldown", async () => {
		render(<QueueScreen />);
		const refreshButton = await screen.findByTestId("refresh_button");
		fireEvent.click(refreshButton);
		expect(refreshButton).toBeDisabled();

		jest.advanceTimersByTime(30000);

		await waitFor(() => {
			expect(refreshButton).toBeEnabled();
		});
	});

	it("calls fetchQueueData again on refresh click", async () => {
		render(<QueueScreen />);
		await waitFor(() => screen.getByText(/Alice/i));

		jest.advanceTimersByTime(30000); // cooldown

		const button = screen.getByRole("button", { name: /refresh/i });
		fireEvent.click(button);

		expect(mockApi.fetchQueueData).toHaveBeenCalledTimes(3);
	});
});
