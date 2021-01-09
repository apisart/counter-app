/**
 * Ref: https://www.youtube.com/watch?v=Ke90Tje7VS0
 * 		
 * 		https://flaviocopes.com/react-how-to-loop/
 * 		https://www.w3schools.com/react/react_css.asp
 */

import React, { Component } from "react";
import imgDolphin from "../img/Dolphin.png";

class Counter extends Component {
	constructor(props) {
		super(props);	// to call the ctor of the parent class "React.Component"	// need to calls this to avoid the following error: 'this' is not allowed before super()

		this.state = {
			count: 0,
			arrTag: ["tagA", "tagB", "tagC"],
			productId: 101, 
			// imgUrl: imgDolphin,
			// imgUrl: "https://picsum.photos/id/237/200/300",
			imgUrl: "https://picsum.photos/200",	// this will generate a random picture of 200*200 pixel.
			address: {
				street: "Viphavadee"
			}
		} // state

		this.stylesSpan = {
			fontSize: 10,
			fontWeight: "bold",
			textAlign: "center"
		} // stylesSpan
	
		this.stylesBtn = {
			fontSize: 30,
			fontWeight: "bold",
			textAlign: "center"
		} // stylesBtn

		this.click__ = {
			/**
			 * Ref: https://reactjs.org/docs/react-component.html
			 * 		https://swsinswsin.medium.com/typeerror-cannot-read-property-state-of-undefined-ab77e924f992
			 * 		https://stackoverflow.com/questions/35287949/react-with-es7-uncaught-typeerror-cannot-read-property-state-of-undefined
			 * 		https://stackoverflow.com/questions/61229720/cannot-access-props-from-function-inside-react-component
			 * 		
			 * 		https://reactjs.org/docs/handling-events.html
			 * 
			 * 		https://timellenberger.com/libraries/use-double-click
			 * 
			 * 		https://www.w3schools.com/jsref/event_ondblclick.asp
			 * 		https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_cleartimeout
			 * 		https://stackoverflow.com/questions/25777826/onclick-works-but-ondoubleclick-is-ignored-on-react-component
			 */
	
			timerClick: null,
			DifferentiatingTime: 250,
			clickedCount: 0,
			isClicked: false,
		} // click__

		// this.btnInc__onClick_Handler = this.btnInc__onClick_Handler.bind(this)	// WK
	} // ctor

	

	render() {
		// let classSpan = "badge m-2 badge-";
		// classSpan += this.state.count === 0 ? "warning" : "primary";

		// let classSpan = this.getClassSpan();

		return (
			// Ex01:
			// <div>
			// 	<h1>Hello World!</h1>
			// 	<button>Increment</button>
			// </div>

			// Ex02:
			// <React.Fragment>
			// 	<h1>Hello World!</h1>
			// 	<button>Increment</button>
			// </React.Fragment>

			// Ex03:
			// <React.Fragment>
			// 	<span>{this.state.count}</span>
			// 	<br />
			// 	<button>Increment</button>
			// </React.Fragment>

			// Ex04:
			<React.Fragment>
				<img src={this.state.imgUrl} alt="HeaderImg" onDoubleClick={this.btn_onDoubleClick} />
				<br />

				{/* SubExA01:v01: */}
				{/* <span
					style={ { fontSize: 50 } }		// { fontSize: 50 } is JavaScript-Object
					className="badge badge-primary m-2"
				>
					{this.formatCount()}
				</span> */}

				{/* SubExA01:v02: */}
				{/* <span style={this.stylesSpan} className="badge badge-primary m-2">{this.formatCount()}</span> */}

				{/* SubExA01:v03: */}
				{/* <span style={this.stylesSpan} className={classSpan}>{this.formatCount()}</span>

				<button	style={this.stylesBtn} className="btn btn-secondary mb-3">Increment</button> */}

				{/* SubExA01:v04: */}
				<span style={this.stylesSpan} className={this.getClassSpan()}>{this.format__count()}</span>
				<br />
				<span style={this.stylesSpan} className={"badge badge-info m-2"}>{<h2>{this.state.productId}</h2>}</span>

				{this.renderTag()}

				<button
					className="btn btn-secondary m-3" 
					style={this.stylesBtn} 
					// onClick={this.btnInc__onClick_Handler}
					// onClick={this.inclementTotal}
					onClick={() => this.inclementTotal(this.state.productId)}
				>
					Increment
				</button>
				<button
					className="btn btn-secondary m-3" 
					style={this.stylesBtn} 
					// onClick={this.declementTotal}
					onClick={() => this.declementTotal(this.state.productId)}
				>
					Decrement
				</button>
			</React.Fragment>
		);
		
	} // render



