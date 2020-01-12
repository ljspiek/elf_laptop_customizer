import React from 'react';
import slugify from 'slugify';

class FeatureItem extends React.Component {

    
    
    render() {

      // console.log(this.props)
       
      return(
          <div key={this.props.itemHash} className="feature__item">
          <input
            type="radio"
            id={this.props.itemHash}
            className="feature__option"
            name={slugify(this.props.feature)}
            checked={this.props.item.name === this.props.selected[this.props.feature].name}
            onChange={e => this.props.onUpdateFeature(this.props.feature, this.props.item)}
          />
          <label htmlFor={this.props.itemHash} className="feature__label">
            {this.props.item.name} ({this.props.USCurrencyFormat.format(this.props.item.cost)})
          </label>
        </div>
      )
    }

}

export default FeatureItem;