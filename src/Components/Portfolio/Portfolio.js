import React from 'react';
import portfolio from '../../Data/PortfolioData'
import PortfolioItems from './PortfolioItems';

const Portfolio = () => {
    return (
       <div className="container my-5">
           <h2 className ='text-center my-5'>My <span className = 'text-warning'> Portfolio</span> </h2>
        <div className= 'row'>
             {
                 portfolio.map(portfolio => <PortfolioItems portfolio={portfolio} key={portfolio.id}> </PortfolioItems>)
             }
  
        </div>
       </div>
    );
};

export default Portfolio;
