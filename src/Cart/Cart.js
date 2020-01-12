import React, { Component } from 'react';
import Total from './Total/Total'


class Cart extends Component {
    render() {
      // console.log(this.props)

      const summary = Object.keys(this.props.state.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.state.selected[feature];
  
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {this.props.USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
      });


      return(
          <section className="main__summary">
          <h2>Your cart</h2>
          {summary}
          <Total 
          // summary={this.props.summary}
          USCurrencyFormat={this.props.USCurrencyFormat}
          selected={this.props.state.selected}/>
          {/* <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {this.props.USCurrencyFormat.format(this.props.total)}
            </div>
          </div> */}
        </section>
      )
    }
       
}

export default Cart