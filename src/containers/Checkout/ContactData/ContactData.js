import { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import classes from "./ContactData.module.css";
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: "",
    mail: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: "Muhammed Yaseen N A",
        custID: 121,
        address: {
          street: "Njaliyattu South Vazhakulam",
          PIN: 683105,
          country: "India",
        },
        deliveryMethod: "fastest",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Enter your name : "
        />
        <input
          className={classes.Input}
          type="email"
          name="mail"
          placeholder="Enter your Email Address : "
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Enter your Street : "
        />
        <input
          className={classes.Input}
          type="number"
          name="postalcode"
          placeholder="Enter your Postal Code : "
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    
    if(this.state.loading){
        form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Details : </h4>
          {form}
      </div>
    );
  }
}

export default ContactData;
