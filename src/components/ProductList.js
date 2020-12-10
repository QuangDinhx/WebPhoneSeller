import React, { Component } from 'react';
import Product from './Product';

import { ProductConsumer } from '../context';
import SlideBar from '../components/SildeBar'
import {Service} from '../Service/api'
import { Button} from 'react-bootstrap';
import AOS from 'aos'

export default class ProductList extends Component {
  constructor(){
    super();
    this.state = {
    products:[],
      searchField:'',
      todos: [],
      currentPage: 1,
      todosPerPage: 8
    }
    this.handleClick = this.handleClick.bind(this);
    
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount(){
    AOS.init({
      duration:2000,
    })
    Service.getProducts().then((res)=>{
      const data = res.data.data
      const products = data;
      this.setState({products})
    })
      
  }
  render() {
    const filteredProducts = this.state.products.filter(product =>(
      product.company.toLowerCase().includes(this.state.searchField.toLowerCase())
    ))
    const { currentPage, todosPerPage } = this.state;
    const todos = [...filteredProducts]
    
      // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
    const renderTodos = currentTodos.map(product => {
      return <Product key={product.id } product={product}/>;
    });
    const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }
  
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <Button
          
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </Button>
        );
      });
    
    return (
      <div data-aos='fade-up'>
        <React.Fragment >
        <SlideBar />
        <div className="py-5">
          <div className="container">
          <div class="manu manu15">
          <div data-aos="fade-up">
          <div class="row" >
          <Button style={{ color:"#f4f5ed", margin: "1%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} onClick={(e) => this.setState({searchField:'',currentPage:1})}  class=" ">Tất cả</Button>
          <Button style={{ color:"#f4f5ed", margin: "1%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} onClick={(e) => this.setState({searchField:'Apple',currentPage:1})} data-id="80" data-name="iphone (apple)" class=" "><img src="//cdn.tgdd.vn/Brand/1/iPhone-(Apple)42-b_52.jpg"/></Button>
          <Button style={{ color:"#f4f5ed", margin: "1%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} onClick={(e) => this.setState({searchField:'SAMSUNG',currentPage:1})} data-id="2" data-name="samsung" class=" "><img src="//cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg"/></Button>
          <Button style={{ color:"#f4f5ed", margin: "1%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} onClick={(e) => this.setState({searchField:'Oppo',currentPage:1})} data-id="1971" data-name="oppo" class=" "><img src="//cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg"/></Button>
          <Button style={{ color:"#f4f5ed", margin: "1%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} onClick={(e) => this.setState({searchField:'HTC',currentPage:1})} data-id="2235" data-name="xiaomi" class=" "><img src="https://i.ibb.co/61XVrqB/HTC-Logo-Fanmade.jpg"/></Button>
         
          </div>
          </div>
         
                   
          </div>
            <div class="card">
              <div class="card-body">
              <div aos="fade" aos-duration="500">
              <div class="row">
              {renderTodos}
              </div>
              
              </div>
              <div class="d-flex justify-content-center">{renderPageNumbers}</div>
              
              </div>
            </div>
            
          </div>
        </div>
      </React.Fragment>
      </div>
      
    )
  }
}
