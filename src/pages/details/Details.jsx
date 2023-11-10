import { useLoaderData } from "react-router-dom";
import ImgShared from "../../shared/ImgShared";


const Details = () => {
    const service = useLoaderData();
    const { title, _id, price, img,description } = service;
    
    console.log(title,_id)
    return (
        <div>
             <ImgShared></ImgShared>
             <div className="mt-24 mb-2 flex gap-12 md:h-[450px]">
                 <div className="w-1/2">
                    <img className="h-full rounded-xl  border-8" src={img} alt="" />
                 </div>
                 <div className="w-1/2 md:text-xl">
                     <p>{description}</p>
                 </div>
             </div>
            <div className="text-center"> 
            <button className="bg-black w-1/2  p-3 text-2xl text-white rounded-xl">$ {price}</button>
            </div>
        </div>
    );
};

export default Details;