class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machine</h1>
                <SlotMachine 
                    slot1="x"
                    slot2="y"
                    slot3="z"
                />
                <SlotMachine 
                    slot1="x"
                    slot2="x"
                    slot3="z"
                />
                <SlotMachine 
                    slot1="x"
                    slot2="x"
                    slot3="x"
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))