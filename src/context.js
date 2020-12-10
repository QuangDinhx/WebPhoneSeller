
import React, { Component } from 'react';
import {Service} from './Service/api'
import PropTypes, { string } from 'prop-types';




const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
  
  data;
  state = {
    products: [],
    detailProduct: [],
    cart: [],
    modalOpen: false,
    modalProduct: 0,
    cartSubTotal: [],
    cartTax: 0,
    cartTotal: 0,
    isLogin: false,
    user:{
      userName:'',
      permission:''
    },
    LoginOpen: false,
    SignUpOpen: false,
    
    
  }

  async componentDidMount() {
  Service.getProducts().then((res)=>{
      const data = res.data.data
      const products = data;
      
      
      this.data = data;
      let state = JSON.parse(localStorage.getItem('State')) !== null ? JSON.parse(localStorage.getItem('State')):[]
      this.setState({
        products:products,
        detailProduct:state.detailProduct,
        cart:state.cart?state.cart:[],
        modalProduct:state.modalProduct?state.modalProduct:0,
        cartSubTotal:state.cartSubTotal,
        cartTax:state.cartTax,
        cartTotal:state.cartTotal
      })
      this.setProducts();
      localStorage.setItem('State',JSON.stringify(this.state));
    

  })
 
      
  }

  setProducts = () => {
    let tempProducts = [];
    this.data.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    })
    this.setState(() => {
      return { products: tempProducts };
    })
    
    localStorage.setItem('State',JSON.stringify(this.state));
  }

  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }


  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product }
    })
    localStorage.setItem('State',JSON.stringify(this.state));
  }
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
      product.inCart = true;
      product.count = 1;
    
    
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return {
        products: tempProducts,
        cart: [...this.state.cart, product],
      }
    }, () => {
      this.addTotals();
    })
    
    localStorage.setItem('State',JSON.stringify(this.state));
  }
  

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true }
    })
    localStorage.setItem('State',JSON.stringify(this.state));
  }
  openLogin=()=>{
    this.setState(()=>{
      return { LoginOpen:true}
    })
  }
  closeLogin=()=>{
    this.setState(()=>{
      return { LoginOpen:false}
    })
  }
  openSignUp = () => {
    this.setState(()=>{
      return { SignUpOpen: true}
    })
  }
  closeSignUp = () =>{
    this.setState(()=>{
      return { SignUpOpen: false}
    })
  }
  setUser = (user) =>{
    if(user){
      this.setState(()=>{
        return { user: user}
      })
    }
  }
  setLogin=()=>{
    if(this.state.isLogin === false){
      this.setState(()=>{
        return { isLogin: true}
      })
    }else{
      this.setState(()=>{
        return { isLogin: false}
      })
    }
  }
  Logout=()=>{
    localStorage.removeItem('State');
    this.setLogin();
  }

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    })
  }

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);

    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => { return { cart: [...tempCart] } }, () => { this.addTotals() })
    
    localStorage.setItem('State',JSON.stringify(this.state));
  }

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals(); 
        }
      )
    }
    
    localStorage.setItem('State',JSON.stringify(this.state));
  }

  removeItem = (id) => {
    console.log('adas')
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      }
    }, () => {
      this.addTotals();
    })
   
    localStorage.setItem('State',JSON.stringify(this.state));
  }
  setProducts = (products) =>{
    if(products){
      this.setState(()=>{
        return {products:products}
      })
    }
    
  }

  
  clearCart = () => {
    this.setState(() => {
      return { cart: [] };
    }, () => {
      this.setProducts();
      this.addTotals();
    });
    
    localStorage.setItem('State',JSON.stringify(this.state));
  }

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      }
    })
    
    localStorage.setItem('State',JSON.stringify(this.state));
  }
  
  shuffle(array){
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  getAds(){
    let Ads = [];
    let products = [...this.data];
    this.shuffle(products)
    for(let i = 0;i< 6;i++){
      Ads.push(products.shift())
    }
    return Ads;
  }
  

  render() {
    return (
      <ProductContext.Provider value={{
        
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        openLogin:this.openLogin,
        closeLogin:this.closeLogin,
        openSignUp:this.openSignUp,
        closeSignUp:this.closeSignUp,
        setUser:this.setUser,
        Logout:this.Logout,
        setLogin:this.setLogin,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart,
        setProducts: this.setProducts
        
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };