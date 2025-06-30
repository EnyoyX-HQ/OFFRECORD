import { FunctionComponent } from 'react';
import styles from './Header.module.css';

const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.offRecordParent}>
        <div className={styles.offRecord}>OFF-record</div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <img className={styles.frameIcon} alt="" src="Frame.svg" />
            <div className={styles.community}>community</div>
          </div>
          <div className={styles.fellowshipWrapper}>
            <div className={styles.community}>fellowship</div>
          </div>
          <div className={styles.fellowshipWrapper}>
            <div className={styles.community}>off record</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.label}>become a member</div>
        </div>
      </div>
    </div>
  );
};

export default Header;