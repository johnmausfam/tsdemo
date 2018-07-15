import * as React from 'react';

declare interface FuncButtonProps {
    className?:string,
	enable?:boolean,
	disableAfterClick?:boolean,
	text:string,
	value?:any,
	onClick?:(e:{value:string})=>void,
	iconName?:string,
	buttonStyle?:string
}

declare class FuncButton extends React.Component<FuncButtonProps, any> {
}

declare type IFuncButtonIcon = {
    [key:string]:string
}

declare type IFuncButtonStyle = {
    [key in "submit" | "cancel"]:string    
}
export default FuncButton
export declare const FuncButtonIcon:IFuncButtonIcon
export declare const FuncButtonStyle:IFuncButtonStyle