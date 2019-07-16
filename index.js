class App extends React.Component {
	render() {
		return (
			<div>
				<Hello />
				<MoodGenerator />
				<DigitGenerator />
				<ShowImage />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
