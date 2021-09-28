import {Row} from 'react-bootstrap'
import DishCard from './DishCard'
import DishList from './DishList'

const Dish = (DishList) => {
    return (
        <DishCard
                    Img = {DishList.Image}
                    title = {DishList.title}
                    subtitle = {DishList.subtitle}
                    type = {DishList.text}
                />
    )
}
const Dishes = () => {
    return (
        <div>
            <div class="dishes">
            <h2>Popular Dishes For You</h2>
            <Row>
                
                {DishList.map(Dish)}
            </Row>
        </div>
        </div>
    )
}


export default Dishes