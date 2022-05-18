import React, { FC } from 'react';
import funFactDate from '../../../data/sections/fun-fact.json';
import Split from '../Split';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


interface Item {
    id: number;
    icon: string;
    content: string;
    value: string;
}

interface IProps {
    data: {
        smallTitle: string
        title: string
        items: Item[]
    };
}

const Numbers: FC<IProps> = ({ data }) => {
    React.useEffect(() => {
        console.clear();
    });
    return (
        <section className='number-sec section-padding'>
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
                    { data?.items.map((item) => (
                        <div key={ item.id } className='col-md-4'>
                            <div className='item no-bord sm-mb50'>
                                <span className={ `icon ${ item.icon }` } />
                                <h3 className=''>
                                    &nbsp;
                                    <CountUp redraw={ true } end={ +item.value } duration={ 3 }>
                                        { ({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={ start } delayedCall>
                                                <span className='count' ref={ countUpRef } />
                                            </VisibilitySensor>
                                        ) }
                                    </CountUp>
                                </h3>
                                <Split>
                                    <p className='wow txt words chars splitting' data-splitting>
                                        { item.content }
                                    </p>
                                </Split>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    );
};

export default Numbers;
