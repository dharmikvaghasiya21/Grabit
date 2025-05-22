import Product from "./Product/Product";
import Slider from "./Slider/Slider";
import Categories from "./Categories/Categories";
import Adbanner from "./Ad_banner/Adbanner";
import Offerbanner from "./Offer_banner/Offerbanner";
import Arrivals from "./Arrivals/Arrivals";
import Blog from "./Blog/Blog";
import Service from "./Service/Service";
import Offerblock from "./Offer block/Offerblock";

const Body = () => {
    return (
        <>
            <Slider />
            <Categories />
            <Product />
            <Adbanner />
            <Arrivals />
            <Offerbanner />
            <Service />
            <Offerblock />
            <Blog />
        </>
    );
};

export default Body;
