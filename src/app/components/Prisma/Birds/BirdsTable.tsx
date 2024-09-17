import React from 'react'
// import { Birds } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import MantineAccordion from '../../Mantine/Accordion/MantineAccordion';

const prisma = new PrismaClient();

export default async function BirdsTable() {
    // const [birds, setBirds] = useState<Birds[]>([]);

    // useEffect(() => {
    //     const getBirds = async () => {
    //         const res = await fetch('/api/prisma/birds', { method: 'GET' })
    //         const birdsData = await res.json();
    //         setBirds(birdsData)
    //     };

    //     getBirds();
    // }, []);
    // const res = await fetch(process.env.URL + '/api/prisma/birds', { method: 'GET' });
    // const birds = await res.json();

    const birds = await prisma.birds.findMany();

    // can't use mantine components as server components directly, need to nest:
    return (
        <MantineAccordion data={birds}/>
    )
}
