import React, { useState } from 'react';

const TechnologySection = () => {

    const [technologyTab, settechnologyTab] = useState(0)

    return (
        <div
            className="k2ng-module k2ng-module-ImporterTechnologyModule k2ng-module-instance-ImporterTechnologyModule-9dcae56d "
            data-moduleid="ImporterTechnologyModule-9dcae56d" data-implementation="ImporterTechnologyModule"
            id="ImporterTechnologyModule-9dcae56d" data-displayname="Technológie" data-display-in-sticky="true">


            <div>
                <h2 className="headline sa-h5-extra index-title">TECHNOLÓGIA SIMPLY CLEVER </h2>
                <div className="container-fluid sa-tabs-wrapper index-content">
                    <ul className="sa-tabs hidden-sm">
                        <li onClick={() => settechnologyTab(0)} className={(technologyTab == 0) ? "active" : ""} data-tab-id="ImporterTechnologyModule-9dcae56d-sa-tabs-0"
                            data-action-cip="Technology-TECHNOLÓGIA SIMPLY CLEVER -" data-label-cip="Parkovanie hračkou">
                            Parkovanie hračkou</li>
                        <li onClick={() => settechnologyTab(1)} className={(technologyTab == 1) ? "active" : ""} data-tab-id="ImporterTechnologyModule-9dcae56d-sa-tabs-1"
                            data-action-cip="Technology-TECHNOLÓGIA SIMPLY CLEVER -" data-label-cip="Full LED svetlomety">Full
                  LED svetlomety</li>

                    </ul>

                    <div className="sa-tech-mobile-categories visible-sm">
                        <select className="sa-form-element mobile-categories" name="sa-tech-category-select" style={{ display: "none" }}>
                            <option value="ImporterTechnologyModule-9dcae56d-sa-tabs-0"
                                data-action-cip="Technology-TECHNOLÓGIA SIMPLY CLEVER -" data-label-cip="Parkovanie hračkou">
                                Parkovanie hračkou</option>
                            <option value="ImporterTechnologyModule-9dcae56d-sa-tabs-1"
                                data-action-cip="Technology-TECHNOLÓGIA SIMPLY CLEVER -" data-label-cip="Full LED svetlomety">
                                Full LED svetlomety</option>

                        </select>
                        <span className="sa-form-selectbox-wrapper">
                            <span className="sa-form-selectbox-placeholder">Parkovanie hračkou</span>
                            <span className="glyphicon icon icon-arrow-medium-down" aria-hidden="true"></span>
                            <ul className="sa-option-list sa-form-element-option-list" style={{ display: "none" }}>
                                <li className="sa-selectbox-option" data-value="ImporterTechnologyModule-9dcae56d-sa-tabs-0">Parkovanie hračkou</li>
                                <li className="sa-selectbox-option" data-value="ImporterTechnologyModule-9dcae56d-sa-tabs-1">Full LED svetlomety</li>
                            </ul>
                        </span>
                    </div>

                    {(technologyTab == 0) ?


                        <div className="tab-container" data-tab-id="ImporterTechnologyModule-9dcae56d-sa-tabs-1">
                            <div className="technology-img visible-lg"
                                style={{ backgroundImage: "url(https://az749841.vo.msecnd.net/sitessksk/alv1/8f70b26a-6b22-4238-8d12-3d4cec819c6f/skoda-kodiaq-m73-parking.5bcd5e8e9ae52a2b793d107cd29a9efc.fill-1920x640.jpg)" }}>
                            </div>
                            <div className="technology-img visible-md"
                                style={{ backgroundImage: "url(https://az749841.vo.msecnd.net/sitessksk/alv1/8f70b26a-6b22-4238-8d12-3d4cec819c6f/skoda-kodiaq-m73-parking.5bcd5e8e9ae52a2b793d107cd29a9efc.fill-1920x640.jpg)" }}>
                            </div>
                            <div className="technology-img visible-sm"
                                style={{ backgroundImage: "url(https://az749841.vo.msecnd.net/sitessksk/alv1/8f70b26a-6b22-4238-8d12-3d4cec819c6f/skoda-kodiaq-m73-parking.5bcd5e8e9ae52a2b793d107cd29a9efc.fill-1920x640.jpg)" }}>
                            </div>

                            <p className="text-info index-content">Najlepšie systémy osvetlenia v novom modeli ŠKODA KODIAQ.</p>

                            <a href="https://www.skoda-auto.sk/modely/kodiaq/kodiaq/svetla"
                                className="technology-link layer-link gtm-cta-link"
                                data-action-cta="Website-Technológie-TECHNOLÓGIA SIMPLY CLEVER "
                                data-layer-title="Viac o svetlách">Viac o svetlách</a>
                        </div>

                        :

                        <div className="tab-container" data-tab-id="ImporterTechnologyModule-9dcae56d-sa-tabs-0">
                            <div className="technology-img visible-lg"
                                style={{ backgroundImage: "url(https://az749841.vo.msecnd.net/sitessksk/alv1/c4c206c4-98d0-4cf7-b50e-abee375816ad/skoda-kodiaq-m73-lights.028ff19f842acab075a13b04041c7b00.fill-1920x640.jpg" }}>
                            </div>
                            <div className="technology-img visible-md"
                                style={{ backgroundImage: "url(https://az749841.vo.msecnd.net/sitessksk/alv1/c4c206c4-98d0-4cf7-b50e-abee375816ad/skoda-kodiaq-m73-lights.028ff19f842acab075a13b04041c7b00.fill-1920x640.jpg" }}>
                            </div>
                            <div className="technology-img visible-sm"
                                style={{ backgroundImage: "url(https://az749841.vo.msecnd.net/sitessksk/alv1/c4c206c4-98d0-4cf7-b50e-abee375816ad/skoda-kodiaq-m73-lights.028ff19f842acab075a13b04041c7b00.fill-1920x640.jpg" }}>
                            </div>

                            <p className="text-info index-content">
                                Parkovanie ešte nikdy nebolo ľahšie. Stačí len stlačiť to správne tlačidlo.
                        </p>

                            <a href="https://www.skoda-auto.sk/modely/kodiaq/kodiaq/parkovanie"
                                className="technology-link layer-link gtm-cta-link"
                                data-action-cta="Website-Technológie-TECHNOLÓGIA SIMPLY CLEVER "
                                data-layer-title="Viac o parkovaní">Viac o parkovaní</a>
                        </div>
                    }


                </div>

            </div>
        </div>
    );
}

export default TechnologySection;