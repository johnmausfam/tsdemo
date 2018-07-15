import * as React from 'react'

export interface ITestTableProps<D = any> { 
    renderer:(data:D,index?:number)=>React.ReactNode
    data:Array<D>
    className?:string
}

class TestTable<D = any> extends React.Component<ITestTableProps<D>>{
    render(){
        return (
            <table className={this.props.className}>
                <tr><td>{this.props.data.map((d,i)=>this.props.renderer(d,i))}</td></tr>
            </table>
        )
    }
}

export default TestTable