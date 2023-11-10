import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import AdminSub from "./AdminSub";



const Admin = () => {
     
    const { user } = useContext(AuthContext);
    console.log(user)
    const [bookings, setBookings] = useState([]);

    const url = 'https://car-doctor-server-final-cyan.vercel.app/bookings';
    //const url = `/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))

        // axiosSecure.get(url)
        // .then(res => setBookings(res.data))

    }, [url]);


    const handleBookingConfirm = id => {
        fetch(`https://car-doctor-server-final-cyan.vercel.app/bookings/${id}`, {
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



    return (
        <div className="mt-2">
        <div >
            <div className="text-center">
                 <h1 className="bg-black p-4 text-2xl font-semibold text-white"> Admin Pannel</h1>
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
                            bookings.map(booking => <AdminSub
                                key={booking._id}
                                booking={booking}
                                handleBookingConfirm={handleBookingConfirm}
                            ></AdminSub>)

                        }

                    </tbody>

                </table>
            </div>
        </div>
       </div>
    );
};

export default Admin;