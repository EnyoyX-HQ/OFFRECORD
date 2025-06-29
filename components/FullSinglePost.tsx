"use client";

import { FunctionComponent, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import styles from './FullSinglePost.module.css';
import WebSideBar from '@/components/layout/WebSideBar';

interface FullSinglePostProps {
  title?: string;
  date?: string;
  readTime?: string;
  description?: string;
}

const FullSinglePost: FunctionComponent<FullSinglePostProps> = ({
  title = "deploying a blockchain app using algorand",
  date = "Jun 19, 2025",
  readTime = "10 min read",
  description = "A curated collection of insights, tools, and best practices for fast forward thinking founders shipping their ideas with AI. Stay ahead of the curve with resources that matter."
}) => {
  const [isNightMode, setIsNightMode] = useState(true);

  return (
    <div className={styles.fullSinglePost}>
      <div className={styles.frameParent}>
        <div className={styles.sidebarContainer}>
          <WebSideBar showCategories={false} showBecomeMember={true} />
        </div>
        <div className={styles.container1}>
          <div className={styles.frameGroup}>
            <div className={styles.modeSwitchParent}>
              <div className={styles.modeSwitch} onClick={() => setIsNightMode(!isNightMode)}>
                <div className={`${styles.modeOption} ${!isNightMode ? styles.active : ''}`}>
                  <Sun className={styles.modeIcon} />
                  <span className={styles.modeLabel}>DAYMODE</span>
                </div>
                <div className={`${styles.modeOption} ${isNightMode ? styles.active : ''}`}>
                  <Moon className={styles.modeIcon} />
                  <span className={styles.modeLabel}>NIGHTMODE</span>
                </div>
              </div>
              <div className={styles.deployingABlockchainAppUsiParent}>
                <div className={styles.deployingABlockchain}>{title}</div>
                <div className={styles.frameContainer}>
                  <div className={styles.contributorsParent}>
                    <div className={styles.contributors}>contributors</div>
                    <img className={styles.frameChild} alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face" />
                  </div>
                  <div className={styles.contributorsParent}>
                    <div className={styles.contributors}>{date}</div>
                    <div className={styles.frameItem} />
                    <div className={styles.contributors}>{readTime}</div>
                  </div>
                </div>
                <div className={styles.aCuratedCollectionOfInsighWrapper}>
                  <div className={styles.aCuratedCollection}>{description}</div>
                </div>
              </div>
            </div>
            <div className={styles.avatarGroupParent}>
              <div className={styles.overview}>overview</div>
              <div className={styles.ollioIsNot}>Ollio is not just a template—it's the ultimate solution for creating high-performing, professional documentation sites.</div>
            </div>
            <div className={styles.avatarGroupParent}>
              <div className={styles.overview}>Install @Ollio/nextjs</div>
              <div className={styles.ollioIsNot}>
                <p className={styles.inTheOllioDashboardNaviga}>{`In the Ollio Dashboard, navigate to the `}
                  <a className={styles.apiKeys} href="https://dashboard.clerk.com/last-active?path=api-keys" target="_blank">
                    <span className={styles.apiKeys1}>API keys⁠</span>
                  </a> page.
                </p>
                <ol className={styles.inTheOllioDashboardNaviga1}>
                  <li className={styles.inTheQuickCopySectionCop}>{`In the Ollio Dashboard, navigate to the `}
                    <a className={styles.apiKeys} href="https://dashboard.clerk.com/last-active?path=api-keys" target="_blank">
                      <span className={styles.apiKeys1}>API keys⁠</span>
                    </a> page.
                  </li>
                  <li className={styles.inTheQuickCopySectionCop}>In the Quick Copy section, copy your Clerk Publishable and Secret Keys.</li>
                  <li className={styles.inTheQuickCopySectionCop}>Paste your keys into your .env.local file.</li>
                </ol>
                <p className={styles.inTheOllioDashboardNaviga}>The final result should resemble the following:</p>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.deployingABlockchainAppUsiWrapper}>
                <div className={styles.deployingABlockchain1}>Deploying a blockchain app using algorand</div>
              </div>
            </div>
            <div className={styles.avatarGroupParent}>
              <div className={styles.overview}>Install setup dependencies</div>
              <div className={styles.olliomiddlewareProvidesSea}>ollioMiddleware() provides seamless access to user authentication states throughout your application, regardless of the route or page. Additionally, it enables you to secure specific routes from unauthenticated users. To integrate ollioMiddleware() into your app, follow these steps:</div>
            </div>
          </div>
          <div className={styles.avatarGroupParent}>
            <div className={styles.overview}>What did you think of this content?</div>
            <div className={styles.frameDiv}>
              <div className={styles.contributorsParent}>
                <svg className={styles.frameIcon} viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L10.09 5.26L15 6L11 9.74L11.91 15L8 12.27L4.09 15L5 9.74L1 6L5.91 5.26L8 1Z" fill="currentColor"/>
                </svg>
                <div className={styles.itWasHelpful}>It was helpful</div>
              </div>
              <div className={styles.contributorsParent}>
                <svg className={styles.frameIcon} viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L10.09 5.26L15 6L11 9.74L11.91 15L8 12.27L4.09 15L5 9.74L1 6L5.91 5.26L8 1Z" fill="currentColor"/>
                </svg>
                <div className={styles.itWasHelpful}>It was not helpful</div>
              </div>
            </div>
          </div>
          <div className={styles.lastUpdatedOnDec42024Wrapper}>
            <div className={styles.lastUpdatedOn}>Last updated on Dec 4, 2024</div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.avatarGroupParent}>
            <div className={styles.onThisPage}>on this page</div>
            <div className={styles.overview1}>overview</div>
            <div className={styles.installSetup}>install @ollio/nextjs</div>
            <div className={styles.installSetup}>{`install & setup dependencies`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullSinglePost;