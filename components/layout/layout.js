import { Fragment } from "react";

import MainNavigation from './main-navigation';

function Layout(props) {
    return <Fragment>
        <MainNavigation />
        {props.children}
    </Fragment>
}

export default Layout;