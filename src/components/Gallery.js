
import 'swiper/css/bundle';

import { Swiper, SwiperSlide } from "swiper/react";
import './Gallery.scss';
import { Navigation, Zoom, Autoplay, Pagination, EffectFade, EffectCoverflow } from 'swiper/modules';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';

const Image = ({ src }) => {
    return <img src={src} className='__image' />
}

const Gallery = ({ images, navigation }) => {
    const [swiper, setSwiper] = useState(null);

    const [isOpen, setIsOpen] = useState();

    const [initSlide, setInitSlide] = useState();

    const [isPlay, setIsPlay] = useState(false);

    const speed = 2000;

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
        setIsPlay(false);
    }

    const handleImageClick = (index) => {
        if (!isOpen) {
            setIsOpen(true);
        }
        setInitSlide(index)
    }

    const slideTo = (index) => {
        if (swiper) {
            console.log(swiper);

            swiper.slideTo(index)
        }
    };

    useEffect(() => {
        if (swiper) {
            if (isPlay) {
                swiper?.autoplay?.resume();
            }
            else {
                swiper?.autoplay?.pause();
            }
        }
    }, [swiper, isPlay])


    return <div className='__g'>
        <Modal
            closeTimeoutMS={1000}
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="__modal_gallery"
            ariaHideApp={false}
        >
            <Swiper
                navigation={navigation}
                modules={[Navigation, Zoom, Autoplay, Pagination, EffectFade, EffectCoverflow]}
                onSwiper={setSwiper}
                initialSlide={initSlide}
                zoom={true}
                autoplay={{ delay: 1000 }}
                pagination={{
                    type: 'fraction',
                    el: '.swiper-custom-pagination'
                }}
                onAutoplayResume={() => !isPlay ? swiper.autoplay.pause() : null}
                // effect={'fade'}
                effect={'coverflow'}
                fadeEffect={
                    {
                        crossFade: true
                    }
                }
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
            >
                <div className='__t_bar'>
                    <div className='__t_btn'>
                        <button onClick={closeModal}>
                            <svg viewBox="0 0 24 24" width="1em" height="1em">
                                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                {images?.map((img, i) =>
                    <SwiperSlide key={i} zoom={true}>
                        <Image src={img} />
                    </SwiperSlide>
                )}
                <RenderToolbar isPlay={isPlay} setIsPlay={setIsPlay} />
            </Swiper>
        </Modal>
        <div className="masonry">
            {images?.map((it, i) =>
                <div className="mItem" key={i} onClick={() => handleImageClick(i)}>
                    <img src={it} className='__gallery_thumb' />
                    <div className='mItem-overlay'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12C3.5 7 8 4 12 4s8.5 3 11 8c-2.5 5-7 8-11 8s-8.5-3-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        <span style={{ marginLeft: 8 }}>Preview</span>
                    </div>
                </div>
            )}
        </div>
    </div>
}

export default Gallery;

const RenderToolbar = ({ isPlay, setIsPlay }) => {
    return <div className='__custom_toolbar'>
        <div className='__swiper_pagination_wrapper'>
            <div className='swiper-custom-pagination' />
        </div>
        <button className='__play_btn' onClick={() => setIsPlay(prev => !prev)}>
            {!isPlay ? <svg viewBox="0 0 24 24" width="1em" height="1em">
                <polygon points="8,5 19,12 8,19" stroke="currentColor" fill="currentColor" />
            </svg> :
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <rect x="6" y="5" width="4" height="14" fill="currentColor" />
                    <rect x="14" y="5" width="4" height="14" fill="currentColor" />
                </svg>
            }
        </button>
        <button className='__share_btn' onClick={() => console.log('share image link')}>
            <svg viewBox="0 0 24 24" width="1em" height="1em">
                <circle cx="18" cy="5" r="3" stroke="currentColor" fill="currentColor" />
                <circle cx="6" cy="12" r="3" stroke="currentColor" fill="currentColor" />
                <circle cx="18" cy="19" r="3" stroke="currentColor" fill="currentColor" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="currentColor" strokeWidth="2" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="currentColor" strokeWidth="2" />
            </svg>
        </button>
    </div>
}