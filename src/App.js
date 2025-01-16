import './App.css';
import CustomerComponent from "./CustomerComponent";


const customer = {
    firstName: 'Gregor',
    lastName: 'Müller',
    phoneNumberList: [
        '+49382',
        '+64'
    ],
    email: 'gregor.mueller@gmail.com'
}

// old way of saying hello
function sayHello(customer) {
    console.log('Hello ' + customer.firstName)
}

// new way of saying hello
const sayHello2 = ({firstName}) => {
    console.log('Hello ' + firstName)
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
