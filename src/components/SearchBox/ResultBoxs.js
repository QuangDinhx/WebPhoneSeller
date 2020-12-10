import React, { Component } from 'react';
import 'bootstrap'
import ResultBox from './ResultBox'


export default class ResultBoxs extends Component {
  render() {
    const products = this.props.products;
    
    if(products.length !== 0){
        return (
            <ul class="wrap-suggestion" >
                 {products.map(element => {
            return (
            <ResultBox product = {element}/>
            )
        })}
            </ul>
           )
    }else{
        return (<a></a>);
    }
    
    
  }
}


