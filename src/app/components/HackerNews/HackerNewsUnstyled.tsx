'use client'
import React, { useEffect, useState } from 'react';
import { Badge } from '@mantine/core';
import '@mantine/core/styles/Badge.css';
import HackerNewsStoryCardUnstyled from './HackerNewsStoryCardUnstyled';
import { storyType } from '@/app/types/data';

import styles from './HackerNewsUnstyled.module.css'

export default function HackerNewsUnstyled() {

    const [topStoriesIDs, setTopStoriesIDs] = useState<Array<string>>([]);
    const [topStoriesContents, setTopStoriesContents] = useState<Array<storyType>>([]);

    // fetch ids on page load
    useEffect(() => {
        const getTopStoriesIDS = async () => {
            const res = await fetch('/api/hackernews/topstories',
                {
                    method: 'GET'
                }
            )
            const topStoriesIDsData = await res.json();
            setTopStoriesIDs(topStoriesIDsData.slice(0, 5).map((id: number) => id.toString()));
        }

        getTopStoriesIDS();
    }, []);

    // get stories when IDs change
    useEffect(() => {
        const getTopStoriesContents = async () => {

            const getTopStoryContent = async (id: string) => {
                const res = await fetch(`/api/hackernews/topstories/${id}`,
                    {
                        method: 'GET'
                    }
                )
                const topStoryContentData = await res.json();
                return topStoryContentData;
            }

            const topStoriesContentsData = await Promise.all(topStoriesIDs.map(id => getTopStoryContent(id)));
            setTopStoriesContents(topStoriesContentsData);
        };

        getTopStoriesContents();
    }, [topStoriesIDs]);

    return (
        <>
            <div className={styles.hackerIDsContainer}>
                {topStoriesIDs.map(id => {
                    return <Badge color="gray" size="sm">{id}</Badge>
                })}
            </div>
            <p>and the corresponding unstyled story content:</p>
            <div className={styles.hackerNewsContainer}>
                {topStoriesContents.map(story => {
                    return <HackerNewsStoryCardUnstyled key={story.id} story={story} />
                })}
            </div>
        </>
    )
}
