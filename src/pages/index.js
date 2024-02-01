import * as React from 'react';
import Layout from '../components/layout';
import HomepageSlider from '../components/homepageSlider';
import HomepagePrograms from '../components/homepagePrograms';
import HomepageAboutOne from '../components/HomepageAboutOne';
import HomepageAboutTwo from '../components/HomepageAboutTwo';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import './styles/index.module.scss';
import { homepageSliderWrap, homepageSliderWrapTwo, homepageSliderWrapThree } from '.././components/styles/homepageSlider.module.scss'
// Import your images with both WebP and fallback formats
import home1WebP from '../images/home/home1.webp';
import home1Fallback from '../images/home/home1.jpg';
import home2WebP from '../images/home/home2.webp';
import home2Fallback from '../images/home/home2.jpg';
import cccFrontWebP from '../images/home/outside.webp';
import cccFrontFallback from '../images/home/outside.jpg';
import logo from '../images/logo-small.png';

function supportsWebP() {
  if (typeof window !== 'undefined') {
    const elem = document.createElement('canvas');

    if (elem.getContext && elem.getContext('2d')) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
  }

  return false;
}

const IndexPage = () => {
  const useWebP = supportsWebP();

  return (
    <ParallaxProvider>
      <Layout
        pageTitle="Columbia Children's Center"
        metaDesc="As soon as you enter Columbia Children&#039;s Center, you&#039;ll understand why families in Santa Maria have trusted us since 1992."
      >
        <div className={homepageSliderWrap}>
          <ParallaxBanner
            layers={[
              {
                image: useWebP ? home1WebP : home1Fallback,
                speed: -60,
                style: { backgroundSize: 'contain' },
              },
              {
                image: logo,
                speed: -20,
                style: { backgroundRepeat: 'no-repeat', backgroundSize: '200px, auto' },
              },
            ]}
            className="aspect-[2/1]"
          />
        </div>

        <HomepageAboutOne />

        <div className={homepageSliderWrapTwo}>
          <ParallaxBanner
            layers={[
              {
                image: useWebP ? cccFrontWebP : cccFrontFallback,
                speed: -60,
                style: { inset: '-225px, 0px' },
              },
            ]}
            className="aspect-[2/1]"
          />
        </div>

        <HomepageAboutTwo />

        <div className={homepageSliderWrapThree}>
          <ParallaxBanner
            layers={[
              {
                image: useWebP ? home2WebP : home2Fallback,
                speed: -60,
                style: { inset: '-225px, 0px' },
              },
            ]}
            className="aspect-[2/1]"
          />
        </div>

        <HomepagePrograms />
      </Layout>
    </ParallaxProvider>
  );
};

export default IndexPage;
