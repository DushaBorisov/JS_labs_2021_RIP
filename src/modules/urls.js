class Urls {
    constructor() {
        this.url = 'http://localhost:8000/';
    }

    students() {
        return `${this.url}students/`
    }

    student(id) {
        return `${this.url}students/${id}/`
    }
}

export const urls = new Urls()