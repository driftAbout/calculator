import React from 'react';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      operator: '',
      current: 0,
      previous: 0,
    };
  }

  render(){
    return (
      <section className="calculator-container">
        <ul className="calculator-buttons">
          <NumberDisplay />

          <CalcButton className="clear"
            type="operator"
            label="AC" 
            val='clear'/>

          <CalcButton className="number"
            type="number"
            label="7" 
            val={7}/>

          <CalcButton className="number"
            type="number"
            label="8" 
            val={8}/>

          <CalcButton className="number"
            type="number"
            label="9" 
            val={9}/>

          <CalcButton className="operator"
            type="operator"
            label="/" 
            val="divide"/>

          <CalcButton className="number"
            type="number"
            label="4" 
            val={4}/>

          <CalcButton className="number"
            type="number"
            label="5" 
            val={5}/>

          <CalcButton className="number"
            type="number"
            label="6" 
            val={6}/>

          <CalcButton className="operator"
            type="operator"
            label="X" 
            val="multiply"/>

          <CalcButton className="number"
            type="number"
            label="1" 
            val={1}/>

          <CalcButton className="number"
            type="number"
            label="2" 
            val={2}/>

          <CalcButton className="number"
            type="number"
            label="1" 
            val={1}/>

          <CalcButton className="operator"
            type="operator"
            label="-" 
            val="subtract"/>

          <CalcButton className="number"
            type="number"
            label="0" 
            val={0}/>

          <CalcButton className="decimal"
            type='decimal'
            label="." 
            val='.'/>

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