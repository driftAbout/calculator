import './_calculator-button.scss';
import React from 'react';

export default class CalcButton extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.clickHandler(this.props.val);
  }

  render(){
    return (
      <li className={`calculator-button ${this.props.className}`}
        onClick={this.handleClick}>
        {this.props.label}
      </li>
    );
  }
}