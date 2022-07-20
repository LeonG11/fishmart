import React from "react";
import {MobileNav} from "../Components/MobileNav";
import {DesktopNav} from "../Components/DesktopNav";

function TopLink() {
    return (
        <>
            <MobileNav/>
            <DesktopNav/>
        </>
    );
}

export default TopLink;
