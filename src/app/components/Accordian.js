import React from "react";
import { AccordianItem } from './AccordianItem';
import { data } from '../data/data';

export class Accordian extends React.Component {
	constructor(props) {
			super();
			this.month = new Date().getMonth();
			this.initialState = Array.from({ length: 12 }, () => false);
			this.initialState[this.month]=true;
			this.state={
				active:this.initialState
			};
			}

	handleClick = (key,e) => {
		const accordianItems = this.state.active;
		accordianItems.fill(false);
		accordianItems[key]=true;
		this.setState({
				active:accordianItems

		});
		//console.log("in handle "+key);
	}		

	render() {

	const active = this.state.active;
		return(
	<div className="doc">
		{this.props.children.map((menu,i)=>
		<section id={menu} key={i}>
		<a href={'#'+menu} onClick={(e)=>{this.handleClick(i,e)}}>{menu}</a>
		{active[i]?<AccordianItem contd={data.AccordianItemValues.filter((p) => this.props.children[new Date(p.dob).getMonth()]==menu)}/> : null}
		</section>)}
    </div>
			);
	}
}

//Person.filter((p) => this.props.menus[d.getMonth(p.dob)]=={menu} )