import * as React from 'react'

import ZLCardThree from '@/components/CardThree'

import style from './style.module.less'
import lunbo1 from '@/assets/images/home/lunbo1.png'
import finance1 from '@/assets/images/home/sq1.png'
import finance2 from '@/assets/images/home/sq2.png'
import finance3 from '@/assets/images/home/sq3.png'
import CardBroker from '@/components/CardBroker'

const ZLBrokers = () => {
  let arr = [
    {
      title: '社区现代化治理',
      text: '  协助某房地产公司建设智慧社区，实现社区现代化治理，提供全方位便民服务，依托微信小程序平台，搭建社区便民服务站点，运用AI、IoT、大数据等相关技术，以有温度的客户成功服务、可落地的智慧社区整体解决方案赋能社区空间运营服务，整合社区服务资源，提供商务、娱乐、教育、医护、生活互助等多种便捷服务，打造具有温度的客户成功服务，促进社区空间运营服务的可持续发展。',
      src: finance1
    },
    {
      title: '社区幸福感',
      text: '通过与政府、企业和社区居民的合作，我们将打造一个共建共享、和谐美丽的社区环境。通过在小程序中的宣发页面，让居民了解社区的发展情况、政策、服务和活动。同时，我们还将鼓励企业和居民积极参与社区建设和治理，营造一个积极向上的社区氛围。通过这些措施，我们希望提高居民的幸福感和满意度，让他们更加热爱自己的社区，更加积极地参与社区建设和治理。',
      src: finance2
    },
    {
      title: '便民服务',
      text: '通过智能化的信息管理和监控，实现社区治理的智能化，提高社区的管理水平。提供多种便民服务，包括商务、娱乐、教育、医护及生活互助等服务，优化社区服务质量。通过社区便民服务站点的建设和社区活动的开展，提高社区居民的生活质量和幸福感。通过社区智慧停车、物业管理等服务的提供，促进社区空间运营服务的可持续发展。',
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
