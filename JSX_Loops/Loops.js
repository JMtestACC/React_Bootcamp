class Loops extends React.Component {
    render() {
        const {movie, data} = this.props;
        return (
            <div>
                <h2>{movie}</h2>
                <ul>
                    {data.map(d => <li>{d}</li>)}
                </ul>
            </div>
        );
    }
}