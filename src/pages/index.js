import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>儒</>,
    imageUrl: 'img/Confucian_wooden-clapper_bell.svg',
    description: (
      <>
        又称儒学、孔孟思想、孔儒思想，是一种起源于中国并同时影响及流传至其他周遭东亚地区国家的文化主流思想、哲理。前5世纪由孔子创立，脱胎自周朝礼乐传统，以仁、恕、诚、孝为核心价值，着重君子的品德修养，强调仁与礼相辅相成，重视五伦与家族伦理，提倡教化和仁政，轻徭薄赋，抨击暴政，力图重建礼乐秩序，移风易俗，保国安民，富于入世理想与人文主义精神。
      </>
    ),
  },
  {
    title: <>释</>,
    imageUrl: 'img/Dharma_Wheel.svg',
    description: (
      <>
        起源于古印度河流域迦毗罗卫国（今尼泊尔和印度边界间靠近尼泊尔）的王室太子悉达多·乔答摩于35岁修道成为释迦牟尼佛后在约前6世纪对弟子开示的“苦、集、灭、道”的教导内容，因缘转趋为宗教化，为现代世界三大宗教之一。对于世界上，尤其是东亚、中南半岛文化具有深刻的影响，此外在中亚、南亚和南洋群岛地区的文化曾具有广泛的影响，现正在向欧洲、非洲、北美洲发展。佛教经历史发展，通过南、北两条传播途径，现代存在南传上座部佛教、北传大乘佛教两条支脉，其中大乘佛教又分为显宗（汉传佛教的主要内容）和密宗（藏传佛教的主要内容），故也有上座部、汉传佛教（大乘）、藏传佛教（金刚乘）三分法[注 1]，各脉又有诸多宗派；南传主要为以声闻乘阿罗汉果为最高圣位，北传则追求在未来世成佛，皆称为涅槃。
      </>
    ),
  },
  {
    title: <>道</>,
    imageUrl: 'img/Yin_and_Yang_symbol.svg',
    description: (
      <>
        华夏的本土宗教，道教思想源于黄帝（黄帝学派托言），道教体系最早创始人是五斗米教（天师道）的张道陵，崇拜道家老子为道祖，最早可以上溯到原始社会时期中国人的祭天、祭祖等崇拜活动，至春秋战国时期吸收神仙方术产生了方仙道，后融合道家、阴阳家的“五行”、“阴阳”等思想合并形成黄帝学派，在汉代中后期形成黄老道，至南北朝经过宗教改革，逐渐演变成现在的道教。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/shi/wuliangshou')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
