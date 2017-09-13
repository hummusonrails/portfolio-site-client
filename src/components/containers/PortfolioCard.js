import React from 'react';
import { connect } from 'react-redux';

class PortfolioCard extends React.Component {

  componentDidMount() {

    };

  render() {

    return (
      <div className="JobCardBox">
        <div className={this.props.listing.id}>
          <h3><a href={this.props.listing.link}>{this.props.listing.name}</a></h3>
          <p>{this.props.listing.description}</p>
        </div>
      </div>
    );
  }
}


export default PortfolioCard;
