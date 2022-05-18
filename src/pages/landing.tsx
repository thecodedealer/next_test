import React, { FC, useEffect, useRef } from 'react';
import Navbar from '../components/theme/Navbar/Navbar';
import IntroWithSlider from '../components/theme/Intro-with-slider/IntroWithSlider';
import AboutUs from '../components/theme/About-us/AboutUs';
import Services from '../components/theme/Services/Services';
import Works from '../components/theme/Works/Works';
import Numbers from '../components/theme/Numbers/Numbers';
import VideoWithTestimonials from '../components/theme/Video-with-testimonials/VideoWithTestimonials';
import SkillsCircle from '../components/theme/Skills-circle/SkillsCircle';
import Clients from '../components/theme/Clients/Clients';
import Blogs1 from '../components/theme/blogs/Blogs1/Blogs1';
import CallToAction from '../components/theme/Call-to-action/CallToAction';
import Footer from '../components/theme/Footer/Footer';
import DarkTheme from '../layouts/Dark';
import { Theme } from '../constants/Theme';
import { fetchEngine } from '../functions/fetchEngine';
import { FetchScope } from '../constants/FetchScope';
import { ApiContentPath } from '../constants/ApiContentPath';

interface IProps {
    intro: any;
    aboutUs: any;
    featuresData: any;
    workData: any;
    numberData: any;
    footerData: any;
}

const Homepage1: FC<IProps> = ({ intro, aboutUs, featuresData, workData, numberData, footerData }) => {

    const fixedSlider = useRef<HTMLDivElement>(null);

    const MainContent = useRef<HTMLDivElement>(null);

    const navbarRef = useRef<HTMLDivElement>(null);

    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        setInterval(() => {
            let slidHeight;
            if (fixedSlider.current) {
                slidHeight = fixedSlider.current.offsetHeight;
            }
            if (MainContent.current) {
                MainContent.current.style.marginTop = slidHeight + 'px';
            }
        }, 1000);

        let navbar = navbarRef.current;

        if (window.scrollY > 300) {
            navbar?.classList.add('nav-scroll');
        } else {
            navbar?.classList.remove('nav-scroll');
        }

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                navbar?.classList.add('nav-scroll');
            } else {
                navbar?.classList.remove('nav-scroll');
            }
        });

    }, [fixedSlider, MainContent, navbarRef]);

    return (
        <DarkTheme>

            <Navbar nr={ navbarRef } lr={ logoRef } />

            <IntroWithSlider sliderRef={ fixedSlider } data={ intro } />

            <div ref={ MainContent } className='main-content'>
                { aboutUs && <AboutUs data={ aboutUs } /> }
                { featuresData && <Services data={ featuresData } /> }
                { workData && <Works data={ workData } /> }
                { numberData && <Numbers data={ numberData } /> }
                { false && <VideoWithTestimonials /> }
                { false && <SkillsCircle theme={ Theme.DARK } /> }
                { false && <Clients theme={ Theme.DARK } /> }
                { false && <Blogs1 /> }
                { false && <CallToAction /> }
                <Footer data={ footerData } />
            </div>

        </DarkTheme>
    );
};

export default Homepage1;

export async function getStaticProps() {

    const pages = await fetchEngine(FetchScope.API, ApiContentPath.PAGES);

    const intro = await fetchEngine(FetchScope.API, ApiContentPath.INTRO, { populate: ['side', 'slide.image', 'slide.cta', 'social'] });

    const aboutUs = await fetchEngine(FetchScope.API, ApiContentPath.ABOUT_US, { populate: '*' });

    const featuresData = await fetchEngine(FetchScope.API, ApiContentPath.FEATURES, { populate: '*' });

    const workData = await fetchEngine(FetchScope.API, ApiContentPath.WORKS, { populate: ['items', 'items.image'] });

    const numberData = await fetchEngine(FetchScope.API, ApiContentPath.NUMBERS, { populate: '*' });

    const footerData = await fetchEngine(FetchScope.API, ApiContentPath.FOOTER, { populate: '*' });

    return {
        props: {
            pages,
            intro: { slides: intro?.data?.attributes?.slide || null, social: intro?.data?.attributes?.social || null },
            aboutUs: aboutUs?.data?.attributes,
            featuresData: featuresData?.data?.attributes,
            workData: workData?.data?.attributes?.items,
            numberData: numberData?.data?.attributes,
            footerData: footerData?.data?.attributes,
        },
    };
}
