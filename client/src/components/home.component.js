import React, { Component } from "react";
import UserService from "../services/user.service";
import Header from "./layouts/header/header";
import ContactUs from "./layouts/contactus/contactUs";
import Job from "./layouts/jobs/job";
import Footer from "./layouts/footer/footer";
import Product from "./layouts/products/product";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div>
          <Header />
          <Product /> 
          <Job />
          <ContactUs />
          <Footer />
      </div>
    );
  }
}
