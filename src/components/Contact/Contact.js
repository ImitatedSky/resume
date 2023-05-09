import * as Links from "./ContactLinksObj";
import { Row, Col } from "reactstrap";

export default function Contact() {
  const renderAboutFromObj = (obj) => {
    return (
      <Row>
        <Col xs={2} lg={1}>
          <img
            src={obj.icon}
            alt={obj.icon}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
        </Col>
        <Col xs={4} lg={2}>
          {obj.name}
        </Col>
        <Col xs={6} lg={9}>
          <a href={obj.profileLink}> {obj.profileLink} </a>
        </Col>
      </Row>
    );
  };
  return (
    <>
      <h1>Contact Me</h1>
      <div className="contact">
        {Links.LinksObj.map((x) => renderAboutFromObj(x))}
      </div>
    </>
  );
}

export function Contact_onepage() {
  return (
    <>
      <h1>Contact Me</h1>
    </>
  );
}
