'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Form from '@components/Form'

export default function UpdatePrompt({ data }) {
    const router = useRouter()

    const [ submitting, setSubmitting ] = useState(false)
    const [ post, setPost ] = useState({
        prompt: data.prompt || '',
        tag: data.tag || '',
    })

    const updatePrompt = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        if (!data._id) return alert('Prompt ID not found')

        try {
            const response = await fetch(`/api/prompt/${data._id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag
                })
            })

            if (response.ok) {
                router.push('/')
            }
        } catch(error) {
            console.log('error', error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Form
            type='Edit'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={updatePrompt}
        />
    )
}
