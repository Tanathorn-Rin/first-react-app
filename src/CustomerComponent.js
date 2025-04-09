import './App.css';
import LabelInput from "./LabelInput";
import H1 from "./H1";
import Button from "./Button";




const CustomerComponent = ({customer}) => {
    const {firstName, lastName, email, phoneNumberList} = customer
    return (
        <div>
            <H1 content={firstName + ' ' + lastName}/>
            <H1 color="#313131" content="hello"/>
            <LabelInput label="First name" type="text" value={firstName}/>
            <LabelInput label="Lasst name" type="text" value={lastName}/>
            <LabelInput label="Email" type="text" value={email}/>
            <Button label="Click me" onClick={() => { console.log('clicked') }} />
            <br/>

            {phoneNumberList.map((phoneNumber, index) => {
                return (
                    <LabelInput key={index} label={"Phone number" +(index + 1)} type="text" value={phoneNumber}
                     />
                );
            })}
        </div>
    )
}


export default CustomerComponent;
