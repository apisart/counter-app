/**
 * Ref: https://www.youtube.com/watch?v=Ke90Tje7VS0
 */

import React, { Component } from "react";
import imgDolphin from "../img/Dolphin.png";

class Counter extends Component {
	state = {
		count: 0,
		// imgUrl: imgDolphin,
		// imgUrl: "https://picsum.photos/id/237/200/300",
		imgUrl: "https://picsum.photos/200", // this will generate a random picture of 200*200 pixel.
		address: {
			street: "Viphavadee",
		},
	};

	render() {
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
				<img src={this.state.imgUrl} alt="HeaderImg" />
				<span>{this.formatCount()}</span>
				<button>Increment</button>
			</React.Fragment>
		);
	}

	formatCount() {
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
	}
}

export default Counter;
