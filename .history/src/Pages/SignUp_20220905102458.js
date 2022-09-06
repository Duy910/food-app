import Nav from "../components/Nav";
import logo from '../img/logo.png'
function SignUp() {
    return ( 
        <div className="bg-[#fff8ef] min-h-screen relative">
            <Nav />
            <div className="max-w-[1200px] my-0 mx-auto ">
                <div className="m-auto">
                    <div>
                        <img src={logo}/>
                    </div>
                </div>
            </div>

        </div> 
    );
    }

export default SignUp;