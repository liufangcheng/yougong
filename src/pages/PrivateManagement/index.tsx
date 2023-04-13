import * as React from 'react'

import ZLCardThree from '@/components/CardThree'

import style from './style.module.less'
import lunbo1 from '@/assets/images/home/lunbo1.png'
import finance1 from '@/assets/images/home/qb1.png'
import finance2 from '@/assets/images/home/qb3.png'
import finance3 from '@/assets/images/home/qb2.png'
import CardBroker from '@/components/CardBroker'

const ZLBrokers = () => {
  let arr = [
    {
      title: '多种MPC私钥生成算法和多种链的MPC私钥支持',
      text: 'YouG使用门限签名(TSS) 验签方式结合MPC的密钥计算生成技术，实现了密钥的新一代管理方案。通过配置切换不同的算法，如GG18、GG20等。支持绝大多数链，如基于ECDSA 椭圆曲线签名的链、基于ED25519 椭圆曲线签名的链、基于BLS椭圆曲线签名的链',
      src: finance1
    },
    {
      title: '基于AWS KMS 的私钥管理和AWS Nitro Enclaves 安全计算',
      text: '密钥碎片通过信封加密的方式存储在安全可信的存储设备上，同时通过信封加密的方式通过KMS的服务对密钥碎片进行加密。MPC的私钥计算模块通过与AWS Nitro Enclaves 服务集成，使私钥相关的计算和缓存都在Nitro Enclaves 中完成，这使得数据的计算和交互具有更高的安全保障',
      src: finance2
    },
    {
      title: '密钥片段分布式存储、结合多重策略提供安全保护',
      text: '通过MPC生成的每一份密钥片段都独自存储、 没有任何一方拥有可以完成签名的密钥份额、即便丢失一个密钥片段也不会威胁到资产的安全、无需全部的密钥片段即可完成签名操作通过权限约束和策略执行引擎控制参与到交易中的每个密钥片段。m/n个密钥碎片方可完成交易签名（ECDSA 椭圆曲线、ED25519 椭圆曲线、BLS椭圆曲线）、MPC 法定 m/n 份密钥片段批准交易——避免意外或恶意的阈值签名请求、多方审批、策略执行引擎约束、安全验证、单一签名输出，增强安全性',
      src: finance3
    },
  ]


  return (
    <div >
      <CardBroker info={arr[0]}></CardBroker>
      <CardBroker info={arr[1]} color='#1A559c'></CardBroker>
      <CardBroker info={arr[2]} ></CardBroker>
    </div>
  )
}

export default ZLBrokers
