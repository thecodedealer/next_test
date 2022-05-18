import React, { FC, useMemo } from 'react';
import { IntroSocialNames } from '../../../constants/IntroSocialNames';

interface IProps {
    href: string;
    name: IntroSocialNames;
}

export const IntroSocial: FC<IProps> = ({ href, name }) => {
    switch (name) {
        case IntroSocialNames.FACEBOOK:
            return <i className='fab fa-facebook-f' />;
        case IntroSocialNames.TWITTER:
            return <i className='fab fa-twitter' />;
        default:
            return null;

    }

    return (
        <div className='social-icon'>
            <a href='#0'>
                <i className='fab fa-facebook-f' />
            </a>
            <a href='#0'>
                <i className='fab fa-twitter' />
            </a>
            <a href='#0'>
                <i className='fab fa-behance' />
            </a>
            <a href='#0'>
                <i className='fab fa-pinterest-p' />
            </a>
        </div>
    );
};

export default IntroSocial;
