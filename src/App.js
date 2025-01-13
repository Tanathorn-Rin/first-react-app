import './App.css';
import LabelInput from "./LabelInput";
import H1 from "./H1";


const App = () => {
    return (
        <div>
            <H1 content="Hello React Native" title="Hello Title"/>
            <LabelInput label="firstname" type="text"/>
            <LabelInput label="lasstname" type="text"/>
            <LabelInput label="email" type="text"/>
            <LabelInput label="newsletter" type="checkbox"/>
        </div>
    )
}


export default App;