	/**
	 * Ref: https://stackoverflow.com/questions/35287949/react-with-es7-uncaught-typeerror-cannot-read-property-state-of-undefined
	 * 		https://stackoverflow.com/questions/61229720/cannot-access-props-from-function-inside-react-component
	 * 
	 * 		https://www.youtube.com/watch?v=Ke90Tje7VS0
	 * 		In the time of 1:07:33: Arrow function inherited the "this" keyword.
	 */
	// btnInc__onClick_Handler__setTimeout() {	// NOT WK: Uncaught TypeError: Cannot read property 'clickedCount' of undefined
	btnInc__onClick_Handler__setTimeout = () => {	// WK
	// btnInc__onClick_Handler__setTimeout = async () => {	// WK
		if (this.click__.clickedCount === 1) {
			clearTimeout(this.click__.timerClick);	// reset
			this.click__.clickedCount = 0;	// reset
			this.click__.isClicked = false;	// reset

			this.btnInc__onClick_Action();
		}
	} // btnInc__onClick_Handler__setTimeout
	// btnInc__onClick_Handler() {	// NOT WK: Uncaught TypeError: Cannot read property 'clickedCount' of undefined
	btnInc__onClick_Handler = () => {	// WK
	// btnInc__onClick_Handler = async () => {	// WK
		this.click__.clickedCount++;
		// console.log(this.click__.clickedCount);	// mai: for debug only

		this.click__.timerClick = setTimeout(this.btnInc__onClick_Handler__setTimeout, this.click__.DifferentiatingTime);
		
		if (this.click__.isClicked === false && this.click__.clickedCount >= 2) {
			clearTimeout(this.click__.timerClick);	// reset
			this.click__.clickedCount = 0;	// reset

			this.btnInc__onDoubleClick_Action();
		}
	} // btnInc__onClick_Handler
	btnInc__onClick_Action() {
		// alert('Single-Click!');
		// console.log('Single-Click!');

		this.inclementTotal();
	} // btnInc__onClick_Action
	btnInc__onDoubleClick_Action() {
		// alert('Double-Click!');
		// console.log('Double-Click!');
	} // btnInc__onDoubleClick_Action



	inclementTotal = (productId) => {
		this.setState({count: this.state.count + 1});
		console.log(`productId{productId}`);
	} // inclementTotal
	declementTotal = (productId) => {
		if (this.state.count === 0)
			return;

		this.setState({count: this.state.count - 1});
		console.log(`productId{productId}`);
	} // declementTotal



	renderTag()	{
		if (this.state.arrTag.length === 0)
			return <div style={{backgroundColor: "green"}}>There is no tag!</div>;

		return (
			// v01:
			this.format__arrTag01()

			// v02:
			// this.format__arrTag02()
		);
	} // renderTag

	getClassSpan() {
		let classSpan = "badge m-2 badge-";
		classSpan += this.state.count === 0 ? "warning" : "primary";
		return classSpan;
	} // getClassSpan

	format__count() {
		// Ex01:
		// return this.state.count === 0 ? "Zero" : this.state.count;

		// Ex02:
		// import { CoursesComponent } from './courses.component';

		// Ex03:
		// const { count } = this.state;
		// return count === 0 ? "Zero" : count;

		// Ex04:
		// const { count } = this.state;
		// return count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>; // JSX expression is just like JavaScript-Object, as Bable will translate it, so we can return it from function, or pass it as parameter to function, or use it as value of a constant or variable.

		// Ex05:
		const { count } = this.state;
		const elementZero = <h1>Zero</h1>;
		const elementCount = <h1>{count}</h1>;
		return count === 0 ? elementZero : elementCount; // JSX expression is just like JavaScript-Object, as Bable will translate it, so we can return it from function, or pass it as parameter to function, or use it as value of a constant or variable.
	} // format__count

	/**
	 * Ref: https://flaviocopes.com/react-how-to-loop/
	 */
	format__arrTag01() {
		return (
			<ul style={{backgroundColor: "green"}}>
				{/* // WK but with Warning: Each child in a list should have a unique "key" prop. */}
				{/* {this.state.arrTag.map(tag => <li>{tag}</li>)} */}		
				
				{/* this is the prefer way, due to each item should be definded a Unique-key, but in this case each element of "arrTag" need to be different. */}
				{/* {this.state.arrTag.map(tag => <li key={tag}>{tag}</li>)}	 */}
				
				{/* this is the prefer way. */}
				{/* Ref: https://flaviocopes.com/react-how-to-loop/ */}
				{this.state.arrTag.map((value, index) => {
					return <li key={index}>{value}</li>;
				})}
			</ul>
		);
	} // format__arrTag01

	format__arrTag02() {
		let arr_li = [];

		// this is the prefer way.
		for (const [index, value] of this.state.arrTag.entries()) {	// WK
			arr_li.push(<li key={index}>{value}</li>);
		}

		// WK but with Warning: Each child in a list should have a unique "key" prop.
		// for (const [index, value] of this.state.arrTag.entries()) {
		// 	arr_li.push(<li>{value}</li>);
		// }

		// WK but with Warning: Each child in a list should have a unique "key" prop.
		// for (const xxx of this.state.arrTag.entries()) {
		// 	arr_li.push(<li>{xxx}</li>);
		// }

		return (
			<ul>
				{arr_li}
			</ul>
		);
	} // format__arrTag02

} // Counter

export default Counter;
