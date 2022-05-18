import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { resolveImageUrl } from '../../../functions/resolveImageUrl';
import { ApiImageData } from '../../../interfaces/ApiImageData';

SwiperCore.use([Autoplay, Pagination, Navigation]);

interface WorkItem {
    id: number
    title: string
    secText: string
    image: ApiImageData
    slug: string
}

interface IProps {
    data: WorkItem[]
}

const Works: FC<IProps> = ({data}) => {

    console.log('>>>', data);

    const navigationPrevRef = React.useRef(null);

    const navigationNextRef = React.useRef(null);

    return (
        <section className='work-carousel metro position-re'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 no-padding'>
                        <div className='swiper-container'>
                            <Swiper
                                className='swiper-wrapper'
                                slidesPerView={ 2 }
                                centeredSlides={ true }

                                loop={ true }
                                navigation={ {
                                    prevEl: navigationPrevRef.current,
                                    nextEl: navigationNextRef.current,
                                } }
                                onBeforeInit={ (swiper) => {
                                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                                    swiper.params.navigation.nextEl = navigationNextRef.current;
                                } }
                                onSwiper={ (swiper) => {
                                    setTimeout(() => {
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        swiper.params.navigation.nextEl = navigationNextRef.current;

                                        swiper.navigation.destroy();
                                        swiper.navigation.init();
                                        swiper.navigation.update();
                                    });
                                } }
                                autoplay={ {
                                    delay: 2500,
                                    disableOnInteraction: false,
                                } }
                                speed={ 1000 }
                                breakpoints={ {
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 0,
                                    },
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 0,
                                    },
                                    767: {
                                        slidesPerView: 1,
                                        spaceBetween: 0,
                                        centeredSlides: false,
                                    },
                                    991: {
                                        slidesPerView: 2,
                                    },
                                } }
                            >
                                { data.map((slide) => (
                                    <SwiperSlide key={ slide.id } className='swiper-slide'>
                                        <div
                                            className='content wow noraidus fadeInUp'
                                            data-wow-delay='.3s'
                                        >
                                            <div
                                                className='item-img bg-img wow imago'
                                                style={ {
                                                    backgroundImage: `url(${ resolveImageUrl(slide?.image?.data?.attributes?.url)})`,
                                                } }
                                            />
                                            <div className='cont'>
                                                <h6 className='color-font'>
                                                    <a href='#0'>{ slide.title }</a>
                                                </h6>
                                                <h4>
                                                    {/*<Link*/}
                                                    {/*    href={ slide.slug }*/}
                                                    {/*>*/}
                                                    {/*    { slide.secText }*/}
                                                    {/*</Link>*/}
                                                </h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )) }
                            </Swiper>

                            <div
                                ref={ navigationNextRef }
                                className='swiper-button-next swiper-nav-ctrl simp-next cursor-pointer'
                            >
                                <span className='simple-btn right'>Next</span>
                            </div>
                            <div
                                ref={ navigationPrevRef }
                                className='swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer'
                            >
                                <span className='simple-btn'>Prev</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
