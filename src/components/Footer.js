import React, { Component } from 'react';
import styled from 'styled-components';
export default class Navbar extends Component {
    render(){
        return (
          <div class="card">
              <div class="card-body blue">
            
<footer class="page-footer font-small blue pt-4 ">

  
  <div class="container-fluid text-center text-md-left">

    
    <div class="row">

    <hr class="clearfix w-100 d-md-none pb-3" />

              <div class="col-md-1 mb-md-0 mb-2"></div>
          <div class="col-md-3 mb-md-0 mb-2">

            <h5 class="text-uppercase">Liên hệ:</h5>

            <ul class="list-unstyled">
              <li>
                <a href="/">Hà Nội:Số 177,Thái Hà Hà Nội</a>
              </li>
              <li>
                <a href="/">Hồ Chí Minh:Số 36,Tân Bình</a>
              </li>
              <li>
                <a href="/">Số điện thoại:0923123122</a>
              </li>
              <li>
                <a href="/">HotLine: 1800 1010</a>
              </li>
            </ul>

          </div>



          <div class="col-md-3 mb-md-0 mb-2">


            <h5 class="text-uppercase">Hỗ trợ khách hàng:</h5>

            <ul class="list-unstyled">
              <li>
                <a href="/">Hướng dẫn mua hàng</a>
              </li>
              <li>
                <a href="/">Hóa đơn điện tử</a>
              </li>
              <li>
                <a href="/">Câu hỏi thường gặp</a>
              </li>
              <li>
                <a href="/">vận chuyển và giao nhận</a>
              </li>
            </ul>

          </div>
      <div class="col-md-5 mt-md-0 mt-3 w-100">

       
        <h5 class="text-uppercase">Sell Phone</h5>
        <Advisory>
        <div class="col-md-10 col-sm-10 col-xs-15">
            <div class="row">
            <ul class="list-unstyled m-0">
            <li class="mb-3">
            <p class="font-16 mb-2"><strong>Tìm cửa hàng</strong></p>
            <p class="mb-0"><a class="text-reset text-decoration-none" href="/">Tìm cửa hàng gần nhất</a></p>
            <p class="mb-0"><a class="text-reset text-decoration-none" href="/">Mua hàng từ xa</a></p>
            </li>
            <li class="box-cttt">
            <p class="font-16 mb-0"><strong>Phương thức thanh toán</strong></p>
            <ul class="col-md-6 col-sm-6  col-sm-6 d-flex flex-wrap m-0 list-unstyled">
            <li class="mt-2 pl-0 pr-2"><a href="/"><em class="border rounded icon-cps-visa"></em></a></li>
            <li class="mt-2 pl-0 pr-2"><a href="/"><em class="border rounded icon-cps-mastercard"></em></a></li>
            <li class="mt-2 pl-0 pr-2"><a href="/"><em class="border rounded icon-cps-atm"></em></a></li>
            <li class="mt-2 pl-0 pr-2"><a href="/"><em class="border rounded icon-cps-alepay"></em></a></li>
            <li class="mt-2 pl-0 pr-2"><a href="/"><em class="border rounded icon-cps-zalopay"></em></a></li>
            <li class="mt-2 pl-0 pr-2"><a href="/"><em class="border rounded icon-cps-vnpay"></em></a></li>
            <li class="mt-2 pl-0 pr-2"><a href="/"><em class="border rounded icon-cps-momo"></em></a></li>
            <li class="mt-2 pl-0 pr-2"><a href="/"><em class="border rounded icon-cps-mpos"></em></a></li>
            </ul>
            </li>
            </ul>
            </div>
            </div>
        </Advisory>

      </div>
      

      
     
      
    </div>
    

  </div>
  

  
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
  

</footer>
</div>
</div>
        )
    }
}
const Advisory = styled.div`
/*! CSS Used from: https://cdn.cellphones.com.vn/media/css_secure/6fd1ececbaf2f2c8aa8ea43532439dfd.css?v=1606296996 ; media=all */
@media all{
a{background-color:transparent;}
a:active,a:hover{outline:0;}
strong{font-weight:700;}
@media print{
*,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;-webkit-box-shadow:none!important;box-shadow:none!important;}
a,a:visited{text-decoration:underline;}
a[href]:after{content:" (" attr(href) ")";}
p{orphans:3;widows:3;}
}
*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
a{color:#337ab7;text-decoration:none;}
a:focus,a:hover{color:#23527c;text-decoration:underline;}
a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;}
p{margin:0 0 10px;}
ul{margin-top:0;margin-bottom:10px;}
ul ul{margin-bottom:0;}
.list-unstyled{padding-left:0;list-style:none;}
.row{margin-right:-15px;margin-left:-15px;}
.col-md-10,.col-md-3,.col-sm-10,.col-sm-3,.col-xs-3{position:relative;min-height:1px;padding-right:15px;padding-left:15px;}
.col-xs-3{float:left;}
.col-xs-3{width:25%;}
@media (min-width:768px){
.col-sm-10,.col-sm-3{float:left;}
.col-sm-10{width:83.33333333%;}
.col-sm-3{width:25%;}
}
@media (min-width:992px){
.col-md-10,.col-md-3{float:left;}
.col-md-10{width:83.33333333%;}
.col-md-3{width:25%;}
}
.row:after,.row:before{display:table;content:" ";}
.row:after{clear:both;}
*{margin:0;padding:0;}
a{color:#d70018;text-decoration:none;}
a:hover{color:#d70018;text-decoration:underline;}
:focus{outline:0;}
p{margin:0 0 10px;}
strong{font-weight:700;}
ul{list-style:none;}
[class*=icon-cps-]{display:inline-block;vertical-align:middle;background-image:url(https://cdn.cellphones.com.vn/media/icon/icons_menubar-11.svg);background-repeat:no-repeat;background-size:1000px;}
.icon-cps-visa{width:50px;height:30px;background-size:400px;background-position:1px -145px;}
.icon-cps-mastercard{width:50px;height:30px;background-size:400px;background-position:-48.8px -145px;}
.icon-cps-atm{width:50px;height:30px;background-size:400px;background-position:-98.5px -145px;}
.icon-cps-alepay{width:50px;height:30px;background-size:420px;background-position:-157px -152px;}
.icon-cps-zalopay{width:50px;height:30px;background-size:420px;background-position:-210px -153px;}
.icon-cps-vnpay{width:50px;height:30px;background-size:320px;background-position:-203px -113px;}
.icon-cps-momo{width:50px;height:30px;background-size:300px;background-position:-236px -106px;}
.icon-cps-mpos{width:50px;height:30px;background-size:380px;background-position:2px -161px;}
.list-unstyled{padding-left:0;list-style:none;}
.border{border:1px solid #dee2e6!important;}
.rounded{border-radius:.25rem!important;}
.d-flex{display:-ms-flexbox!important;display:flex!important;}
.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;}
.m-0{margin:0!important;}
.mb-0{margin-bottom:0!important;}
.mt-2{margin-top:5px!important;}
.mb-2{margin-bottom:5px!important;}
.mb-3{margin-bottom:10px!important;}
.pl-0{padding-left:0!important;}
.pr-2{padding-right:5px!important;}
.text-decoration-none{text-decoration:none!important;}
.text-reset{color:inherit!important;}
.font-16{font-size:16px!important;}
}
`