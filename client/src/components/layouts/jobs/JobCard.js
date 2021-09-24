import React from 'react'
import "./job.css"
function JobCard({ emploi }) {


    return (
        // <div className="cards">
        // <div className="card card-2">
        //     <label> عنوان الشغل</label>
        // <h2 className="card__title">
        //     {emploi.titre}
        // </h2>
        // <p class="card-text">{emploi.desc}</p>
        // <h2 className="card__title">{emploi.titre}</h2>
        //         <a href="#" class="btn btn-primary">Go somewhere</a>
        //     </div>
        // </div>

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
            </a>
        </div>

    )
}

export default JobCard
