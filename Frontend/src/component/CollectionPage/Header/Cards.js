import '../Collection.css'
import {Col} from 'react-bootstrap'
const Cards = (props) => {
    return (
        <Col className={props.className}>
            <div className='empty'>

            </div>
            <p>{props.text}</p>
        </Col>
    )
}

export default Cards;
