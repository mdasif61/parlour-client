import { Outlet, useLocation } from "react-router-dom";
import Container from "../container/Container";
import Navbar from "../Shared/Navbar";

const Main = () => {
    const location=useLocation()
    const noNavbar=location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            {noNavbar || <Navbar></Navbar>}
            <Container>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default Main;