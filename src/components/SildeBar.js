import React, {  useEffect, useState} from 'react';
import {Service} from '../Service/api'

export default function SlideBar()  {
    function shuffle(array){
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
    
      const [item,setItem] = useState(0);
      useEffect(()=>{
        Service.getProducts().then((res)=>{
            const data = res.data.data
            const item = [...data];
        shuffle(item);
        let Ads = [];
        for(let i = 0;i <6;i++){
            Ads.push(item.shift().img)
        }
    
        setItem([...Ads])
        })
      },[])
    
    
      return (
          
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="rounded mx-auto d-block" src={`../${item[0]}`} alt={`Frist silde`} width="500" height="500"  ></img>
                </div>
                <div class="carousel-item">
                    <img class="rounded mx-auto d-block" src={`../${item[1]}`} alt="Second slide" width="500" height="500" ></img>
                </div>
                <div class="carousel-item">
                    <img class="rounded mx-auto d-block" src={`../${item[2]}`} alt="Third slide" width="500" height="500"></img>
               </div>
               <div class="carousel-item">
                    <img class="rounded mx-auto d-block" src={`../${item[3]}`} alt="Four slide" width="500" height="500"></img>
                </div>
                <div class="carousel-item">
                    <img class="rounded mx-auto d-block" src={`../${item[4]}`} alt="Five slide" width="500" height="500"></img>
                </div>
                <div class="carousel-item">
                    <img class="rounded mx-auto d-block" src={`../${item[5]}`} alt="Six slide" width="500" height="500"></img>
                </div>
            </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

      )
    
  }
