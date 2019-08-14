import React, {Component} from 'react';
import FruitPicker from './FruitPicker';
import ShowPicture from './ShowPicture';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="App-title">Adding style in components</h1>
                <FruitPicker />
                <ShowPicture />
            </div>
        );
    }
}

export default App;