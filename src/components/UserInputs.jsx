export default function UserInputs({ children }) {
	return (
		<section className="userInputs">
			{ children }
		</section>
	);
}

export function UserInputText({ inputVal, onChange, isLimit, totalChars, maxChars }) {
	const charLimitExceeded = isLimit && totalChars > maxChars;
	return (
		<>
			<label htmlFor="user-input-text" className="sr-only">Input your text here:</label>
			<textarea
				id="user-input-text"
				className={`userInputs__text text-3 ${charLimitExceeded && "limitExceeded"}`}
				placeholder="Start typing here...(or paste your text)" value={inputVal} onChange={onChange}>
			</textarea>
			<ErrorMessage charLimExc={charLimitExceeded} maxChars={maxChars}/>
		</>
	)
}

function ErrorMessage({ charLimExc, maxChars }) {
	return (
		<>
			{
				charLimExc &&
				<p className="text-4 userInputs__errorMessage">
					<i className="fa-solid fa-circle-info icon"></i>
					Limit reached! Your text exceeds {maxChars} characters
				</p>
			}
		</>
	);
}

export function CheckboxFeature({id, children, value, onChange}) {
	return (
		<label className="userInputs__checkbox-label">
			<input id={id} type="checkbox" checked={value} onChange={onChange}/>
			<span className="userInput__custom-checkbox"></span>
			<span className="text-4">{children}</span>
		</label>
	);
}

export function FeatureInputs({ children }) {
	return (
		<div className="userInputs__features">
			<div className="checkboxes">
				{ children }
			</div>
			<aside>
				<p className="text-4">Approx.reading time: {"<"}{2} minute</p>
			</aside>
		</div>
	)
}

export function InputCharLimit({ isLimit, maxChars, onMaxChars }) {
	return (
		<>
			{isLimit &&
				<input type="number" className="text-4 userInputs__maxVal" value={maxChars} onChange={onMaxChars}/>}
		</>
	)
}