import "./index.css";

import React, { useEffect, useState } from "react";


const App = () => {

	const [count,setCount] = useState(0);

	const evenHandling = () => {
		setCount(count+1);
	  }

	  const eventHandling = () => {
		setCount(count-1);
	  }

	return (
		<section className="items">
		<button onClick={eventHandling}>-</button>
		<h1>Count : {count}</h1>
		<button onClick={evenHandling}>+</button>
		</section>
	);
};

export default App;
