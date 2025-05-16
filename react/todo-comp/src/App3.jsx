import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";

function App3() {
    return (
        <>
        <NavBar />
        <Link to="/">Go back to App2</Link>
        <h1>Profile</h1>
        <p>James</p>
        </>
    )
}

export default App3