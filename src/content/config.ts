//importamos lo que vamos de astro:content
import {z,defineCollection } from "astro:content"

//definimos nuestro schema de cada post que se hara

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image:z.object({
            url:z.string(),
            alt:z.string()
        }),
        tags:z.array(z.string())
    })
})

// export una colecion

export const collection = {posts:postsCollection}