import Link from "next/link";

export default function Custom404() {
    return (
        <div className="notFound">
            <p className="h2">404 - Page Not Found</p>
            <Link className="btn" href={'/'}>Home</Link>
        </div>
    )
}