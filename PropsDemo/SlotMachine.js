class SlotMachine extends React.Component {
    render() {
        const {slot1, slot2, slot3} = this.props;
        const winner = slot1 === slot2 && slot2 === slot3;

        return (
            <div>
                <p style={{backgroundColor: "grey", fontSize: "20px"}}>GAME</p>
                <p className="SlotMachine">{slot1} {slot2} {slot3}</p>
                <p className={winner ? 'win' : 'lose'}>
                    {winner ? 'Winner' : 'Loser'}
                </p>
            </div>
        );
    }
}