import * as React from 'react'

import ZLIndustryInfoOne from './cpns/InfoOne'
import ZLIndustryInfoTwo from './cpns/InfoTwo'
import ZLIndustryInfoThree from './cpns/InfoThree'
import ZLIndustryInfoFour from './cpns/InfoFour'
import ZLIndustryInfoFive from './cpns/InfoFive'

import style from './style.module.less'
import lunbo1 from '@/assets/images/home/lunbo1.png'

const ZLIndustry = () => {
  return (
    <div className={style.zlIndustryWrapper}>
      <div className={style.lunbo}>
        <img src={lunbo1} alt="" />
        <div className={style.ld}>
          <span>杭州友恭科技有限公司</span>
          <br />
          <span>我们致力于为更多的客户提供了更专业的基于区块链的溯源系统</span>
        </div>
      </div>
      <div className={style.container}>
        <h2 className={style.title}>
          <span className={style.titleOne}>资产保管&nbsp;/&nbsp;</span>
          <span className={style.titleTwo}>asset custody</span>
        </h2>
        <div className={style.info + ' info1'}>
          <ZLIndustryInfoOne />
        </div>
        <div className={style.info + ' info2'}>
          <ZLIndustryInfoTwo />
        </div>
        <div className={style.info + ' info3'}>
          <ZLIndustryInfoThree />
        </div>
        <div className={style.info + ' info4'}>
          <ZLIndustryInfoFour />
        </div>
        <div style={{ height: '100px' }}></div>
      </div>
    </div>
  )
}
export default ZLIndustry
