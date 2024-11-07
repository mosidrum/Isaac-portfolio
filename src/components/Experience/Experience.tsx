import { IoBriefcase } from 'react-icons/io5';
import styles from './Experience.module.css'

export const Experience = () => {
  return (
    <div className={styles.container}>
      <div className="flex-item-center gap-1">
        <IoBriefcase />
        <div>Experience</div>
      </div>
      <div></div>
    </div>
  )
}
