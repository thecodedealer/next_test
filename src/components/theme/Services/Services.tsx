import React, { FC } from 'react';
import featuresData from '../../../data/sections/features.json';

interface IProps {
    style?: any;
    lines?: any;
    data: {
        title: string
        smallTitle: string
        items: {
            id: number
            icon: string
            title: string
            content: string
        }[]
    };
}

const Services: FC<IProps> = ({ style, lines, data }) => {
    return (
        <section
            className={ `services bords section-padding ${
                style === '4item' ? 'lficon' : lines ? '' : 'pt-0'
            }` }
        >
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-md-10'>
                        <div className='sec-head  text-center'>
                            <h6 className='wow fadeIn' data-wow-delay='.5s'>
                                { data.smallTitle }
                            </h6>
                            <h3 className='wow color-font'>
                                { data.title }
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    { style === '4item'
                        ? featuresData.map((feature) => (
                            <div
                                key={ feature.id }
                                className='col-lg-6 wow fadeInLeft'
                                data-wow-delay={ `${
                                    feature.id == 1
                                        ? '.5'
                                        : feature.id === 2
                                            ? '.7'
                                            : feature.id === 3
                                                ? '.9'
                                                : '1.1'
                                }s` }
                            >
                                <div className='item-box'>
                                    <div>
                                        <span className={ `icon ${ feature.icon }` } />
                                    </div>
                                    <div className='cont'>
                                        <h6>{ feature.title }</h6>
                                        <p>{ feature.content }</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        : // max item 3 in Home page
                        data?.items.slice(0, 3).map((feature) => (
                            <div
                                key={ feature.id }
                                className='col-lg-4 wow fadeInLeft'
                                data-wow-delay='.5s'
                            >
                                <div className='item-box md-mb50'>
                                    <span className={ `icon ${ feature.icon }` } />
                                    <h6>{ feature.title }</h6>
                                    <p>{ feature.content }</p>
                                </div>
                            </div>
                        )) }
                </div>
            </div>
            { lines ? (
                <>
                    <div className='line top left' />
                    <div className='line bottom right' />
                </>
            ) : null }
        </section>
    );
};

export default Services;
