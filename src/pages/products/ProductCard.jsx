import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';

const ProductCard = ({ product }) => {
    const { _id, pro_name, image, price, status } = product;
    console.log(status)

    return (
        <>

            {status!=='confirm' &&

                <div className="card  bg-base-100 shadow-xl"  
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl h-[250px] w-full bg-base-200" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-semibold ">{pro_name}</h2>
                        <p className="text-xl text-orange-500">Price: ${price}</p>
                        <div className="">
                            <Link to={`/buy/${_id}`} >
                                <button className="btn w-full bg-black text-white" data-aos="flip-right">Buy Now</button>
                            </Link>
                        </div>
                        <div className="flex justify-end">
                            <Link to={`/details/${_id}`}>
                                <AiOutlineArrowRight className="text-2xl text-red-600"></AiOutlineArrowRight>
                            </Link>
                        </div>
                    </div>
                </div>
                 }

        </>
    );
};

export default ProductCard;