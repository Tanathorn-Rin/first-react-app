import './App.css';
import LabelInput from "./LabelInput";
import H1 from "./H1";




const CustomerComponent = ({customer}) => {
    const {firstName, lastName, email} = customer
    return (
        <div>
            <H1 content={firstName + ' ' + lastName}/>
            <LabelInput label="firstname" type="text" value={firstName}/>
            <LabelInput label="lasstname" type="text" value={lastName}/>
            <LabelInput label="email" type="text" value={email}/>
            <LabelInput label="newsletter" type="checkbox"/>
        </div>
    )
}


export default CustomerComponent;
