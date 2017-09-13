import React from 'react';
import { connect } from 'react-redux';
import PortfolioCard from './PortfolioCard';
import { loadPortfolio } from '../../actions/PortfolioActions';

class PortfolioIndex extends React.Component {

  componentDidMount() {
    this.props.loadPortfolio();
  }

  render() {

    var sortedPortfolio =
      this.props.listings.sort(function(listing1, listing2) {
        return listing2.id - listing1.id;
      })

    const renderPortfolioCards =
      sortedPortfolio.map(listing =>
        <PortfolioCard listing={listing} key={listing.id} />)

    return (
      <div>
        <h1>Portfolio:</h1>
        {renderPortfolioCards}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    listings: state.listings,
    finishedLoading: state.finishedLoading
  })
}
export default connect(mapStateToProps, { loadPortfolio })(PortfolioIndex);
