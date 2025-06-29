import { FunctionComponent } from 'react';
import styles from './Footer.module.css';

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.buildInOffRecordWrapper}>
      <div className={styles.buildInOff}>© 2025 build in off record -</div>
    </div>
  );
};

export default Footer;