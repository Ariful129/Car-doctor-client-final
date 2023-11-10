import check from '../assets/images/checkout/checkout.png';

const ImgShared = () => {
  return (
    <div className="relative">
         <img className='w-full ' src={check} alt="" />
      <div className="absolute top-1/2 left-0  rounded-xl flex items-center h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white text-2xl font-bold transform -translate-y-1/2  ">
        <h1 className= 'ml-20 text-3xl'>Check Out</h1>
      </div>
      <div className='absolute bottom-0 left-1/3'>
         <button className='border-2 p-2 px-28 bg-orange-600  text-white  rounded-t-full'>Home/checkout</button>
      </div>
    </div>
  );
};

export default ImgShared;
