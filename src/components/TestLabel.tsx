import * as React from 'react'

export interface ITextObject{
    text:string
}

function isITextObject(input:any):input is ITextObject{
    return typeof input == 'object' && input.text !== undefined
}

class TestLabel extends React.Component<{ text:string | (()=>string) | ITextObject }>{
    render(){
        return (
            <div>
                {(()=>{
                    if(typeof this.props.text == 'string'){
                        return <div>{this.props.text}</div>
                    }else if(isITextObject(this.props.text)){
                        return <div>{this.props.text.text}</div>
                    }else{
                        return <div>{this.props.text()}</div>
                    }
                })()}
            
            </div>
        )
    }
}

export default TestLabel