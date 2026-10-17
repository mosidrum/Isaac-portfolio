import { capabilities } from '@/data';
import { SectionHead } from '@/components/ui';
import styles from './Capabilities.module.css';

export const Capabilities = () => (
  <section className={styles.section} aria-labelledby="skills-heading">
    <div className={styles.inner}>
      <SectionHead
        index="04"
        label="Capabilities"
        id="skills-heading"
        title={
          <>
            Tools I actually use <span className="serif">in product work.</span>
          </>
        }
      />
      <div className={styles.grid}>
        {capabilities.map(({ area, items }, index) => (
          <div key={area} className={styles.cell}>
            <p className={styles.index}>{String(index + 1).padStart(2, '0')}</p>
            <h3 className={styles.area}>{area}</h3>
            <ul className={styles.chips}>
              {items
                .flatMap((item) => item.split(/, (?![^()]*\))/))
                .map((tool) => (
                  <li key={tool} className={styles.chip}>
                    {tool}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
