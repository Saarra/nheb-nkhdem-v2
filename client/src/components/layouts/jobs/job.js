import React from 'react'
import { Link } from "react-router-dom"
import JobCard from './JobCard'
import emploiReducer from '../../../reducers/emploiReducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import {getEmplois}  from '../../../actions/emploi'

function Job() {

    const dispatch = useDispatch()

    const emplois = useSelector(state => state.emploiReducer.emplois)

    return (

        <div className="main-container">
            <div className="heading">
                <h1 className="heading__title">
                    <Link to="/emploi">
                        عروض شغل في كامل أنحاء الجمهورية التونسية
                    </Link>
                    <button className onClick = {() => dispatch(getEmplois())}>
                    Emplois    
                    </button>

                </h1>
            </div>
                <div>
                    {
                        emplois.map(emploi => <JobCard emploi={emploi} key={emploi._id} />)
                    }
                </div>
        </div>
    )
}

export default Job
