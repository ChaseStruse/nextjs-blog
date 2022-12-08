// _app.js allows you to use global CSS
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}