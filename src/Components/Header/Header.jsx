import React from 'react';
import './Header.css'; // Import CSS file containing styles
import Common from '../../Assets/Common';

function Header() {
    return (
        <header >
            {Common.header.home}
            {/* <div id="SITE_HEADER" className="xU8fqS SITE_HEADER wixui-header" tabIndex="-1">
                <div className="_C0cVf">
                    <div className="_4XcTfy" data-testid="screenWidthContainerBg"></div>
                </div>
                <div className="U4Bvut">
                    <div className="G5K6X8">
                        <div className="gUbusX" data-testid="screenWidthContainerBgCenter"></div>
                    </div>
                    <div className="CJF7A2">
                        <div data-mesh-id="SITE_HEADERinlineContent" data-testid="inline-content" className="">
                            <div data-mesh-id="SITE_HEADERinlineContent-gridContainer" data-testid="mesh-container-content">
                                <div id="comp-l3s6vo6j" className="MazNVa comp-l3s6vo6j wixui-image rYiAuL">
                                    <a data-testid="linkElement" href="https://www.matrixdesignerbuilders.com.au" target="_self" className="j7pOnl">
                                        <img src="https://static.wixstatic.com/media/01cb2a_693a0e06142941aea7fa5ccd21738a19~mv2.png/v1/crop/x_0,y_499,w_3125,h_878/fill/w_292,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/full_margin_transparent_customcolor%20(2).png" alt="Company logo for Matrix Designer Builders" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </header>
    );
}

export default Header;
