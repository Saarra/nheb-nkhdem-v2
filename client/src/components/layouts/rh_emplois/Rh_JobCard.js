import React from 'react'
import { FiTrash2, FiEdit3 } from "react-icons/fi";
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { deleteEmploi, toggleTrue } from '../../../actions/emploi'
import { Button } from '../../styles/Button.styled';

function Rh_JobCard({ emploi }) {

    const dispatch=useDispatch()
    const history=useHistory()
    const handleAlert=(id)=>{
        if(window.confirm("هل انت متاكد من محو المحتوى ?")){
      dispatch(deleteEmploi(id))
        }
    }

    return (
        <>
        <div class="container">
            <a class="card1" href="#">
                <h3> عنون الوظيفة </h3>
                <h5> {emploi.titre} </h5>
                <h3> وصف الوظيفة </h3>
                <h5>
                {emploi.desc}
                </h5>
                <h3> راتب الشهري </h3>
                <h5> {emploi.salaire} </h5>
                <h3> توقيت العمل  </h3>
                <h5> {emploi.horaire} </h5>
                <h3> مكان العمل  </h3>
                <h5> {emploi.adresse} </h5>
                <h3>  رابط الترشح  </h3>
                <h5> {emploi.lin} </h5>
                <div class="go-corner" href="#">
                    <div class="go-arrow">
                        →
                    </div>
                </div>
                <FiTrash2 className='icon-delete' onClick={()=>handleAlert(emploi._id)}/>
                <FiEdit3 />
            </a>
           
        </div>
        </>
    )
}

export default Rh_JobCard
