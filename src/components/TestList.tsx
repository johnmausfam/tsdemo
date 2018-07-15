import * as React from 'react'

export interface ITestListProps<D = any> { 
    renderer:(data:D,index?:number)=>React.ReactNode
    data:Array<D>
}

class TestList<D = any> extends React.Component<ITestListProps<D>>{
    render(){
        return (
            <ul>
                <li>{this.props.data.map((d,i)=>this.props.renderer(d,i))}</li>
            </ul>
        )
    }
}

export default TestList