import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UsersPage from "./pages/usersPage/UsersPage";

function App() {
  return (
    <BrowserRouter >
      <Routes>
          <Route index element={ <UsersPage/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
