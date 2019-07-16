function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

class DigitGenerator extends React.Component {
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
                <h1>I've picked number: {num}</h1>
                <p>{num === 7 ? 'Gratulacje' : 'Spróbuj znów' }</p>
				{msg}
				{
					num === 7
						? <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp"/>
						: null
				}
            </div>
        );
    }
}
