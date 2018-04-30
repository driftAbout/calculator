import React from 'react';
import CalcButton from '../calculator-button/calculator-button';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      current: 0,
      previous: null,
    };

    this.actions = {
      divide: (previous, current) => previous / current,
      multiply: (previous, current)=> previous * current,
      subtract: (previous, current) => previous - current,
      add: (previous, current) => previous + current,
      equals: (previous, current) => this.actions[this.operator](previous, current),
    };

    this.memory = null,
    this.concat = true;
    this.operator = null;
    this.decimal = false;

    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.calculateAnswer = this.calculateAnswer.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.decimalCheck = this.decimalCheck.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }

  calculateAnswer(method, current, previous){
    let answer = this.actions[method](parseFloat(current), parseFloat(previous));
    return parseFloat(answer.toFixed(15));
  }

  handleNumberClick(val){
    this.memory = null;
    if (this.state.current === 0 && val === 0) return;

    if (!this.concat) {
      this.concat = true;
      return this.setState({current: val, previous: this.state.current});
    }

    let value = (this.decimal && this.state.current === 0)
      ? `${this.state.current}${val}`
      : parseFloat(`${this.state.current}${val}`);

    this.setState({current: value});
  }

  handleClear(){
    this.memory = null;
    this.decimal = false;
    this.concat = true;
    this.operator = null;
    this.setState({current: 0, previous: null});
  }

  handleDecimal(val){
    if (this.decimal) return;
    this.decimal = true;
    if (!this.concat) val = `0${val}`;
    this.handleNumberClick(val);
  }

  decimalCheck(num){
    this.decimal = (num !== Math.trunc(num)) ? true : false;
  }

  handleEquals(operatorVal){
    if (!this.operator) return;
    this.concat = false;
    let previous = (this.memory === null) ? this.state.previous : this.memory;
    let answer = this.calculateAnswer(operatorVal, previous, this.state.current);
    this.decimalCheck(answer);
    if (this.memory === null)
      this.memory = this.state.current;

    this.setState({current: answer, previous: null});
  }

  handleOperator(operatorVal){
    this.concat = false;
    this.decimal = false;
    this.operator = operatorVal;
    this.memory = null;
    if (this.state.previous === null) {
      return  this.memory = this.state.current;
    }

    let answer = this.calculateAnswer(operatorVal, this.state.previous, this.state.current);
    this.decimalCheck(answer);
    this.setState({current: answer, previous: this.state.current});
  }


  render(){
    return (
      <section className="calculator-container">
        <ul className="calculator-buttons">
          <li className="calculator-button-row">
            <div className='number-display'>
              <input name="display" type="text" value={this.state.current} />
            </div>

            <CalcButton className="clear"
              type="operator"
              label="AC" 
              val='clear'
              clickHandler={this.handleClear}/>
          </li>

          <li className="calculator-button-row"> 
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
          </li>

          <li className="calculator-button-row"> 
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
              label="x" 
              val="multiply"/>
          </li>

          <li className="calculator-button-row"> 
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
              label="3" 
              val={3}
              clickHandler={this.handleNumberClick}/>

            <CalcButton className="operator"
              type="operator"
              label="-" 
              val="subtract"/>
          </li>

          <li className="calculator-button-row"> 
            <CalcButton className="number"
              type="number"
              label="0" 
              val={0}
              clickHandler={this.handleNumberClick}/>

            <CalcButton className="decimal"
              type='decimal'
              label="." 
              val='.'
              clickHandler={this.handleDecimal}/>

            <CalcButton className="equals"
              type='operator'
              label="=" 
              val='equals'
              clickHandler={this.handleEquals}/>

            <CalcButton className="operator"
              type='operator'
              label="+" 
              val='add'
              clickHandler={this.handleOperator}/>
          </li>
        </ul>
      </section>
    );
  }
}