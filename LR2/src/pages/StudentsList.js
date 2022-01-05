import React, {useEffect, useState} from "react";
import Student from "./Student";
import '../styles/CardContainer.css'


const StudentsList = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            let userData;
            try {
                const response = await fetch("http://127.0.0.1:8000/students/", {
                    method: "GET"
                });
                userData = await response.json();
            } catch (error) {
                console.log(error);
                userData = [];
            }
            setAllUsers(userData);
            setUsers(userData);
        })();
    }, []);

    return (
        <div className="cardList">
            <h1>Список студентов</h1>
            <div className="cards-container">
                {users.map((user, index) =>
                    <Student studentData={user} key={index}/>)}
            </div>

        </div>
    )
}

export default StudentsList;