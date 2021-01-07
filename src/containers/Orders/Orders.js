import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((response) => {
        const orders = [];
        for (let key in response.data) {
          orders.push({ ...response.data[key], id: key });
        }
        this.setState({ loading: false, orders: orders });
      })
      .catch(this.setState({ loading: false }));
  }

  render() {
    const orders = this.state.orders.map(order => {
        return <Order key={order.id} ingredients = {order.ingredients} price={order.price}/>
    })
    return (
      <React.Fragment>
        <h4 align="center">Your Orders</h4>
        {orders}
      </React.Fragment>
    );
  }
}

export default withErrorHandler(Orders, axios);
