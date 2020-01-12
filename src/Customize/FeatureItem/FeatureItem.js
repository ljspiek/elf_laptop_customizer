import React from 'react';
import slugify from 'slugify';

class FeatureItem extends React.Component {

    
    
    render() {

       
        return(
            <div key={this.props.itemHash} className="this.props.feature__item">
            <input
              type="radio"
              id={this.props.itemHash}
              className="this.props.feature__option"
              name={slugify(this.props.feature)}
              checked={this.props.item.name === this.props.selected[this.props.feature].name}
              onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
            />
            <label htmlFor={this.props.itemHash} className="this.props.feature__label">
              {this.props.item.name} ({this.props.USCurrencyFormat.format(this.props.item.cost)})
            </label>
          </div>
        )
    }

}

export default FeatureItem;