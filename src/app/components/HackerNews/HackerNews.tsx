'use client'
import React, { useEffect, useState } from 'react';
import HackerNewsStoryCard from './HackerNewsStoryCard';
import '@mantine/core/styles/Pagination.css';
import '@mantine/core/styles/Skeleton.css';
import { Skeleton, Flex, Pagination } from '@mantine/core';
import { storyType } from '@/app/types/data';

import styles from './HackerNews.module.css'

export default function HackerNews() {

    const storiesPerPage = 5;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [activePage, setPage] = useState<number>(1);
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
            setTopStoriesIDs(topStoriesIDsData.map((id: number) => id.toString()));
        }

        getTopStoriesIDS();
    }, []);

    // get stories when IDs change or page changes
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

            const subsetStoriesIDs = topStoriesIDs.slice((activePage - 1) * storiesPerPage, (activePage) * storiesPerPage)
            const topStoriesContentsData = await Promise.all(subsetStoriesIDs.map(id => getTopStoryContent(id)));
            setTopStoriesContents(topStoriesContentsData);
        };

        getTopStoriesContents();
    }, [topStoriesIDs, activePage]);

    useEffect(() => {
        if (topStoriesContents.length !== 0) {
            setIsLoading(false);
        }
    }, [topStoriesContents]);

    return (
        <>
            <Flex justify={'center'}>
                <Pagination
                    total={10}
                    value={activePage}
                    onChange={setPage}
                    style={{ margin: '20px' }}
                />
            </Flex>
            <div className={styles.hackerNewsContainer}>
                {
                    isLoading ?
                        <Skeleton visible={isLoading} height={30} radius={"xl"} mt={10} /> :
                        topStoriesContents.map(story => {
                            return <HackerNewsStoryCard key={story.id} story={story} />
                        })

                }
            </div>
        </>
    )
}
