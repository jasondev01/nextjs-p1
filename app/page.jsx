import Feed from '@components/Feed'
import { baseUrl } from '@utils/constant'

export default async function Home() {
    console.log(baseUrl)

    const response = await fetch(`${baseUrl}/api/prompt`, {
        method: 'GET',
    })

    const data = await response.json() || []

    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden"/>
                <span className="orange_text-center">
                    Amazing Prompts for AIs
                </span>
            </h1>
            <p className="desc text-center">
                Prompt Master is an open-source AI prompting tool for modern world to discover, create and share creative prompts.    
            </p>
            <Feed posts={data}/>
        </section>
    )
}

export const revalidate = 0
