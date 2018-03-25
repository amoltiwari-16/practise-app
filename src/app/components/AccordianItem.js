import React from "react";

export const AccordianItem = (props) => {
		return(
		<div>
			{props.contd.map((per)=><p key={per.id}>{per.name}</p>)}
		</div>
			);
}