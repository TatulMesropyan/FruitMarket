import React from 'react';
import './App.css';
import Listofproduct from './Listofproduct'
import Navigation from './Navigation';
import Fruits from './Fruits';
import Vegetables from './Vegetables';
import Berrys from './Berrys';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Comp1 from './Comp1';
const products = [
  { 
    name: "Apple", 
    cost: "1$/kilo", 
    image: "https://cdn-icons.flaticon.com/png/512/2963/premium/2963578.png?token=exp=1635782743~hmac=fa2a541af0d53829d1579644640f35c9", 
    description: " Apple is a sweet and delicious fruit that is very healthy. It is also a good disease-fighter and we can eat it every day. The delicious taste and bright colour of the food make it even more appealing."
  },
  {
    name: "Peach",
    cost: "2$/kilo", 
    image: "https://cdn-icons-png.flaticon.com/512/4191/4191658.png",
    description: "A peach is a very sweet, juicy fruit with an edible peel and a hard pit in the middle. Peaches vary in color from almost white to yellow and pinkish- red. Peaches grow on trees in temperate climates — they need warm weather."
  },
  { 
    name: "Cherry",
    cost: "5$/kilo",
    image: "https://cdn-icons.flaticon.com/png/512/2518/premium/2518008.png?token=exp=1635782652~hmac=577fd52154bfe1114431b49b126ad1f4",
    description: "A cherry is a beautiful flowering tree, and it's also the name of the small, red fruit that grows on it. If you learn to bake a perfect cherry pie, you will become a legend among your dessert-loving friends."
  },
];

const showInput = (event) => {
  return (
    console.log(event.target.value)
  );
}

const App = () => {

  return (
    <div>
      <header className="headWord"><h1>Fruit Market</h1></header>
      <div>
        <Comp1 />
        <h2>input</h2>
        <input type="text" onInput={showInput} />
      </div>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/fruits" component={Fruits} />
          <Route path="/vegetables" component={Vegetables} exact />
          <Route path="/berrys" component={Berrys} exact />
        </Switch>
      </Router>
      {
        products.map((product, index) => <Listofproduct product={product} key={index} />)
      }

    </div>
  );
}
export default App;

