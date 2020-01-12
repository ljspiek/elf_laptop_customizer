import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureItem from '../FeatureItem/FeatureItem'

class Feature extends Component {
    render() {
       
        console.log(this.props)

        const featureItems = this.props.options.map(item => {
            const itemHash = slugify(JSON.stringify(item))
            const checked = item.name === this.props.selected[this.props.feature].name

            return(
                <FeatureItem
                    key={itemHash}
                    itemHash={itemHash}
                    item={item}
                    feature={this.props.feature}
                    checked={checked}
                    onUpdateFeature={this.props.onUpdateFeature}
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
            />
            )
        })

       

        return(
            <fieldset className="this.props.feature">
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {featureItems}
            </fieldset>
            
            
        )
    }
       
}

export default Feature