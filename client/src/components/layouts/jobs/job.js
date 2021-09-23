import React from 'react'
import {Link} from "react-router-dom"
import "./job.css"

function Job() {
    return (

        <div className="main-container">
            <div className="heading">
                <h1 className="heading__title">
                    <Link to="/emploi">
                    عروض شغل في كامل أنحاء الجمهورية التونسية
                    </Link>
                    </h1>
            </div>
            <div className="cards">
                <div className="card card-1">
                    <div className="card__icon"><i className="fas fa-bolt" /></div>
                    <p className="card__exit"><i className="fas fa-times" /></p>
                    <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p className="card__apply">
                        <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right" /></a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Job
