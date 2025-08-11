import {useEffect, useState} from "react";

const logoSrc = {
	"dark": "./src/assets/logo-dark-theme.svg",
	"light": "./src/assets/logo-light-theme.svg",
}

const iconSrc = {
	"dark": "./src/assets/icon-sun.svg",
	"light": "./src/assets/icon-moon.svg",
}

export default function Header() {
	const [currentTheme, setCurrentTheme] = useState(() => {
		return getFromLocalStorage('theme') || 'dark';
	});

	function toggleTheme() {
		setCurrentTheme(currentTheme => currentTheme === 'dark' ? 'light' : 'dark');
	}

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", currentTheme);
		localStorage.setItem("theme", currentTheme);
	}, [currentTheme]);

	return <header className="app-header">
		<img className="app-header__logo" src={logoSrc[currentTheme]} alt="Application logo - Character counter"/>
		<button className="app-header__theme-button" onClick={toggleTheme} aria-label={`Change to theme ${currentTheme === 'dark' ? 'light' : 'dark'}`}>
			<img className="app-header__theme-icon" src={iconSrc[currentTheme]} alt={`Icon with a ${currentTheme === 'dark' ? 'sun' : 'moon'} representing target theme to change`}/>
		</button>
	</header>
}

function getFromLocalStorage(key) {
	try {
		return localStorage.getItem(key);
	} catch (e) {
		console.error(`Error searching from local storage: ${key}`);
		return null;
	}
}
