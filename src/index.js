
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);


// function App() {

// 	let message = "byeee"
// 	if (Math.random() > 0.5) {
// 		message = "howdy!";
// 	}

// 	return <h1>{message}</h1>
// }


// function App() {

// const date = new Date();
// const time = date.toLocaleTimeString();

// return <h1>{time}</h1>;

// return <h1>{new Date().toLocaleTimeString()}</h1>;

// const name = "bob";
// const age = 50;

// return (
// 	<h1> hi, my name is {name} and I am {age} years old.</h1>
// );

// 	const inputType = "number";
// 	const minValue = 5;

// 	return <input style={{ border: "3px solid red" }} type={inputType} min={minValue} />;
// }

root.render(<App />);