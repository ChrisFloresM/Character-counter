const wpmAverage = 250;
export default function UserInputs(
	{ inputVal,
		onChange,
		excludeSpaces,
		onExclude,
		isLimit,
		onLimit,
		maxChars,
		onMaxChars,
	}) {

	const charLimitExceeded = isLimit && inputVal.length > maxChars;
	const readingTime = Math.floor(inputVal.length / 250);

	return (
		<section className="userInputs">
			<textarea className={`userInputs__text text-3 ${charLimitExceeded && "limitExceeded"}`} placeholder="Start typing here...(or paste your text)" value={inputVal} onChange={onChange}></textarea>
			{
				charLimitExceeded &&
				<p className="text-4 userInpus__errorMessage">
					<i className="fa-solid fa-circle-info icon"></i>
					Limit reached! Your text exceeds {maxChars} characters
				</p>
			}
			<div className="userInputs__features">
				<div className="checkboxes">
					<CheckboxFeature value={excludeSpaces} onChange={onExclude}>Exclude spaces</CheckboxFeature>
					<CheckboxFeature value={isLimit} onChange={onLimit}>Set Character Limit</CheckboxFeature>
					{isLimit &&
						<input type="number" className="text-4 userInputs__maxVal" value={maxChars} onChange={onMaxChars}/>}
				</div>
				<p className="text-4">Approx.reading time: {"<"}{readingTime} minute</p>
			</div>
		</section>
	)
}

function CheckboxFeature({children, value, onChange}) {
	return (
		<label className="userInputs__checkbox-label">
			<input type="checkbox" value={value} onChange={onChange}/>
			<span className="userInput__custon-checkbox"></span>
			<span className="text-4">{children}</span>
		</label>
	);
}