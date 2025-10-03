import { Link } from "react-router-dom";

function LandingPage(){

    return(
        <h1>
            Landing Page
            <Link to="/register">Click</Link>
        </h1>
    );

}

export default LandingPage;