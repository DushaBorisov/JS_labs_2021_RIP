export class StudentComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
            <div className="card" style="width: 700px;">
                <img className="card-img-top" src="${data.picture}" width="400px" alt="картинка"/>
                <div className="card-body">
                    <h5 className="card-title">Студент №${data.id}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Имя:</strong> ${data.name}</li>
                    <li className="list-group-item"><strong>Фамилия:</strong> ${data.surname}</li>
                    <li className="list-group-item"><strong>Возраст:</strong> ${data.age}</li>
                    <li className="list-group-item"><strong>Университет:</strong> ${data.university}</li>
                    <li className="list-group-item"><strong>Курс обучения:</strong> ${data.course_number}</li>
                </ul>
            </div>
            `

        )
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}