import React, { Component } from 'react';
import Total from './Total/Total'


class Cart extends Component {
    render() {
        return(
            <section className="main__summary">
            <h2>Your cart</h2>
            {this.props.summary}
            <Total 
            summary={this.props.summary}
            USCurrencyFormat={this.props.USCurrencyFormat}
            total={this.props.total}/>
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