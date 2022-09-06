import Nav from "../components/Nav";
import login from '../img/login.png'
function SignUp() {
    return ( 
        <div className="bg-[#fff8ef] min-h-screen  ">
            <Nav />
            <div className=" pt-[25%] flex justify-center items-center ">
                <div className="">
                    <div>
                        <img src={login}/>

                    </div>
                    <div>
                        <div><input type='text' placeholder="Enter your user name..."/></div>
                        <input type='text' placeholder="Enter your email..."/>
                        <input type='text' placeholder="Enter your password..."/>
                        <input type='text' placeholder="Confirm your password..."/>
                    </div>
                </div>
            </div>

        </div> 
    );
    }

export default SignUp;