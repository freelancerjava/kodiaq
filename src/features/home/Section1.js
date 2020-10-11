import React from 'react';
const Section1 = ({ data }) => {
    return (
        <div className="sa-carousel-slick-item slick-slide"
            data-slide-cat="ImporterDerivativePresentationModule-12ed01b2-sa-tabs-exterior"
            data-action-cip="Derivative Presentation-- Exteriér"
            data-label-cip="Moderné benzínové a naftové motory poskytnú množstvo energie."
            data-slick-index="4" aria-hidden="true" style={{ width: "100%", tabindex: "-1" }} role="option"
            aria-describedby="slick-slide04">
            <div className="img-container">
                <div className="visible-lg bg-img"
                    style={{ background: `url(${data.bg_url})` }}>
                    <div className="sa-image-gradient-top"></div>
                    <div className="sa-image-gradient"></div>
                </div>
                <div className="visible-md bg-img"
                    style={{ background: `url(${data.bg_url})` }}>
                    <div className="sa-image-gradient-top"></div>
                    <div className="sa-image-gradient"></div>
                </div>
                <div className="visible-sm bg-img"
                    style={{ background: `url(${data.bg_url})` }}>
                    <div className="sa-image-gradient-top"></div>
                </div>
                <div className="sa-derivativepresentation-info hidden-sm">
                    <div className="sa-derivativepresentation-label1 hidden-sm">
                        {/* Внедорожник длиной 4,7 м предлагает до 7 сидячих мест и самое большое */}
                    </div>
                </div>
            </div>
            <div className="sa-derivativepresentation-info-outer visible-sm">
                <div className="sa-derivativepresentation-infopart">

                    <div className="sa-derivativepresentation-source_label1">
                        {/* Внедорожник длиной 4,7 м предлагает до 7 сидячих мест и самое большое */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Section1;