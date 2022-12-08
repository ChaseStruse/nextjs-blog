import Link from "next/link"

export default function Custom404() {
    return (
        <>
        <h1> Sorry this page was not found</h1> 
        <Link href={`/`}>Return to Home</Link>
        </>

    )
}