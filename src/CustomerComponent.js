import './App.css';
import LabelInput from "./LabelInput";
import H1 from "./H1";




const CustomerComponent = ({customer}) => {
    const {firstName, lastName, email, phoneNumberList} = customer
    return (
        <div>
            <H1 content={firstName + ' ' + lastName} color="#313131"/>
            <LabelInput label="First name" type="text" value={firstName}/>
            <LabelInput label="Lasst name" type="text" value={lastName}/>
            <LabelInput label="Email" type="text" value={email}/>

            <br/>

            {phoneNumberList.map((phoneNumber, index) => {
                // first task: transform this list of <span> to <LabelInput>
                return (
                    <span key={index}>{phoneNumber}<br/></span>
                )
            })}
        </div>
    )
}


export default CustomerComponent;
