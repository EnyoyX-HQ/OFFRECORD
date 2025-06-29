import { FunctionComponent } from 'react';
import styles from './Home.module.css';
import CardContentCategory from '@/components/cards/CardContentCategory';
import CardContent from '@/components/cards/CardContent';

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <div className={styles.frameParent}>
        <div className={styles.containerWrapper}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarContent}>
              <div className={styles.avatarGroup}>
                <img className={styles.avatarIcon} alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" />
                <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" />
                <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" />
                <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" />
                <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face" />
                <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face" />
              </div>
              <div className={styles.joinACommunity}>Join a community of locked-in founders shipping their ideas with ai</div>
              <div className={styles.button}>
                <div className={styles.label}>become a member</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.frameGroup}>
            <div className={styles.discoverNoBsInsightsToShiParent}>
              <div className={styles.discoverNoBsInsightsContainer}>
                <span className={styles.discover}>{`discover `}</span>
                <span>no-bs</span>
                <span className={styles.discover}> insights to ship an off record idea</span>
              </div>
              <div className={styles.aCuratedCollection}>A curated collection of insights, tools, and best practices for fast forward thinking founders shipping their ideas with AI. Stay ahead of the curve with resources that matter.</div>
            </div>
            <div className={styles.frameContainer}>
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
            </div>
          </div>
          
          <div className={styles.frameParent1}>
            <div className={styles.curatedForYouWrapper}>
              <div className={styles.curatedForYou}>curated for you</div>
            </div>
            <div className={styles.frameParent2}>
              <CardContent title="Setting up your next js project for scalability" />
              <CardContent title="Deploying a blockchain app using algorand" />
              <CardContent title="Setting up a test & production server for your application" />
            </div>
          </div>
          
          <div className={styles.frameParent1}>
            <div className={styles.curatedForYouWrapper}>
              <div className={styles.curatedForYou}>explore by product</div>
            </div>
            <div className={styles.curatedForYouWrapper}>
              <div className={styles.frameParent4}>
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
              </div>
            </div>
          </div>
          
          <div className={styles.lastUpdatedOnDec42024Wrapper}>
            <div className={styles.lastUpdatedOn}>Last updated on Dec 4, 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;