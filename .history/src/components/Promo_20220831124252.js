import '../css/promo.css'
function Promo() {
    return ( 
        <div className=" h-[500px] ">
            <div className="max-w-[1200px] h-full my-0 mx-auto grid grid-cols-2 ">
                <div className="bg-red-300 col-span-1 h-[250px] mr-5 mt-[25%] promo1 bg-cover bg-center bg-no-repeat rounded-[20px]">
                    <h1>MEXICAN</h1>
                    <h1>GREEN</h1>
                    <h1>WAVE</h1>
                </div>
                <div className="bg-red-600 col-span-1 h-[250px] ml-5 mt-[25%] promo2 bg-cover bg-center bg-no-repeat  rounded-[20px]">
                    <h1>DOUBLE</h1>
                    <h1>CHEESE</h1>
                    <h1>PIZZA</h1>
                </div>
            </div>
        </div>
     );
}

export default Promo;