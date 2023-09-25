import { Swiper, SwiperSlide } from "swiper/react";
import { Home } from "../components/Home";
import "./../css/swiperUtilities.css";

export const OnePage = () => {
    return (
        <Swiper>
            <SwiperSlide>
                <Home />
            </SwiperSlide>
        </Swiper>
    );
};
