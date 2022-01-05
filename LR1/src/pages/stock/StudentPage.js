import {StudentComponent} from "../../components/stock/StudentComponent.js";
import {BackButtonComponent} from "../../components/button/BackButtonComponent.js";
import {MainPage} from "../main/MainPage.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";

export class StudentPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    getData() {
        return ajax.get(urls.student(this.id))
    }

    get page() {
        return document.getElementById('stock-page')
    }

    getHTML() {
        return (
            `
                <div id="stock-page">
                </div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.page)
        backButton.render(this.clickBack.bind(this))
        const student = new StudentComponent(this.page)
        const data = this.getData()
        data.then(resp => {student.render(resp)})
       // student.render(data)
    }
}