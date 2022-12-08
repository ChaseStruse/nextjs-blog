// _app.js allows you to use global CSS
import '../styles/global.css'
import localFont from '@next/font/local'

const customFont = localFont({ src: "../public/fonts/MonaSans/Mona-Sans.woff2", display: "swap",})

export default function App({ Component, pageProps }) {
    return (
        <main className={customFont.className}>
            <Component {...pageProps} />
        </main>
    );
}