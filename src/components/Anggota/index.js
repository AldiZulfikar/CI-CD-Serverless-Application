import React from "react";
import { Card, Button } from "react-bootstrap";
import Olla from "../../assets/image/olla.svg";
import Aldi from "../../assets/image/alldi.svg";
import Yolan from "../../assets/image/yolan.svg";
import Eja from "../../assets/image/eja.svg";
const Anggota = () => {
  return (
    <div className="container">
      <div className="bg-anggota"></div>
      <h4 className="text-center mt-5 anggota-title">Anggota Kelompok</h4>
      <div
        className="d-flex flex-wrap mt-5 pt-3 pb-5
       anggota justify-content-between"
      >
        <Card style={{ width: "15rem" }}>
          <Card.Title className="text-center mt-2">Islah Khofifah</Card.Title>
          <Card.Img
            variant="top"
            src={Olla}
            style={{ height: "10rem", marginTop: ".5rem" }}
          />
          <Card.Body>
            <Card.Text>11190910000097</Card.Text>
            <Button variant="primary">Integration</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Title className="text-center mt-2">Aldi Zulfikar</Card.Title>
          <Card.Img
            variant="top"
            src={Aldi}
            style={{ height: "10rem", marginTop: ".5rem" }}
          />
          <Card.Body>
            <Card.Text>11190910000097</Card.Text>
            <Button variant="primary">Lambda</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }}>
          <Card.Title className="text-center mt-2">Yolanda Putri </Card.Title>
          <Card.Img
            variant="top"
            src={Yolan}
            style={{ width: "10rem", marginLeft: "2rem", marginTop: ".5rem" }}
          />
          <Card.Body>
            <Card.Text>11190910000097</Card.Text>
            <Button variant="primary">Login Cognito</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }}>
          <Card.Title className="text-center mt-2">Muhammad Fahreza</Card.Title>
          <Card.Img
            variant="top"
            src={Eja}
            style={{ height: "10rem", marginTop: ".5rem" }}
          />
          <Card.Body>
            <Card.Text>11190910000097</Card.Text>
            <Button variant="primary">Regis Cognito</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Anggota;
