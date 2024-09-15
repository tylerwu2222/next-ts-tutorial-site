'use client'

import React from 'react'
import { Button } from '@mantine/core'
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';

import styles from './InlineButton.module.css'

interface InlineButtonProps {
    buttonText: string,
    onClickFn: () => void,
    color: string
}

export default function InlineButton({
    buttonText = 'press me',
    onClickFn = () => { },
    color = 'gray',
}: Partial<InlineButtonProps>) {
    return (
        <Button
            classNames={{ label: styles.label }}
            variant='filled'
            size="compact-xs"
            radius="sm"
            onClick={onClickFn}
            color={color}>
            {buttonText}
        </Button>
    )
}
