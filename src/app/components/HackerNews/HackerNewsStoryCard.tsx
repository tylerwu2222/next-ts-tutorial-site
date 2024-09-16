'use client'
import React from 'react'
import { storyType } from '@/app/types/data'
// import '@mantine/core/styles/Text.css';
import { Stack, Group, Paper, Text } from '@mantine/core'

export default function HackerNewsStoryCard({ story }: { story: storyType }) {

    console.log('story data', story);

    return (

        <Paper
            shadow="sm"
            radius="md"
            withBorder
            p="xl"
            style={{
                backgroundColor: 'white',
                margin: '20px'
            }}
        >
            <Stack>
                <Group>
                    <a href={story.url} target='_blank'>
                        <Text size='md'>
                            {story.title}
                        </Text>
                    </a>
                    <a href={`/api/hackernews/topstories/${story.id}`} target="_blank">
                        <Text c='blue' td='underline'>raw data (id: {story.id})</Text>
                    </a>
                </Group>
                <Text size='sm'>
                    by: {story.by}
                </Text>
                <Text size='sm'>
                    upvotes: {story.score}
                </Text>
            </Stack>
        </Paper>
    )
}
