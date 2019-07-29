class Hello extends React.Component {
    render() {
        const dots = ".".repeat(this.props.dot);
        console.log(this.props);
        return (
            <div>
                <p>Hi {this.props.to} from {this.props.from}. Dots: {dots}</p>
                <img src={this.props.img} />
            </div>
        );
    }
}