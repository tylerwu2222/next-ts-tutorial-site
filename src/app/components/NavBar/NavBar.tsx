'use client'
import React from 'react'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Group } from '@mantine/core';

import { linkType } from '../../types/types';

import styles from './NavBar.module.css'

export default function NavBar() {
    const pathname = usePathname();
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
            name: 'nextjs: loading remote data',
            href: '/learning/next-js/data'
        },
        {
            name: 'nextjs: images',
            href: '/learning/next-js/images'
        },
        {
            name: 'mantine: common components',
            href: '/learning/mantine'
        },
        {
            name: 'nextjs x prisma',
            href: '/learning/next-js/data/prisma'
        },
    ]


    return (
        <div className={styles.navBarContainer}>
            <Group gap="sm">
                {links.map((link) => {
                    return <div
                        key={link.name}
                        className={pathname === link.href ? `${styles.navBarLinkContainer} ${styles.navBarLinkContainerActive}` : styles.navBarLinkContainer}

                    >
                        <Link
                            key={link.name}
                            href={link.href}
                        >
                            <p>{link.name}</p>
                        </Link>
                    </div>
                })}
            </Group>
        </div>
    )
}
