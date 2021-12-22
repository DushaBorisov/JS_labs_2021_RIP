export class StudentCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${data.picture}" alt="картинка"/>
                    <div class="card-body">
                        <h5 class="card-title">Студент №${data.id}</h5>
                        <button class="btn btn-primary" id="click-card-${data.id}">Перейти к анкете</button>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Имя:</strong> ${data.name}</li>
                        <li class="list-group-item"><strong>Фамилия:</strong> ${data.surname}</li>
                        <li class="list-group-item"><strong>Возраст:</strong> ${data.age}</li>
                    </ul>
                </div>
            `
        )
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }

    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }
}