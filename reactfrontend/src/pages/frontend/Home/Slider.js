import { useEffect } from "react";
import { useState } from "react";
import BannerService from "../../../services/BannerService";
import { urlImage } from "../../../Config";

const Slider = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await BannerService.getByPosition('slideshow');
            setBanners(result.banners);
        })();
    }, []);
    return (
        // <section className="hdl-slideshow">
        //     <div id="carouselExample" className="carousel slide">
        //         <div className="carousel-inner">
        //             <div className="carousel-item active">
        //                 <img src="public/images/banner/slider_1.jpg" className="d-block w-100" alt="..." />
        //             </div>
        //             <div className="carousel-item">
        //                 <img src="public/images/banner/slider_2.jpg" className="d-block w-100" alt="..." />
        //             </div>
        //             <div className="carousel-item">
        //                 <img src="public/images/banner/slider_3.jpg" className="d-block w-100" alt="..." />
        //             </div>
        //         </div>
        //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span className="visually-hidden">Previous</span>
        //         </button>
        //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span className="visually-hidden">Next</span>
        //         </button>
        //     </div>
        // </section>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {banners.map(function (slider, index) {
                    if (index === 0) {
                        return (
                            <div className="carousel-item active" key={index}>
                                <img src={urlImage + "banner/" + slider.image}
                                    className="d-block w-100" alt={slider.image} />
                            </div>
                        );
                    }
                    else {
                        return (
                            <div className="carousel-item" key={index}>
                                <img src={urlImage + "banner/" + slider.image}
                                    className="d-block w-100" alt={slider.image} />
                            </div>
                        );
                    }

                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
export default Slider;