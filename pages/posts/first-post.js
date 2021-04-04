import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
        <h1>First Post</h1>
        <h1 className="title">
          <Link href="/">
            <a>back to home</a>
          </Link>
        </h1>
        </>
    )
}