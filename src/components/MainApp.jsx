

export default function MainApp() {
	return (
		<main className="mainApp">
			<h1 className="text-1 color-primary mainApp__heading">Analyze your text in real-time.</h1>
			<UserInputs />
			<Results />
		</main>
	);
}

function UserInputs() {
	return (
		<section className="userInputs">
			<textarea className="userInputs__text text-3"></textarea>
			<div className="userInputs__features">
				<CheckboxFeature>Exclude spaces</CheckboxFeature>
				<CheckboxFeature>Set Character Limit</CheckboxFeature>
				<p className="text-4">Approx.reading time: {"<"}1 minute</p>
			</div>
		</section>
	)
}

function CheckboxFeature({ children }) {
	return (
		<label className="userInputs__checkbox-label">
			<input type="checkbox"/>
			<span className="userInput__custon-checkbox"></span>
			<span className="text-4">{children}</span>
		</label>
	);
}

function Results() {
	return (
		<section className="results">
			<section className="results__cards">
				<ResultCard number={278} name="Total Characters" className={"total-characters"}/>
				<ResultCard number={39} name="Word Count" className={"word-count"}/>
				<ResultCard number={4} name="Sentence Count" className={"sentence-count"}/>
			</section>
			<section className="results__stats">
				<h2 className="text-2">Letter Density</h2>
				<div className="stats-box">
					<Stat letter="E" total={40} grandTotal={100} />
					<Stat letter="E" total={29} grandTotal={100} />
					<Stat letter="E" total={28} grandTotal={100} />
					<Stat letter="E" total={22} grandTotal={100} />
					<Stat letter="E" total={21} grandTotal={100} />
				</div>
				<button className="text-3 result__stats-see-more-btn">See more &darr;</button>
			</section>
		</section>
	)
}

function ResultCard({ number, name, className }) {
	return (
		<div className={`result-card ${className}`}>
			<p className="result-card__number text-1">{number}</p>
			<p className="result-card__name text-3">{name}</p>
		</div>
	)
}

function Stat({ letter, total, grandTotal }) {
	const percentage = (total / grandTotal * 100).toFixed(2);

	const style = {
		width: `${percentage}%`
	}

	return (
		<div className="letter-stat">
			<span className="text-4">{letter}</span>
			<div className="letter-stat__percentage-bar">
				<div style={style} className="letter-stat__percentage"></div>
			</div>
			<span className="text-4 letter-stat__number">{total + ` (${percentage}%)`}</span>
		</div>
	);
}