import React from 'react';
import Nav from './Nav';

const Header = ({ menu, scrollToNode, minimenu }) => {
    return (
        <div id="nav-is-sticky" className="k2ng-zone k2ng-zone-name-Header" data-zoneid="Header">
            <div id="anchor-M26-5f9d8444" className="k2ng-module-anchor"></div>
            <div className="k2ng-module k2ng-module-ImporterHeaderModule k2ng-module-instance-ImporterHeaderModule-210b33f5 "
                data-moduleid="ImporterHeaderModule-210b33f5" data-implementation="ImporterHeaderModule"
                id="ImporterHeaderModule-210b33f5" data-displayname="ImporterHeaderModule" data-display-in-sticky="false">



                <span id="importer-header-resources" data-news-link-label="Zistiť viac"
                    data-model-family-link-label="Modelový rad" data-model-derivative-link-label="Preskúmať"
                    data-event-link-label="Zistiť viac" data-promotion-link-label="Zistiť viac"
                    data-other-link-label="Čítať viac"></span>

                <Nav menu={menu} scrollToNode={scrollToNode} minimenu={minimenu} />
            </div>
        </div>
    );
}

export default Header;