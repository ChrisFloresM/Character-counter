import UserInputs, {FeatureInputs, UserInputText, CheckboxFeature, InputCharLimit} from "./UserInputs.jsx";
import Results, {ResultCards, ResultStats} from "./Results.jsx";
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

	const totalChars = excludeSpaces ? userInput.replaceAll(" ", "").length : userInput.length;

	return (
		<main className="mainApp">
			<h1 className="text-1 color-primary mainApp__heading">Analyze your text in real-time.</h1>
			<UserInputs>
				<UserInputText inputVal={userInput} onChange={handleChange} isLimit={isLimit} totalChars={totalChars} maxChars={maxChars} />
				<FeatureInputs totalChars={userInput}>
					<CheckboxFeature value={excludeSpaces} onChange={handleExcludeSpaces}>Exclude spaces</CheckboxFeature>
					<CheckboxFeature value={isLimit} onChange={handleIsLimit}>Set Character Limit</CheckboxFeature>
					<InputCharLimit isLimit={isLimit} maxChars={maxChars} onMaxChars={handleMaxChars} />
				</FeatureInputs>
			</UserInputs>
			<Results>
				<ResultCards inputVal={userInput} excludeSpaces={excludeSpaces} totalChars={totalChars} />
				<ResultStats inputVal={userInput} />
			</Results>
		</main>
	);
}
