import React from 'react';
import './Portfolio.css'
const PortfolioItems = (props) => {
    const {description , title, img, liveLink, ghLink} = props.portfolio;

    return (
        <div className='col-md-4 mb-3'>
            <div className="card portfolio" >
                <img className="card-img-top"src={img} alt=""/>
                <div class="card-body">
                    <h3 className="card-title text-secondary text-center">{title}</h3>
                    <p className="card-text text-secondary">{description}</p>
                </div>
                <div className='d-flex bg-light p-3 '>
                    <a href={liveLink} target='blank' className="btn btn-secondary  px-4 ">Website</a>
                    <a href={ghLink} target='blank' className="btn btn-secondary  px-4 ml-auto"> Github</a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItems;