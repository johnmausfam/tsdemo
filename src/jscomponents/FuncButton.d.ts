import * as React from 'react';
declare module './FuncButton.jsx'
{
	export interface FuncButtonProps {
		className?:string,
		enable?:boolean,
		disableAfterClick?:boolean,
		text:string,
		value?:any,
		onClick?:(e:{value:string})=>void,
		iconName?:string,
		buttonStyle?:string
	}
	
	export default class FuncButton extends React.Component<FuncButtonProps, any> {
	}
	
	export type IFuncButtonIcon = {
		[key:string]:string
	}
	
	export type IFuncButtonStyle = {
		[key in "submit" | "cancel"]:string    
	}
	export const FuncButtonIcon:IFuncButtonIcon
	export const FuncButtonStyle:IFuncButtonStyle
}
