import * as React from 'react'
import FuncButton,{FuncButtonIcon,FuncButtonStyle} from '../jscomponents/FuncButton'

const App:React.StatelessComponent = ()=>(
    <div className="app">
        <h1>Hello!</h1>
        <FuncButton className="mtbtn" text="myText" value="1" iconName={FuncButtonIcon.Ok} buttonStyle={FuncButtonStyle.submit} />
    </div>
)

export default App