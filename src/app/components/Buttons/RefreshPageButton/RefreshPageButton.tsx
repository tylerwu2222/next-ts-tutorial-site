'use client'
import React from 'react'
import InlineButton from '../InlineButton/InlineButton'

export default function RefreshPageButton() {
    const refreshPage = () => {
        window.location.reload(); // Reloads the current page
      };

    return (
        <InlineButton buttonText={'refresh'} onClickFn={refreshPage} color={'rgba(104, 163, 179, 1)'} />
    )
}
