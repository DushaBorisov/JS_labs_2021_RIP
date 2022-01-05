import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import StudentsList from "./pages/StudentsList";
import StudentPage from "./pages/StudentPage";

function App() {



    return (
        <BrowserRouter basename="/">
            <div>
                <form action="/">
                    <button className="c-button">Домашняя страница</button>
                </form>

                <form action="/list">
                    <button className="c-button">Список студентов</button>
                </form>

                <hr/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/list" component={StudentsList}/>
                    <Route path="/studentPage" component={StudentPage}/>
                </Switch>
            </div>

        </BrowserRouter>
    );
}

export default App;