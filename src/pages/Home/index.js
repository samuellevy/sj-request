import React, { Component } from "react";
import axios from "axios";
import { Container } from './styles';

export default class Home extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    let config = {
      headers: {
        Accept: "application/json",

        "x-api-key": "UbwP9BEd2"
      }
    };

    axios.get(`https://bff-sales-api-cdn.ingressorapido.com.br/api/v1/events/30610`, config)
      .then(res => {
        const {data} = res;
        this.setState(data);
      }
    );
  }

  render() {
    return <div>Working good</div>;
  }
}
