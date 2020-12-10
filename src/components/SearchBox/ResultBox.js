import React, { Component } from 'react';
import 'bootstrap'
import  './ResultBox.css'

export default class ResultBox extends Component {
  render() {
    const { id, title, img, price, inCart, company } = this.props.product;
    return (
        <li>
        <a href={`/details/${id}`}>
          <img src={`../${img}`}></img>
          <h3>{title}</h3>
          <span class="price">{`Giá : $ ${price}`}</span>
          <p>{company}</p>
        </a>
      </li>
    )
  }
}


