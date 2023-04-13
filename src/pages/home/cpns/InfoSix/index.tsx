import * as React from 'react'

import style from './style.module.less'
import info13 from '@/assets/images/home/info13.png'
import info14 from '@/assets/images/home/info14.png'
import info15 from '@/assets/images/home/info15.png'
import info16 from '@/assets/images/home/info16.png'

const ZLInfoSix = () => {
  return (
    <div className={style.zlInfoSixWrapper}>
      <h2 className={style.title}>区块链+金融：解决方案多元化</h2>
      <div className={style.content}>
        <div className={style.info1}>
          <div className={style.left}>
            <h2 className={style.desc}>案例一：区块链农产品溯源系统</h2>
            <div className={style.tong}>
              解决痛点：
            </div>
            <div className={style.wen} style={{ marginTop: '20px' }}>
              1.商品从出厂到消费者中间环节信息不透明，无 法追溯来源。
              改变：区块链实现多方共同记录溯源信息，消 费者可查询验真
            </div>
            <div className={style.wen} style={{ marginTop: '20px' }}>
              2.商品供应链过程信息存在被篡改、被伪造的风 险。
              改变：区块链技术保证溯源信息一旦记录后无 法删除、不可篡改
            </div>
            <div className={style.wen} style={{ marginTop: '20px' }}>
              3.发生商品质量或安全问题时难以回溯和追责
              改变：区块链在保证商业隐私的同时，支持全 流程交易历史记录的审计、回溯
            </div>

          </div>
          <div className={style.img}>
            <img src={info13} alt="" />
          </div>
        </div>
        <div className={style.info} style={{ marginTop: '40px' }}>
          <h2 >案例二：供应链溯源</h2>
          <div className={style.img}>
            <img src={info14} alt="" />
          </div>
        </div>
        <div className={style.info}>
          <h2 className={style.desc}>案例三：供应链溯源</h2>
          <div className={style.img}>
            <img src={info15} alt="" />
          </div>
        </div>
        <div className={style.info}>
          <h2 className={style.desc}>案例四：跨境电商溯源</h2>
          <div className={style.img}>
            <img src={info16} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZLInfoSix
