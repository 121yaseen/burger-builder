import { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your name : ",
        },
        value: "",
      },

      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Enter your E-Mail : ",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your Street Name : ",
        },
        value: "",
      },
      PIN: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your PIN Code : ",
        },
        value: "",
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your Country : ",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
      },
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElement in this.state.orderForm) {
      formData[formElement] = this.state.orderForm[formElement].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      data: formData,
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  formElementChangedHandler = (event, inputID) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedOrderFormElement = { ...updatedOrderForm[inputID] };
    updatedOrderFormElement.value = event.target.value;
    updatedOrderForm[inputID] = updatedOrderFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    let formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    // console.log(formElementsArray[0].config.value);
    let formElement = formElementsArray.map((formElement) => {
      return (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={(event) => {
            this.formElementChangedHandler(event, formElement.id);
          }}
        />
      );
    });
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElement}
        <Button btnType="Success">ORDER</Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
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
