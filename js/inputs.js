export const SwitchCheckbox = () => {
	const checkboxes = document.querySelectorAll(".switch-checkbox");
	checkboxes.forEach((checkbox) => {
		if (checkbox) {
			const input = checkbox.querySelector("input");

			const switchCheckox = () => {
				if (input.checked) {
					checkbox.classList.add("checked");
				} else {
					checkbox.classList.remove("checked");
				}
			};

			input.addEventListener("change", switchCheckox);
			switchCheckox();
		}
	});
};
