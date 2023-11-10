import img1 from '../../assets/icons/check.svg'
import img2 from '../../assets/icons/group.svg'
import img3 from '../../assets/icons/person.svg'
import img4 from '../../assets/icons/Wrench.svg'
import img5 from '../../assets/icons/deliveryt.svg'


const ChoseCard = () => {
    return (
        <div className="mt-10 mb-20">
        <div className="text-center mb-6 space-y-3">
            <h3 className="text-2xl font-bold text-orange-600">Core Features</h3>
            <h2 className="text-4xl  font-semibold">Why Choose Us</h2>
            <p className=" font-thin">the majority have suffered alteration in some form, by injected humour, or randomised<br></br> words which do not look even slightly believable.  </p>
        </div>
        <div className="flex flex-col lg:flex-row  justify-between"   
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <div className="border-2 p-8 flex-col items-center space-y-4 rounded-xl bg-base-100 hover:bg-[#FF3811]">
                  <img className='mx-auto ' src={img2} alt=""  />
                  <p>Expert Team</p>
            </div>
            <div className="border-2 p-8 flex-col items-center space-y-4 rounded-xl  bg-[#FF3811] hover:bg-sky-500">
                  <img className='mx-auto ' src={img1} alt=""  />
                  <p>100% Guranty</p>
            </div>
            <div className="border-2 p-8 flex-col items-center space-y-4 rounded-xl bg-base-100 hover:bg-[#FF3811]">
                  <img className='mx-auto ' src={img3} alt=""  />
                  <p>24/7 Support</p>
            </div>
            <div className="border-2 p-8 flex-col items-center space-y-4 rounded-xl bg-base-100 hover:bg-[#FF3811]">
                  <img className='mx-auto ' src={img4} alt=""  />
                  <p>Best Equipment</p>
            </div>
            <div className="border-2 p-8 flex-col items-center space-y-4 rounded-xl bg-base-100 hover:bg-[#FF3811]">
                  <img className='mx-auto ' src={img5} alt=""  />
                  <p>Timely Delivery</p>
            </div>
            <div className="border-2 p-8 flex-col items-center space-y-4 rounded-xl bg-base-100 hover:bg-[#FF3811]">
                  <img className='mx-auto ' src={img1} alt=""  />
                  <p>100% Guranty</p>
            </div>
        
            
           
        </div>
    </div>
    );
};

export default ChoseCard;