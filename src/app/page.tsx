import HomeExplainer from '@/app/markdown/HomeExplainer.mdx';

import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.page}>
      <HomeExplainer />
    </div>
  );
}
