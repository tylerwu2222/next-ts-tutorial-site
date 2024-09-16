import React from 'react'
import { storyType } from '@/app/types/data'

export default function HackerNewsStoryCardUnstyled({ story }: { story: storyType }) {

    // console.log('story data',story);

    return (
        <a href={story.url} target='_blank'>
            <p>
                {story.title}
            </p>
            <p>
                by: {story.by}
            </p>
            <p>
                upvotes: {story.score}
            </p>
        </a>
    )
}
