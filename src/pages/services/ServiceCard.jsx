import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;

    return (
        <div className="card  bg-base-100 shadow-xl" 
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" >
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <div className="card-actions justify-between flex items-center">
                    <Link to={`/book/${_id}`}>
                        <button className="btn bg-black text-white" data-aos="flip-left">Book Now</button>
                    </Link>
                    <Link to={`/details/${_id}`}>
                        <AiOutlineArrowRight className="text-2xl  text-red-600"></AiOutlineArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;