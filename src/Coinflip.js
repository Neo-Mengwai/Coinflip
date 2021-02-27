import React, { Component } from 'react';
import Coin from './Coin';



export default class Coinflip extends Component{
    static defaultProps = {
        sides : [
            {alt : "heads" , imgSrc : "https://tinyurl.com/react-coin-heads-jpg"},

            {alt : "tails" , imgSrc : "https://tinyurl.com/react-coin-tails-jpg"}
        ]
    }
        
    constructor(props){
        super(props);
        this.state = {
            numFlips : 0,
            headFlips : 0,
            tailFlips : 0,
            currentSide: null,
        }
        this.flip = this.flip.bind(this);
    }
    flip(){
       let randIndex = Math.floor((Math.random() * this.props.sides.length));

       let newSide = this.props.sides[randIndex];

       this.setState((state) =>{
        return {
            currentSide : newSide,
            numFlips : state.numFlips +1,
            headFlips : state.headFlips + (newSide.alt === "heads" ? +1 : +0),
            tailFlips : state.headFlips + (newSide.alt === "tails" ? +1 : +0)
        }})
       
    }
    render() {
        return (
            <div className="Coinflip">
                <h1>Lets flip a Coin!</h1>
                    {
                        this.state.currentSide &&
                        <Coin info={this.state.currentSide.imgSrc}/>
                    }
                <button 
                    className="flipButton"
                    onClick={this.flip}
                >
                Flip Coin
                </button>
                <p>Out of {this.state.numFlips} flips, there have been {this.state.headFlips} heads and {this.state.tailFlips} tails</p>
            </div>
        )
    }
}