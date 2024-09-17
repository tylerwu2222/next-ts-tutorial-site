'use client'
import React, { useEffect, useState } from 'react'
import { Birds } from '@prisma/client';
import { Accordion } from '@mantine/core';
import '@mantine/core/styles/Accordion.css';


export default function BirdsTable() {
    const [birds, setBirds] = useState<Birds[]>([]);

    useEffect(() => {
        const getBirds = async () => {
            const res = await fetch('/api/prisma/birds', { method: 'GET' })
            const birdsData = await res.json();
            setBirds(birdsData)
        };

        getBirds();
    }, []);



    return (
        <Accordion variant="contained" radius="md" defaultValue="Hooded Oriole">
            {birds.map(b => {
                return (
                    <Accordion.Item key={b.scientificName} value={b.commonName}>
                        <Accordion.Control icon={'🐦‍⬛'}></Accordion.Control>
                        <Accordion.Panel>{b.scientificName} - {b.mainColor}</Accordion.Panel>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    )
}
