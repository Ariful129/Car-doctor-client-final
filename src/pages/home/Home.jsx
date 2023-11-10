//import ImgShared from "../../shared/ImgShared";
import About from "../about/About";
import Banner from "../banner/Banner";
import ChoseCard from "../chosesection/ChoseCard";
import Contact from "../contact/Contact";
import Products from "../products/Products";
import Service from "../services/Service";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Service></Service>
           <Contact></Contact>
           <Products></Products>
           <ChoseCard></ChoseCard>
           {/* <ImgShared></ImgShared> */}
        </div>
    );
};

export default Home;