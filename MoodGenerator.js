function getMood() {
	const moods = [ 'Angry', 'Hungry', 'Silly', 'Quiet', 'Happy' ];
	return moods[Math.floor(Math.random() * moods.length)];
}

class MoodGenerator extends React.Component {
    render() {
        return (
            <div>
                <h1>Current mood is: {getMood()}</h1>
            </div>
        );
    }
}