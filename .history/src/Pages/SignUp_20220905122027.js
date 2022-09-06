import Nav from "../components/Nav";
import logo from '../img/logo.png'
function SignUp() {
    return ( 
        <div className="bg-[#fff8ef] min-h-screen ">
            <Nav />
            <div className="max-w-[1200px] mx-auto my-0 min-h-screen">
                <div className=" ">
                    <div className="top-0 left-0 right-0 bottom-0">
                        
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