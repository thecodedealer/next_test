/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import Link from 'next/link';
import appData from '../../../data/app.json';

interface IData {
    addressTitle: string;
    addressContent: string;
    emailTitle: string;
    emailContent: string;
    callUsTitle: string;
    callUsContent: string;
}

interface IProps {
    hideBGCOLOR?: boolean;
    data: IData;
}

const Footer: FC<IProps> = ({ hideBGCOLOR, data }) => {
    return (
        <footer className={ `${ !hideBGCOLOR ? 'sub-bg' : '' }` }>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='item md-mb50'>
                            <div className='title'>
                                <h5>Contact Us</h5>
                            </div>
                            <ul>
                                <li>
                                    <span className='icon pe-7s-map-marker' />
                                    <div className='cont'>
                                        <h6>{ data.addressTitle }</h6>
                                        <p>{ data.addressContent }</p>
                                    </div>
                                </li>
                                <li>
                                    <span className='icon pe-7s-mail' />
                                    <div className='cont'>
                                        <h6>{ data.emailTitle }</h6>
                                        <p>{ data.emailContent }</p>
                                    </div>
                                </li>
                                <li>
                                    <span className='icon pe-7s-call' />
                                    <div className='cont'>
                                        <h6>{ data.callUsTitle }</h6>
                                        <p>{ data.callUsContent }</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='item'>
                            <div className='logo'>
                                <img src={ appData.lightLogo } alt='' />
                            </div>
                            <div className='copy-right'>
                                <p>
                                    © WEBSITE CRAFTED BY MR.ROBOT
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
