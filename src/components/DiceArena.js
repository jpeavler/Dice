import React from 'react';
import Die from './Die'

class DiceArena extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sides: 1,
            diceArray : []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSides = this.handleSides.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const currentArray = this.state.diceArray;
        currentArray.push(this.state.sides);
        this.setState({diceArray: currentArray});
    }
    handleSides(event){
        this.setState({sides: event.target.value});
    }
    render(){
        const dice = this.state.diceArray.map((sides) => <Die sides={sides}/>)
        return (
            <>
                <h2>Dice Maker</h2>
                <form onSubmit={this.handleSubmit}>
                    <h3>How many sides do you want on your die?</h3>
                    <input type="number" onChange={this.handleSides}/>
                    <input type="submit" value="Create Die"/>
                </form>
                <h2>Current Dice</h2>
                {dice}
            </>
    );
}
}

export default DiceArena;
