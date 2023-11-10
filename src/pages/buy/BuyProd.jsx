import { useContext } from "react";
import ImgShared from "../../shared/ImgShared";
import { AuthContext } from "../../provider/AuthProvider";
import {  useLoaderData } from "react-router-dom";
//for tost
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BuyProd = () => {
    const service = useLoaderData();
    const {price,_id } = service;
    console.log('Buy', service)

    const { user } = useContext(AuthContext);

    const handlePay = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const bkashTra = form.bkashTra.value;
        const price = form.price.value;
        const email = user?.email;
        const booking = {
            name,
            email,
            bkashTra,
            price
        }
        console.log(booking);

        const update={bkashTra,name}
        console.log(update)

        fetch(`https://car-doctor-server-final-cyan.vercel.app/addprodutcs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    // const remaining = bookings.filter(booking => booking._id !== id);
                    // const updated = bookings.find(booking => booking._id === id);
                    // updated.status = 'confirm'
                    // const newBookings = [updated, ...remaining];
                    //setBookings(newBookings);
                    //alert('Update Sucessfully')
                    toast.success("Payment Successfully Complited");
                }
            })


    }

   


    return (
        <div>
        <ImgShared></ImgShared>
        <div className="bg-black p-20 mb-1  mt-12 rounded-xl">
            <h2 className='text-center text-2xl mb-6 text-white font-semibold'>Please Pay</h2>
            <form  onSubmit={ handlePay} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">BKash Transaction</span>
                        </label>
                        <input type="text" name="bkashTra" placeholder="bkash tra here.." className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Due amount</span>
                        </label>
                        <input type="text" name="price"   defaultValue={ price}  className="input input-bordered" />
                      
                    </div>
                </div>
                <div className="form-control mt-6">     
                    <button  className="btn btn-primary btn-block" type="submit">Confirm</button> 
                </div>
            </form>
        </div>
    </div>
    );
};

export default BuyProd;