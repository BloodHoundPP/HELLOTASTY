import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import DishCard from "./DishCard";
// import DishList from "./DishList"
// import DishList from '../../../../../Backend/data/DishList'

const Dish = (DishList) => {
  return (
    <DishCard
      _id={DishList._id}
      Img={DishList.Image}
      title={DishList.title}
      subtitle={DishList.subtitle}
      type={DishList.text}
      price={DishList.price}
      rating={DishList.rating}
      numReviews={DishList.numReviews}
    />
  );
};
const Dishes = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/collection/api/products')
        console.log(data)
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <div class="dishes">
        <h2>Popular Dishes For You</h2>
        <Row>{products.map(Dish)}</Row>
      </div>
    </div>
  );
};

export default Dishes;
