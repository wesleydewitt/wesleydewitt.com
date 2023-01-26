import useFetch from "../hooks/useFetch"
import reactMarkdown from "react-markdown"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function HomePage() {
    const { loading, error, content } = useFetch('http://localhost:1337/api/greeting?populate=*')

    console.log(content)

    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    return (
        <>
            <div className="greeting__grid">
                <h1 className="greeting__title">{content.data.attributes.Greeting}</h1>
                <div className="greeting__body">
                    <ReactMarkdown>{content.data.attributes.GreetingBody}</ReactMarkdown>
                </div>
                <div className="greeting__cover-photo">
                    <img src="http://localhost:1337/uploads/selfie_68c3b166b5.png" />
                </div>
            </div>
        </>
    )
}