import * as React from 'react'

import ZLCardThree from '@/components/CardThree'

import style from './style.module.less'
import lunbo1 from '@/assets/images/home/lunbo1.png'
import finance1 from '@/assets/images/home/car1.png'
import finance2 from '@/assets/images/home/car2.png'
import finance3 from '@/assets/images/home/car3.png'
import CardBroker from '@/components/CardBroker'

const ZLBrokers = () => {
  let arr = [
    {
      title: '身份管控',
      text: '避免电瓶车流入非外卖行业，提供不定时的身份验证；为了保证只有外卖小哥可以租赁符合规范要求的电动车，我们开发一个身份验证系统。该系统集成到电动车租赁店铺和外卖平台的应用程序中，只有注册为外卖小哥的用户才能够通过身份验证，从而租赁符合规范要求的电动车。身份验证系统采用多种技术手段，如人脸识别、指纹识别、二维码等，确保外卖小哥的身份真实可靠',
      src: finance1
    },
    {
      title: '位置管理',
      text: '对城市中穿行的外卖小哥，进行位置分析，规范其交通行为；为了规范外卖小哥的交通行为，我们开发一个电动车位置管理系统。该系统采集外卖小哥电动车的位置信息，对其行驶轨迹进行实时监控和分析。通过数据分析，我们可以发现交通违法行为和危险路段，并对外卖小哥进行提示和警示，从而提高其交通行为的规范性和安全性。此外，位置管理还可以提供电动车调度服务，对电动车的分布和使用情况进行分析和优化，提高其利用率和效率。',
      src: finance2
    },
    {
      title: '多端管理',
      text: '对电车店铺、外卖员、外卖平台、生产工厂、政府平台统一管理涉及电瓶车全链路的管理，从生产到终端，从平台到用户，针对各个不同身份角色提供对应功能，集成电动车店铺、外卖平台、外卖员、生产工厂、政府平台等各个管理端，实现信息共享和协同管理。多端口管理提供用户权限控制和数据安全保护机制，确保各个管理端的数据不会被泄露或篡改。此外，还提供数据统计和分析功能，为电动车市场的管理决策提供依据和支持。',
      src: finance3
    },
  ]


  return (
    <div >
      <CardBroker info={arr[0]}></CardBroker>
      <CardBroker info={arr[1]} color='#1A559c' direction='right'></CardBroker>
      <CardBroker info={arr[2]} ></CardBroker>
    </div>
  )
}

export default ZLBrokers
