// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import {config} from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;


function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Billy Wu</title>
                <link
                    rel="icon"
                    href="/images/code.png"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp