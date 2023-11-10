import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [services, setServices] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('https://car-doctor-server-final-cyan.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    const filteredProducts = showAll ? services : services.slice(0, 3);
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (

        <div className="mt-10">
            <div className="text-center mb-6 space-y-3">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-4xl  font-semibold">Our Service Area</h2>
                <p className=" font-thin">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    filteredProducts.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="text-center mt-4">
                <button className="btn bg-black p-2 text-white" onClick={toggleShowAll}>
                    Show All
                </button>
            </div>
        </div>
    );
};

export default Service;