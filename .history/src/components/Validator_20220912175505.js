import SignUp from "../Pages/SignUp";
function Validator(props) {
    Validator({
        form: '#formSignup',
        rule: [
            Validator.isRequired('#fullName')
        ]
    })
   const a =  document.querySelector('#fullName')
    
    return ( null );
}

export default Validator;