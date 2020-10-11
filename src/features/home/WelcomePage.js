import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Features from './Features';
import Gallery from './Gallery';

import GalleryCarousel from "./GalleryCarousel"
import Header from './Header';
import Images from './Images';
import Intro from './Intro';
import Nav from './Nav';
import Section1 from './Section1';
import Section2 from './Section2';
import TechnologySection from './TechnologySection';
import TestDrive from './TestDrive';
import Top from './Top';
import { Video } from './Video';
const data = require("./data.json")
const data2 = require("./data2.json")

export default function WelcomePage() {
  const galleryRef = useRef(null)
  const galleryRef2 = useRef(null)
  const mainRef = useRef(null)
  const testRef = useRef(null)
  const caruselRef = useRef(null)
  const videoRef = useRef(null)
  const beautyRef = useRef(null)
  const galRef = useRef(null)

  const [galleryTab, setgalleryTab] = useState(0)

  const scrollToNode = (node) => {
    node.current.scrollIntoView({ behavior: 'smooth' })
  }

  const menu = [
    {
      text: "Главная",
      url: "#",
      node: mainRef
    },
    {
      text: "Видео",
      url: "#video",
      node: videoRef
    },
    {
      text: "Дизайн",
      url: "#design",
      node: caruselRef
    },
    {
      text: "Качество",
      url: "#beauty",
      node: beautyRef
    },
    {
      text: "Галлерея",
      url: "#gallery",
      node: galRef
    },
    {
      text: "Тест-драйв",
      url: "#test",
      node: testRef
    }
  ]

  const minimenu = [
    {
      text: "Дизайн",
      url: "#design",
      node: caruselRef
    },
    {
      text: "Основные моменты",
      url: "#beauty",
      node: beautyRef
    },
    {
      text: "Галлерея",
      url: "#gallery",
      node: galRef
    }
  ]
  return (
    <>
      <div className="k2ng-page k2ng-page-ImporterModelDerivativePage " data-implementation="ImporterModelDerivativePage"
        data-index-search-category="modelderivative" data-site-type="Importer" data-context-culture="sk-SK"
        data-context-target="modelderivative" data-context-bid="654" data-context-instancename="svk"
        data-context-salesprogram="svk" data-context-mbv="NS7" data-context-modelcode="NS" data-context-bodycode="66000"
        data-context-carline="66000">


        <div className="wrap-page  has-sticky-2nd-level " data-index-bid="654" data-site-id="sites/sksk"
          data-page-id="50930995-401a-4fb1-809e-c947e3f856b2" data-index-clg-target="modelderivative">

          <Header scrollToNode={scrollToNode} menu={menu} minimenu={minimenu} />
          {/* <Top /> */}

          <div style={{ marginTop: "-100px", position: "absolute" }} ref={mainRef}></div>

          <Intro scrollToNode={scrollToNode} node={testRef} />

          <div style={{ marginTop: "-100px", position: "absolute" }} ref={videoRef}></div>

          <Video />


          <div style={{ marginTop: "-120px", position: "absolute" }} ref={caruselRef}></div>

          <div className="k2ng-zone k2ng-zone-name-Free" data-zoneid="Free">
            <div id="design" className="k2ng-module-anchor"></div>
            <div
              className="k2ng-module k2ng-module-ImporterDerivativePresentationModule k2ng-module-instance-ImporterDerivativePresentationModule-12ed01b2 "
              data-moduleid="ImporterDerivativePresentationModule-12ed01b2"
              data-implementation="ImporterDerivativePresentationModule" id="ImporterDerivativePresentationModule-12ed01b2"
              data-displayname="Dizajn a prednosti" data-display-in-sticky="true">

              <div className="container-fluid">
                <div className="item-wrapper">
                  <div className="sa-derivativepresentation-carousels-wrapper">
                    <div className="sa-carousel-controls">
                      <div className="sa-carousel-control desktop-control visible-lg sa-carousel-prev" onClick={() => galleryRef.current.prev()}></div>
                      <div className="sa-carousel-control tablet-control visible-md sa-carousel-prev" onClick={() => galleryRef.current.prev()}></div>
                      <div className="sa-carousel-control mobile-control visible-sm sa-carousel-prev" onClick={() => galleryRef.current.prev()}></div>

                      <div className="sa-carousel-control desktop-control visible-lg sa-carousel-next" onClick={() => galleryRef.current.next()}></div>
                      <div className="sa-carousel-control tablet-control visible-md sa-carousel-next" onClick={() => galleryRef.current.next()}></div>
                      <div className="sa-carousel-control mobile-control visible-sm sa-carousel-next" onClick={() => galleryRef.current.next()}></div>
                    </div>
                    <div className="sa-derivativepresentation-carousel carousel slick-initialized slick-slider slick-dotted"
                      role="toolbar">
                      <div aria-live="polite" className="slick-list draggable" style={{ height: "100%" }}>
                        <div className="slick-track">

                          <ul className="sa-tabs">
                            <li
                              onClick={() => setgalleryTab(0)}
                              className={(galleryTab == 0) ? `active` : ""}
                              data-slide-cat="ImporterDerivativePresentationModule-12ed01b2-sa-tabs-exterior">
                              Экстерьер</li>
                            <li
                              onClick={() => setgalleryTab(1)}
                              className={(galleryTab == 1) ? `active` : ""}
                              data-slide-cat="ImporterDerivativePresentationModule-12ed01b2-sa-tabs-interior">
                              Интерьер</li>
                          </ul>

                          {(galleryTab == 0) ?
                            <GalleryCarousel myref={galleryRef}>
                              {data[0].map((item) => {
                                return <Section1 data={item} />
                              })}
                            </GalleryCarousel> :
                            <GalleryCarousel myref={galleryRef}>
                              {data[1].map((item) => {
                                return <Section1 data={item} />
                              })}
                            </GalleryCarousel>}
                        </div>
                      </div>


                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "-120px", position: "absolute" }} ref={beautyRef}></div>

            <div id="beauty" className="k2ng-module-anchor"></div>
            <div
              className="k2ng-module k2ng-module-ImporterHighlightsModule k2ng-module-instance-ImporterHighlightsModule-a3f0ff8d "
              data-moduleid="ImporterHighlightsModule-a3f0ff8d" data-implementation="ImporterHighlightsModule"
              id="ImporterHighlightsModule-a3f0ff8d" data-displayname="Prednosti" data-display-in-sticky="false">



              <div className="highlights-module  SquaredImagesLayout">

                <div className="sa-carousel-controls">
                  <div className="sa-carousel-control desktop-control visible-lg sa-carousel-prev" onClick={() => galleryRef2.current.prev()}></div>
                  <div className="sa-carousel-control tablet-control visible-md sa-carousel-prev" onClick={() => galleryRef2.current.prev()}></div>
                  <div className="sa-carousel-control mobile-control visible-sm sa-carousel-prev" onClick={() => galleryRef2.current.prev()}></div>

                  <div className="sa-carousel-control desktop-control visible-lg sa-carousel-next" onClick={() => galleryRef2.current.next()}></div>
                  <div className="sa-carousel-control tablet-control visible-md sa-carousel-next" onClick={() => galleryRef2.current.next()}></div>
                  <div className="sa-carousel-control mobile-control visible-sm sa-carousel-next" onClick={() => galleryRef2.current.next()}></div>
                </div>
                <div className="highlights-carousel carousel slick-initialized slick-slider slick-dotted" role="toolbar">

                  <div aria-live="polite" className="slick-list draggable" >
                    <div className="slick-track"
                      role="listbox">
                      <GalleryCarousel myref={galleryRef2}>
                        {data2.map((item) => {
                          return <Section2 data={item} />
                        })}
                      </GalleryCarousel>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cl"></div>
            </div>
            <hr />
            <div id="video" className="k2ng-module-anchor"></div>




            {/* <div className="powerfull-beauty">

              <h3>МОЩНАЯ КРАСОТА</h3>

              <div className="subheader">
                Мощь и надёжность могут быть не только красивыми, но и грациозными. Яркий пример — новый ŠKODA KODIAQ. Готовый к преодолению самых сложных дорожных условий, он смотрится эффектно и гармонично. Точные и чёткие линии, отражающие новую внедорожную стилистику, придуманную дизайнерами марки, при ближайшем рассмотрении усиливают первое впечатление.
              </div>

              <GalleryCarousel items={3} loop={false}>
                <div className="beauty">
                  <div className="img">
                    <img src="./img/headlight.jpg" />
                  </div>
                  <div className="text">
                    <h3>Fari</h3>
                    <div className="desc">
                      Фары головного света — один
                      из наиболее характерных элементов автомобиля ŠKODA KODIAQ, подчёркивающих его суть и назначение. Противотуманные фары, защищены отповреждений.
                </div>
                  </div>
                </div>
                <div className="beauty">
                  <div className="img">
                    <img src="./img/headlight.jpg" />
                  </div>
                  <div className="text">
                    <h3>Fari</h3>
                    <div className="desc">
                      Фары головного света — один
                      из наиболее характерных элементов автомобиля ŠKODA KODIAQ, подчёркивающих его суть и назначение. Противотуманные фары, защищены отповреждений.
                </div>
                  </div>
                </div>
                <div className="beauty">
                  <div className="img">
                    <img src="./img/headlight.jpg" />
                  </div>
                  <div className="text">
                    <h3>Fari</h3>
                    <div className="desc">
                      Фары головного света — один
                      из наиболее характерных элементов автомобиля ŠKODA KODIAQ, подчёркивающих его суть и назначение. Противотуманные фары, защищены отповреждений.
                </div>
                  </div>
                </div>
              </GalleryCarousel>

            </div> */}

            <div style={{ marginTop: "-120px", position: "absolute" }} ref={galRef}></div>

            <Gallery />

            <div style={{ marginTop: "-120px", position: "absolute" }} ref={testRef}></div>


            <div id="test" className="k2ng-module-anchor" ></div>


            <TestDrive />


          </div>


          <div className="k2ng-zone k2ng-zone-name-Bottom" data-zoneid="Bottom">
          </div>


          <div className="k2ng-zone k2ng-zone-name-Footer" data-zoneid="Footer">
            <div id="anchor-M25-a7ba5d04" className="k2ng-module-anchor"></div>
            <div className="k2ng-module k2ng-module-ImporterFooterModule k2ng-module-instance-ImporterFooterModule-32e7f207 "
              data-moduleid="ImporterFooterModule-32e7f207" data-implementation="ImporterFooterModule"
              id="ImporterFooterModule-32e7f207" data-displayname="ImporterFooterModule" data-display-in-sticky="false">


              <footer className="importer-footer-wrapper" data-compare="Porovnať" data-cancel="Cancel"
                data-compare-url="https://clg.skoda-auto.com/api/Link?tool=CarComparison&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                data-add-car="Pridať ďalší model na porovnanie">

                <div className="skoda-tools-sector" data-tools-count="5">
                  <div className="tools-wrapper">
                    <a className="skoda-tool-wrapper gtm-cta-link" href="https://cc.skoda-auto.com/svk/sk-SK" target="_blank"
                      data-action-cta="Website-ImporterFooterModule-Tool link" data-tools-count="5">
                      <div className="hover-overshadow"></div>
                      <div className="tool-info-wrapper">
                        <div className="tool-icon">
                          <figure>
                            <picture id="fig12f7c6db">

                              <source media="(min-width: 0px) and (max-width: 659px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesNBN63BYRICDOU63UL3DDEZOUGApng/0x8D6FBD1D03C36C6/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesNBN63BYRICDOU63UL3DDEZOUGApng/0x8D6FBD1D03C36C6/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesNBN63BYRICDOU63UL3DDEZOUGApng/0x8D6FBD1D03C36C6/80x80-Fit.bin 2x" />
                              <source media="(min-width: 660px) and (max-width: 999px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesNBN63BYRICDOU63UL3DDEZOUGApng/0x8D6FBD1D03C36C6/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesNBN63BYRICDOU63UL3DDEZOUGApng/0x8D6FBD1D03C36C6/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesNBN63BYRICDOU63UL3DDEZOUGApng/0x8D6FBD1D03C36C6/80x80-Fit.bin 2x" />
                              <source media="(min-width: 1000px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesNBN63BYRICDOU63UL3DDEZOUGApng/0x8D6FBD1D03C36C6/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesNBN63BYRICDOU63UL3DDEZOUGApng/0x8D6FBD1D03C36C6/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesNBN63BYRICDOU63UL3DDEZOUGApng/0x8D6FBD1D03C36C6/80x80-Fit.bin 2x" />
                              <img alt=""
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesNBN63BYRICDOU63UL3DDEZOUGApng/0x8D6FBD1D03C36C6/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesNBN63BYRICDOU63UL3DDEZOUGApng/0x8D6FBD1D03C36C6/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesNBN63BYRICDOU63UL3DDEZOUGApng/0x8D6FBD1D03C36C6/80x80-Fit.bin 2x" />
                            </picture>
                          </figure>
                        </div>

                        <div className="tool-label"><span className="tool-label-wrapper">Конфигуратор</span>
                        </div>

                        <div className="tool-description hidden-sm">Соберите новый автомобиль по своим идеям</div>

                        <span className="tool-link hidden-sm">Учить больше</span>
                      </div>
                    </a>
                    <a className="skoda-tool-wrapper gtm-cta-link"
                      href="#"
                      target="_blank" data-action-cta="Website-ImporterFooterModule-Tool link" data-tools-count="5">
                      <div className="hover-overshadow"></div>
                      <div className="tool-info-wrapper">
                        <div className="tool-icon">
                          <figure>
                            <picture id="fig3d3b7d4a">

                              <source media="(min-width: 0px) and (max-width: 659px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages6M27XCJANIO5AKLNX3EJXBJIE4png/0x8D77E793C00DBA5/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages6M27XCJANIO5AKLNX3EJXBJIE4png/0x8D77E793C00DBA5/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages6M27XCJANIO5AKLNX3EJXBJIE4png/0x8D77E793C00DBA5/80x80-Fit.bin 2x" />
                              <source media="(min-width: 660px) and (max-width: 999px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages6M27XCJANIO5AKLNX3EJXBJIE4png/0x8D77E793C00DBA5/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages6M27XCJANIO5AKLNX3EJXBJIE4png/0x8D77E793C00DBA5/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages6M27XCJANIO5AKLNX3EJXBJIE4png/0x8D77E793C00DBA5/80x80-Fit.bin 2x" />
                              <source media="(min-width: 1000px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages6M27XCJANIO5AKLNX3EJXBJIE4png/0x8D77E793C00DBA5/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages6M27XCJANIO5AKLNX3EJXBJIE4png/0x8D77E793C00DBA5/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages6M27XCJANIO5AKLNX3EJXBJIE4png/0x8D77E793C00DBA5/80x80-Fit.bin 2x" />
                              <img alt=""
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages6M27XCJANIO5AKLNX3EJXBJIE4png/0x8D77E793C00DBA5/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages6M27XCJANIO5AKLNX3EJXBJIE4png/0x8D77E793C00DBA5/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages6M27XCJANIO5AKLNX3EJXBJIE4png/0x8D77E793C00DBA5/80x80-Fit.bin 2x" />
                            </picture>
                          </figure>
                        </div>

                        <div className="tool-label"><span className="tool-label-wrapper">Найти дилера</span>
                        </div>

                        <div className="tool-description hidden-sm">Широкая сеть дилеров и сервисных центров по всей Словакии</div>

                        <span className="tool-link hidden-sm">Учить больше</span>
                      </div>
                    </a>
                    <a className="skoda-tool-wrapper gtm-cta-link"
                      href="#"
                      target="_blank" data-action-cta="Website-ImporterFooterModule-Tool link" data-tools-count="5">
                      <div className="hover-overshadow"></div>
                      <div className="tool-info-wrapper">
                        <div className="tool-icon">
                          <figure>
                            <picture id="figf08528f0">

                              <source media="(min-width: 0px) and (max-width: 659px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesQNFUC2G3DLCK6QUDGPO47P6P5Qpng/0x8D818DD11240A0F/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesQNFUC2G3DLCK6QUDGPO47P6P5Qpng/0x8D818DD11240A0F/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesQNFUC2G3DLCK6QUDGPO47P6P5Qpng/0x8D818DD11240A0F/80x80-Fit.bin 2x" />
                              <source media="(min-width: 660px) and (max-width: 999px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesQNFUC2G3DLCK6QUDGPO47P6P5Qpng/0x8D818DD11240A0F/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesQNFUC2G3DLCK6QUDGPO47P6P5Qpng/0x8D818DD11240A0F/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesQNFUC2G3DLCK6QUDGPO47P6P5Qpng/0x8D818DD11240A0F/80x80-Fit.bin 2x" />
                              <source media="(min-width: 1000px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesQNFUC2G3DLCK6QUDGPO47P6P5Qpng/0x8D818DD11240A0F/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesQNFUC2G3DLCK6QUDGPO47P6P5Qpng/0x8D818DD11240A0F/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesQNFUC2G3DLCK6QUDGPO47P6P5Qpng/0x8D818DD11240A0F/80x80-Fit.bin 2x" />
                              <img alt=""
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesQNFUC2G3DLCK6QUDGPO47P6P5Qpng/0x8D818DD11240A0F/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesQNFUC2G3DLCK6QUDGPO47P6P5Qpng/0x8D818DD11240A0F/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesQNFUC2G3DLCK6QUDGPO47P6P5Qpng/0x8D818DD11240A0F/80x80-Fit.bin 2x" />
                            </picture>
                          </figure>
                        </div>

                        <div className="tool-label"><span className="tool-label-wrapper">Тест-драйв</span>
                        </div>

                        <div className="tool-description hidden-sm">Закажи тест-драйв</div>

                        <span className="tool-link hidden-sm">Учить больше</span>
                      </div>
                    </a>
                    <a className="skoda-tool-wrapper gtm-cta-link"
                      href="#"
                      target="_blank" data-action-cta="Website-ImporterFooterModule-Tool link" data-tools-count="5">
                      <div className="hover-overshadow"></div>
                      <div className="tool-info-wrapper">
                        <div className="tool-icon">
                          <figure>
                            <picture id="fig63e3b0c3">

                              <source media="(min-width: 0px) and (max-width: 659px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesWILRPP7GPSFS45FC2CSIH53K5Mpng/0x8D6CF97E7505ECA/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesWILRPP7GPSFS45FC2CSIH53K5Mpng/0x8D6CF97E7505ECA/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesWILRPP7GPSFS45FC2CSIH53K5Mpng/0x8D6CF97E7505ECA/80x80-Fit.bin 2x" />
                              <source media="(min-width: 660px) and (max-width: 999px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesWILRPP7GPSFS45FC2CSIH53K5Mpng/0x8D6CF97E7505ECA/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesWILRPP7GPSFS45FC2CSIH53K5Mpng/0x8D6CF97E7505ECA/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesWILRPP7GPSFS45FC2CSIH53K5Mpng/0x8D6CF97E7505ECA/80x80-Fit.bin 2x" />
                              <source media="(min-width: 1000px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesWILRPP7GPSFS45FC2CSIH53K5Mpng/0x8D6CF97E7505ECA/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesWILRPP7GPSFS45FC2CSIH53K5Mpng/0x8D6CF97E7505ECA/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesWILRPP7GPSFS45FC2CSIH53K5Mpng/0x8D6CF97E7505ECA/80x80-Fit.bin 2x" />
                              <img alt=""
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesWILRPP7GPSFS45FC2CSIH53K5Mpng/0x8D6CF97E7505ECA/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesWILRPP7GPSFS45FC2CSIH53K5Mpng/0x8D6CF97E7505ECA/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesWILRPP7GPSFS45FC2CSIH53K5Mpng/0x8D6CF97E7505ECA/80x80-Fit.bin 2x" />
                            </picture>
                          </figure>
                        </div>

                        <div className="tool-label"><span className="tool-label-wrapper">Складские автомобили</span>
                        </div>

                        <div className="tool-description hidden-sm">Предлагайте новые автомобили для немедленной выдачи</div>

                        <span className="tool-link hidden-sm">Учить больше</span>
                      </div>
                    </a>
                    <a className="skoda-tool-wrapper gtm-cta-link"
                      href="#"
                      target="_blank" data-action-cta="Website-ImporterFooterModule-Tool link" data-tools-count="5">
                      <div className="hover-overshadow"></div>
                      <div className="tool-info-wrapper">
                        <div className="tool-icon">
                          <figure>
                            <picture id="fig0e18af02">

                              <source media="(min-width: 0px) and (max-width: 659px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages2FTHKPIMLNJEQIXCNVJNPELLZApng/0x8D7F1BCA9784221/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages2FTHKPIMLNJEQIXCNVJNPELLZApng/0x8D7F1BCA9784221/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages2FTHKPIMLNJEQIXCNVJNPELLZApng/0x8D7F1BCA9784221/80x80-Fit.bin 2x" />
                              <source media="(min-width: 660px) and (max-width: 999px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages2FTHKPIMLNJEQIXCNVJNPELLZApng/0x8D7F1BCA9784221/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages2FTHKPIMLNJEQIXCNVJNPELLZApng/0x8D7F1BCA9784221/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages2FTHKPIMLNJEQIXCNVJNPELLZApng/0x8D7F1BCA9784221/80x80-Fit.bin 2x" />
                              <source media="(min-width: 1000px)"
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages2FTHKPIMLNJEQIXCNVJNPELLZApng/0x8D7F1BCA9784221/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages2FTHKPIMLNJEQIXCNVJNPELLZApng/0x8D7F1BCA9784221/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages2FTHKPIMLNJEQIXCNVJNPELLZApng/0x8D7F1BCA9784221/80x80-Fit.bin 2x" />
                              <img alt=""
                                srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages2FTHKPIMLNJEQIXCNVJNPELLZApng/0x8D7F1BCA9784221/40x40-Fit.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages2FTHKPIMLNJEQIXCNVJNPELLZApng/0x8D7F1BCA9784221/60x60-Fit.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages2FTHKPIMLNJEQIXCNVJNPELLZApng/0x8D7F1BCA9784221/80x80-Fit.bin 2x" />
                            </picture>
                          </figure>
                        </div>

                        <div className="tool-label"><span className="tool-label-wrapper">Интернет-магазин ŠKODA</span>
                        </div>

                        <div className="tool-description hidden-sm">Предлагайте новые автомобили для немедленной выдачи</div>

                        <span className="tool-link hidden-sm">Учить больше</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="hidden-lg md-sm-contact-info">
                  <div className="collumn-headline">Связаться с нами</div>
                  <div className="hotline-button active gtm-cta-link" data-action-cta="Website-Footer-Call link"
                    data-label-cta="Infolinka 0800 124 125">
                    <a className="btn btn-sa-primary-small hotline" href="tel:0800 124 125">Инфолиния 998 71 202 71 71</a>
                  </div>
                  <div className="email-us collumn-item">
                    <a href="mailto:infolinka@skoda-auto.sk">Отправить нам письмо</a>
                  </div>
                  <div className="collumn-item">
                    <a href="https://www.skoda-auto.sk/o-nas/formular" className="footer-link" target="_blank">Форма обратной связи</a>
                  </div>
                  <div className="collumn-item">
                    <a href="https://www.skoda-auto.sk/servis/asistencna-sluzba" className="footer-link"
                      target="_blank">Ассистенты</a>
                  </div>
                </div>
                <div className="toggle-links hidden-lg" id="toggle-id">
                  <span>Служба поддержки</span>
                  <span className="icon icon-arrow-medium-down"></span>
                </div>
                <div className="footer-links-sector">
                  <div className="container">
                    <div className="row">

                      <div className="col-lg-4 col-md-6">
                        <div className="collumn-headline">Клиентам ŠKODA</div>
                        <div className="links-collumn">
                          <div className="collumn-item"><a href="https://www.skoda-auto.sk/modely/kodiaq/kodiaq#NotFound"
                            className="footer-link">Прайс-листы</a></div>
                          <div className="collumn-item"><a
                            href="https://clg.skoda-auto.com/api/Link?tool=sk-sk_Skladova_vozidla&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                            className="footer-link">ŠKODA коннект</a></div>
                          <div className="collumn-item"><a
                            href="https://clg.skoda-auto.com/api/Link?tool=sk-sk_Siet&amp;predaj=1&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                            className="footer-link">Ассистенты</a></div>
                          <div className="collumn-item"><a href="https://www.skoda-auto.sk/ponuka/cenniky-a-katalogy"
                            className="footer-link">Почему ŠKODA</a></div>

                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="collumn-headline">ŠKODA сервис</div>
                        <div className="links-collumn">
                          <div className="collumn-item"><a
                            href="https://clg.skoda-auto.com/api/Link?tool=sk-sk_Siet&amp;servis=1&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                            className="footer-link">Аксесуары</a></div>
                          <div className="collumn-item"><a href="https://www.skoda-auto.sk/servis/objednavka-do-servisu"
                            className="footer-link">Гарантия</a></div>
                          <div className="collumn-item"><a
                            href="https://clg.skoda-auto.com/api/Link?tool=Ownersmanuals&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                            className="footer-link">Запчасти ŠKODA</a></div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="collumn-headline">О компании</div>
                        <div className="links-collumn">
                          <div className="collumn-item"><a href="https://www.skoda-auto.sk/servis/prehlad-zaruk"
                            className="footer-link">Контакты</a></div>
                          <div className="collumn-item"><a href="https://www.skoda-auto.sk/servis/spoluucast"
                            className="footer-link">Социальные проекты</a></div>
                          <div className="collumn-item"><a href="https://www.skoda-auto.sk/servis/kalendar-starostlivosti"
                            className="footer-link">История ŠKODA</a></div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="collumn-headline">Пресс-центр</div>
                        <div className="links-collumn">
                          <div className="collumn-item"><a href="https://www.skoda-auto.sk/o-nas/vedenie-spolocnosti"
                            className="footer-link">Новости</a></div>
                          <div className="collumn-item"><a href="https://www.skoda-auto.sk/o-nas/dokumentacia"
                            className="footer-link">Журнал ŠKODA Style</a></div>
                        </div>
                      </div>
                      <div className="col-lg-8 visible-lg">
                        <div className="collumn-headline">Оставйтесь на связи</div>
                        <div className="hotline-button active gtm-cta-link" data-action-cta="Website-Footer-Call link"
                          data-label-cta="Infolinka +998 71 202 71 71">
                          <a className="btn btn-sa-primary-small hotline" href="tel:+998 71 202 71 71">Горячая линия +998 71 202 71 71</a>
                        </div>
                        <div className="links-collumn links-bellow-cta">
                          <div className="email-us collumn-item">
                            <a href="mailto:infolinka@skoda-auto.sk">Напишите нам</a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="footer-other-content-sector">
                  <div className="container">
                    <div className="row row-wrapper">
                      <div className="col-lg-24">
                        <div className="first-row">
                          <div className="situated-left">
                          </div>
                          <div className="situated-right">
                            <div className="social-icons">
                              <a href="https://www.facebook.com/SkodaAutoSK" target="_blank">

                                <span data-icon="" className="social-icon icon facebook"></span>
                              </a>
                              <a href="https://www.youtube.com/user/SkodaAutoSK" target="_blank">

                                <span data-icon="" className="social-icon icon youtube"></span>
                              </a>
                              <a href="#"
                                target="_blank">

                                <span data-icon="" className="social-icon icon instagram"></span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="clearing"></div>
                        <div className="second-row">
                          <div className="situated-right">
                            <a href="#">
                              <span className="footer-bottom-link">cookies</span>
                            </a>
                            <a href="#">
                              <span className="footer-bottom-link">Карта сайта</span>
                            </a>
                          </div>
                          <div className="situated-left">
                            <span className="copyright">©2017 ŠKODA AUTO Slovensko s.r.o.</span>
                          </div>
                        </div>
                        <div className="clearing"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>

            </div>
          </div>
        </div>

        <a href="#" onClick={(e) => {
          e.preventDefault()
          mainRef.current.scrollIntoView({ behavior: 'smooth' })
        }} className="back-to-top icon icon-arrow-small-up" style={{ display: "block" }}></a>
      </div>



    </>
  )
}    