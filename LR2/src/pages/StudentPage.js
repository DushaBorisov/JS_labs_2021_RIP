import React from "react";
import '../styles/Card.css'
import {Link} from "react-router-dom";

const StudentPage= (props) =>{


    return(
        <div className="student_page">
            <div > <span style={{fontWeight: 'bold'}}>Студент № {props.location.propsSearch.id}</span></div>
            <div >
                <span style={{fontWeight: 'bold'}}>Имя:</span> {props.location.propsSearch.name}  <br/>
                <span style={{fontWeight: 'bold'}}>Фамилия:</span> {props.location.propsSearch.surname} <br/>
                <span style={{fontWeight: 'bold'}}>Университет:</span> {props.location.propsSearch.university}  <br/>
                <span style={{fontWeight: 'bold'}}>Курс:</span> {props.location.propsSearch.course_number}
            </div>
            <div> <img/></div> <br/>
            <div> <img className="student_page_img" src={props.location.propsSearch.picture}/></div> <br/>
            <Link to={{
                pathname:"/list",
            }}>
                <button>Вернуться назад</button>
            </Link>
        </div>
    )
}


export default StudentPage;