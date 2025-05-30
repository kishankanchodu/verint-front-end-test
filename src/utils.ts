import sha256 from "crypto-js/sha256";

export const getGravatarUrl = (email: string | null, size = 80) => {
	if (!email) return undefined;

	const trimmedEmail = email.trim().toLowerCase();
	const hashDigest = sha256(trimmedEmail);
	return `https://www.gravatar.com/avatar/${hashDigest}?s=${size}&d=identicon`;
};

export const getFormattedTime = (time: string) =>
	new Date(time).toLocaleString(undefined, {
		dateStyle: "short",
		timeStyle: "short",
	});

export function throttle(fn: Function, delay: number) {
	let lastCall = 0;

	return function (...args: any) {
		const now = Date.now();

		if (now - lastCall >= delay) {
			lastCall = now;
			fn(...args);
		}
	};
}
