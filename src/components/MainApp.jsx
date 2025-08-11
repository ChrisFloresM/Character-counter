import UserInputs from "./UserInputs.jsx";
import Results from "./Results.jsx";
import {useState} from "react";

export default function MainApp() {
	const [userInput, setUserInput] = useState("");
	const [excludeSpaces, setExcludeSpaces] = useState(false);
	const [isLimit, setIsLimit] = useState(false);
	const [maxChars, setMaxChars] = useState(500);

	function handleChange(e) {
		setUserInput(e.target.value);
	}

	function handleExcludeSpaces(e) {
		setExcludeSpaces(e.target.checked);
	}

	function handleIsLimit(e) {
		setIsLimit(e.target.checked);
	}

	function handleMaxChars(e) {
		const value = Number(e.target.value);
		setMaxChars(isNaN(value) ? 500 : value);
	}

	return (
		<main className="mainApp">
			<h1 className="text-1 color-primary mainApp__heading">Analyze your text in real-time.</h1>
			<UserInputs
				inputVal={userInput}
				onChange={handleChange}
				excludeSpaces={excludeSpaces}
				onExclude={handleExcludeSpaces}
				isLimit={isLimit}
				onLimit={handleIsLimit}
				maxChars={maxChars}
				onMaxChars={handleMaxChars}
			/>
			<Results inputVal={userInput} excludeSpaces={excludeSpaces}/>
		</main>
	);
}
