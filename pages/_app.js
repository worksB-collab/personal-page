import './global.css';
// import '@fortawesome/fontawesome-svg-core/styles.css'
//
// import {config} from "@fortawesome/fontawesome-svg-core";
// // Tell Font Awesome to skip adding the CSS automatically
// // since it's already imported above
// config.autoAddCss = false;

function MyApp({Component, pageProps}) {
    return (
        <Component {...pageProps} />
    )
}

export default MyApp