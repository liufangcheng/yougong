import * as React from 'react'

import ZLTitle from '@/components/Title'
import ZLLittleCardTwo from '@/components/LittleCardTwo'

import style from './style.module.less'

const ZLIndustryOne = () => {
  // state & props
  const [info1] = React.useState([
    {
      id: 1,
      icon: '',
      title: '商品从出厂到消费者手中，中间环节信息不透明，无法追溯来源。',
      desc: 'YouG使用门限签名(TSS) 验签方式结合MPC的密钥计算生成技术，实现了密钥的新一代管理方案。通过配置切换不同的算法，如GG18、GG20等'
    },

  ])
  return (
    <div className={style.zlIndustryOneWrapper}>
      <ZLTitle title="多种MPC私钥生成算法的支持" isHurt={false} />
      <div className={style.content}>
        YouG使用门限签名(TSS) 验签方式结合MPC的密钥计算生成技术，实现了密钥的新一代管理方案。通过配置切换不同的算法，如GG18、GG20等
      </div>
      <ZLTitle title="多种链的MPC私钥支持" isHurt={false} />
      <div className={style.content}>
        支持绝大多数链，如基于ECDSA 椭圆曲线签名的链、基于ED25519 椭圆曲线签名的链、基于BLS椭圆曲线签名的链
      </div>
      <ZLTitle title="基于AWS KMS 的私钥管理方案" isHurt={false} />
      <div className={style.content}>
        密钥碎片通过信封加密的方式存储在安全可信的存储设备上，同时通过信封加密的方式通过KMS的服务对密钥碎片进行加密
      </div>
      <ZLTitle title="基于AWS Nitro Enclaves 安全计算" isHurt={false} />
      <div className={style.content}>
        MPC的私钥计算模块通过与AWS Nitro Enclaves 服务集成，使私钥相关的计算和缓存都在Nitro Enclaves 中完成，这使得数据的计算和交互具有更高的安全保障
      </div>
    </div>
  )
}

export default ZLIndustryOne
