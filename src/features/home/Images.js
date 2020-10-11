import React from 'react'

const Images = ({ images, openLightbox }) => {
    return (
        <>
            <div className="gallery">
                <h2 class="gallery-headline">ŠKODA KODIAQ В ДИКОЙ ПРИРОДЕ</h2>
                <div className="images">
                    <div className="left">
                        <div className="square">
                            <img onClick={(e) => openLightbox(0, e)} src={images[0].thumbnail} />
                            <span onClick={(e) => openLightbox(0, e)}></span>
                            <i onClick={(e) => openLightbox(0, e)} className="fa fa-play" />
                        </div>
                    </div>

                    <div className="shuffle-1">
                        <div className="top">
                            <div className="small-square">
                                <img onClick={(e) => openLightbox(1, e)} src={images[1].thumbnail} />
                            </div>
                            <div className="small-square">
                                <img onClick={(e) => openLightbox(2, e)} src={images[2].thumbnail} />
                            </div>
                            <div className="small-landscape">
                                <img onClick={(e) => openLightbox(3, e)} src={images[3].thumbnail} />
                            </div>
                            <div className="small-square">
                                <img onClick={(e) => openLightbox(4, e)} src={images[4].thumbnail} />
                            </div>
                            <div className="small-landscape">
                                <img onClick={(e) => openLightbox(1, e)} src={images[1].thumbnail} />
                            </div>
                            <div className="small-square">
                                <img onClick={(e) => openLightbox(2, e)} src={images[2].thumbnail} />
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="small-square">
                                <img onClick={(e) => openLightbox(3, e)} src={images[3].thumbnail} />
                            </div>
                            <div className="small-landscape">
                                <img onClick={(e) => openLightbox(4, e)} src={images[4].thumbnail} />
                            </div>
                            <div className="small-landscape">
                                <img onClick={(e) => openLightbox(1, e)} src={images[1].thumbnail} />
                            </div>
                            <div className="small-square">
                                <img onClick={(e) => openLightbox(2, e)} src={images[2].thumbnail} />
                            </div>
                            <div className="small-landscape">
                                <img onClick={(e) => openLightbox(3, e)} src={images[3].thumbnail} />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="square">
                            <img onClick={(e) => openLightbox(5, e)} src={images[5].thumbnail} />
                            <span onClick={(e) => openLightbox(5, e)}></span>
                            <i onClick={(e) => openLightbox(5, e)} className="fa fa-play" />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Images
