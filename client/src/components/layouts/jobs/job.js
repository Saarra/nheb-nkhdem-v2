import React from 'react'
import { Link } from "react-router-dom"
import JobCard from './JobCard'
import emploiReducer from '../../../reducers/emploiReducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { getEmplois } from '../../../actions/emploi'
import { StyledEmploi } from '../../styles/Emploi.styled'
import { Button } from '../../styles/Button.styled'

function Job() {

    const dispatch = useDispatch()

    const emplois = useSelector(state => state.emploiReducer.emplois)

    return (
        <StyledEmploi>
            <div className="main-container">
                <div className="heading">
                    <h1 className="heading__title">
                        عروض شغل في كامل أنحاء الجمهورية التونسية
                    </h1>
                </div>
                <div className="emplois">
                    {
                        emplois.map(emploi => <JobCard emploi={emploi} key={emploi._id} />)
                    }
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <Button className="btn btn-light" onClick={() => dispatch(getEmplois())}>
                        عروض شغل
                    </Button>
                </div>

            </div>
        </StyledEmploi>
    )
}

export default Job
