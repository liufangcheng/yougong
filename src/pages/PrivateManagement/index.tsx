import * as React from 'react'

import ZLCardThree from '@/components/CardThree'

import style from './style.module.less'
import lunbo1 from '@/assets/images/home/lunbo1.png'
import finance1 from '@/assets/images/home/qb1.png'
import finance2 from '@/assets/images/home/qb3.png'
import finance3 from '@/assets/images/home/qb2.png'
import finance4 from '@/assets/images/home/qb4.png'
import finance5 from '@/assets/images/home/qb5.png'
import finance6 from '@/assets/images/home/qb6.png'
import finance7 from '@/assets/images/home/qb7.png'
import finance8 from '@/assets/images/home/qb8.png'
import finance9 from '@/assets/images/home/qt.png'
import finance10 from '@/assets/images/home/Sepior-Advanced-MPC-PolicyProtect.png'
import CardBroker, { CardBrokerProps } from '@/components/CardBroker'

const ZLBrokers = () => {
  let arr: CardBrokerProps['info'][] = [
    {
      title: '背景',
      text: '数字资产在证券公司、投资机构等金融机构中普遍应用。金融机构积极布局数字资产业务，并更新其现有的金融系统，以便与数字资产实现无缝连接。私钥泄露或遗失会导致数字资产丢失或被盗，而数字资产的安全性是迫切需要解决的问题，数字货币的去中心化特性，显现出安全性更加重要，传统的私钥管理方法（如使用钱包软件或存储在硬件钱包中）在安全性和易用性方面都存在缺陷。本系统结合目前最主流的MPC多签解决方案实现了一整套的私钥托管方案。',
      src: finance4
    },
    {
      title: '产品概述',
      text: '本系统旨在为企业、证券公司和投资公司等机构提供安全、可靠、灵活的数字资产私钥管理方案。机构需要管理大量的数字资产，并且需要多个参与者进行数字资产管理和签名，MPC私钥管理系统提供了一个安全的方式来管理加密货币的私钥。通过使用MPC技术，系统允许多个参与者共同控制私钥，在企业级资产账户管理的使用有广泛的场景，保护私钥免受单点故障和潜在的黑客攻击。即便其中一个密钥片段丢失，也不会影响到其他密钥片段的安全，同时剩余密钥片段仍然可以实现交易签名，既保证安全性，又维持了使用的便捷。此外，我们的系统还具有可扩展性，可以根据实际需求进行定制和扩展，满足不同机构的需求。',
      src: finance1
    },
    {
      title: '安全存储和安全计算',
      text: 'MPC私钥生成技术将私钥分成多个密钥片段，并在多个参与者之间进行分布式存储。这确保了私钥不会被任何单一参与者所持有，从而增加了私钥的安全性。被分为多个密钥片段的私钥，可以通过信封加密的方式存储在安全可信的存储设备上，通过KMS对私钥片段进行加密，定期轮换KMS加密方式增加密钥碎片的安全性，并且记录 KMS 加解密的使用记录。对调用KMS的服务和服务器做限制，避免了外部攻击请求的风险。 MPC的私钥计算模块通过与AWS Nitro Enclaves 服务集成，使私钥相关的计算和缓存都在Nitro Enclaves 中完成，这使得数据的计算和交互具有更高的安全保障。',
      src: finance5
    },
    {
      title: '多方共同控制私钥',
      text: '统允许多个参与者共同控制私钥，因此即使其中一位参与者受到攻击，私钥仍然是安全的。目前系统支持多种MPC私钥生成算法，如：gg18、gg20等，可以通过配置的方式进行私钥生成算法切换，保持高度灵活的系统算法集成。MPC私钥管理系统抵御外部风险的同时，也可以避免内部人员风险，因为密钥片段被分配给多个参与者，每个参与者都只拥有部分信息，没有完整的私钥。这种设计可以防止任何一个参与者单独掌握私钥，从而降低了内部人员滥用私钥的风险。',
      src: finance2
    },
    {
      title: '支持多链资产',
      text: '私钥管理系统目前支持绝大多数链，如基于ECDSA 椭圆曲线签名的链、基于ED25519 椭圆曲线签名的链、基于BLS椭圆曲线签名的链。目前已经可以接入使用的有：BTC、ETH、SOL 、FIL 、DASH 、BNB 、FTM 、DOGE ...',
      src: finance6,
      srcSize: {
        height: '100px'
      }
    },
    {
      title: '私钥验签方式',
      text: '私钥管理系统使用门限签名（TSS）验签方式，目前系统采用2/3签名方式，由MPC计算生成3份密钥片段后，用户、操作员、管理员各自持有一份密钥片段，交易方式为用户发起请求后确认，操作员确认后完成2份密钥片段的确认，通过TSS验签方式，即可完成交易签名确认。当出现用户掌管的一份密钥片段丢失的情况，用户仍可以申请管理员代理签名，进行2份密钥片段的签名完成交易请求。每一笔转账交易都需要参与者之间需要相互协作才能完成，每个参与者都有其独特的职责和角色，这种设计可以建立起多层次的控制机制，确保参与者之间相互监督和制衡。同时，我们的产品还提供了权限管理和操作记录审计，可以监测参与者的行为和操作，及时发现和纠正潜在的安全风险。',
      src: finance10
    },

    {
      title: '安全验证',
      text: '私钥管理系统提供基于树莓派的外部独立设备验证，当交易配置了开启外设验证的情况下，交易请求必须通过接入外部设备并且完成验证方可继续交易，设备是在完全离线的模式下完成验证操作，避免任何可能出现的网络攻击导致的风险和数据传输衍生的风险。',
      src: finance7,
      srcSize: {
        height: '300px'
      }
    },
    {
      title: 'MFA 验证',
      text: '在系统的交互中处理架构、计算、身份验证等模块的安全方案还集成了目前成熟的MFA 验证方案，目前通过人脸识别、指纹识别、动态码、短信、邮箱验证码的方式进行验证。',
      src: finance8
    },
    {
      title: '其他功能',
      text: '用户身份认证、权限管理、审计日志、系统监控、AML系统集成、交易费率、交易地址校验、Rule-Engine 支持、系统公告和消息通知、Android & iOS多语言支持',
      src: finance9,
      srcSize: {
        height: '300px'
      }
    },
  ]


  return (
    <div >
      <CardBroker info={arr[0]}></CardBroker>
      <CardBroker info={arr[1]} color='#1A559c' direction='right'></CardBroker>
      <CardBroker info={arr[2]} ></CardBroker>
      <CardBroker info={arr[3]} color='#1A559c' direction='right'></CardBroker>
      <CardBroker info={arr[4]} ></CardBroker>
      <CardBroker info={arr[5]} color='#1A559c' direction='right'></CardBroker>
      <CardBroker info={arr[6]} ></CardBroker>
      <CardBroker info={arr[7]} ></CardBroker>
      <CardBroker info={arr[8]} color='#1A559c' direction='right'></CardBroker>
    </div>
  )
}

export default ZLBrokers
