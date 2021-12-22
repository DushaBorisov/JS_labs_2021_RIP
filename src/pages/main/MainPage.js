
import {StudentCardComponent} from "../../components/student-card/StudentCardComponent.js";
import {StudentPage} from "../stock/StudentPage.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get page() {
        return document.getElementById('main-page')
    }

    getHTML() {
        return (
            `
            <div id="main-page" class="d-flex flex-wrap"><div/>
        `
        )
    }

    getData() {
        return ajax.get(urls.students())
    }

    clickCard(e) {
        const studentPage = new StudentPage(this.parent, 1)
        studentPage.render()
    }

    func(data){
        data.forEach((item) => {
            const studentCardComponent = new StudentCardComponent(this.page)
            studentCardComponent.render(item, this.clickCard.bind(this))
        })
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const data = this.getData()

        data.then(resp => {this.func(resp)})

    }
}