import React, {Component} from 'react';
import foods from './foods';
import {choice, remove} from './helpers';
import './FruitPicker.css';

let fruit = choice(foods);
let upFruits = remove(foods, fruit);

class FruitPicker extends Component {
    render() {
        return(
            <div className="FruitPicker">
                <h2 className="FruitPicker-title">Small app with randomly picked fruits</h2>
                <p>I'd like one {fruit}, please</p>
                <p>Here you go: {fruit}</p>
                <p>Delicious! May I have another?</p>
                <p>I'm sorry, we're all out. We have {upFruits.length} left.</p>
            </div>
        );
    }
}

export default FruitPicker;

// ` - it's called backquote/backtick
// console.log(`I'd like one ${fruit}, please`);
// console.log(`Here you go: ${fruit}`);
// let upFruits = remove(foods, fruit);
// console.log(`Delicious! May I have another?`);
// console.log(`I'm sorry, we're all out. We have ${upFruits.length} left.`);