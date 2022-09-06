import Nav from "../components/Nav";
import logo from '../img/logo.png'
function SignUp() {
    return ( 
        <div className="bg-[#fff8ef] min-h-screen ">
            <Nav />
            <div className="max-w-[1200px] mx-auto my-0 ">
                <div className="h-[100%]">
                    <div>
                        <img src={logo}/>
                    </div>
                </div>
            </div>

        </div> 
    );
    }

export default SignUp;