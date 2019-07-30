class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Loops</h1>
                <Loops 
                    movie = "Seven"
                    data = {["USA", "1997", "Thriller"]}
                />
                <Loops 
                    movie = "Titanic"
                    data = {["USA", "1997", "Drama"]}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))