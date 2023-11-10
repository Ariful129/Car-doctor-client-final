

const MyBuyProduct = ({booking}) => {


    const { _id, date, price,image, status,pro_name} = booking;
    console.log(_id)

    return (
        <tr>
        <th>
            <button   className="btn btn-sm btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </th>
        <td>
            <div className="avatar">
                <div className="rounded w-24 h-24">
                    {image && <img src={image} alt="Avatar Tailwind CSS Component" />}
                </div>
            </div>
        </td>
        <td>{pro_name}</td>
       
        <td>{date}</td>
        <td>${price}</td>
        <th className="text-xl">
            {
                status === 'confirm' ? <button className="font-bold text-xl px-6 btn  bg-green-600 text-white">Purchsed</button> 
                :<button  className="btn text-xm border-2 px-10 bg-black text-white ">Pending</button>
                
            }
        </th>
       
        </tr>
    );
};

export default MyBuyProduct;