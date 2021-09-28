import { Col , Card} from "react-bootstrap"
const DishCard = (props) => {
    return (
        <Col>
            <Card >
                <img classname="card-img-top"src={props.Img} alt="hotels"/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle>{props.subtitle}</Card.Subtitle>
                    <Card.Text>
                        {props.type}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DishCard