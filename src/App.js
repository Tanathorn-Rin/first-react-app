import './App.css';
import CustomerComponent from "./CustomerComponent";


const customer = {
    firstName: 'Gregor',
    lastName: 'Müller',
    phoneNumberList: [
        '+49382',
        '+646473'
    ],
    email: 'gregor.mueller@gmail.com'
}

// old way of saying hello
function sayHello(customer) {
    const {firstName} = customer // same as customer.firstName
    console.log('Hello ' + customer.firstName)
}

const simpleFunction = () => {}

// new way of saying hello
const sayHello2 = ({firstName, phoneNumberList}) => {
    console.log('Hello ' + firstName)

    const newList = phoneNumberList.map((phoneNumber) => {
        console.log(phoneNumber)
        return 'My phone number is ' + phoneNumber
    })

}


sayHello2(customer)


const App = () => {
    return (
        <div>
            <CustomerComponent customer={customer}/>
        </div>
    )
}

// <CustomerComponent customer={customer}/> equals to CustomerComponent({customer: customer});

export default App;
