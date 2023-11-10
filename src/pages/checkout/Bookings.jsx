import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";
import ImgShared from "../../shared/ImgShared";
import MyBuyProduct from "./MyBuyProduct";
import Swal from 'sweetalert2'


const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [mycart, setMycart] = useState([]);

    const url = `https://car-doctor-server-final-cyan.vercel.app/bookings?email=${user?.email}`;
    //const url = `/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))

        // axiosSecure.get(url)
        // .then(res => setBookings(res.data))

    }, [url]);

    const url1 = `https://car-doctor-server-final-cyan.vercel.app/buyproduct?email=${user?.email}&status=${'confirm'}`;
    //const url = `/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url1)
            .then(res => res.json())
            .then(data => setMycart(data))

        // axiosSecure.get(url)
        // .then(res => setBookings(res.data))

    }, [url1]);


    
    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result)=>{
            if(result.isConfirmed){
                fetch(`https://car-doctor-server-final-cyan.vercel.app/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Services has been deleted.',
                                'success'
                              )
                            //alert('deleted successful');
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                        }
                    })   
             
            }
        })
        
    }


    // const handleBookingConfirm = id => {
    //     fetch(`https://car-doctor-server-final-cyan.vercel.app/bookings/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'confirm' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 // update state
    //                 const remaining = bookings.filter(booking => booking._id !== id);
    //                 const updated = bookings.find(booking => booking._id === id);
    //                 updated.status = 'confirm'
    //                 const newBookings = [updated, ...remaining];
    //                 setBookings(newBookings);
    //             }
    //         })
    // }

    return (

        <div>
            <div>
                <ImgShared></ImgShared>

                <div className="text-center mt-2">
                 <h1 className="bg-black p-4 text-2xl font-semibold text-white">My Booking Service</h1>
                </div>

                <div className="overflow-x-auto w-full mt-12 ">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="text-2xl font-semibold  text-black">
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Service</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl border-t-4">
                            {
                                bookings.map(booking => <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    //handleBookingConfirm={handleBookingConfirm}
                                ></BookingRow>)


                            }

                        </tbody>

                    </table>
                </div>

                {/* My Cart */}

                <div className="text-center mt-8">
                 <h1 className="bg-black p-4 text-2xl font-semibold text-white">Buy Product</h1>
                </div>
                  
                <div className="overflow-x-auto w-full mt-12 ">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="text-2xl font-semibold  text-black">
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl border-t-4">
                            {
                                mycart.map(booking => <MyBuyProduct
                                    key={booking._id}
                                    booking={booking}
                                    //handleDelete={handleDelete}
                                    //handleBookingConfirm={handleBookingConfirm}
                                ></MyBuyProduct>)


                            }

                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
};

export default Bookings;