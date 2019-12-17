import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function MenuItem({ routeName, pathTo }) {
    const router = useRouter()
    return (
        <>
            <li >
                <Link href={pathTo}>
                    <a className={
                        router.pathname == pathTo ? 'selected' : ''
                    }>
                        {routeName}
                    </a>
                </Link>
            </li>
            <style jsx>{`
            .selected{
                color: #b44501;
            }
            
            `}</style>
        </>

    )
}

export default MenuItem
