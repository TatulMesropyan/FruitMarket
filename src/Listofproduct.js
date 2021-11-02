import React, {useState} from "react";
const Listofproduct = (props) => {

    const { name, image, description, cost } = props.product

    const [count, setCount] = useState(0)

    function Basket() {
        setCount(count + 1)
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <h1 className="productName">{name}</h1>
            <h2>{cost}</h2>           
            <img className="productsImg" src={image}/>       
            <section>{description}</section>
            <button className="button" onClick={Basket}>Add to basket</button>
        </div>
    );
}
export default Listofproduct;