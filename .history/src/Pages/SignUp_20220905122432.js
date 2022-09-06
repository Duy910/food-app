import Nav from "../components/Nav";
import logo from '../img/logo.png'
function SignUp() {
    return ( 
        <div className="bg-[#fff8ef] min-h-screen relative ">
            <Nav />
            <div className="top-0 left-0 right-0 bottom-0 absolute ">
                <div className=" ">
                    <div className="">
                        
                         <div>
                            <img src={logo}/>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div> 
    );
    }

export default SignUp;