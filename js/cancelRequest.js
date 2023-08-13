const cancelRequest = () => {
	const button = document.querySelector("#cancel-request");
	if (button) {
		const requestScreen = document.querySelector("#request-screen");
		const cancelRequestScreen = document.querySelector("#cancel-request-screen");

		button.addEventListener("click", () => {
			requestScreen.classList.add("hidden");
			cancelRequestScreen.classList.remove("hidden");
		});
	}
};

export default cancelRequest;
