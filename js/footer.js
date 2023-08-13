const Footer = () => {
	const main = document.querySelector("main");
	const footer = document.querySelector("footer");
	if (footer) {
		main.style.paddingBottom = `${footer.clientHeight}px`;
	}
};

export default Footer;
