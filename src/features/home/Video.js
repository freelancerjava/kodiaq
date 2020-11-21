import React, { useState } from 'react'
import { basename } from '../../common/config'

export const Video = () => {
    const [video, setvideo] = useState(false)
    return (
        <div className="video-wrapper">
            <div className="video-header">
                <h3 className="skoda">ŠKODA KODIAQ</h3>
                <h3>ВИДЕО О МОДЕЛИ</h3>

                <div className="subheader">
                    Выберите автомобиль, который будет похож на члена вашей семьи и который наилучшим образом соответствует вашим потребностям.
              </div>
            </div>
            <div className="video">

                {(!video) ?
                    <>
                        <img src={`${basename}/img/video_prev.jpg`} />
                        <div class="circle" onClick={() => setvideo(true)}>
                            <svg viewBox="0 0 500 500" class="sc-bwzfXH uTxCW">
                                <path d="M422.767 250L77.233 456.86V43.14L422.767 250z" stroke="null">
                                </path>
                            </svg>
                        </div>
                    </>
                    :
                    <video controls autoPlay onClick={() => setvideo(false)}>
                        <source src="/video/kodiaq_video.mp4" type="video/mp4" />
                    </video>}

            </div >
        </div>

    )
}