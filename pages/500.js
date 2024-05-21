import { useRouter } from "next/navigation"

export default function Error() {
    let pathname = useRouter()
    return (
        <section className="error">
            <p className="h2">An error occurred</p>
            <p onClick={() => pathname.refresh()} className="btn">Try again</p>
        </section>
    )
}

