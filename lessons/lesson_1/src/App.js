import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ChangeTitle from "./components/changeTitle/ChangeTitle";

function App() {
    return (
        <div className="App">
            <MainPage/>
            <h1>----------------------------------------------</h1>
            <ChangeTitle/>
            <AboutPage/>
        </div>
    );
}

export default App;
