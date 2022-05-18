import React, { FC } from 'react';

interface Meta {
    pagination: {
        page: number
        pageSize: number
        pageCount: number
        total: number
    };
}

interface Page {
    data: {
        id: number
        Title: string
    };
}

interface IProps {
    pages: {
        data: Page[],
        meta: Meta
    };
}

export const About: FC<IProps> = ({ pages }) => {
    console.log('>>>', pages);

    return (
        <>
            <pre>{ JSON.stringify(pages, null, 2) }</pre>
        </>
    );
};

export default About;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:1337/api/pages');
    const pages = await res.json();

    console.log('>>>', pages);

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            pages,
        },
    };
}
