class Hello extends React.Component {
	static defaultProps = {
		to: 'Anyone',
		from: 'Anybody'
	}
	render() {
		return (
			<div>
				<h1>Hello {this.props.to} from {this.props.from}</h1>
				<p>Tutaj, w nawiasach klamrowych uciekamy do JavaScript i możemy np, używać operatorów matematycznych, np: {2 * 3.3} </p>
			</div>
		);
	}
}