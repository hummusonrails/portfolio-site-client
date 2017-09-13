import React from 'react';
import { connect } from 'react-redux';
import PortfolioCard from './PortfolioCard';
import { loadPortfolio } from '../../actions/PortfolioActions';

class PortfolioIndex extends React.Component {

  componentDidMount() {
    this.props.loadPortfolio();
  }

  render() {

  const renderPortfolioCards = null
    // this.props.jobs !== undefined && this.props.jobs.length !== 0 ?
    //   this.props.jobs.map(job =>
    //     <JobCard job={job} key={job.cacheId} />)
    //   :
    //   this.state.firstJobs.map(job =>
    //     <JobCard job={job} key={job.cacheId} />)

    return (
      <div>
        <h1>Portfolio:</h1>
    </div>
    );
  }
}

export default connect(null, { loadPortfolio })(PortfolioIndex);
