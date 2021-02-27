import React, { Component } from 'react';

export default class Coin extends Component{
    render() {
        return (
            <div>
                <img className="Coin" src={this.props.info.imgSrc} alt={this.props.info.alt} />
            </div>
        )
    }
}


