import { FunctionComponent } from 'react';
import styles from './Home.module.css';
import FadeInSection from '@/components/ui/FadeInSection';
import StaggeredContainer from '@/components/ui/StaggeredContainer';
import CardContentCategory from '@/components/cards/CardContentCategory';
import CardContent from '@/components/cards/CardContent';
import BecomeMember from '@/components/ui-custom/BecomeMember';

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <div className={styles.frameParent}>
        <FadeInSection direction="left" delay={0.2}>
          <div className={styles.containerWrapper}>
            <BecomeMember />
          </div>
        </FadeInSection>
        <div className={styles.container1}>
          <FadeInSection delay={0.3}>
            <div className={styles.frameGroup}>
              <div className={styles.discoverNoBsInsightsToShiParent}>
                <div className={styles.discoverNoBsInsightsContainer}>
                  <span className={styles.discover}>{`discover `}</span>
                  <span>no-bs</span>
                  <span className={styles.discover}> insights to ship an off record idea</span>
                </div>
                <div className={styles.aCuratedCollection}>A curated collection of insights, tools, and best practices for fast forward thinking founders shipping their ideas with AI. Stay ahead of the curve with resources that matter.</div>
              </div>
              <StaggeredContainer className={styles.frameContainer} staggerDelay={0.15}>
                <CardContentCategory 
                  title="Best practices" 
                  description="A curated collection of insights, tools, and best practices for fast forward thinking founders shipping their ideas with AI." 
                />
                <CardContentCategory 
                  title="prompting" 
                  description="Master the art of AI prompting with proven techniques and strategies. Learn how to craft effective prompts that get you better results." 
                />
                <CardContentCategory 
                  title="build with..." 
                  description="Discover the latest tools, frameworks, and platforms that modern founders use to ship faster and build better products." 
                />
              </StaggeredContainer>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={0.5}>
            <div className={styles.frameParent1}>
              <div className={styles.curatedForYouWrapper}>
                <div className={styles.curatedForYou}>curated for you</div>
              </div>
              <StaggeredContainer className={styles.frameParent2} staggerDelay={0.1}>
                <CardContent title="Setting up your next js project for scalability" />
                <CardContent title="Deploying a blockchain app using algorand" />
                <CardContent title="Setting up a test & production server for your application" />
              </StaggeredContainer>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={0.7}>
            <div className={styles.frameParent1}>
              <div className={styles.curatedForYouWrapper}>
                <div className={styles.curatedForYou}>explore by product</div>
              </div>
              <div className={styles.curatedForYouWrapper}>
                <StaggeredContainer className={styles.frameParent4} staggerDelay={0.08}>
                  <div className={styles.frameFrame}>
                    <div className={`${styles.productLogo} ${styles.boltLogo}`}>
                      BOLT
                    </div>
                  </div>
                  <div className={styles.frameFrame}>
                    <div className={`${styles.productLogo} ${styles.lovableLogo}`}>
                      LOVABLE
                    </div>
                  </div>
                  <div className={styles.frameFrame}>
                    <div className={`${styles.productLogo} ${styles.replitLogo}`}>
                      REPLIT
                    </div>
                  </div>
                  <div className={styles.frameFrame}>
                    <div className={`${styles.productLogo} ${styles.cursorLogo}`}>
                      CURSOR
                    </div>
                  </div>
                  <div className={styles.frameFrame}>
                    <div className={`${styles.productLogo} ${styles.framerLogo}`}>
                      FRAMER
                    </div>
                  </div>
                  <div className={styles.frameFrame}>
                    <div className={`${styles.productLogo} ${styles.webflowLogo}`}>
                      WEBFLOW
                    </div>
                  </div>
                </StaggeredContainer>
              </div>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={0.9}>
            <div className={styles.lastUpdatedOnDec42024Wrapper}>
              <div className={styles.lastUpdatedOn}>Last updated on Dec 4, 2024</div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Home;