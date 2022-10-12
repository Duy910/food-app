import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'
import shape13 from '../img/shape_13.png'
import shape14 from '../img/shape_14.png'
import shape15 from '../img/shape_15.png'
import shape16 from '../img/shape_16.png'
import Nav from "../components/Nav";
import login from '../img/login.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons"
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { categories } from '../utils/data'
import { useState } from 'react'
import Loader from '../components/Loader'
import '../css/createproducts.css'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../firebase/firebase-config'


function CreateProduct() {
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState(null)
    const [imgValue, setImgValue] = useState(null)
    const [price, setPrice] = useState()
    const [des, setDes] = useState()
    const [fields, setFields] = useState(false)
    const [message, setMessage] = useState(null)
   

    const upLoadImage = (e) => {
        setIsLoading(true)
        const image = e.target.files[0]
        console.log(image);
        
        const storageRef = ref(storage, `Images/${Date.now()}-${image.name}`)
        const upLoadTask = uploadBytesResumable(storageRef, image)
        upLoadTask.on("state_changed", (snapshot) => {
            const upLoadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        },(error) => {
                console.log(error);
                setFields(true)
                setMessage('Failed to upload image, Please try again!!!!')
                setTimeout(() => {
                    setFields(false)
                    setIsLoading(false)
                }, 3000)
            }, () => {
                getDownloadURL(upLoadTask.snapshot.ref).then((downloadURL) => {
                    setImgValue(downloadURL)
                    setIsLoading(false)
                    setFields(true)
                    setMessage('Image is uploaded successfully!!')
                    setTimeout(() => {
                        setFields(false)
                    }, 3000)
                })

            })
    }
    const handleDelete = () => {

    }
    const saveProduct = () => {

    }
    return (
        <div>
            <Nav />
            <div className="bg-[#fff8ef] min-h-screen    ">
                <img src={shape10} className='absolute top-0 left-0' />
                <img src={shape12} className='absolute top-[83%] left-0' />
                <img src={shape13} className='absolute top-[40%] right-[83%]' />
                <img src={shape14} className='absolute top-[6%] right-[10%]' />
                <img src={shape15} className='absolute top-[82%] right-[20%]' />
                <img src={shape16} className='absolute right-[0%] top-[46%]' />

                <div className=" max-w-[600px] my-0 mx-auto  ">
                    <div className=" ">
                        <div >
                            <img className="mx-auto pt-[80px]" src={login} />

                        </div>

                        <div>
                            <div className="">
                                <input className="w-[100%]  p-[8px] text-[16px] my-2 border-primary border-[2px] rounded-[4px] bg-[#fff8ef] outline-none" type='text' placeholder="Give me the title you want..." />
                            </div>
                            <div>
                                <select className='w-[100%]  p-[8px] text-[16px] my-2 border-primary border-[2px] rounded-[4px] bg-[#fff8ef] outline-none cursor-pointer'>
                                    <option value='other' className=''>Select Category</option>
                                    {categories.map((item, index) => {
                                        return <option className='w-[100%]  p-[8px] text-[16px] my-2 border-primary border-[2px] rounded-[4px] bg-[#fff8ef] outline-none'>{item.urlParamName}</option>
                                    })}
                                </select>
                            </div>
                            <div className='flex relative justify-center items-center w-[100%]  p-[8px] text-[16px] my-2 border-primary border-[2px] rounded-[4px] bg-[#fff8ef] h-[200px]'>
                                {isLoading ? (<Loader className='mr-0' />) : (<>
                                    {!imgValue ?
                                        <div className='flex'>
                                            <div className='flex'>
                                                <label className='cursor-pointer'>
                                                    <div className='text-center'><FontAwesomeIcon icon={faUpload} className='text-primary text-[20px]' /></div>
                                                    <p className='text-primary text-[18px] font-delius italic font-xl'>Click here to upload image</p>
                                                    <input
                                                        type="file"
                                                        onChange={upLoadImage}
                                                        name='uploadimage'
                                                        className='w-0 h-0'
                                                    ></input>
                                                </label>
                                            </div>
                                        </div> :
                                        <>
                                            <div className=''>
                                                <div className=' '>
                                                    <img src={imgValue} className='  ' />
                                                </div>

                                            </div>
                                            <button
                                                className='border-primary bg-primary rounded-[8px] p-[8px] font-delius text-white hover:text-black '
                                                onClick={handleDelete}
                                            >
                                                Delete
                                            </button>

                                        </>}
                                </>)}

                            </div>
                            {fields && (
                                <div className='grid grid-cols-2 gap-1'>
                                    <div className='col-span-1'>
                                        <p className='w-[100%]  p-[8px] text-[14px] my-2 border-primary border-none rounded-[4px] bg-green-400 text-white outline-none font-delius italic '>
                                            {message}</p>
                                    </div>

                                </div>
                            )}
                            <div className='grid grid-cols-3 gap-4 '>
                                <div className='col-span-1  '>

                                    <input className="w-[100%]  p-[8px] text-[16px] my-2 border-primary border-[2px] rounded-[4px] bg-[#fff8ef] outline-none" type='number' placeholder="$:Price"

                                    />
                                </div>
                                <div className='col-span-2'>

                                    <input className="w-[100%]  p-[8px] text-[16px] my-2 border-primary border-[2px] rounded-[4px] bg-[#fff8ef] outline-none" type='text' placeholder="Descriptions..."

                                    ></input>
                                </div>
                            </div>
                            <div>
                                <button className='w-[100%]  p-[8px] text-[18px]   my-2 border-none border-[2px] rounded-[4px]  outline-none bg-green-400 text-white font-delius saveProduct '
                                    onClick={saveProduct}
                                >Save</button>
                            </div>


                        </div>


                    </div>
                </div>

            </div>
        </div>
    );

}

export default CreateProduct;