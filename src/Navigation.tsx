import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Tabs, Tab } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";


class Navigation extends React.Component<unknown, unknown> {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">React Demo Application</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav className="mr-auto">
                    <Tabs id="profile-tab">
                        <Tab eventKey="profile" title="Profile">
                            <Container>

                            </Container>
                        </Tab>
                        <Tab eventKey="pictures" title="Pictures">
                            <Container fluid>

                            </Container>
                        </Tab>
                    </Tabs>
                    </Nav>
                </Navbar>
            </div >
        )
    }
}

export default Navigation;
