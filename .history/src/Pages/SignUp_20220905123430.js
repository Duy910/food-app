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
                        
                    </div>
                </div>
            </div>

        </div> 
    );
    }

export default SignUp;