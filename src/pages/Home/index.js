import React, { Component } from "react";
import axios from "axios";
import { Container, Block, Label, Value, PresentationBox } from "./styles";

import alarm from "../../assets/audio/alarm.mp3";

export default class Home extends Component {
  state = {
    data: {
      presentations: {
        items: [
          {
            // presentation_date_time: 1564790400,
            // presentation_local_date_time: "2019-08-02T21:00:00-03:00",
            // enabled: true,
            // sales_start_date_time: 1553011226,
            // closing_sales_date_time: 1564789500,
            // timezone: "America/Sao_Paulo",
            // enabled_for_channel: true,
            // total_available: 2
          }
        ]
      }
    }
  };

  componentDidMount() {
    let config = {
      headers: {
        Accept: "application/json",

        "x-api-key": "UbwP9BEd2"
      }
    };

    setInterval(
      function() {
        axios
          .get(
            `https://bff-sales-api-cdn.ingressorapido.com.br/api/v1/events/30610`,
            // `http://192.168.0.14:8000/index.php`,
            config
          )
          .then(res => {
            console.log("busca");
            const { data } = res;
            this.setState(data);

            // console.log(data);

            // data.data.presentations.items.map(item => {
            //   if (item.total_available > 0) {
            //     this.playAlarm();
            //   }
            // });

            let items = data.data.presentations.items;

            for (let item of items) {
              if (item.total_available > 0) {
                this.playAlarm();
                break;
              }
            }
          });
      }.bind(this),
      60000
    );
  }

  playAlarm = () => {
    let audio = new Audio(alarm);
    audio.play();
  };

  formatDate(date) {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();

    date = `${this.formatDigits(day)}/${this.formatDigits(
      month
    )}/${year} (${this.formatDigits(hour)}h${this.formatDigits(minute)})`;
    return date;
  }

  formatDigits(n) {
    if (n === 0) return "00";
    else return n > 9 ? "" + n : "0" + n;
  }

  render() {
    return (
      <Container>
        Searching for available tickets...
        <Block>
          {this.state.data.presentations.items.map((item, index) => (
            <PresentationBox key={index}>
              <Label>
                tickets on {this.formatDate(item.presentation_local_date_time)}{" "}
                ->
              </Label>
              <Value available={item.total_available ? true : false}>
                {item.total_available}
              </Value>
            </PresentationBox>
          ))}
        </Block>
      </Container>
    );
  }
}
