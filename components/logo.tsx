import Image from 'next/image';
import styles from './logo.module.css';
import Link from 'next/link';

export function Logo() {
  return (
    <Link legacyBehavior href="/">
      <div className={styles.logoContainer}>
        <Image src="/favicon.ico" alt="logo" width="24" height="24" />
        <span>Concepts for SWE</span>
      </div>
    </Link>
  );
}
