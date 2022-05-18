import '../styles/globals.css';
import type { AppProps } from 'next/app';

import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Cursor from '../components/theme/cursor';
import ScrollToTop from '../components/theme/scrollToTop';
import LoadingScreen from '../components/theme/Loading-Screen';
import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Vie</title>
                <link rel='icon' href='/img/favicon.ico' />
            </Head>
            <Cursor />
            {/*<LoadingScreen />*/}
            <Component { ...pageProps } />
            <ScrollToTop />
            <Script id='wow' src='/js/wow.min.js' />
            <Script
                strategy='beforeInteractive'
                id='splitting'
                src='/js/splitting.min.js'
            />
            <Script id='simpleParallax' src='/js/simpleParallax.min.js' />
            <Script
                id='isotope'
                strategy='beforeInteractive'
                src='/js/isotope.pkgd.min.js'
            />
            <Script id='wowInit' strategy='lazyOnload'>{ `new WOW().init();` }</Script>
        </>
    );
}

export default MyApp;
