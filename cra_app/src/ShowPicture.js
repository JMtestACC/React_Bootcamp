import React, {Component} from 'react';
import './ShowPicture.css';
import przerazacze from './przerazacze.jpg';

class ShowPicture extends Component {
    render() {
        return (
            <div className="ShowPicture">
                <h1 className="ShowPicture-title">Component dedicated only for showing a picture</h1>
                <img className="ShowPicture-picture-1" src={przerazacze}/>
            </div>
        );
    }
}

export default ShowPicture;