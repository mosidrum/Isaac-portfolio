import Image, { type StaticImageData } from 'next/image';
import styles from './BrandMark.module.css';

/** A brand logo on a light pill so low-resolution, dark-on-transparent marks stay readable. */
export const BrandMark = ({ logo }: { logo: StaticImageData }) => (
  <span className={styles.pill}>
    <Image src={logo} alt="" width={logo.width} height={logo.height} className={styles.image} />
  </span>
);
