import { useContext } from "react";
import ImgShared from "../../shared/ImgShared";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'

const AddService = () => {
    const { user } = useContext(AuthContext);

    const handleaddproduct = event => {
        event.preventDefault();

        const form = event.target;
        const per_name = form.per_name.value;
        const p_num = form.p_num.value;
        const title = form.pro_name.value;
        const img = form.image.value;
        const date = form.date.value;
        const price = form.price.value;
        const description = form.description.value;

        console.log(per_name,p_num,user)
        const services = {
            title,
            img,
            date,
            price,
            description

        }

        console.log(services);

        fetch('https://car-doctor-server-final-cyan.vercel.app/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    //alert('Product Added successfully')
                     //SweetAlert
                     Swal.fire({
                        title: 'Success!',
                        text: 'Service Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    
                }
            })

        

    }


    return (
        <div>
        <ImgShared></ImgShared>
        <div className="bg-black p-20 mb-1  mt-12 rounded-xl" 
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <h2 className='text-center text-2xl mb-6 text-white font-semibold'>Add New Service </h2>
            <form onSubmit={handleaddproduct}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white " >Name</span>
                        </label>
                        <input type="text" name="per_name" placeholder="person name.." className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white " >Phone Number</span>
                        </label>
                        <input type="text" name="p_num" placeholder="phone number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white " >Service Name</span>
                        </label>
                        <input type="text" name="pro_name" placeholder="product name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Service Image</span>
                        </label>
                        <input type="text" name="image" placeholder="img url...." className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="$/price" className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white ">Description</span>
                        </label>
                        <textarea type="text"  name="description" placeholder="description.." className="input input-bordered p-4" required />
                </div>

                <div className="form-control mt-6" >
                    <input className="btn btn-primary btn-block" type="submit" value="ADD Product" />
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddService;