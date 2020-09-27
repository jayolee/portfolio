import React, { Component } from 'react';
import './App.scss';
import './projects.scss'
import './FA.scss'
import FAdetail from './FAdetail.js'
import FaCv from './FA_CV.js'

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
import paint19 from './FA/images/image4-5.jpg'
import paint20 from './FA/images/image5.jpg'
import paint21 from './FA/images/image6.jpg'
import paint22 from './FA/images/swamp.jpg'

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
			orderinArray: 0,
			imglist: {},
			active: true,
			opacity: 0,
		}


		this.gallery_paint = [{
			name: "Swamp (2020)",
			info: '36"x24", Acrylic on canvas',
			image: paint22,
			order: "first",
			dimension: 0,
		},{
			name: "New Beginning (2020)",
			info: '24"x30", Acrylic on canvas',
			image: paint19,
			dimension: 0,

		}, {
			name: "Summer Shadows (2016)",
			info: '24"x30", Oil on canvas',
			image: paint5,
			dimension: 1,

		},
		{
			name: "Passing By (2015)",
			info: '36"x24", Oil and acrylic on canvas',
			image: paint10,
			dimension: 0,

		},
		{
			name: "The Return (2015)",
			info: '24"x30", Oil on canvas',
			thumbnail: "/thumbs/thumb3-4.jpg",
			image: paint14,
			dimension: 1

		},
		{
			name: "Awakening (2014)",
			info: '24"x36", Oil and acrylic on canvas',
			image: paint18,
			dimension: 1

		},
		{
			name: "The Great Change (2014)",
			info: '30"x24", Oil and acrylic on canvas',
			image: paint4,
			dimension: 0,

		},
		{
			name: "Waiting for Spring (2013)",
			info: '32"x18", Oil and acrylic on canvas',
			image: paint9,
			dimension: 0,

		},
		{
			name: "Warm Solitude (2013)",
			info: '30"x24", Oil and acrylic on canvas',
			image: paint13,
			dimension: 0,

		},
		{
			name: "The Edge (2013)",
			info: '19"x34", Oil on canvas',
			image: paint17,
			dimension: 1

		},
		{
			name: "Autumn Verge (2013)",
			info: '24"x30", Oil on canvas',
			image: paint3,
			dimension: 1

		},
		{
			name: "Edge of Summer (2012)",
			info: '18"x24", Oil on canvas',
			image: paint8,
			dimension: 1

		},
		{
			name: "Embracing (2013)",
			info: '36"x24", Oil on canvas',
			image: paint12,
			dimension: 1

		},
		{
			name: "The Sunday (2013)",
			info: '16"x24", Oil on panel',
			image: paint16,
			dimension: 0,

		},
		// {
		// 	name: "Summer, in the House (2013)",
		// 	info: '24"x16", Oil on panel',
		// 	image: paint2,
		// 	dimension: 0,

		// },
		{
			name: "The Night (2013)",
			info: '24"x18", Oil on canvas',
			image: paint7,
			dimension: 0,

		},
		{
			name: "Walking In the Summer (2015)",
			info: '11"x14", Oil and acrylic on canvas',
			image: paint11,
			dimension: 0,

		},
		{
			name: "Closing of the Day (2015)",
			info: '11"x14", Oil on canvas',
			image: paint15,
			dimension: 1

		},
		{
			name: "Sunday Morning (2015)",
			info: '9"x12", Oil on canvas',
			image: paint1,
			dimension: 1

		},
		{
			name: "Summer Night (2013)",
			info: '14"x11", Oil on canvas',
			image: paint6,
			dimension: 0,
			order: "last",
		}
		];
		this.gallery_draw = [{
			name: "Late Afternoon (2020)",
			info: '8"x5.5", Watercolor on paper',
			image: paint20,
			others: "watercolor",
			dimension: 0,

		}, {

			name: "New Beginning (2020)",
			info: '7"x7", Watercolor on paper',
			image: paint21,
			others: "watercolor",
			dimension: 0,

		},
			{
				name: "The Way Home ",
				info: '7.5"x7" Collage',
				image: draw1,
				order: "first",
				dimension: 1
			},
			{
				name: "Demarcation",
				info: '7.5"x6" Collage',
				image: draw3,
				dimension: 1

			},
			{
				name: "Snow Day I",
				info: '6.5"x5" Collage',
				image: draw5,
				others: "watercolor",
				dimension: 0
			},
			{
				name: "Snow Day II",
				info: '7"x3.5" Collage',
				image: draw7,
				others: "watercolor",
				dimension: 0
			},
			{
				name: "Solitude I  (2012)",
				info: '24"x18" Drypoint with watercolor',
				image: draw2,
				dimension: 0

			},
			{
				name: "Solitude II (2013)",
				info: '24"x18" Drypoint with watercolor',
				image: draw4,
				dimension: 0

			},
			{
				name: "The Edge of Winter (2013)",
				info: '8"x6" Mezzotint',
				image: draw6,
				dimension: 0,
				order: "last",
			}
		];
		this.gallery_others = [
			{
				name: "Solitude (2013)",
				info: '7"x8"x4" Plaster',
				image: other1,
				dimension: 0,
				order: "first",
			},
			{
				name: "Pottery (2016)",
				info: '5"x5"x2.3"',
				image: other2,
				dimension: 0

			},
			{
				name: "Pottery (2016)",
				info: '5"x5"x2"',
				image: other3,
				dimension: 0

			},
			{
				name: "Pottery (2016)",
				info: '5"x5"x2"',
				image: other4,
				dimension: 0

			},
			{
				name: "Pottery (2016)",
				info: '5"x5"x2"',
				image: other5,
				dimension: 0

			},
			{
				name: "Pottery (2016)",
				info: '5.7"x5.7"x2.7"',
				image: other6,
				order: "last",
				dimension: 0
			},
		];
	}

	closehandler() {
		this.setState({ page: 0, opacity: 0 });

	}

	listgenerator(imagelist) {
		let element = [];
		for (let i = 0; i < imagelist.length; i++) {
			element.push(
				<div className="fa" key={"imagewrapper" + i} onClick={(ev) => this.setState({ page: 5, orderinArray: i, order: imagelist[i].order, imglist: imagelist })}>
					<div className="portwrap" >
						<img className="longim" src={imagelist[i].image} alt={imagelist[i].name} key={imagelist[i].name + "img"} />
						<div className="titlebox" key={imagelist[i].name}>
							{imagelist[i].name}<br />
							<span className="types" key={imagelist[i].name + "info"}>
								{imagelist[i].info}
							</span>
						</div>
					</div>
				</div>
			)
		}

		return element
	}
	bioGenerator() {
		if (this.state.page === 9) {
			return <FaCv key="cv" closehandle={this.closehandler.bind(this)} />
		}
	}
	detailviewgenerator() {
		if (this.state.page === 5) {
			return <FAdetail key="fadetail" imglist={this.state.imglist} orderinArray={this.state.orderinArray} closehandle={this.closehandler.bind(this)} />
		}
	}

	render() {

		return (
			<div className="workbox">
				<div className="button fa" onClick={(ev) => this.setState({ page: 9 })}>Artist CV</div>
				<div style={{ margin: "0 auto 90px", maxWidth: "1300px" }}>
					{this.listgenerator(this.gallery_paint)}
				</div>
				<div style={{ margin: "0 auto 90px", maxWidth: "1300px" }}>
					{this.listgenerator(this.gallery_draw)}
				</div>
				<div style={{ margin: "0 auto 90px", maxWidth: "1300px" }}>
					{this.listgenerator(this.gallery_others)}
				</div>
				{this.detailviewgenerator()}
				{this.bioGenerator()}
			</div>

		);
	}
}

export default FAs;
