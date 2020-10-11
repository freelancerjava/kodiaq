import React, { useState } from 'react';

const Nav = ({ menu, scrollToNode, minimenu }) => {
    const [mmenu, setmmenu] = useState(false)

    return (
        <>
            <nav className="importer-header container-fluid menu-shrinked nav-is-sticky"
                data-all-search-results-url="/search-results" data-search-handler="/api/search">
                <div className="navbar-top">
                    <a href="https://www.skoda-avto.uz/">
                        <div className="skoda-logo">
                            <figure className="skoda-logo">
                                <picture id="figa5777aac">

                                    <source media="(min-width: 0px) and (max-width: 659px)"
                                        srcset="https://az749841.vo.msecnd.net/modulesassets/sfv4/Assets.img.skoda-logo-landscapeV2.a4df7efeb9c9eb4987594f574894ff1e.136x40-Fill.png, https://az749841.vo.msecnd.net/modulesassets/sfv4/Assets.img.skoda-logo-landscapeV2.a4df7efeb9c9eb4987594f574894ff1e.204x60-Fill.png 1.5x, https://az749841.vo.msecnd.net/modulesassets/sfv4/Assets.img.skoda-logo-landscapeV2.a4df7efeb9c9eb4987594f574894ff1e.272x80-Fill.png 2x" />
                                    <source media="(min-width: 660px) and (max-width: 999px)"
                                        srcset="https://az749841.vo.msecnd.net/modulesassets/sfv4/Assets.img.skoda-logo-landscapeV2.a4df7efeb9c9eb4987594f574894ff1e.154x46-Fill.png, https://az749841.vo.msecnd.net/modulesassets/sfv4/Assets.img.skoda-logo-landscapeV2.a4df7efeb9c9eb4987594f574894ff1e.231x69-Fill.png 1.5x, https://az749841.vo.msecnd.net/modulesassets/sfv4/Assets.img.skoda-logo-landscapeV2.a4df7efeb9c9eb4987594f574894ff1e.308x92-Fill.png 2x" />
                                    <source media="(min-width: 1000px)"
                                        srcset="https://az749841.vo.msecnd.net/modulesassets/sfv4/Assets.img.skoda-logo-landscapeV2.a4df7efeb9c9eb4987594f574894ff1e.154x46-Fill.png, https://az749841.vo.msecnd.net/modulesassets/sfv4/Assets.img.skoda-logo-landscapeV2.a4df7efeb9c9eb4987594f574894ff1e.231x69-Fill.png 1.5x, https://az749841.vo.msecnd.net/modulesassets/sfv4/Assets.img.skoda-logo-landscapeV2.a4df7efeb9c9eb4987594f574894ff1e.308x92-Fill.png 2x" />
                                    <img alt="Logo Škoda"
                                        srcset="https://az749841.vo.msecnd.net/modulesassets/sfv4/Assets.img.skoda-logo-landscapeV2.a4df7efeb9c9eb4987594f574894ff1e.154x46-Fill.png, https://az749841.vo.msecnd.net/modulesassets/sfv4/Assets.img.skoda-logo-landscapeV2.a4df7efeb9c9eb4987594f574894ff1e.231x69-Fill.png 1.5x, https://az749841.vo.msecnd.net/modulesassets/sfv4/Assets.img.skoda-logo-landscapeV2.a4df7efeb9c9eb4987594f574894ff1e.308x92-Fill.png 2x" />
                                </picture>
                            </figure>
                        </div>
                    </a>
                    <div className="nav-links">
                        <ul className="nav-list no-lang-selector tablet-viewport " id="main-menu" >
                            {menu.map((item, index) => {
                                return (
                                    <li className="models">
                                        <a onClick={(e) => {
                                            e.preventDefault()
                                            scrollToNode(item.node)
                                        }} href={item.url}>{item.text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="right-section ">
                        {/* <div className="important-links">
                        <div className="nav-button">
                            <div className="tool-icon">
                                <figure>
                                    <picture id="fig0d590839">

                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                        <source media="(min-width: 1000px)"
                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                        <img alt=""
                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                    </picture>
                                </figure>
                            </div>
                            <div className="link-label">
                                <a className="gtm-cta-link" href="https://cc.skoda-auto.com/svk/sk-SK" target="_blank"
                                    data-action-cta="Website-ImporterHeaderModule-Tool link">Konfigurátor</a>
                            </div>
                        </div>
                        <div className="nav-button">
                            <div className="tool-icon">
                                <figure>
                                    <picture id="fig4c2863b8">

                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                        <source media="(min-width: 1000px)"
                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                        <img alt=""
                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                    </picture>
                                </figure>
                            </div>
                            <div className="link-label">
                                <a className="gtm-cta-link"
                                    href="https://clg.skoda-auto.com/api/Link?tool=sk-sk_Siet&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                                    target="_blank" data-action-cta="Website-ImporterHeaderModule-Tool link">Дилеры</a>
                            </div>
                        </div>
                        <div className="nav-button">
                            <div className="tool-icon">
                                <figure>
                                    <picture id="fig1f83ea52">

                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                        <source media="(min-width: 1000px)"
                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                        <img alt=""
                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                    </picture>
                                </figure>
                            </div>
                            <div className="link-label">
                                <a className="gtm-cta-link"
                                    href="https://clg.skoda-auto.com/api/Link?tool=sk-sk_Testovacia_jazda&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                                    target="_blank" data-action-cta="Website-ImporterHeaderModule-Tool link">Тест-драйв</a>
                            </div>
                        </div>
                    </div>

                    <div className="important-links-dropdown tool-dropdown hidden-sm"
                        data-toggle-submenu="#importer-header-dropdown-submenu-tools">
                        <span className="tools-label">Инструменты</span>
                    </div>



                    <div className="search hidden-sm activate-search">
                        <div className="search-icon"></div>
                    </div>

                    <div className="search-field">
                        <input type="text" className="do-search" placeholder="Hľadám..." data-domain="www.skoda-auto.sk" />
                        <div data-close-search="true" className="close-search icon icon-close-medium-white">
                        </div>
                    </div> */}

                        <div
                            onClick={() => {
                                setmmenu(state => { return !state })
                            }}
                            className="mobile-hamburger-menu hidden-md hidden-lg"
                            data-toggle-submenu="#importer-header-mobile-submenu">
                            <div className="icon icon-hamburger-open">
                                <div className="hamburger-menu-stripe"></div>
                                <div className="hamburger-menu-stripe"></div>
                                <div className="hamburger-menu-stripe"></div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* <div className="anchors-subnav compact-mode sticky-anchor-header" style={{ display: "block" }}>


                <div data-toggle-anchors="true" className="active-anchor-placeholder">
                    <span className="active-anchor">Дизайн и досуг</span>
                    <span className="dropdown-icon icon icon-arrow-small-down"></span>
                </div>

                <div className="anchor-list" data-insert-anchors="true">
                    <ul className="anchors">
                        <li className="anchor"><a className="anchor-link" href="https://www.skoda-auto.sk/modely/kodiaq/kodiaq#"
                            data-module-anchor="ImporterDerivativePresentationModule-12ed01b2">
                            Дизайн и преимущества</a>
                        </li>
                        <li className="anchor"><a className="anchor-link" href="https://www.skoda-auto.sk/modely/kodiaq/kodiaq#"
                            data-module-anchor="ImporterTechnologyModule-9dcae56d">Технологии</a></li>
                        <li className="anchor"><a className="anchor-link" href="https://www.skoda-auto.sk/modely/kodiaq/kodiaq#"
                            data-module-anchor="ImporterHighlightsModule-b70dcc1d">Связь</a>
                        </li>
                        <li className="anchor"><a className="anchor-link" href="https://www.skoda-auto.sk/modely/kodiaq/kodiaq#"
                            data-module-anchor="ImporterTrimsModule-4f4a98d1">Оборудование</a></li>
                        <li className="anchor"><a className="anchor-link active"
                            href="https://www.skoda-auto.sk/modely/kodiaq/kodiaq#"
                            data-module-anchor="ImporterFeaturesModule-da4e084d">Комфорт и вместительность</a></li>
                        <li className="anchor hidden-sm"><a className="anchor-link hidden-sm"
                            href="https://www.skoda-auto.sk/modely/kodiaq/kodiaq#"
                            data-module-anchor="ImporterVisualizerModule-7f0c5aa9">Прайслист и каталог</a>
                        </li>
                    </ul>
                </div>



                <div className="sepparator"></div>

                <div className="navbar-buttons">


                    <a className="tool-button gtm-cta-link" href="https://cc.skoda-auto.com/svk/sk-SK" target="_blank"
                        data-action-cta="Website-ImporterHeaderModule-Tool link">
                        <span className="tool-icon">
                            <figure>
                                <picture id="fig1245bd33">

                                    <source media="(min-width: 0px) and (max-width: 659px)"
                                        srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                    <source media="(min-width: 660px) and (max-width: 999px)"
                                        srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                    <source media="(min-width: 1000px)"
                                        srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                    <img alt=""
                                        srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                </picture>
                            </figure>
                        </span>
                    </a>
                    <a className="tool-button gtm-cta-link"
                        href="https://clg.skoda-auto.com/api/Link?tool=sk-sk_Siet&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                        target="_blank" data-action-cta="Website-ImporterHeaderModule-Tool link">
                        <span className="tool-icon">
                            <figure>
                                <picture id="fig2f90e3e4">

                                    <source media="(min-width: 0px) and (max-width: 659px)"
                                        srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                    <source media="(min-width: 660px) and (max-width: 999px)"
                                        srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                    <source media="(min-width: 1000px)"
                                        srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                    <img alt=""
                                        srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                </picture>
                            </figure>
                        </span>

                        <span className="link-label">Nájsť predajcu</span>
                    </a>
                    <a className="tool-button gtm-cta-link"
                        href="https://clg.skoda-auto.com/api/Link?tool=sk-sk_Testovacia_jazda&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                        target="_blank" data-action-cta="Website-ImporterHeaderModule-Tool link">
                        <span className="tool-icon">
                            <figure>
                                <picture id="fig2b0075ee">

                                    <source media="(min-width: 0px) and (max-width: 659px)"
                                        srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                    <source media="(min-width: 660px) and (max-width: 999px)"
                                        srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                    <source media="(min-width: 1000px)"
                                        srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                    <img alt=""
                                        srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                </picture>
                            </figure>
                        </span>

                        <span className="link-label">Testovacia jazda</span>
                    </a>
                </div>
            </div> */}


                {/* <div className="search-suggestions-large">
                    <div className="search-suggestions-container" style={{ maxHeight: "692px" }}>
                        <div className="search-suggestions-result"></div>
                        <a href="https://www.skoda-auto.sk/modely/kodiaq/kodiaq#" className="importer-hearder-search-summary">
                            <div className="show-all-results">
                                <span>+</span>
                                <span data-results-count="" className="search-results-count"></span>
                                <span>viac výsledkov</span>
                            </div>
                            <div className="link-to-all-results">
                                <span>Zobraziť všetky</span>
                            </div>
                        </a>
                    </div>
                </div>


                <div className="submenu-container-holder">
                    <div className="submenu" style={{ maxHeight: "707px" }}>
                        <div className="specific-submenu submenu-models" id="node_49f6c43ec1ae4b368234b3b787b2cba6">
                            <h6 className="submenu-headline">Наши модели</h6>
                            <div className="container our-range">
                                <div className="row">



                                    <div className="col-lg-6 col-md-8 col-sm-12 range-collumn-field">
                                        <a href="https://www.skoda-auto.sk/modely/nove-citigo/citigoe-iv">
                                            <div className="car-model-image">
                                                <figure>
                                                    <picture id="fig6a517472">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N0PAHTFrontMinipng/0x8D74709615706FD/235x117-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N0PAHTFrontMinipng/0x8D74709615706FD/352x175-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N0PAHTFrontMinipng/0x8D74709615706FD/470x234-Fill.png 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N0PAHTFrontMinipng/0x8D74709615706FD/430x215-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N0PAHTFrontMinipng/0x8D74709615706FD/645x322-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N0PAHTFrontMinipng/0x8D74709615706FD/860x430-Fill.png 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N0PAHTFrontMinipng/0x8D74709615706FD/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N0PAHTFrontMinipng/0x8D74709615706FD/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N0PAHTFrontMinipng/0x8D74709615706FD/560x280-Fill.png 2x" />
                                                        <img alt="CITIGOe iV"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N0PAHTFrontMinipng/0x8D74709615706FD/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N0PAHTFrontMinipng/0x8D74709615706FD/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N0PAHTFrontMinipng/0x8D74709615706FD/560x280-Fill.png 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                            <div className="car-model-label">CITIGO<sup
                                                style={{ textTransform: "lowercase", color: "#4ba82e" }}>e</sup>
                                                <span style={{ textTransform: "lowercase" }}>𝗶</span>V</div>
                                        </a>
                                    </div>



                                    <div className="col-lg-6 col-md-8 col-sm-12 range-collumn-field">
                                        <a href="https://www.skoda-auto.sk/modely/nova-fabia">
                                            <div className="car-model-image">
                                                <figure>
                                                    <picture id="figd6a5533e">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6QBQ7HDFrontMinipng/0x8D7C75558813A6F/235x117-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6QBQ7HDFrontMinipng/0x8D7C75558813A6F/352x175-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6QBQ7HDFrontMinipng/0x8D7C75558813A6F/470x234-Fill.png 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6QBQ7HDFrontMinipng/0x8D7C75558813A6F/430x215-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6QBQ7HDFrontMinipng/0x8D7C75558813A6F/645x322-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6QBQ7HDFrontMinipng/0x8D7C75558813A6F/860x430-Fill.png 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6QBQ7HDFrontMinipng/0x8D7C75558813A6F/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6QBQ7HDFrontMinipng/0x8D7C75558813A6F/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6QBQ7HDFrontMinipng/0x8D7C75558813A6F/560x280-Fill.png 2x" />
                                                        <img alt="Fabia"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6QBQ7HDFrontMinipng/0x8D7C75558813A6F/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6QBQ7HDFrontMinipng/0x8D7C75558813A6F/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6QBQ7HDFrontMinipng/0x8D7C75558813A6F/560x280-Fill.png 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                            <div className="car-model-label">Fabia</div>
                                        </a>
                                    </div>



                                    <div className="col-lg-6 col-md-8 col-sm-12 range-collumn-field">
                                        <a href="https://www.skoda-auto.sk/modely/scala">
                                            <div className="car-model-image">
                                                <figure>
                                                    <picture id="figf6abccb4">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2019140473842FrontMinipng/0x8D6810E92108E07/235x117-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2019140473842FrontMinipng/0x8D6810E92108E07/352x175-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2019140473842FrontMinipng/0x8D6810E92108E07/470x234-Fill.png 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2019140473842FrontMinipng/0x8D6810E92108E07/430x215-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2019140473842FrontMinipng/0x8D6810E92108E07/645x322-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2019140473842FrontMinipng/0x8D6810E92108E07/860x430-Fill.png 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2019140473842FrontMinipng/0x8D6810E92108E07/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2019140473842FrontMinipng/0x8D6810E92108E07/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2019140473842FrontMinipng/0x8D6810E92108E07/560x280-Fill.png 2x" />
                                                        <img alt="SCALA"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2019140473842FrontMinipng/0x8D6810E92108E07/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2019140473842FrontMinipng/0x8D6810E92108E07/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2019140473842FrontMinipng/0x8D6810E92108E07/560x280-Fill.png 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                            <div className="car-model-label">SCALA</div>
                                        </a>
                                    </div>



                                    <div className="col-lg-6 col-md-8 col-sm-12 range-collumn-field">
                                        <a href="https://www.skoda-auto.sk/modely/kamiq">
                                            <div className="car-model-image">
                                                <figure>
                                                    <picture id="fig71264139">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MS65J7FrontMinipng/0x8D731D87B3E8B29/235x117-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MS65J7FrontMinipng/0x8D731D87B3E8B29/352x175-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MS65J7FrontMinipng/0x8D731D87B3E8B29/470x234-Fill.png 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MS65J7FrontMinipng/0x8D731D87B3E8B29/430x215-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MS65J7FrontMinipng/0x8D731D87B3E8B29/645x322-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MS65J7FrontMinipng/0x8D731D87B3E8B29/860x430-Fill.png 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MS65J7FrontMinipng/0x8D731D87B3E8B29/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MS65J7FrontMinipng/0x8D731D87B3E8B29/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MS65J7FrontMinipng/0x8D731D87B3E8B29/560x280-Fill.png 2x" />
                                                        <img alt="KAMIQ"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MS65J7FrontMinipng/0x8D731D87B3E8B29/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MS65J7FrontMinipng/0x8D731D87B3E8B29/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MS65J7FrontMinipng/0x8D731D87B3E8B29/560x280-Fill.png 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                            <div className="car-model-label">KAMIQ</div>
                                        </a>
                                    </div>



                                    <div className="col-lg-6 col-md-8 col-sm-12 range-collumn-field">
                                        <a href="https://www.skoda-auto.sk/modely/nova-octavia">
                                            <div className="car-model-image">
                                                <figure>
                                                    <picture id="figc5441ca4">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6Q57587FrontMinipng/0x8D7C0D9BBCD7037/235x117-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6Q57587FrontMinipng/0x8D7C0D9BBCD7037/352x175-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6Q57587FrontMinipng/0x8D7C0D9BBCD7037/470x234-Fill.png 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6Q57587FrontMinipng/0x8D7C0D9BBCD7037/430x215-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6Q57587FrontMinipng/0x8D7C0D9BBCD7037/645x322-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6Q57587FrontMinipng/0x8D7C0D9BBCD7037/860x430-Fill.png 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6Q57587FrontMinipng/0x8D7C0D9BBCD7037/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6Q57587FrontMinipng/0x8D7C0D9BBCD7037/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6Q57587FrontMinipng/0x8D7C0D9BBCD7037/560x280-Fill.png 2x" />
                                                        <img alt="NOVÁ OCTAVIA"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6Q57587FrontMinipng/0x8D7C0D9BBCD7037/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6Q57587FrontMinipng/0x8D7C0D9BBCD7037/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6Q57587FrontMinipng/0x8D7C0D9BBCD7037/560x280-Fill.png 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                            <div className="car-model-label">NOVÁ OCTAVIA</div>
                                        </a>
                                    </div>



                                    <div className="col-lg-6 col-md-8 col-sm-12 range-collumn-field">
                                        <a href="https://www.skoda-auto.sk/modely/octavia">
                                            <div className="car-model-image">
                                                <figure>
                                                    <picture id="figd6744a7d">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7A0FUFrontMinipng/0x8D756E202CD9F36/235x117-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7A0FUFrontMinipng/0x8D756E202CD9F36/352x175-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7A0FUFrontMinipng/0x8D756E202CD9F36/470x234-Fill.png 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7A0FUFrontMinipng/0x8D756E202CD9F36/430x215-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7A0FUFrontMinipng/0x8D756E202CD9F36/645x322-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7A0FUFrontMinipng/0x8D756E202CD9F36/860x430-Fill.png 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7A0FUFrontMinipng/0x8D756E202CD9F36/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7A0FUFrontMinipng/0x8D756E202CD9F36/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7A0FUFrontMinipng/0x8D756E202CD9F36/560x280-Fill.png 2x" />
                                                        <img alt="Octavia"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7A0FUFrontMinipng/0x8D756E202CD9F36/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7A0FUFrontMinipng/0x8D756E202CD9F36/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7A0FUFrontMinipng/0x8D756E202CD9F36/560x280-Fill.png 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                            <div className="car-model-label">Octavia</div>
                                        </a>
                                    </div>



                                    <div className="col-lg-6 col-md-8 col-sm-12 range-collumn-field">
                                        <a href="https://www.skoda-auto.sk/modely/karoq">
                                            <div className="car-model-image">
                                                <figure>
                                                    <picture id="fig01c3f5e8">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7FP4HFrontMinipng/0x8D756C1DFB721AD/235x117-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7FP4HFrontMinipng/0x8D756C1DFB721AD/352x175-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7FP4HFrontMinipng/0x8D756C1DFB721AD/470x234-Fill.png 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7FP4HFrontMinipng/0x8D756C1DFB721AD/430x215-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7FP4HFrontMinipng/0x8D756C1DFB721AD/645x322-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7FP4HFrontMinipng/0x8D756C1DFB721AD/860x430-Fill.png 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7FP4HFrontMinipng/0x8D756C1DFB721AD/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7FP4HFrontMinipng/0x8D756C1DFB721AD/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7FP4HFrontMinipng/0x8D756C1DFB721AD/560x280-Fill.png 2x" />
                                                        <img alt="Karoq"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7FP4HFrontMinipng/0x8D756C1DFB721AD/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7FP4HFrontMinipng/0x8D756C1DFB721AD/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7FP4HFrontMinipng/0x8D756C1DFB721AD/560x280-Fill.png 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                            <div className="car-model-label">Karoq</div>
                                        </a>
                                    </div>



                                    <div className="col-lg-6 col-md-8 col-sm-12 range-collumn-field">
                                        <a href="https://www.skoda-auto.sk/modely/kodiaq">
                                            <div className="car-model-image">
                                                <figure>
                                                    <picture id="fig3bdee02b">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7EBRNFrontMinipng/0x8D756DDD26155CB/235x117-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7EBRNFrontMinipng/0x8D756DDD26155CB/352x175-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7EBRNFrontMinipng/0x8D756DDD26155CB/470x234-Fill.png 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7EBRNFrontMinipng/0x8D756DDD26155CB/430x215-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7EBRNFrontMinipng/0x8D756DDD26155CB/645x322-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7EBRNFrontMinipng/0x8D756DDD26155CB/860x430-Fill.png 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7EBRNFrontMinipng/0x8D756DDD26155CB/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7EBRNFrontMinipng/0x8D756DDD26155CB/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7EBRNFrontMinipng/0x8D756DDD26155CB/560x280-Fill.png 2x" />
                                                        <img alt="Kodiaq"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7EBRNFrontMinipng/0x8D756DDD26155CB/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7EBRNFrontMinipng/0x8D756DDD26155CB/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6N7EBRNFrontMinipng/0x8D756DDD26155CB/560x280-Fill.png 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                            <div className="car-model-label">Kodiaq</div>
                                        </a>
                                    </div>



                                    <div className="col-lg-6 col-md-8 col-sm-12 range-collumn-field">
                                        <a href="https://www.skoda-auto.sk/modely/superb">
                                            <div className="car-model-image">
                                                <figure>
                                                    <picture id="fig8545c581">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MH3RG7FrontMinipng/0x8D711DE75447EF8/235x117-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MH3RG7FrontMinipng/0x8D711DE75447EF8/352x175-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MH3RG7FrontMinipng/0x8D711DE75447EF8/470x234-Fill.png 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MH3RG7FrontMinipng/0x8D711DE75447EF8/430x215-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MH3RG7FrontMinipng/0x8D711DE75447EF8/645x322-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MH3RG7FrontMinipng/0x8D711DE75447EF8/860x430-Fill.png 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MH3RG7FrontMinipng/0x8D711DE75447EF8/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MH3RG7FrontMinipng/0x8D711DE75447EF8/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MH3RG7FrontMinipng/0x8D711DE75447EF8/560x280-Fill.png 2x" />
                                                        <img alt="SUPERB"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MH3RG7FrontMinipng/0x8D711DE75447EF8/280x140-Fill.png, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MH3RG7FrontMinipng/0x8D711DE75447EF8/420x210-Fill.png 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsskodak2ngtoolsblobcorewindowsnetimagesModels2020C6MH3RG7FrontMinipng/0x8D711DE75447EF8/560x280-Fill.png 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                            <div className="car-model-label">SUPERB</div>
                                        </a>
                                    </div>



                                    <div className="col-lg-6 col-md-8 col-sm-12 range-collumn-field">
                                        <a href="https://www.skoda-auto.sk/modely/enyaq/enyaq-iv">
                                            <div className="car-model-image">
                                                <figure>
                                                    <picture id="fig6a9e41ad">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages653WVCNUAYURZNT3DZATEGH6ZUpng/0x8D85B037513D42C/235x117-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages653WVCNUAYURZNT3DZATEGH6ZUpng/0x8D85B037513D42C/352x175-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages653WVCNUAYURZNT3DZATEGH6ZUpng/0x8D85B037513D42C/470x234-Fill.bin 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages653WVCNUAYURZNT3DZATEGH6ZUpng/0x8D85B037513D42C/430x215-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages653WVCNUAYURZNT3DZATEGH6ZUpng/0x8D85B037513D42C/645x322-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages653WVCNUAYURZNT3DZATEGH6ZUpng/0x8D85B037513D42C/860x430-Fill.bin 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages653WVCNUAYURZNT3DZATEGH6ZUpng/0x8D85B037513D42C/280x140-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages653WVCNUAYURZNT3DZATEGH6ZUpng/0x8D85B037513D42C/420x210-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages653WVCNUAYURZNT3DZATEGH6ZUpng/0x8D85B037513D42C/560x280-Fill.bin 2x" />
                                                        <img alt="ENYAQ iV"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages653WVCNUAYURZNT3DZATEGH6ZUpng/0x8D85B037513D42C/280x140-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages653WVCNUAYURZNT3DZATEGH6ZUpng/0x8D85B037513D42C/420x210-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages653WVCNUAYURZNT3DZATEGH6ZUpng/0x8D85B037513D42C/560x280-Fill.bin 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                            <div className="car-model-label">ENYAQ <span style={{ textTransform: "lowercase" }}>𝗶</span>V</div>
                                        </a>
                                    </div>
                                </div>

                                <div className="container cta-area">
                                    <a href="https://www.skoda-auto.sk/modely/prehlad" className="btn btn-sa-primary">Посмотреть все</a>
                                </div>
                            </div>
                        </div>
                        <div className="specific-submenu submenu-common" id="node_9c6e29c7b54a457eab9feeac49973f4f">
                            <div className="container">
                                <div className="row link-collumn">
                                    <div className="no-cat-container">
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_9c6e29c7b54a457eab9feeac49973f4f">
                                            <a href="https://www.skoda-auto.sk/ponuka/akcie">Aktuálne akciové
                    ponuky</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_9c6e29c7b54a457eab9feeac49973f4f">
                                            <a href="https://www.skoda-auto.sk/ponuka/skladove-vozidla">Nové
                    vozidlá ihneď k odberu</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_9c6e29c7b54a457eab9feeac49973f4f">
                                            <a href="https://www.skoda-auto.sk/ponuka/skoda-plus" target="_blank">Vyskúšané jazdené
                    vozidlá</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_9c6e29c7b54a457eab9feeac49973f4f">
                                            <a href="https://www.skoda-auto.sk/ponuka/financovanie">Financovanie</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_9c6e29c7b54a457eab9feeac49973f4f">
                                            <a href="https://www.skoda-auto.sk/ponuka/skoda-connect">ŠKODA
                    Connect</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_9c6e29c7b54a457eab9feeac49973f4f">
                                            <a href="https://www.skoda-auto.sk/ponuka/garancia-servisu">Garancia
                    servisu</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_9c6e29c7b54a457eab9feeac49973f4f">
                                            <a href="https://www.skoda-auto.sk/ponuka/individualny-dovoz">Individuálne
                    dovezené vozidlo</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_9c6e29c7b54a457eab9feeac49973f4f">
                                            <a href="https://www.skoda-auto.sk/ponuka/predajcovia" target="_blank">Naši predajcovia</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_9c6e29c7b54a457eab9feeac49973f4f">
                                            <a href="https://www.skoda-auto.sk/ponuka/wltp">WLTP</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_9c6e29c7b54a457eab9feeac49973f4f">
                                            <a href="https://www.skoda-auto.sk/ponuka/emobilita">e-Mobilita</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_9c6e29c7b54a457eab9feeac49973f4f">
                                            <a href="https://www.skoda-auto.sk/ponuka/skoda-muzeum-prehliadka" target="_blank">ŠKODA
                    MÚZEUM – prehliadka</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_9c6e29c7b54a457eab9feeac49973f4f">
                                            <a
                                                href="https://www.skoda-auto.sk/ponuka/wcl-tdf2020">www.welovecycling.com/sk/tour-de-france-2020</a>
                                        </div>
                                    </div>

                                    <div className="col-lg-24 cta-collumn">
                                        <div className="cta-wrapper">
                                            <a href="https://www.skoda-auto.sk/ponuka/cenniky-a-katalogy"
                                                className="btn btn-sa-primary-small gtm-cta-link default-icon"
                                                data-action-cta="Website-ImporterHeaderModule-Cenníky a katalógy Primary CTA link">Cenníky
                    a katalógy</a>
                                            <a href="https://clg.skoda-auto.com/api/Link?tool=CarConfigurator&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                                                style={{ backgroundImage: "url(&#39;https://downloadportal.blob.core.windows.net/k2ngtools/Images/OPFI6YDEJRTEX6QM6LE3JWSUCA======.png&#39;)" }}
                                                className="btn btn-sa-primary-small gtm-cta-link" target="_blank"
                                                data-action-cta="Website-ImporterHeaderModule-Konfigurátor Primary CTA link">
                                                Konfigurátor
                  </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="specific-submenu submenu-common" id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                            <div className="container">
                                <div className="row link-collumn">
                                    <div className="no-cat-container">
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/pneumatiky">Pneumatiky</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/asistencna-sluzba">Asistenčná
                    služba</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/prehlad-zaruk">Záruky</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/palubna-literatura" target="_blank">Palubná
                    literatúra</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/infotainment">Infotainment</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/originalne-dielce">Originálne
                    dielce</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/prislusenstvo">Originálne
                    príslušenstvo</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/servisne-baliky">Servisné
                    balíky</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/spoluucast">Spoluúčasť</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/nahradne-vozidlo">Náhradné
                    vozidlo</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/autorizovany-servis">Autorizovaný
                    servis</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/aktualizacia-map">Aktualizácia
                    navigačných máp</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/specialista-na-opravy-po-nehode">Špecialista
                    na opravy po nehode</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/servisne-sluzby">Servisné
                    služby</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/ea189-dieselova-kampan">EA189
                    Dieselová kampaň</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/zostante-mobilni">Zostaňte
                    mobilní</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/sekova-knizka">Šeková
                    knižka</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/kalendar-starostlivosti">Kalendár
                    starostlivosti</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/zvolavacia-akcia">Zvolávacia
                    akcia</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                            <a href="https://www.skoda-auto.sk/servis/skoda-sim-karta">ŠKODA SIM
                    karta</a>
                                        </div>
                                    </div>

                                    <div className="col-lg-24 cta-collumn">
                                        <div className="cta-wrapper">
                                            <a href="https://clg.skoda-auto.com/api/Link?tool=sk-sk_Siet&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                                                style={{ backgroundImage: "url(&#39;https://downloadportal.blob.core.windows.net/k2ngtools/Images/44V3L2GIVVBYBXO7VSDKC5ZFCE======.png&#39;)" }}
                                                className="btn btn-sa-primary-small gtm-cta-link"
                                                data-action-cta="Website-ImporterHeaderModule-Zoznam servisov Primary CTA link">
                                                Zoznam servisov
                  </a>
                                            <a href="https://www.skoda-auto.sk/servis/objednavka-do-servisu"
                                                className="btn btn-sa-primary-small gtm-cta-link default-icon"
                                                data-action-cta="Website-ImporterHeaderModule-Objednajte sa Primary CTA link">Objednajte
                    sa</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="specific-submenu submenu-common" id="node_01e821ef1d344ec486a61297f0edc544">
                            <div className="container">
                                <div className="row link-collumn">
                                    <div className="no-cat-container">
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_01e821ef1d344ec486a61297f0edc544">
                                            <a href="https://www.skoda-auto.sk/firemni-zakaznici/fleetove-centra">Fleetové
                    centrá</a>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-24 submenu-link"
                                            data-menu-id="node_01e821ef1d344ec486a61297f0edc544">
                                            <a href="https://www.skoda-auto.sk/firemni-zakaznici/velkoodberatelia">Veľkoodberatelia</a>
                                        </div>
                                    </div>

                                    <div className="col-lg-24 cta-collumn">
                                        <div className="cta-wrapper">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="specific-submenu submenu-common" id="node_30690861f6534c8581fef7b72baceb5d">
                            <div className="container">
                                <div className="row link-collumn">
                                    <div className="masonry">

                                        <div className="col-in-masonry no-cat">
                                            <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                <a href="https://www.skoda-auto.sk/o-nas/handy-ztp" target="_blank">ŠKODA Handy ZŤP</a>
                                            </div>
                                            <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                <a href="https://www.skoda-auto.sk/o-nas/skoda-magazin">ŠKODA
                      Magazín</a>
                                            </div>
                                            <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                <a href="https://www.skoda-auto.sk/o-nas/sutaze">Naše súťaže</a>
                                            </div>
                                            <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                <a href="https://www.skoda-auto.sk/o-nas/100-rokov-csr">120
                      rokov v pohybe</a>
                                            </div>
                                            <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                <a href="https://www.skoda-auto.sk/o-nas/skoda-muzeum">ŠKODA
                      MÚZEUM</a>
                                            </div>
                                        </div>
                                        <div className="collumn-item categorized col-in-masonry with-cat">
                                            <div className="tile ">
                                                <div className="category-name">Dôležité informácie</div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/novinky">Novinky a
                        tlačové správy</a>
                                                </div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/vedenie-spolocnosti">Vedenie
                        spoločnosti</a>
                                                </div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/corporate-governance">Corporate
                        Governance </a>
                                                </div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/eticky-kodex">Etický
                        kódex</a>
                                                </div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/rozsirena-zodpovednost-vyrobcu">Rozšírená
                        zodpovednosť výrobcu</a>
                                                </div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/vseobecne-nakupne-podmienky">Všeobecné
                        nákupné podmienky</a>
                                                </div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/dokumentacia">Dokumentácia</a>
                                                </div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/politika-kvality-a-iso-certifikaty">Politika
                        kvality a ISO certifikáty</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="collumn-item categorized col-in-masonry with-cat">
                                            <div className="tile ">
                                                <div className="category-name">Naše sponzoringové aktivity</div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/hokej">Majstrovstvá
                        sveta v hokeji IIHF</a>
                                                </div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/skoda-slovakia-motorsport">ŠKODA
                        Slovakia Motorsport</a>
                                                </div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/we-love-cycling" target="_blank">O cyklistike na
                        We Love Cycling</a>
                                                </div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/sbot" target="_blank">ŠKODA BIKE OPEN TOUR</a>
                                                </div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/cyklistika">Tour de
                        France</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="collumn-item categorized col-in-masonry with-cat">
                                            <div className="tile ">
                                                <div className="category-name">Pridajte sa k nám</div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/kariera" target="_blank">Pracujte u nás</a>
                                                </div>
                                                <div className="submenu-link-wrapper" data-menu-id="node_30690861f6534c8581fef7b72baceb5d">
                                                    <a href="https://www.skoda-auto.sk/o-nas/moja-buducnost" target="_blank">Pracujte u našich
                        partnerov</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-24 cta-collumn">
                                        <div className="cta-wrapper">
                                            <a href="https://www.skoda-auto.sk/o-nas/formular"
                                                className="btn btn-sa-primary-small gtm-cta-link default-icon"
                                                data-action-cta="Website-ImporterHeaderModule-Kontaktujte nás Primary CTA link">Kontaktujte
                    nás</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="specific-submenu importer-header-dropdown-submenu-tools"
                            id="importer-header-dropdown-submenu-tools">
                            <div className="container">
                                <div className="row tools-tiles-wrapper">
                                    <div className="col-lg-6 col-md-12 col-sm-24 collumn-item non-categorized">
                                        <div className="tile">
                                            <a className="block-link gtm-cta-link" href="https://cc.skoda-auto.com/svk/sk-SK" target="_blank"
                                                data-action-cta="Website-ImporterHeaderModule-Tool link">
                                                <div className="dropdown-submenu-item-label">Konfigurátor</div>
                                            </a>

                                            <div className="tool-icon">
                                                <figure>
                                                    <picture id="figfcb720ee">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                                        <img alt=""
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-24 collumn-item non-categorized">
                                        <div className="tile">
                                            <a className="block-link gtm-cta-link"
                                                href="https://clg.skoda-auto.com/api/Link?tool=sk-sk_Siet&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                                                target="_blank" data-action-cta="Website-ImporterHeaderModule-Tool link">
                                                <div className="dropdown-submenu-item-label">Nájsť predajcu</div>
                                            </a>

                                            <div className="tool-icon">
                                                <figure>
                                                    <picture id="figed77d273">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                                        <img alt=""
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-24 collumn-item non-categorized">
                                        <div className="tile">
                                            <a className="block-link gtm-cta-link"
                                                href="https://clg.skoda-auto.com/api/Link?tool=sk-sk_Testovacia_jazda&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                                                target="_blank" data-action-cta="Website-ImporterHeaderModule-Tool link">
                                                <div className="dropdown-submenu-item-label">Testovacia jazda</div>
                                            </a>

                                            <div className="tool-icon">
                                                <figure>
                                                    <picture id="figc4f8105f">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                                        <img alt=""
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-24 collumn-item non-categorized">
                                        <div className="tile">
                                            <a className="block-link gtm-cta-link"
                                                href="https://clg.skoda-auto.com/api/Link?tool=StockCar&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                                                data-action-cta="Website-ImporterHeaderModule-Tool link">
                                                <div className="dropdown-submenu-item-label">Skladové vozidlá</div>
                                            </a>

                                            <div className="tool-icon">
                                                <figure>
                                                    <picture id="fig9fa20e83">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/64x64-Fill.bin 2x" />
                                                        <img alt=""
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/64x64-Fill.bin 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-24 collumn-item non-categorized">
                                        <div className="tile">
                                            <a className="block-link gtm-cta-link"
                                                href="https://clg.skoda-auto.com/api/Link?tool=sk-sk_SkodaEshop&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                                                target="_blank" data-action-cta="Website-ImporterHeaderModule-Tool link">
                                                <div className="dropdown-submenu-item-label">ŠKODA E-shop</div>
                                            </a>

                                            <div className="tool-icon">
                                                <figure>
                                                    <picture id="fig691ec350">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/64x64-Fill.bin 2x" />
                                                        <img alt=""
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/64x64-Fill.bin 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="specific-submenu submenu-tablet-viewport-menu" id="importer-header-submenu-tablet-menu">
                            <div className="hidden-sm hidden-md collapsed-submenu-small-desktop">
                                <div className="col-lg-6 link-list-wrapper">
                                    <ul className="small-desktop-nav-list">
                                        <li className="list-item">
                                            <span data-submenu-id="#node_9c6e29c7b54a457eab9feeac49973f4f"
                                                className="small-dekstop-menu-item">PONUKY</span>
                                        </li>
                                        <li className="list-item">
                                            <span data-submenu-id="#node_0356cfb9d991442b9a9f7767aa0cdc2a"
                                                className="small-dekstop-menu-item">SERVIS</span>
                                        </li>
                                        <li className="list-item">
                                            <span data-submenu-id="#node_01e821ef1d344ec486a61297f0edc544"
                                                className="small-dekstop-menu-item">FIREMNÍ ZÁKAZNÍCI</span>
                                        </li>
                                        <li className="list-item">
                                            <span data-submenu-id="#node_30690861f6534c8581fef7b72baceb5d"
                                                className="small-dekstop-menu-item">O NÁS</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="small-desktop-submenu-item-list col-lg-18"></div>

                                <div className="clearfix"></div>
                            </div>

                            <div className="tablet-viewport-nav-collumn hidden-lg">
                                <ul className="tablet-nav-list">
                                    <li data-submenu-id="#node_9c6e29c7b54a457eab9feeac49973f4f">
                                        <span>PONUKY</span>
                                        <div className="icon icon-arrow-small-right forward"></div>
                                        <div className="icon icon-arrow-small-left backward"></div>
                                    </li>
                                    <li data-submenu-id="#node_0356cfb9d991442b9a9f7767aa0cdc2a">
                                        <span>SERVIS</span>
                                        <div className="icon icon-arrow-small-right forward"></div>
                                        <div className="icon icon-arrow-small-left backward"></div>
                                    </li>
                                    <li data-submenu-id="#node_01e821ef1d344ec486a61297f0edc544">
                                        <span>FIREMNÍ ZÁKAZNÍCI</span>
                                        <div className="icon icon-arrow-small-right forward"></div>
                                        <div className="icon icon-arrow-small-left backward"></div>
                                    </li>
                                    <li data-submenu-id="#node_30690861f6534c8581fef7b72baceb5d">
                                        <span>O NÁS</span>
                                        <div className="icon icon-arrow-small-right forward"></div>
                                        <div className="icon icon-arrow-small-left backward"></div>
                                    </li>
                                </ul>
                            </div>

                            <div className="tablet-viewport-secondary-nav-wrapper">
                                <div className="link-collumns-wrapper"></div>
                            </div>

                        </div>


                        <div className="specific-submenu submenu-mobile-viewport-menu" id="importer-header-mobile-submenu" style={{ maxHeight: "707px" }}>
                            <div className="sa-mobile-serach-input-container">
                                <input className="do-mobile-search" placeholder="Hľadám..." />
                                <div data-close-search="true" className="close-search icon icon-close-medium-white">
                                </div>
                                <div className="open-search icon icon-search"></div>
                            </div>
                            <ul className="mobile-nav-list">
                                <li className="navigate-to-mobile-second-level-nav"
                                    data-submenu-id="#node_9c6e29c7b54a457eab9feeac49973f4f"
                                    data-toggle-submenu="#importer-header-mobile-second-level-menu">
                                    <span className="mobile-nav-label">PONUKY</span>
                                    <div className="icon icon-arrow-small-right"></div>
                                </li>
                                <li className="navigate-to-mobile-second-level-nav"
                                    data-submenu-id="#node_0356cfb9d991442b9a9f7767aa0cdc2a"
                                    data-toggle-submenu="#importer-header-mobile-second-level-menu">
                                    <span className="mobile-nav-label">SERVIS</span>
                                    <div className="icon icon-arrow-small-right"></div>
                                </li>
                                <li className="navigate-to-mobile-second-level-nav"
                                    data-submenu-id="#node_01e821ef1d344ec486a61297f0edc544"
                                    data-toggle-submenu="#importer-header-mobile-second-level-menu">
                                    <span className="mobile-nav-label">FIREMNÍ ZÁKAZNÍCI</span>
                                    <div className="icon icon-arrow-small-right"></div>
                                </li>
                                <li className="navigate-to-mobile-second-level-nav"
                                    data-submenu-id="#node_30690861f6534c8581fef7b72baceb5d"
                                    data-toggle-submenu="#importer-header-mobile-second-level-menu">
                                    <span className="mobile-nav-label">O NÁS</span>
                                    <div className="icon icon-arrow-small-right"></div>
                                </li>
                            </ul>

                            <div className="container-fluid mobile-viewport-tools-submenu"
                                data-submenu-id="#importer-header-dropdown-submenu-tools">
                                <div className="row tools-tiles-wrapper">
                                    <div className="col-lg-6 col-md-12 col-sm-24 collumn-item non-categorized">
                                        <div className="tile">
                                            <a className="block-link gtm-cta-link" href="https://cc.skoda-auto.com/svk/sk-SK" target="_blank"
                                                data-action-cta="Website-ImporterHeaderModule-Tool link">
                                                <div className="dropdown-submenu-item-label">Konfigurátor</div>
                                            </a>

                                            <div className="tool-icon">
                                                <figure>
                                                    <picture id="figfcb720ee">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                                        <img alt=""
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesOPFI6YDEJRTEX6QM6LE3JWSUCApng/0x8D6FBD1CB76576F/64x64-Fill.bin 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-24 collumn-item non-categorized">
                                        <div className="tile">
                                            <a className="block-link gtm-cta-link"
                                                href="https://clg.skoda-auto.com/api/Link?tool=sk-sk_Siet&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                                                target="_blank" data-action-cta="Website-ImporterHeaderModule-Tool link">
                                                <div className="dropdown-submenu-item-label">Nájsť predajcu</div>
                                            </a>

                                            <div className="tool-icon">
                                                <figure>
                                                    <picture id="figed77d273">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                                        <img alt=""
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImages44V3L2GIVVBYBXO7VSDKC5ZFCEpng/0x8D77E79378D752D/64x64-Fill.bin 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-24 collumn-item non-categorized">
                                        <div className="tile">
                                            <a className="block-link gtm-cta-link"
                                                href="https://clg.skoda-auto.com/api/Link?tool=sk-sk_Testovacia_jazda&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                                                target="_blank" data-action-cta="Website-ImporterHeaderModule-Tool link">
                                                <div className="dropdown-submenu-item-label">Testovacia jazda</div>
                                            </a>

                                            <div className="tool-icon">
                                                <figure>
                                                    <picture id="figc4f8105f">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                                        <img alt=""
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesSZX3UTJFCWOP2TBZGWTGNASSLQpng/0x8D818DD0D5D2C30/64x64-Fill.bin 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-24 collumn-item non-categorized">
                                        <div className="tile">
                                            <a className="block-link gtm-cta-link"
                                                href="https://clg.skoda-auto.com/api/Link?tool=StockCar&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                                                data-action-cta="Website-ImporterHeaderModule-Tool link">
                                                <div className="dropdown-submenu-item-label">Skladové vozidlá</div>
                                            </a>

                                            <div className="tool-icon">
                                                <figure>
                                                    <picture id="fig9fa20e83">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/64x64-Fill.bin 2x" />
                                                        <img alt=""
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesYIPMZDGZ63UK2HVNEE7OA6N63Ypng/0x8D6CF97E37DE48D/64x64-Fill.bin 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-24 collumn-item non-categorized">
                                        <div className="tile">
                                            <a className="block-link gtm-cta-link"
                                                href="https://clg.skoda-auto.com/api/Link?tool=sk-sk_SkodaEshop&amp;culture=sk-SK&amp;target=modelderivative&amp;bid=654&amp;instancename=svk&amp;salesprogram=svk&amp;mbv=NS7&amp;modelcode=NS&amp;bodycode=66000&amp;carline=66000"
                                                target="_blank" data-action-cta="Website-ImporterHeaderModule-Tool link">
                                                <div className="dropdown-submenu-item-label">ŠKODA E-shop</div>
                                            </a>

                                            <div className="tool-icon">
                                                <figure>
                                                    <picture id="fig691ec350">

                                                        <source media="(min-width: 0px) and (max-width: 659px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 660px) and (max-width: 999px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/64x64-Fill.bin 2x" />
                                                        <source media="(min-width: 1000px)"
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/64x64-Fill.bin 2x" />
                                                        <img alt=""
                                                            srcset="https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/32x32-Fill.bin, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/48x48-Fill.bin 1.5x, https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesKFXIN5TOOEK5PNW6OGPHCSVCZIpng/0x8D7F1BCA52D24FA/64x64-Fill.bin 2x" />
                                                    </picture>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="specific-submenu submenu-mobile-viewport-second-level-menu"
                            id="importer-header-mobile-second-level-menu">
                            <div className="mobile-nav-back-to-first-level" data-toggle-submenu="#importer-header-mobile-submenu">
                                <div className="icon icon-arrow-medium-left"></div>
                                <div className="name-of-section"></div>
                            </div>
                            <div className="link-list"></div>
                        </div>



                    </div>
                </div>


                <div className="search-template">
                    <a data-category="" className="sa-importer-header-search-result-item">
                        <span data-search="Image1x" className="item-picture never-display"></span>
                        <span data-search="Image15x" className="item-picture never-display"></span>
                        <span data-search="Image2x" className="item-picture never-display"></span>
                        <div data-field="imageWrapper" className="item-picture"></div>
                        <span data-search="DateTime" className="item-datetime never-display"></span>
                        <div data-field="datetime-calendar" className="sa-calendar">
                            <div className="sa-cal-month"><span></span></div>
                            <div className="sa-cal-day"><span></span></div>
                        </div>
                        <span data-bold-search="bold" data-search="DocumentTitle" className="item-headline"></span>
                        <div data-bold-search="bold" data-search="IntroHtml" data-max-length="50" className="item-body"></div>
                        <span data-search="LastModified" className="item-date never-display"></span>
                        <span data-search="GeoPoint.Latitude" className="item-geolocation-feed"></span>
                        <span data-search="GeoPoint.Longitude" className="item-geolocation-feed"></span>
                        <span data-field="map">
                            <span className="sa-result-map-link" target="_blank" href=""></span>
                        </span>
                        <span className="search-text-link">Pokračovať ďalej</span>
                        <div className="clear"></div>
                    </a>
                </div> */}

            </nav>
            <div className={(mmenu) ? "" : "hidden"}>
                <ul onClick={() => {
                    setmmenu(state => { return !state })
                }} className="mini-menu" >
                    {menu.map((item, index) => {
                        return (
                            <li className="models">
                                <a onClick={(e) => {
                                    e.preventDefault()
                                    scrollToNode(item.node)
                                }} href={item.url}>{item.text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="bottom-menu">
                <ul>
                    {minimenu.map(item => {
                        return (
                            <li>
                                <a onClick={(e) => {
                                    e.preventDefault()
                                    scrollToNode(item.node)
                                }}
                                    href={item.url}>{item.text}</a>
                            </li>
                        )

                    })}
                </ul>
            </div>
        </>
    );
}

export default Nav;