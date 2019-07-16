function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

function getMood() {
	const moods = [ 'Angry', 'Hungry', 'Silly', 'Quiet', 'Happy' ];
	return moods[Math.floor(Math.random() * moods.length)];
}

class Hello extends React.Component {
	render() {
		const num = getNum();
		let msg;
		if (num === 7) {
			msg = <h2>YES! You get number 7. GIF should show up</h2>
		} else {
			msg = <h2>Sorry, You picked different number than 7. Try again</h2>
		}
		return (
			<div>
				<h1>Hello there!</h1>
				<h1>Tutaj, w nawiasach klamrowych uciekamy do JavaScript i możemy np, używać operatorów matematycznych, np: {2 * 3.3} </h1>
				<h1>Current mood is: {getMood()}</h1>
				<h1>I've picked number: {num}</h1>
				<p>{num === 7 ? 'Gratulacje' : 'Spróbuj znów' }</p>
				{msg}
				{/* <img src="https://i.imgur.com/sjpxtef.jpg" /> */}
				{
					num === 7
						? <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp"/>
						: null
						// : <img src="https://giphy.com/gifs/sad-baby-upset-9Y5BbDSkSTiY8"/>
				}
				<img src="przerazacze.jpg"/>
			</div>
		);
	}
}