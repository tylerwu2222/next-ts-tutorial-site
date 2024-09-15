import React from 'react'

// layout applies to all pages at or below the layout in the directory tree
// opportunity to apply default layouts to items
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div >{children}</div>
        </div>
    );
}