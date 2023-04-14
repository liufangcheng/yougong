import * as React from 'react'

import ZLCardThree from '@/components/CardThree'

import style from './style.module.less'
import lunbo1 from '@/assets/images/home/lunbo1.png'
import finance1 from '@/assets/images/home/sq1.png'
import finance2 from '@/assets/images/home/sq2.png'
import finance3 from '@/assets/images/home/sq3.png'
import finance4 from '@/assets/images/home/sq4.png'
import finance5 from '@/assets/images/home/sq5.png'
import finance6 from '@/assets/images/home/sq6.png'
import CardBroker from '@/components/CardBroker'

const ZLBrokers = () => {
  let arr = [
    {
      title: '背景',
      text: '民政部等9部门印发《关于深入推进智慧社区建设的意见》(以下简称《意见》)，其中明确提出，到2025年，基本构建起网格化管理、精细化服务、信息化支撑、开放共享的智慧社区服务平台，初步打造成智慧共享、和睦共治的新型数字社区。',
      src: finance4
    },
    {
      title: '社区现代化治理',
      text: '  协助某房地产公司建设智慧社区，实现社区现代化治理，提供全方位便民服务，依托微信小程序平台，搭建社区便民服务站点，运用AI、IoT、大数据等相关技术，以有温度的客户成功服务、可落地的智慧社区整体解决方案赋能社区空间运营服务，整合社区服务资源，提供商务、娱乐、教育、医护、生活互助等多种便捷服务，打造具有温度的客户成功服务，促进社区空间运营服务的可持续发展。',
      src: finance1
    },
    {
      title: '社区生活服务',
      text: '除了提供商务、娱乐、教育、医护及生活互助等多种便捷服务，智慧社区还包含了一系列社区生活服务。比如，托育中心提供给家长一站式的儿童照护服务，提高了居民的生活品质；课程预约服务则让社区居民能够更便捷地报名参加各种感兴趣的课程，增加了社区的互动性和多样性；邻里社群则为社区居民提供了一个互相交流、分享、帮助的平台，促进了社区居民之间的互动和社交。此外，社区管理员能够发起社区活动，包括文艺演出、运动比赛、游戏竞赛等，以多种线上线下的奖励动员居民积极参与，增强了社区的凝聚力和活力。所有这些服务都可以通过智慧社区平台进行预约、管理和支付等操作，实现一站式的智能化服务，为居民提供更加方便、高效和优质的生活体验。',
      src: finance3
    },
    {
      title: '停车场管理',
      text: '除了提供商务、娱乐、教育、医护及生活互助等多种便捷服务，智慧社区还包含了一系列社区生活服务。比如，托育中心提供给家长一站式的儿童照护服务，提高了居民的生活品质；课程预约服务则让社区居民能够更便捷地报名参加各种感兴趣的课程，增加了社区的互动性和多样性；邻里社群则为社区居民提供了一个互相交流、分享、帮助的平台，促进了社区居民之间的互动和社交。此外，社区管理员能够发起社区活动，包括文艺演出、运动比赛、游戏竞赛等，以多种线上线下的奖励动员居民积极参与，增强了社区的凝聚力和活力。所有这些服务都可以通过智慧社区平台进行预约、管理和支付等操作，实现一站式的智能化服务，为居民提供更加方便、高效和优质的生活体验。',
      src: finance6
    },

    {
      title: '便民服务',
      text: '通过智能化的信息管理和监控，实现社区治理的智能化，提高社区的管理水平。提供多种便民服务，包括商务、娱乐、教育、医护及生活互助等服务，优化社区服务质量。通过社区便民服务站点的建设和社区活动的开展，提高社区居民的生活质量和幸福感。通过社区智慧停车、物业管理等服务的提供，促进社区空间运营服务的可持续发展。',
      src: finance5
    },
    {
      title: '社区幸福感',
      text: '通过与政府、企业和社区居民的合作，我们将打造一个共建共享、和谐美丽的社区环境。通过在小程序中的宣发页面，让居民了解社区的发展情况、政策、服务和活动。同时，我们还将鼓励企业和居民积极参与社区建设和治理，营造一个积极向上的社区氛围。通过这些措施，我们希望提高居民的幸福感和满意度，让他们更加热爱自己的社区，更加积极地参与社区建设和治理。',
      src: finance2
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
    </div>
  )
}

export default ZLBrokers
