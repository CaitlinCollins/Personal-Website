import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "../Grid/grid";
import Nav from "../Nav/nav";

function Header() {
    return (
        <header>
            <img className="headerImg" src="/assets/images/Cait-18.jpg" alt="Cait Collins"></img>
            <Row>
                <Col size="md-6">
                    <h1 className="pageTitle">Cait Collins</h1>
                </Col>
                <Col size="md-6">
                    <div className="navigation">
                        <Nav />
                    </div>
                </Col>
            </Row>
        </header>
    )
}

export default Header;