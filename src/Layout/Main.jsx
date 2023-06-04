import { Outlet } from "react-router-dom";
import Container from "../container/Container";
import Navbar from "../Shared/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default Main;