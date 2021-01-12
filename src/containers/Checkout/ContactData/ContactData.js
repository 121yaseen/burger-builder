import { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

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
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },

      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Enter your E-Mail : ",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your Street Name : ",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      PIN: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your PIN Code : ",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your Country : ",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        validation: {},
        value: "fastest",
        valid: true,
      },
    },
    formValid: false,
    loading: false,
  };

  checkValidity(value, rules) {
    let valid = true;
    if (rules.required) {
      valid = value.trim() != "" && valid;
    }
    if (rules.minLength) {
      valid = value.length >= rules.minLength && valid;
    }
    if (rules.maxLength) {
      valid = value.length <= rules.maxLength && valid;
    }

    return valid;
  }

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
    updatedOrderForm[inputID].touched = true;
    updatedOrderForm[inputID].valid = this.checkValidity(
      event.target.value,
      updatedOrderForm[inputID].validation
    );
    console.log(updatedOrderForm[inputID]);
    let formValid = true;
    for (let formElement in updatedOrderForm) {
      formValid = updatedOrderForm[formElement].valid && formValid;
    }
    this.setState({ orderForm: updatedOrderForm, formValid: formValid });
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
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => {
            this.formElementChangedHandler(event, formElement.id);
          }}
        />
      );
    });
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElement}
        <Button btnType="Success" disabled={!this.state.formValid}>
          ORDER
        </Button>
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
