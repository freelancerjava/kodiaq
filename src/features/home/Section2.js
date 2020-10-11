import React from 'react';
const Section2 = ({ data }) => {
    return (
        <div className="carousel-item slick-slide" data-action-cip="Highlights-- "
            data-label-cip="NADŠENIE BEZ HRANÍC" data-slick-index="-1" aria-hidden="true" style={{ width: "80%", tabindex: "-1" }}
        >
            <div className="item-image" >
                <div className="frame-image">
                    <div className="sa-hero-layout-img-wrapper hidden-sm hidden-md"
                        style={{ backgroundImage: `url(${data.bg_url})` }}>
                    </div>
                    <div className="sa-hero-layout-img-wrapper hidden-lg hidden-sm"
                        style={{ backgroundImage: `url(${data.bg_url})` }}>
                    </div>
                    <div className="sa-hero-layout-img-wrapper hidden-lg hidden-md"
                        style={{ backgroundImage: `url(${data.bg_url})` }}>
                    </div>
                    <figure className="tiles-resp-img index-image classic-layout">
                        <picture id="">
                            <source media="(min-width: 0px) and (max-width: 659px)"
                                srcset={data.bg_url} />
                            <source media="(min-width: 660px) and (max-width: 999px)"
                                srcset={data.bg_url} />
                            <source media="(min-width: 1000px)"
                                srcset={data.bg_url} />
                            <img alt=""
                                srcset={data.bg_url}
                                className="index-image" />
                        </picture>
                    </figure>
                </div>
            </div>

            <div className="item-text-content  ">
                <p className="upper-label"> </p>
                <h2 className="sa-h4 item-headline">{data.title}</h2>
                <p className="item-desc">{data.text}1</p>
                <a href="https://www.skoda-auto.sk/modely/kodiaq/kodiaq/off-road" className="link-more layer-link"
                    data-layer-title="" data-id="ImporterHighlightsModule-a3f0ff8d" tabindex="-1">Читать далее</a>
            </div>

            <div className="cl"></div>
            <div className="sa-hero-layout-img-wrapper hidden-lg hidden-md"
                style={{ backgroundImage: "url(&#39;https://az749841.vo.msecnd.net/sitessksk/alv1/6fe88e14-1aa7-42ec-bf5e-749b443efdb4/skoda-kodiaq-m70-offroad.4d6b495ed3141ca628cf635149b544e2.fill-1920x600.jpg&#39;);" }}>
            </div>
        </div>

    );
}

export default Section2;