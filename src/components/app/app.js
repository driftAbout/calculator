import React from 'react';
import CalcButton from '../calculator-button/calculator-button';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      operator: '',
      current: 0,
      previous: 0,
    };

    this.actions = {
      divide: () => this.previous / this.current,
      multiply: () => this.this.previous * this.current,
      subtract: () => this.this.previous - this.current,
      add: () => this.this.previous + this.current,
    };

    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleNumberClick(val){
    if (this.state.current === 0 && val === 0) return;
    this.setState({current: parseInt(`${this.state.current}${val}`)});
  }

  handleClear(){
    this.setState({current: 0, previous: 0});
  }


  render(){
    return (
      <section className="calculator-container">
        <ul className="calculator-buttons">
          <li className='number-display'>
            <input name="display" type="text" value={this.state.current} />
          </li>

          <CalcButton className="clear"
            type="operator"
            label="AC" 
            val='clear'
            clickHandler={this.handleClear}/>

          <CalcButton className="number"
            type="number"
            label="7" 
            val={7}
            clickHandler={this.handleNumberClick}/>

          <CalcButton className="number"
            type="number"
            label="8" 
            val={8}
            clickHandler={this.handleNumberClick}/>

          <CalcButton className="number"
            type="number"
            label="9" 
            val={9}
            clickHandler={this.handleNumberClick}/>

          <CalcButton className="operator"
            type="operator"
            label="/" 
            val="divide"/>

          <CalcButton className="number"
            type="number"
            label="4" 
            val={4}
            clickHandler={this.handleNumberClick}/>

          <CalcButton className="number"
            type="number"
            label="5" 
            val={5}
            clickHandler={this.handleNumberClick}/>

          <CalcButton className="number"
            type="number"
            label="6" 
            val={6}
            clickHandler={this.handleNumberClick}/>

          <CalcButton className="operator"
            type="operator"
            label="X" 
            val="multiply"/>

          <CalcButton className="number"
            type="number"
            label="1" 
            val={1}
            clickHandler={this.handleNumberClick}/>

          <CalcButton className="number"
            type="number"
            label="2" 
            val={2}
            clickHandler={this.handleNumberClick}/>

          <CalcButton className="number"
            type="number"
            label="1" 
            val={1}
            clickHandler={this.handleNumberClick}/>

          <CalcButton className="operator"
            type="operator"
            label="-" 
            val="subtract"/>

          <CalcButton className="number"
            type="number"
            label="0" 
            val={0}
            clickHandler={this.handleNumberClick}/>

          <CalcButton className="decimal"
            type='decimal'
            label="." 
            val='.'
            clickHandler={this.handleNumberClick}/>

          <CalcButton className="equals"
            type='operator'
            label="=" 
            val='equals'/>

          <CalcButton className="operator"
            type='operator'
            label="+" 
            val='add'/>

        </ul>
      </section>
    );
  }
}