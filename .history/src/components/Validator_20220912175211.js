import SignUp from "../Pages/SignUp";
function Validator(props) {
    Validator({
        form: '#formSignup',
        rule: [
            Validator.isRequired('#fullName')
        ]
    })
    
    return ( null );
}

export default Validator;