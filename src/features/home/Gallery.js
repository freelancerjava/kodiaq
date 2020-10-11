import React, { useEffect, useState } from 'react'
import { css, StyleSheet } from 'aphrodite/no-important';
import Lightbox from 'react-images-texts-videos';
import ReactImageVideoLightbox from 'react-image-video-lightbox'
import Images from './Images';


const Gallery = () => {

    const [lightboxIsOpen, setlightboxIsOpen] = useState(false)
    const [currentItem, setcurrentItem] = useState(0)
    const [itemType, setitemType] = useState('images')
    const videos = []


    const imgs = [
        {
            url: '/img/gallery/gallery1.mp4', type: 'video', altTag: 'placeholder video',
            src: "/img/gallery/gallery1.jpg",
            thumbnail: "/img/gallery/gallery1.jpg",
            srcset: []
        },
        {
            url: '/img/gallery/gallery2.jpg', type: 'photo', altTag: 'placeholder image',
            src: "/img/gallery/gallery2.jpg",
            thumbnail: "/img/gallery/gallery2.jpg",
            srcset: []
        },
        {
            url: '/img/gallery/gallery3.jpg', type: 'photo', altTag: 'placeholder image',
            src: "/img/gallery/gallery3.jpg",
            thumbnail: "/img/gallery/gallery3.jpg",
            srcset: []
        },
        {
            url: '/img/gallery/gallery4.jpg', type: 'photo', altTag: 'placeholder image',
            src: "/img/gallery/gallery4.jpg",
            thumbnail: "/img/gallery/gallery4.jpg",
            srcset: []
        },
        {
            url: '/img/gallery/gallery5.jpg', type: 'photo', altTag: 'placeholder image',
            src: "/img/gallery/gallery5.jpg",
            thumbnail: "/img/gallery/gallery5.jpg",
            srcset: []
        },
        {
            url: '/img/gallery/gallery6.mp4', type: 'video', altTag: 'placeholder video',
            src: "/img/gallery/gallery6.jpg",
            thumbnail: "/img/gallery/gallery6.jpg",
            srcset: []
        },
    ]


    const openLightbox = (index, event) => {
        event.preventDefault();
        setcurrentItem(index)
        setlightboxIsOpen(true)
    }

    const closeLightbox = () => {
        setcurrentItem(0)
        setlightboxIsOpen(false)
    }

    const gotoPrevious = () => {
        setcurrentItem(index => index - 1)
    }

    const gotoNext = () => {
        setcurrentItem(index => index + 1)

    }

    const gotoItem = (index) => {
        setcurrentItem(index)
    }

    const handleClickItem = () => {
        gotoNext();
    }
    return (
        <div className="section">
            <Images images={imgs} openLightbox={openLightbox} />
            {
                lightboxIsOpen &&
                <ReactImageVideoLightbox
                    data={imgs}
                    startIndex={currentItem}
                    showResourceCount={true}
                    onCloseCallback={() => { setlightboxIsOpen(false) }} />
            }
            {/* <Lightbox
                currentItem={currentItem}
                items={{ type: itemType, items: imgs }}
                isOpen={lightboxIsOpen}
                onClickImage={handleClickItem}
                onClickNext={gotoNext}
                onClickPrev={gotoPrevious}
                onClickThumbnail={gotoItem}
                onClose={closeLightbox}
                theme={theme}
                showThumbnails={true}
            /> */}
        </div>
    );


}

export default Gallery