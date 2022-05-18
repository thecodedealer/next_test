/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import Link from 'next/link';
import AboutUs1Date from '../../../data/sections/about-us1.json';
import { resolveImageUrl } from '../../../functions/resolveImageUrl';
import { ApiImageData } from '../../../interfaces/ApiImageData';

interface IStat {
    id: number;
    number: string;
    letter: string;
    statsName: string;
}

interface IProps {
    data: {
        id: number,
        smallTitle: string
        title: string
        content: string
        image: ApiImageData
        cta: {
            path: string
            text: string
        }
        stats: IStat[]
    };

}

const AboutUs: FC<IProps> = ({ data }) => {
    return (
        <section className='about-us section-padding'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 valign md-mb50'>
                        <div className='mb-50'>
                            <h6 className='fw-100 text-u ls10 mb-10'>
                                { data.smallTitle }
                            </h6>
                            <h3 className='fw-600 text-u ls1 mb-30 color-font'>
                                { data.title }
                            </h3>
                            <p>{ AboutUs1Date.content }</p>
                            { data?.cta && (
                                <Link href={ data.cta.path }>
                                    <a className='butn bord curve mt-30'>
                                        <span>{ data.cta.text }</span>
                                    </a>
                                </Link>
                            ) }
                        </div>
                    </div>
                    <div className='col-lg-7 img'>
                        <img src={ resolveImageUrl(data.image.data.attributes.url) } alt={ data.image.data.attributes.alternativeText } />
                        <div className='stauts'>
                            { data.stats && data.stats.map((item) => (
                                <div className='item' key={ `stat-${ item.id }` }>
                                    <h4>
                                        { item.number }
                                        <span>{ item.letter }</span>
                                    </h4>
                                    <h6>{ item.statsName }</h6>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default AboutUs;
