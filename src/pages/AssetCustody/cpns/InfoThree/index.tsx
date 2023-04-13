import * as React from 'react'

import ZLTitle from '@/components/Title'

import style from './style.module.less'
import industry6 from '@/assets/images/industry/industry6.png'
import industry7 from '@/assets/images/industry/industry7.png'
import industry8 from '@/assets/images/industry/industry8.png'
import industry9 from '@/assets/images/industry/industry9.png'
import industry10 from '@/assets/images/home/MPC+key+shares+vs+private+key+1.png'

const ZLIndustryThree = () => {
  return (
    <div className={style.zlIndustryThreeWrapper}>
      <ZLTitle title="MPC结合多重策略提供安全保护" isHurt={false} />
      <div className={style.content}>
        <ul className={style.left}>
          <li>
            <img src={industry6} alt="" />
            <div>
              <span>
                通过权限约束和策略执行引擎控制参与到交易中的每个密钥片段
              </span>
            </div>
          </li>
          <li>
            <img src={industry7} alt="" />
            <div>
              <span>m/n个密钥碎片方可完成交易签名（ECDSA 椭圆曲线、ED25519 椭圆曲线、BLS椭圆曲线）</span>
            </div>
          </li>
          <li>
            <img src={industry8} alt="" />
            <div>
              <span>MPC 法定 m/n 份密钥片段批准交易——避免意外或恶意的阈值签名请求</span>
            </div>
          </li>
          <li>
            <img src={industry9} alt="" />
            <div>
              <span>多方审批、策略执行引擎约束、安全验证、单一签名输出，增强安全性</span>
            </div>
          </li>
        </ul>
        <div className={style.right}>
          <img src={industry10} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ZLIndustryThree
