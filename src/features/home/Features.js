import React, { useState } from 'react';

const Features = () => {

    const [featuresTab, setfeaturesTab] = useState(0)


    return (
        <div
            className="k2ng-module k2ng-module-ImporterFeaturesModule k2ng-module-instance-ImporterFeaturesModule-da4e084d "
            data-moduleid="ImporterFeaturesModule-da4e084d" data-implementation="ImporterFeaturesModule"
            id="ImporterFeaturesModule-da4e084d" data-displayname="Pohodlie a priestrannosť"
            data-display-in-sticky="true">


            <div className="container">
                <h2 className="sa-h5-extra sa-features-headline index-title">TOTO VŠETKO A EŠTE VIAC</h2>

                <div className="tabs-wrapper">
                    <ul className="sa-tabs hidden-sm">
                        <li
                            onClick={() => setfeaturesTab(0)} className={(featuresTab == 0) ? "active sa-features-category" : " sa-features-category"}
                            data-tab-id="ImporterFeaturesModule-da4e084d-sa-tabs-easy-0"
                            data-action-cip="Features-TOTO VŠETKO A EŠTE VIAC-" data-label-cip="Šikovné vnútorné riešenia">Šikovné vnútorné riešenia</li>
                        <li
                            onClick={() => setfeaturesTab(1)} className={(featuresTab == 1) ? "active sa-features-category" : " sa-features-category"}
                            data-tab-id="ImporterFeaturesModule-da4e084d-sa-tabs-easy-1"
                            data-action-cip="Features-TOTO VŠETKO A EŠTE VIAC-" data-label-cip="Šikovné vonkajšie riešenia">Šikovné vonkajšie riešenia</li>
                    </ul>
                </div>

                <div className="sa-features-mobile-categories visible-sm">
                    <select className="sa-form-element mobile-categories" name="sa-fetures-category-select"
                        style={{ display: "none" }}>
                        <option className="sa-features-category" value="ImporterFeaturesModule-da4e084d-sa-tabs-easy-0"
                            data-action-cip="Features-TOTO VŠETKO A EŠTE VIAC-" data-label-cip="Šikovné vnútorné riešenia">
                            Šikovné vnútorné riešenia</option>
                        <option className="sa-features-category" value="ImporterFeaturesModule-da4e084d-sa-tabs-easy-1"
                            data-action-cip="Features-TOTO VŠETKO A EŠTE VIAC-" data-label-cip="Šikovné vonkajšie riešenia">
                            Šikovné vonkajšie riešenia</option>
                    </select><span className="sa-form-selectbox-wrapper"><span className="sa-form-selectbox-placeholder">Šikovné
                  vnútorné riešenia</span><span className="glyphicon icon icon-arrow-medium-down" aria-hidden="true"></span>
                        <ul className="sa-option-list sa-form-element-option-list" style={{ display: "none" }}>
                            <li className="sa-selectbox-option" data-value="ImporterFeaturesModule-da4e084d-sa-tabs-easy-0">Šikovné
                            vnútorné
                    riešenia</li>
                            <li className="sa-selectbox-option" data-value="ImporterFeaturesModule-da4e084d-sa-tabs-easy-1">Šikovné
                            vonkajšie
                    riešenia</li>
                        </ul>
                    </span>
                </div>

                {(featuresTab == 0) ?
                    <div className="tab-container" data-tab-id="ImporterFeaturesModule-da4e084d-sa-tabs-easy-0"
                        style={{ display: "block" }}>
                        <div className="row features-row features-in-row-4">
                            <div className="col-lg-6 col-md-9 col-sm-12 layer-link sa-features-item"
                                data-layer-href="/modely/kodiaq/kodiaq/sikovne-vnutorne-riesenia"
                                data-layer-params="detailLayerSlide=0" data-layer-title="">
                                <div className="item-wrapper">

                                    <figure className="sa-features-item-image">
                                        <picture id="fig76ce39bf">

                                            <source media="(min-width: 0px) and (max-width: 659px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/77a2fbf2-0eda-44a1-9453-6a8b2628e41a/skoda-kodiaq-m76-clever-inside-01.d23c391abac7885e5aef7cd2ba5190a9.fill-117x117.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/77a2fbf2-0eda-44a1-9453-6a8b2628e41a/skoda-kodiaq-m76-clever-inside-01.d23c391abac7885e5aef7cd2ba5190a9.fill-175x175.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/77a2fbf2-0eda-44a1-9453-6a8b2628e41a/skoda-kodiaq-m76-clever-inside-01.d23c391abac7885e5aef7cd2ba5190a9.fill-234x234.jpg 2x" />
                                            <source media="(min-width: 660px) and (max-width: 999px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/77a2fbf2-0eda-44a1-9453-6a8b2628e41a/skoda-kodiaq-m76-clever-inside-01.d23c391abac7885e5aef7cd2ba5190a9.fill-322x322.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/77a2fbf2-0eda-44a1-9453-6a8b2628e41a/skoda-kodiaq-m76-clever-inside-01.d23c391abac7885e5aef7cd2ba5190a9.fill-483x483.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/77a2fbf2-0eda-44a1-9453-6a8b2628e41a/skoda-kodiaq-m76-clever-inside-01.d23c391abac7885e5aef7cd2ba5190a9.fill-644x644.jpg 2x" />
                                            <source media="(min-width: 1000px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/77a2fbf2-0eda-44a1-9453-6a8b2628e41a/skoda-kodiaq-m76-clever-inside-01.d23c391abac7885e5aef7cd2ba5190a9.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/77a2fbf2-0eda-44a1-9453-6a8b2628e41a/skoda-kodiaq-m76-clever-inside-01.d23c391abac7885e5aef7cd2ba5190a9.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/77a2fbf2-0eda-44a1-9453-6a8b2628e41a/skoda-kodiaq-m76-clever-inside-01.d23c391abac7885e5aef7cd2ba5190a9.fill-560x560.jpg 2x" />
                                            <img alt=""
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/77a2fbf2-0eda-44a1-9453-6a8b2628e41a/skoda-kodiaq-m76-clever-inside-01.d23c391abac7885e5aef7cd2ba5190a9.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/77a2fbf2-0eda-44a1-9453-6a8b2628e41a/skoda-kodiaq-m76-clever-inside-01.d23c391abac7885e5aef7cd2ba5190a9.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/77a2fbf2-0eda-44a1-9453-6a8b2628e41a/skoda-kodiaq-m76-clever-inside-01.d23c391abac7885e5aef7cd2ba5190a9.fill-560x560.jpg 2x" />
                                        </picture>
                                    </figure>
                                    <p className="sa-features-item-title">Elektronická detská poistka</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-9 col-sm-12 layer-link sa-features-item"
                                data-layer-href="/modely/kodiaq/kodiaq/sikovne-vnutorne-riesenia"
                                data-layer-params="detailLayerSlide=1" data-layer-title="">
                                <div className="item-wrapper">

                                    <figure className="sa-features-item-image">
                                        <picture id="figf91a56ed">

                                            <source media="(min-width: 0px) and (max-width: 659px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/35ea2bb5-eebe-40dc-bf51-8fc09604aa6e/skoda-kodiaq-m76-clever-inside-02.d806d75242c9aa1ef8ecc70d8e7fe6fb.fill-117x117.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/35ea2bb5-eebe-40dc-bf51-8fc09604aa6e/skoda-kodiaq-m76-clever-inside-02.d806d75242c9aa1ef8ecc70d8e7fe6fb.fill-175x175.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/35ea2bb5-eebe-40dc-bf51-8fc09604aa6e/skoda-kodiaq-m76-clever-inside-02.d806d75242c9aa1ef8ecc70d8e7fe6fb.fill-234x234.jpg 2x" />
                                            <source media="(min-width: 660px) and (max-width: 999px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/35ea2bb5-eebe-40dc-bf51-8fc09604aa6e/skoda-kodiaq-m76-clever-inside-02.d806d75242c9aa1ef8ecc70d8e7fe6fb.fill-322x322.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/35ea2bb5-eebe-40dc-bf51-8fc09604aa6e/skoda-kodiaq-m76-clever-inside-02.d806d75242c9aa1ef8ecc70d8e7fe6fb.fill-483x483.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/35ea2bb5-eebe-40dc-bf51-8fc09604aa6e/skoda-kodiaq-m76-clever-inside-02.d806d75242c9aa1ef8ecc70d8e7fe6fb.fill-644x644.jpg 2x" />
                                            <source media="(min-width: 1000px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/35ea2bb5-eebe-40dc-bf51-8fc09604aa6e/skoda-kodiaq-m76-clever-inside-02.d806d75242c9aa1ef8ecc70d8e7fe6fb.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/35ea2bb5-eebe-40dc-bf51-8fc09604aa6e/skoda-kodiaq-m76-clever-inside-02.d806d75242c9aa1ef8ecc70d8e7fe6fb.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/35ea2bb5-eebe-40dc-bf51-8fc09604aa6e/skoda-kodiaq-m76-clever-inside-02.d806d75242c9aa1ef8ecc70d8e7fe6fb.fill-560x560.jpg 2x" />
                                            <img alt=""
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/35ea2bb5-eebe-40dc-bf51-8fc09604aa6e/skoda-kodiaq-m76-clever-inside-02.d806d75242c9aa1ef8ecc70d8e7fe6fb.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/35ea2bb5-eebe-40dc-bf51-8fc09604aa6e/skoda-kodiaq-m76-clever-inside-02.d806d75242c9aa1ef8ecc70d8e7fe6fb.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/35ea2bb5-eebe-40dc-bf51-8fc09604aa6e/skoda-kodiaq-m76-clever-inside-02.d806d75242c9aa1ef8ecc70d8e7fe6fb.fill-560x560.jpg 2x" />
                                        </picture>
                                    </figure>
                                    <p className="sa-features-item-title">Paket na spanie</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-9 col-sm-12 layer-link sa-features-item"
                                data-layer-href="/modely/kodiaq/kodiaq/sikovne-vnutorne-riesenia"
                                data-layer-params="detailLayerSlide=2" data-layer-title="">
                                <div className="item-wrapper">

                                    <figure className="sa-features-item-image">
                                        <picture id="figd4c89c4f">

                                            <source media="(min-width: 0px) and (max-width: 659px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/814a685b-abfd-47df-b611-d8c55ae53499/skoda-kodiaq-m76-clever-inside-03.e71ede65419d0f4d8ea8e71d5058e465.fill-117x117.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/814a685b-abfd-47df-b611-d8c55ae53499/skoda-kodiaq-m76-clever-inside-03.e71ede65419d0f4d8ea8e71d5058e465.fill-175x175.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/814a685b-abfd-47df-b611-d8c55ae53499/skoda-kodiaq-m76-clever-inside-03.e71ede65419d0f4d8ea8e71d5058e465.fill-234x234.jpg 2x" />
                                            <source media="(min-width: 660px) and (max-width: 999px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/814a685b-abfd-47df-b611-d8c55ae53499/skoda-kodiaq-m76-clever-inside-03.e71ede65419d0f4d8ea8e71d5058e465.fill-322x322.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/814a685b-abfd-47df-b611-d8c55ae53499/skoda-kodiaq-m76-clever-inside-03.e71ede65419d0f4d8ea8e71d5058e465.fill-483x483.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/814a685b-abfd-47df-b611-d8c55ae53499/skoda-kodiaq-m76-clever-inside-03.e71ede65419d0f4d8ea8e71d5058e465.fill-644x644.jpg 2x" />
                                            <source media="(min-width: 1000px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/814a685b-abfd-47df-b611-d8c55ae53499/skoda-kodiaq-m76-clever-inside-03.e71ede65419d0f4d8ea8e71d5058e465.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/814a685b-abfd-47df-b611-d8c55ae53499/skoda-kodiaq-m76-clever-inside-03.e71ede65419d0f4d8ea8e71d5058e465.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/814a685b-abfd-47df-b611-d8c55ae53499/skoda-kodiaq-m76-clever-inside-03.e71ede65419d0f4d8ea8e71d5058e465.fill-560x560.jpg 2x" />
                                            <img alt=""
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/814a685b-abfd-47df-b611-d8c55ae53499/skoda-kodiaq-m76-clever-inside-03.e71ede65419d0f4d8ea8e71d5058e465.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/814a685b-abfd-47df-b611-d8c55ae53499/skoda-kodiaq-m76-clever-inside-03.e71ede65419d0f4d8ea8e71d5058e465.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/814a685b-abfd-47df-b611-d8c55ae53499/skoda-kodiaq-m76-clever-inside-03.e71ede65419d0f4d8ea8e71d5058e465.fill-560x560.jpg 2x" />
                                        </picture>
                                    </figure>
                                    <p className="sa-features-item-title">Držiak na tablet</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-9 col-sm-12 layer-link sa-features-item"
                                data-layer-href="/modely/kodiaq/kodiaq/sikovne-vnutorne-riesenia"
                                data-layer-params="detailLayerSlide=3" data-layer-title="">
                                <div className="item-wrapper">

                                    <figure className="sa-features-item-image">
                                        <picture id="figc010f358">

                                            <source media="(min-width: 0px) and (max-width: 659px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/4f8f781f-0ab4-4cfd-8528-6ccf91338f9c/skoda-kodiaq-m76-clever-inside-04.932e2f04de6132ff2b9ffbfea5f4b012.fill-117x117.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/4f8f781f-0ab4-4cfd-8528-6ccf91338f9c/skoda-kodiaq-m76-clever-inside-04.932e2f04de6132ff2b9ffbfea5f4b012.fill-175x175.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/4f8f781f-0ab4-4cfd-8528-6ccf91338f9c/skoda-kodiaq-m76-clever-inside-04.932e2f04de6132ff2b9ffbfea5f4b012.fill-234x234.jpg 2x" />
                                            <source media="(min-width: 660px) and (max-width: 999px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/4f8f781f-0ab4-4cfd-8528-6ccf91338f9c/skoda-kodiaq-m76-clever-inside-04.932e2f04de6132ff2b9ffbfea5f4b012.fill-322x322.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/4f8f781f-0ab4-4cfd-8528-6ccf91338f9c/skoda-kodiaq-m76-clever-inside-04.932e2f04de6132ff2b9ffbfea5f4b012.fill-483x483.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/4f8f781f-0ab4-4cfd-8528-6ccf91338f9c/skoda-kodiaq-m76-clever-inside-04.932e2f04de6132ff2b9ffbfea5f4b012.fill-644x644.jpg 2x" />
                                            <source media="(min-width: 1000px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/4f8f781f-0ab4-4cfd-8528-6ccf91338f9c/skoda-kodiaq-m76-clever-inside-04.932e2f04de6132ff2b9ffbfea5f4b012.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/4f8f781f-0ab4-4cfd-8528-6ccf91338f9c/skoda-kodiaq-m76-clever-inside-04.932e2f04de6132ff2b9ffbfea5f4b012.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/4f8f781f-0ab4-4cfd-8528-6ccf91338f9c/skoda-kodiaq-m76-clever-inside-04.932e2f04de6132ff2b9ffbfea5f4b012.fill-560x560.jpg 2x" />
                                            <img alt=""
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/4f8f781f-0ab4-4cfd-8528-6ccf91338f9c/skoda-kodiaq-m76-clever-inside-04.932e2f04de6132ff2b9ffbfea5f4b012.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/4f8f781f-0ab4-4cfd-8528-6ccf91338f9c/skoda-kodiaq-m76-clever-inside-04.932e2f04de6132ff2b9ffbfea5f4b012.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/4f8f781f-0ab4-4cfd-8528-6ccf91338f9c/skoda-kodiaq-m76-clever-inside-04.932e2f04de6132ff2b9ffbfea5f4b012.fill-560x560.jpg 2x" />
                                        </picture>
                                    </figure>
                                    <p className="sa-features-item-title">Jumbo Box</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="tab-container" data-tab-id="ImporterFeaturesModule-da4e084d-sa-tabs-easy-1"
                        style={{ display: "none" }}>
                        <div className="row features-row features-in-row-4">
                            <div className="col-lg-6 col-md-9 col-sm-12 layer-link sa-features-item"
                                data-layer-href="/modely/kodiaq/kodiaq/sikovne-vonkajsie-riesenia"
                                data-layer-params="detailLayerSlide=0" data-layer-title="">
                                <div className="item-wrapper">

                                    <figure className="sa-features-item-image">
                                        <picture id="fig1dc4d541">

                                            <source media="(min-width: 0px) and (max-width: 659px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/44e28479-aad6-4455-b24c-82b4673e2d8f/skoda-kodiaq-m76-clever-outside-01.9812c21b5924fbd80e1c4c2571e073bb.fill-117x117.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/44e28479-aad6-4455-b24c-82b4673e2d8f/skoda-kodiaq-m76-clever-outside-01.9812c21b5924fbd80e1c4c2571e073bb.fill-175x175.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/44e28479-aad6-4455-b24c-82b4673e2d8f/skoda-kodiaq-m76-clever-outside-01.9812c21b5924fbd80e1c4c2571e073bb.fill-234x234.jpg 2x" />
                                            <source media="(min-width: 660px) and (max-width: 999px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/44e28479-aad6-4455-b24c-82b4673e2d8f/skoda-kodiaq-m76-clever-outside-01.9812c21b5924fbd80e1c4c2571e073bb.fill-322x322.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/44e28479-aad6-4455-b24c-82b4673e2d8f/skoda-kodiaq-m76-clever-outside-01.9812c21b5924fbd80e1c4c2571e073bb.fill-483x483.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/44e28479-aad6-4455-b24c-82b4673e2d8f/skoda-kodiaq-m76-clever-outside-01.9812c21b5924fbd80e1c4c2571e073bb.fill-644x644.jpg 2x" />
                                            <source media="(min-width: 1000px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/44e28479-aad6-4455-b24c-82b4673e2d8f/skoda-kodiaq-m76-clever-outside-01.9812c21b5924fbd80e1c4c2571e073bb.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/44e28479-aad6-4455-b24c-82b4673e2d8f/skoda-kodiaq-m76-clever-outside-01.9812c21b5924fbd80e1c4c2571e073bb.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/44e28479-aad6-4455-b24c-82b4673e2d8f/skoda-kodiaq-m76-clever-outside-01.9812c21b5924fbd80e1c4c2571e073bb.fill-560x560.jpg 2x" />
                                            <img alt=""
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/44e28479-aad6-4455-b24c-82b4673e2d8f/skoda-kodiaq-m76-clever-outside-01.9812c21b5924fbd80e1c4c2571e073bb.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/44e28479-aad6-4455-b24c-82b4673e2d8f/skoda-kodiaq-m76-clever-outside-01.9812c21b5924fbd80e1c4c2571e073bb.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/44e28479-aad6-4455-b24c-82b4673e2d8f/skoda-kodiaq-m76-clever-outside-01.9812c21b5924fbd80e1c4c2571e073bb.fill-560x560.jpg 2x" />
                                        </picture>
                                    </figure>
                                    <p className="sa-features-item-title">Virtuálny pedál</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-9 col-sm-12 layer-link sa-features-item"
                                data-layer-href="/modely/kodiaq/kodiaq/sikovne-vonkajsie-riesenia"
                                data-layer-params="detailLayerSlide=1" data-layer-title="">
                                <div className="item-wrapper">

                                    <figure className="sa-features-item-image">
                                        <picture id="fig0f36978e">

                                            <source media="(min-width: 0px) and (max-width: 659px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/291f8838-ecf6-4ffb-8e69-d7079e9556db/skoda-kodiaq-m76-clever-outside-02.9be0ab4621884bc02e0bf1734686c561.fill-117x117.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/291f8838-ecf6-4ffb-8e69-d7079e9556db/skoda-kodiaq-m76-clever-outside-02.9be0ab4621884bc02e0bf1734686c561.fill-175x175.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/291f8838-ecf6-4ffb-8e69-d7079e9556db/skoda-kodiaq-m76-clever-outside-02.9be0ab4621884bc02e0bf1734686c561.fill-234x234.jpg 2x" />
                                            <source media="(min-width: 660px) and (max-width: 999px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/291f8838-ecf6-4ffb-8e69-d7079e9556db/skoda-kodiaq-m76-clever-outside-02.9be0ab4621884bc02e0bf1734686c561.fill-322x322.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/291f8838-ecf6-4ffb-8e69-d7079e9556db/skoda-kodiaq-m76-clever-outside-02.9be0ab4621884bc02e0bf1734686c561.fill-483x483.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/291f8838-ecf6-4ffb-8e69-d7079e9556db/skoda-kodiaq-m76-clever-outside-02.9be0ab4621884bc02e0bf1734686c561.fill-644x644.jpg 2x" />
                                            <source media="(min-width: 1000px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/291f8838-ecf6-4ffb-8e69-d7079e9556db/skoda-kodiaq-m76-clever-outside-02.9be0ab4621884bc02e0bf1734686c561.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/291f8838-ecf6-4ffb-8e69-d7079e9556db/skoda-kodiaq-m76-clever-outside-02.9be0ab4621884bc02e0bf1734686c561.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/291f8838-ecf6-4ffb-8e69-d7079e9556db/skoda-kodiaq-m76-clever-outside-02.9be0ab4621884bc02e0bf1734686c561.fill-560x560.jpg 2x" />
                                            <img alt=""
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/291f8838-ecf6-4ffb-8e69-d7079e9556db/skoda-kodiaq-m76-clever-outside-02.9be0ab4621884bc02e0bf1734686c561.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/291f8838-ecf6-4ffb-8e69-d7079e9556db/skoda-kodiaq-m76-clever-outside-02.9be0ab4621884bc02e0bf1734686c561.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/291f8838-ecf6-4ffb-8e69-d7079e9556db/skoda-kodiaq-m76-clever-outside-02.9be0ab4621884bc02e0bf1734686c561.fill-560x560.jpg 2x" />
                                        </picture>
                                    </figure>
                                    <p className="sa-features-item-title">Výsuvné ťažné zariadenie</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-9 col-sm-12 layer-link sa-features-item"
                                data-layer-href="/modely/kodiaq/kodiaq/sikovne-vonkajsie-riesenia"
                                data-layer-params="detailLayerSlide=2" data-layer-title="">
                                <div className="item-wrapper">

                                    <figure className="sa-features-item-image">
                                        <picture id="figdb1a241d">

                                            <source media="(min-width: 0px) and (max-width: 659px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/7b7c6e63-e89f-46b2-881b-615a0170a6f0/skoda-kodiaq-m76-clever-outside-03.5bca4be18d7eddd8520274902d442f6e.fill-117x117.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/7b7c6e63-e89f-46b2-881b-615a0170a6f0/skoda-kodiaq-m76-clever-outside-03.5bca4be18d7eddd8520274902d442f6e.fill-175x175.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/7b7c6e63-e89f-46b2-881b-615a0170a6f0/skoda-kodiaq-m76-clever-outside-03.5bca4be18d7eddd8520274902d442f6e.fill-234x234.jpg 2x" />
                                            <source media="(min-width: 660px) and (max-width: 999px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/7b7c6e63-e89f-46b2-881b-615a0170a6f0/skoda-kodiaq-m76-clever-outside-03.5bca4be18d7eddd8520274902d442f6e.fill-322x322.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/7b7c6e63-e89f-46b2-881b-615a0170a6f0/skoda-kodiaq-m76-clever-outside-03.5bca4be18d7eddd8520274902d442f6e.fill-483x483.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/7b7c6e63-e89f-46b2-881b-615a0170a6f0/skoda-kodiaq-m76-clever-outside-03.5bca4be18d7eddd8520274902d442f6e.fill-644x644.jpg 2x" />
                                            <source media="(min-width: 1000px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/7b7c6e63-e89f-46b2-881b-615a0170a6f0/skoda-kodiaq-m76-clever-outside-03.5bca4be18d7eddd8520274902d442f6e.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/7b7c6e63-e89f-46b2-881b-615a0170a6f0/skoda-kodiaq-m76-clever-outside-03.5bca4be18d7eddd8520274902d442f6e.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/7b7c6e63-e89f-46b2-881b-615a0170a6f0/skoda-kodiaq-m76-clever-outside-03.5bca4be18d7eddd8520274902d442f6e.fill-560x560.jpg 2x" />
                                            <img alt=""
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/7b7c6e63-e89f-46b2-881b-615a0170a6f0/skoda-kodiaq-m76-clever-outside-03.5bca4be18d7eddd8520274902d442f6e.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/7b7c6e63-e89f-46b2-881b-615a0170a6f0/skoda-kodiaq-m76-clever-outside-03.5bca4be18d7eddd8520274902d442f6e.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/7b7c6e63-e89f-46b2-881b-615a0170a6f0/skoda-kodiaq-m76-clever-outside-03.5bca4be18d7eddd8520274902d442f6e.fill-560x560.jpg 2x" />
                                        </picture>
                                    </figure>
                                    <p className="sa-features-item-title">Ochrana dverí</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-9 col-sm-12 layer-link sa-features-item"
                                data-layer-href="/modely/kodiaq/kodiaq/sikovne-vonkajsie-riesenia"
                                data-layer-params="detailLayerSlide=3" data-layer-title="">
                                <div className="item-wrapper">

                                    <figure className="sa-features-item-image">
                                        <picture id="fig0b172e1c">

                                            <source media="(min-width: 0px) and (max-width: 659px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/1fdd23d5-eb4e-483b-9a83-02091c85169c/skoda-kodiaq-m76-clever-outside-04.45f68324e81bba08ee957e92f43c677c.fill-117x117.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/1fdd23d5-eb4e-483b-9a83-02091c85169c/skoda-kodiaq-m76-clever-outside-04.45f68324e81bba08ee957e92f43c677c.fill-175x175.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/1fdd23d5-eb4e-483b-9a83-02091c85169c/skoda-kodiaq-m76-clever-outside-04.45f68324e81bba08ee957e92f43c677c.fill-234x234.jpg 2x" />
                                            <source media="(min-width: 660px) and (max-width: 999px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/1fdd23d5-eb4e-483b-9a83-02091c85169c/skoda-kodiaq-m76-clever-outside-04.45f68324e81bba08ee957e92f43c677c.fill-322x322.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/1fdd23d5-eb4e-483b-9a83-02091c85169c/skoda-kodiaq-m76-clever-outside-04.45f68324e81bba08ee957e92f43c677c.fill-483x483.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/1fdd23d5-eb4e-483b-9a83-02091c85169c/skoda-kodiaq-m76-clever-outside-04.45f68324e81bba08ee957e92f43c677c.fill-644x644.jpg 2x" />
                                            <source media="(min-width: 1000px)"
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/1fdd23d5-eb4e-483b-9a83-02091c85169c/skoda-kodiaq-m76-clever-outside-04.45f68324e81bba08ee957e92f43c677c.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/1fdd23d5-eb4e-483b-9a83-02091c85169c/skoda-kodiaq-m76-clever-outside-04.45f68324e81bba08ee957e92f43c677c.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/1fdd23d5-eb4e-483b-9a83-02091c85169c/skoda-kodiaq-m76-clever-outside-04.45f68324e81bba08ee957e92f43c677c.fill-560x560.jpg 2x" />
                                            <img alt=""
                                                srcset="https://az749841.vo.msecnd.net/sitesenmaster/alv1/1fdd23d5-eb4e-483b-9a83-02091c85169c/skoda-kodiaq-m76-clever-outside-04.45f68324e81bba08ee957e92f43c677c.fill-280x280.jpg, https://az749841.vo.msecnd.net/sitesenmaster/alv1/1fdd23d5-eb4e-483b-9a83-02091c85169c/skoda-kodiaq-m76-clever-outside-04.45f68324e81bba08ee957e92f43c677c.fill-420x420.jpg 1.5x, https://az749841.vo.msecnd.net/sitesenmaster/alv1/1fdd23d5-eb4e-483b-9a83-02091c85169c/skoda-kodiaq-m76-clever-outside-04.45f68324e81bba08ee957e92f43c677c.fill-560x560.jpg 2x" />
                                        </picture>
                                    </figure>
                                    <p className="sa-features-item-title">Dáždnik</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>

        </div>
    );
}

export default Features;