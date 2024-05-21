import { useRouter } from "next/navigation"

function Error({ statusCode }) {
    let pathname = useRouter()
    return (
        <section className="error">
            <p className="h2">
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
            <p onClick={() => pathname.refresh()} className="btn">Try again</p>
        </section>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error