// Card - CRUD Emplois -- tableaux ou liste get products + action (icon delete * / icone edit)

import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { addEmploi, getEmplois } from '../../../actions/emploi'
import { Button } from '../../styles/Button.styled'
import { StyledEmploi } from '../../styles/Emploi.styled'
import Add_emploi from './add_emploi'
import Rh_JobCard from './Rh_JobCard'
import {Link} from 'react-router-dom'

function RH_emplois() {
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
                    <Link to="addEmploi" >
                    <Button>اضافة عرض شغل</Button>
                    </Link>
                    {/* <Add_emploi /> */}
                    <div className="emplois">
                        {
                            emplois.map(emploi => <Rh_JobCard emploi={emploi} key={emploi._id} />)
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

export default RH_emplois
