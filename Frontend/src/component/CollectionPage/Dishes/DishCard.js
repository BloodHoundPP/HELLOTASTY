import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../../Rating";

const DishCard = (props) => {
  return (
    <Col>
      <Card>
        <Link style={{ textDecoration: "none", color: "#000" }} to={`/collection/product/${props._id}`}>
          <Card.Img
            style={{ height: "50%" }}
            src={props.Img}
            variant="top"
          />

          <Card.Body>
            <Card.Title>{props.title}</Card.Title>

            <Card.Subtitle style={{ fontSize: "2rem" }}>
              {props.subtitle}
            </Card.Subtitle>

            <Card.Text style={{ fontSize: "1.5rem" }}>{props.type}</Card.Text>

            <Card.Text as="div" style={{ fontSize: "5rem" }}>
              <Rating
                value={props.rating}
                text={` ${props.numReviews} reviews`}
              />
            </Card.Text>

            <Card.Text as="h3">&#8377; {props.price}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default DishCard;
