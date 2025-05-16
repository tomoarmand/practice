import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";

function App2() {
    return (
        <>
        <NavBar />
        <h1>This is App2</h1>
        <Link to="/">Go back to App1</Link>
        <img src="https://picsum.photos/200/300"/>
        </>
    )
}

export default App2