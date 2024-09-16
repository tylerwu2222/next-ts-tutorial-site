'use client'
import React, { useState } from 'react'

// import Link from 'next/link';
import { IconHome2 } from '@tabler/icons-react';

import { usePathname, useRouter } from 'next/navigation';

import '@mantine/core/styles/NavLink.css';
import { Box, NavLink } from '@mantine/core';

import { linkType } from '../../types/types';

import styles from './NavBar.module.css'

export default function NavBar() {
    const pathname = usePathname();

    const router = useRouter()
    // console.log('pathname', pathname)

    const links: linkType[] = [
        {
            name: 'home',
            href: '/'
        },
        {
            name: 'typescript',
            href: '/learning/typescript'
        },
        {
            name: 'nextjs: general',
            href: '/learning/next-js'
        },
        {
            name: 'nextjs: server & client-side data fetching',
            href: '/learning/next-js/data'
        },
        {
            name: 'nextjs: API route handlers',
            href: '/learning/next-js/data/route-handlers'
        },
        {
            name: 'nextjs x prisma',
            href: '/learning/next-js/data/prisma'
        },
        {
            name: 'nextjs: images',
            href: '/learning/next-js/images'
        },
        {
            name: 'mantine: common components',
            href: '/learning/mantine'
        }
    ]


    return (
        <div className={styles.navBarContainer}>
            <Box>
                {links.map((link, index) => {
                    return <NavLink
                        // href={link.name}
                        key={link.name}
                        leftSection={link.name === 'home' ? <IconHome2 size="1rem" stroke={1.5} /> : null}
                        label={link.name}
                        className={pathname === link.href ? `${styles.navBarLinkContainer} ${styles.navBarLinkContainerActive}` : styles.navBarLinkContainer}
                        onClick={() => router.push(link.href)}
                        variant='filled'
                    />
                })}
            </Box>
        </div>
    )
}
