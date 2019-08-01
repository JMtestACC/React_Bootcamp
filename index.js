class App extends React.Component {
	render() {
		return (
			<div>
				<Hello 
					to = 'You'
					from = 'Me'
				/>
				<Hello 
					to = 'All'
				/>
				<MoodGenerator />
				<DigitGenerator />
				<ShowImage />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
