import React from "react";
import '../styles/Card.css'
import {Link} from "react-router-dom";



const Student= ({studentData}) =>{


    return(
        <div className="card">
           <div className="card_head">Студент №{studentData.id}</div>
            <div className="card_body">
                <span style={{fontWeight: 'bold'}}>Имя:</span>  {studentData.name} <br/>
                <span style={{fontWeight: 'bold'}}>Фамилия:</span>  {studentData.surname}<br/>
                 <span style={{fontWeight: 'bold'}}>Университет:</span>  {studentData.university}<br/>
                 <span style={{fontWeight: 'bold'}}>Курс:</span>  {studentData.course_number}
            </div>
            <div className="card_img"> <img src={studentData.picture}/></div> <br/>
            <Link to={{
                pathname:"/studentPage",
                propsSearch: studentData
            }}>
            <button>Открыть резюме</button>
            </Link>
        </div>
    )
}

export default Student;