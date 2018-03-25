import React from "react";
import { render } from "react-dom";

import { Accordian } from "./components/Accordian";
import { Header } from "./components/Header";
import { data } from './data/data';


class App extends React.Component {
	constructor(){
		super();
	}
	render() {
		return (
    <Accordian>{data.AccordianHeaders}</Accordian>
		);
	}
}

render(<App/>, window.document.getElementById("app"));