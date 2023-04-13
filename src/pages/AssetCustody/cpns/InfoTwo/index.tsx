import * as React from 'react'

import ZLTitle from '@/components/Title'

import style from './style.module.less'
import industry1 from '@/assets/images/industry/industry1.png'
import industry2 from '@/assets/images/industry/industry2.png'
import industry3 from '@/assets/images/industry/industry3.png'
import industry4 from '@/assets/images/industry/industry4.png'
import industry5 from '@/assets/images/industry/industry5.jpg'

const ZLIndustryTwo = () => {
  return (
    <div className={style.zlIndustryTwoWrapper}>
      <ZLTitle title="密钥片段分布式存储" isHurt={false} />
      <div className={style.content}>
        <ul className={style.left}>
          <li>
            <img src={industry1} alt="" />
            <div>
              <span>通过MPC生成的每一份密钥片段都独自存储</span>
            </div>
          </li>
          <li>
            <img src={industry2} alt="" />
            <div>
              <span>没有任何一方拥有可以完成签名的密钥份额</span>
            </div>
          </li>
          <li>
            <img src={industry3} alt="" />
            <div>
              <span>即便丢失一个密钥片段也不会威胁到资产的安全</span>
            </div>
          </li>
          <li>
            <img src={industry4} alt="" />
            <div>
              <span>无需全部的密钥片段即可完成签名操作</span>
            </div>
          </li>
        </ul>
        <div className={style.right}>
          <img src={industry5} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ZLIndustryTwo
