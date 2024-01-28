import { baseUrl } from "@utils/constant"
import UpdatePrompt from "../_components/UpdatePrompt"

export default async function EditPrompt({ params }) {
    const response = await fetch(`${baseUrl}/api/prompt/${params.id}`)
    const data = await response.json()

    return (
        <UpdatePrompt post={data}/>
    )
}