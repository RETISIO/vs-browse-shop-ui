import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';

export default function PromoCarousel() {
    //     const params = {
    //         indicators: false,
    //         slide: true,
    //     };
    //     const firstCarousel = () => (
    //     <>
    //         <div className="col-md-8">
    //             <div className="text-center">
    //                 <span className="promotion-text">
    //                 <strong>FREE </strong>2&nbsp;Prime Strip Steaks w/orders $199+ and code<strong>NYSTEAKS22&nbsp;</strong><a href="/promotion-codes">exclusions apply*</a>
    //                 </span>
    //             </div>
    //             </div>
    //     </>
    //   );
    //     const secondCarousel = () => (
    //         <>
    //         <div className="col-md-8">
    //             <div className="text-center">
    //                 <span className="promotion-text">
    //                 <strong>FREE </strong>2&nbsp;Prime Strip Steaks w/orders $199+ and code<strong>NYSTEAKS22&nbsp;</strong><a href="/promotion-codes">exclusions apply*</a>
    //                 </span>
    //             </div>
    //             </div>
    //         </> 
    // );

    return (
        // <div className="col-md-8">
        //     <div className="content-ab promo-carousel">
        //             <div className="ab-carousel">
        //                 <Carousel {...params}>
        //                     <Carousel.Item>
        //                         {firstCarousel()}
        //                     </Carousel.Item>
        //                     <Carousel.Item>
        //                         {secondCarousel()}
        //                     </Carousel.Item>
        //                 </Carousel>
        //             </div>
        //     </div>
        // </div>
    <>

        <div className="col-md-8">
            <div className="content-ab promo-carousel">
                <div className="ab-header-carousel" style={{ display: 'block' }}>
                    <div className="col-md-8">
                        <div className="text-center">
                            <span className="promotion-text">
                                <strong>FREE </strong>2&nbsp;Prime Strip Steaks w/orders $199+ and
                                code<strong>NYSTEAKS22&nbsp;</strong>
                                <a href="/promotion-codes">exclusions apply*</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ab-header-carousel" style={{ display: 'none' }}>
                    <div className="col-md-8">
                        <div className="text-center">
                            <span className="promotion-text">
                                <strong>FREE2 </strong>2&nbsp;Prime Strip Steaks w/orders $199+ and
                                code<strong>NYSTEAKS22&nbsp;</strong>
                                <a href="/promotion-codes">exclusions apply*</a>
                            </span>
                        </div>
                    </div>
                </div>
                <button className="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">❮</button>
                <button className="w3-button w3-black w3-display-right" onclick="plusDivs(1)">❯</button>
            </div>
        </div>
    </>
    );
}
