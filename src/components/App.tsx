import * as React from 'react'
import FuncButton2,{FuncButtonIcon,FuncButtonStyle} from '../jscomponents/FuncButton'
import TestLabel from './TestLabel'
import TestList,{ITestListProps} from './TestList'
import TestTable,{ITestTableProps} from './TestTable'

import "./test.css"

type DataType1 = {text:string}

const testData1:Array<DataType1> = [{text:"testData1-ItemA"},{text:"testData1-ItemB"},{text:"testData1-ItemC"}]
const testData2:string = "testData2-ItemA,testData2-ItemB,testData2-ItemC"

const useDataArray = function<P>(Comp:React.ComponentType<{data:Array<DataType1>,renderer:(data:DataType1,index)=>React.ReactNode}>){
    const _renderer = (data:DataType1)=><div>{data.text}</div>
    return class useDataType1HOC extends React.Component<{data:Array<DataType1>} & Pick<P,Exclude<keyof P,"data" | "renderer">>>{
        render(){
            return(
                <Comp {...this.props} renderer={_renderer} data={this.props.data} />
            )
        }
    }
}
const UseDataArrayList = useDataArray<ITestListProps>(TestList)
const UseDataArrayTable = useDataArray<ITestTableProps>(TestTable)

const useSplitString = function<P>(Comp:React.ComponentType<{data:Array<string>,renderer:(data:string,index)=>React.ReactNode} & P>){
    const _renderer = (data:string)=><div>{data}</div>
    return class useDataType2HOC extends React.Component<{data:string, splitor:string} & Pick<P,Exclude<keyof P,"data" | "renderer">>>{
        render(){
            return(
                <Comp {...this.props} renderer={_renderer} data={this.props.data.split(this.props.splitor)} />
            )
        }
    }
}
const UseSplitStringList = useSplitString<ITestListProps>(TestList)
const UseSplitStringTable = useSplitString<ITestTableProps>(TestTable)

const App:React.StatelessComponent = ()=>(
    <div className="app">
        <h1>Use JS component</h1>
        <FuncButton2 onClick={(e)=>alert(e.value)} className="mtbtn" text="myText" value="1" iconName={FuncButtonIcon.Ok} buttonStyle={FuncButtonStyle.submit} />
        <hr />
        <h1>Props multi type</h1>
        <TestLabel text={"text is string!"} />
        <TestLabel text={{ text:"text is object!"}} />
        <TestLabel text={()=>"text is function!"} />
        <hr />
        <h1>High Order Component</h1>
        <h3>use DataType1 Array</h3>
        <UseDataArrayList data={testData1} />
        <UseDataArrayTable data={testData1} />
        <h3>use string</h3>
        <UseSplitStringList data={testData2} splitor="," />
        <UseSplitStringTable className="black" data={testData2} splitor="," />
    </div>
)

export default App