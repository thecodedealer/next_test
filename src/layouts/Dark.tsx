/* eslint-disable @next/next/no-css-tags */
import React, { FC } from 'react'
import Head from 'next/head'

interface IProps {
    useSkin?: boolean
}

const DarkTheme: FC<IProps> = ({ children, useSkin }) => {
    React.useEffect(() => {
        window.theme = 'dark'
    }, [])
    return (
        <>
            <Head>
                <link rel='stylesheet' href='/css/dark.css' />
                { useSkin ? (
                    <link rel='stylesheet' href='/css/arch-skin-dark.css' />
                ) : (
                    ''
                ) }
            </Head>
            { children }
        </>
    )
}

export default DarkTheme
