import React from "react";

export class Home extends React.Component {
	constructor(props) {
			super();
			this.state={
				age:props.initialAge,
				status:0,
				homeLink:props.initialLinkName
			};
			setTimeout(() => {
				this.setState({
					status: 1
				});
			},3000);
		}

	onMakeOlder() {
			this.setState({	
				age: this.state.age += 3
			});
		}

		onChangeLink(){
			this.props.changeLink(this.state.homeLink);

		}
		onHandleChange(event){
			this.setState({
				homeLink:event.target.value	
			});
		}

	render() {
		return(
			<div>
				<h1>In Home Comp</h1>
				<p>Your name is { this.props.name }, and your age is  {this.state.age} </p>
				<p>Status : { this.state.status }</p>
				<button className="btn btn-primary" onClick={() => this.onMakeOlder() }>Make me older </button>
				<hr/>
				<button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
				<hr/>
				<input type="text" value={this.state.homeLink} onChange={(event) => {this.onHandleChange(event)}}/>
				<button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header</button>

			</div>	
			);
	}
}

