import * as React from 'react'

import ZLCardThree from '@/components/CardThree'

import style from './style.module.less'
import lunbo1 from '@/assets/images/home/lunbo1.png'
import finance1 from '@/assets/images/home/hs1.png'
import finance2 from '@/assets/images/home/hs2.png'
import finance3 from '@/assets/images/home/hs3.png'
import finance4 from '@/assets/images/home/hs5.jpg'
import finance5 from '@/assets/images/home/hs4.png'
import CardBroker from '@/components/CardBroker'

const ZLBrokers = () => {
  let arr = [
    {
      title: '资源回收的闭环',
      text: '该项目的目标是实现资源回收的闭环，将小型个体回收公司、资源回收公司、物流公司和材料加工工厂进行连接和协同，通过订单管理、电子合同、费用核销、电子发票等流程实现全链条的业务管理和财务闭环。该项目采用APP作为载体，通过信息技术手段实现全过程的自动化和数字化管理。该项目可以有效提高资源回收效率，降低物流成本，促进资源回收产业的健康发展。',
      src: finance1
    },
    {
      title: '智慧采集',
      text: '系统不仅能够采集ERP系统中的数据，还能够通过与物流和银行第三方支付系统的对接，实现全面的数据采集。采集到的数据包括企业的订单、物流信息、银行支付信息等，为企业提供全面的数据支持，以便进一步的分析和决策制定。',
      src: finance2
    },
    {
      title: '智慧管理',
      text: '线生成电子合约、在线对账、付款、开票等功能，这些功能的实现可以有效提高企业工作效率，减少企业的人力和物力资源的浪费。同时，电子合约的生成也可以增加合同的透明度和可靠性，减少合同纠纷的可能性。',
      src: finance3
    },
    {
      title: '智慧分析',
      text: '能够对企业数据进行分类、汇总和分析，并通过自研算法为企业提供可视化的决策方案。通过数据分析，企业可以更好地了解市场和业务动态，制定更加科学和有效的决策方案，提高企业的竞争力和盈利能力',
      src: finance4
    },
    {
      title: '智慧监管',
      text: '能够对交易过程中的“资金流”、“物流”、“票据流”进行统一监管和实时监控。这样，企业可以更好地防范风险和诈骗行为，提高交易的安全性和可靠性，保障企业和客户的合法权益。',
      src: finance5
    },
  ]


  return (
    <div >
      <CardBroker info={arr[0]}></CardBroker>
      <CardBroker info={arr[1]} color='#1A559c' direction='right'></CardBroker>
      <CardBroker info={arr[2]} ></CardBroker>
      <CardBroker info={arr[3]} color='#1A559c' direction='right'></CardBroker>
      <CardBroker info={arr[4]} ></CardBroker>
    </div>
  )
}

export default ZLBrokers
