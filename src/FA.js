import React, { Component } from 'react';
import './App.scss';
import './projects.scss'
import './FA.scss'
import FAdetail from './FAdetail.js'

import paint1 from './FA/images/image1-1.jpg'
import paint2 from './FA/images/image1-2.jpg'
import paint3 from './FA/images/image1-3.jpg'
import paint4 from './FA/images/image1-4.jpg'
import paint5 from './FA/images/image1-5.jpg'
import paint6 from './FA/images/image2-1.jpg'
import paint7 from './FA/images/image2-2.jpg'
import paint8 from './FA/images/image2-3.jpg'
import paint9 from './FA/images/image2-4.jpg'
import paint10 from './FA/images/image2-5.jpg'
import paint11 from './FA/images/image3-1.jpg'
import paint12 from './FA/images/image3-2.jpg'
import paint13 from './FA/images/image3-3.jpg'
import paint14 from './FA/images/image3-4.jpg'
import paint15 from './FA/images/image4-1.jpg'
import paint16 from './FA/images/image4-2.jpg'
import paint17 from './FA/images/image4-3.jpg'
import paint18 from './FA/images/image4-4.jpg'

import draw1 from './FA/images/draw5-1.jpg'
import draw2 from './FA/images/draw5-2.jpg'
import draw3 from './FA/images/draw6-1.jpg'
import draw4 from './FA/images/draw6-2.jpg'
import draw5 from './FA/images/draw7-1.jpg'
import draw6 from './FA/images/draw7-2.jpg'
import draw7 from './FA/images/draw8-1.jpg'

import other1 from './FA/images/oth1.jpg'
import other2 from './FA/images/oth2.jpg'
import other3 from './FA/images/oth3.jpg'
import other4 from './FA/images/oth4.jpg'
import other5 from './FA/images/oth5.jpg'
import other6 from './FA/images/oth6.jpg'


class FAs extends Component {

  constructor(props) {
    super(props);
    this.state = {
	  page: 3,
	  order: 0, 
	  orderinArray:0,
	  imglist:{},
	  active:true,
	  
    }

   
    this.gallery_paint =[{
			name : "Summer Shadows (2016)",
			info: '24"x30", Oil on canvas',
			image:paint5,
			order:"first",
					   
			},
			{
			name : "Passing By (2015)",
			info: '36"x24", Oil and acrylic on canvas',
			image:paint10,
				   
			},
			  {
			name : "The Return (2015)",
			info: '24"x30", Oil on canvas',
			thumbnail: "/thumbs/thumb3-4.jpg",
			image:paint14,
				   
			},
			{
			name : "Awakening (2014)",
			info: '24"x36", Oil and acrylic on canvas',
			image:paint18,
					   
			},
			{
			name : "The Great Change (2014)",
			info: '30"x24", Oil and acrylic on canvas',
			image:paint4,
					   
			},
			 {
			name : "Waiting for Spring (2013)",
			info: '32"x18", Oil and acrylic on canvas',
			image:paint9,
						   
			},
			 {
			name : "Warm Solitude (2013)",
			info: '30"x24", Oil and acrylic on canvas',
			image:paint13,
				   
			},
		 {
			name : "The Edge (2013)",
			info: '19"x34", Oil on canvas',
			image:paint17,
					   
			},
			{
			name : "Autumn Verge (2013)",
			info: '24"x30", Oil on canvas',
			image:paint3,
				   
			},
			 {
			name : "The Edge of Summer (2012)",
			info: '18"x24", Oil on canvas',
			image:paint8,
					   
			},
			{
			name : "Embracing (2013)",
			info: '36"x24", Oil on canvas',
			image:paint12,
					   
			}, 
			{
			name : "The Sunday (2013)",
			info: '16"x24", Oil on panel',
			image:paint16,
						   
			},
			 {
			name : "Summer, in the House (2013)",
			info: '24"x16", Oil on panel',
			image:paint2,
				   
			},
			 {
			name : "The Night (2013)",
			info: '24"x18", Oil on canvas',
			image:paint7,
				   
			},
			{
			name : "Walking In the Summer (2015)",
			info: '11"x14", Oil and acrylic on canvas',
			image:paint11,
					   
			},
			{
			name : "Closing of the Day (2015)",
			info: '11"x14", Oil on canvas',
			image:paint15,
				   
			},
			{name : "Sunday Morning (2015)",
			info: '9"x12", Oil on canvas',
			image:paint1,
			    
			},
			 {
			name : "Summer Night (2013)",
			info: '14"x11", Oil on canvas',
			image:paint6,
			order:"last",   
			}	
			 ];
this.gallery_draw=[
			{name : "The Way Home ",
			info: '7.5"x7" Collage',
			image:draw1, 
			order:"first", 
			},
			{
			name : "Demarcation",
			info: '7.5"x6" Collage',
			image:draw3,
				    
			},
			{
			name : "Snow Day I",
			info: '6.5"x5" Collage',
			image:draw5,
					   
			},
			{
			name : "Snow Day II",
			info: '7"x3.5" Collage',
			image:draw7,
				  
			},
			{
			name : "Solitude I  (2012)",
			info: '24"x18" Drypoint with watercolor',
			image:draw2,
				   
			},
			{
			name : "Solitude II (2013)",
			info: '24"x18" Drypoint with watercolor',
			image:draw4,
				   
			},
			{
			name : "The Edge of Winter (2013)",
			info: '8"x6" Mezzotint',
			image:draw6,
			order:"last",   	   
			}
				];
this.gallery_others=[
			{name : "Solitude (2013)",
			info: '7"x8"x4" Plaster',
			image:other1, 
			order:"first", 
			},
			{
			name : "Pottery (2016)",
			info: '5"x5"x2.3"',
			image:other2,
				    
			},
			{
			name : "Pottery (2016)",
			info: '5"x5"x2"',
			image:other3,
					   
			},
			{
			name : "Pottery (2016)",
			info: '5"x5"x2"',
			image:other4,
				  
			},
			{
			name : "Pottery (2016)",
			info: '5"x5"x2"',
			image:other5,
				    
			},
			{
			name : "Pottery (2016)",
			info: '5.7"x5.7"x2.7"',
			image:other6,	
			order:"last",     
			},
				];
    }

	closehandler(){
		setTimeout(this.setState({page:0}), 300);
		
	  }

  listgenerator(imagelist) {
    let element=[];
    for(let i=0;i<imagelist.length;i++){
        element.push(
          <div className="fa" onClick={(ev) => this.setState({page : 5,  orderinArray: i, order: imagelist[i].order, imglist: imagelist})}>
            <div className="portwrap" >
              <img className="longim" src={imagelist[i].image} key= {imagelist[i].name+"img"}/>
              <div className="titlebox" key= {imagelist[i].name}>
              {imagelist[i].name}<br />
              <span className="types" key= {imagelist[i].name+"info"}>
              {imagelist[i].info}
              </span>
              </div>
            </div>
          </div>
        )
  }
  
  return element
}
detailviewgenerator(){
	if(this.state.page === 5){
		return <FAdetail imglist = {this.state.imglist } orderinArray = {this.state.orderinArray} closehandle={this.closehandler.bind(this)} />
	}
}

  render(){

    return (
      <div className="workbox">
		{this.listgenerator(this.gallery_paint)}
		{this.listgenerator(this.gallery_draw)}
		{this.listgenerator(this.gallery_others)}
		{this.detailviewgenerator()}
      </div>

    );
  }
}

export default FAs;
