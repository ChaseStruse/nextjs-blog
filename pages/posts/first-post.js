import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/layout"
// Notes
// <Head> Allows you to add meta data
// <Script> 
// - strategy controls when the 3rd party script loads, lazyOnload loads it lazily during browser idle time
// - onLoad runs any javascript immediatly once script has been loaded 
/*
    <Script 
        src="https://connect.facebook.net/en_US/sdk.js" 
        strategy="lazyOnload"
        onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
        }    
    />
*/
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    )
}