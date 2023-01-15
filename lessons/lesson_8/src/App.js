import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UsersPage from "./pages/usersPage/UsersPage";
import User from "./components/user/User";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<UsersPage/>}/>
                <Route path='/:id' element={<User/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
