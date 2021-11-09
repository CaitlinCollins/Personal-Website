import React from "react";
import Header from "../Header/header";
import Nav from "../Nav/nav";
import Reels from "../Reels/reels";
import { Row, Col } from "../Grid/grid";


function Home() {
    return ( 
       <div>
        <Row>
            <Col size="md-12">
                <Header />
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <Reels />
            </Col>
        </Row>
        </div>
      
    )
}

export default Home;