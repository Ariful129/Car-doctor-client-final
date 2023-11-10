import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyProCard from "./MyProCard";
import Swal from 'sweetalert2'

const MyProduct = () => {
    
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `https://car-doctor-server-final-cyan.vercel.app/addprodutcs?email=${user?.email}`;
    //const url = `/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))

        // axiosSecure.get(url)
        // .then(res => setBookings(res.data))

    }, [url]);

    const handleBookingConfirm = id => {

        fetch(`https://car-doctor-server-final-cyan.vercel.app/addprodutcs/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })



    }
    
    
    // const handleDelete = id => {
    //     const proceed = confirm('Are You sure you want to delete');
    //     if (proceed) {
    //         fetch(`https://car-doctor-server-final-cyan.vercel.app/addprodutcs/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.deletedCount > 0) {
    //                     alert('deleted successful');
    //                     const remaining = bookings.filter(booking => booking._id !== id);
    //                     setBookings(remaining);
    //                 }
    //             })
    //     }
    // }

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
                fetch(`https://car-doctor-server-final-cyan.vercel.app/addprodutcs/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Product has been deleted.',
                            'success'
                          )
                       // alert('deleted successful');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })

            }
        })
    }

    return (
        <div className="mt-2">
        <div >
            <div className="text-center">
                 <h1 className="bg-black p-4 text-2xl font-semibold text-white">My Product History</h1>
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
                            <th>CustomerName</th>
                            <th>BkashTraID</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl border-t-4">
                        {
                            bookings.map(booking => <MyProCard
                                key={booking._id}
                                booking={booking}
                               handleBookingConfirm={handleBookingConfirm}
                               handleDelete={handleDelete}
                            ></MyProCard>)

                        }

                    </tbody>

                </table>
            </div>
        </div>
       </div>
    );
};

export default MyProduct;