import { Row } from 'react-bootstrap'
import Cards from './Cards'
import '../Collection.css'

const collection = [
    {
        id:0,
        class : "card1",
        text : "Most-visited Reastaurants"
    },
    {
        id:1,
        class : "card2",
        text : "Pocket Friendly"
    },
    {
        id:2,
        class : "card3",
        text : "Sweet Treat"
    },
    {
        id:3,
        class : "card4",
        text : "Mighty Munchables"
    }
]

const createCard = (collection) =>{
    return (
        <Cards 
            key = {collection.id}
            className={collection.class}
            text ={collection.text}
        />
    )
}

const Gallary = () => {



    return (
        <div className="gallary">
           
                <h2>Collections</h2>
                <p>Explore Our Kitchen Jungle</p>
                <div className="cards">
                    <Row>
                        {collection.map(createCard)}
                    </Row>
                </div>
          
        </div>
    )
}
export default Gallary