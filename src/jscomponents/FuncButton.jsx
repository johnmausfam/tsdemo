import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import './css/FuncButton.css'

class FuncButton extends Component {
	constructor(props){
		super(props);
		this.state={
			enable:true
		};
	}

	disable(){
		if(this.state.enable){
			this.state.enable = false;
			this.setState({...this.state});
		}
	}

	enable(){
		if(!this.state.enable){
			this.state.enable = true;
			this.setState({...this.state});
		}
	}

	isEnable(){
		return this.state.enable && (this.props.enable === undefined || this.props.enable === true);
	}

	_button_onClick(e){
		if(this.isEnable()){
			if(this.props.disableAfterClick)
				this.disable();
			if(this.props.onClick)
				this.props.onClick({
					value:this.props.value
				});
		}
	}

	_getRenderClassName(){
		var r = "c_fnb" + (this.isEnable() ? " enable": "");
		if(this.props.className)
			r += " " + this.props.className;
		if(this.props.buttonStyle)
			r += " " + this.props.buttonStyle;
		return r;
	}

	_renderIcon(){
		if(this.props.iconName)
			return <div className={"c_fnb_icon " + this.props.iconName}></div>
	}

	render(){
		return (
			<div className={this._getRenderClassName()} onClick={this._button_onClick.bind(this)}>
				{this._renderIcon()}
				<span>{this.props.text}</span>
			</div>
		)
	}
}

FuncButton.propTypes = {
	className:PropTypes.string,
	enable:PropTypes.bool,
	disableAfterClick:PropTypes.bool,
	text:PropTypes.string,
	value:PropTypes.any,
	onClick:PropTypes.func,
	iconName:PropTypes.string,
	buttonStyle:PropTypes.string
}

export default FuncButton

export const FuncButtonIcon = {
	"Ok":"c_fnb_icon_ok",
	"cancel":"c_fnb_icon_cancel",
	"search":"c_fnb_icon_search",
	"info":"c_fnb_icon_info"
};

export const FuncButtonStyle = {
	"submit":"c_fnb_submit",
	"cancel":"c_fnb_cancel"
};