import * as React from 'react'

import ZLCardThree from '@/components/CardThree'

import style from './style.module.less'
import lunbo1 from '@/assets/images/home/lunbo1.png'
import finance1 from '@/assets/images/home/zq.png'
import finance2 from '@/assets/images/home/zq1.png'
import finance3 from '@/assets/images/home/zq2.png'
import finance4 from '@/assets/images/home/zq4.png'
import CardBroker from '@/components/CardBroker'

const ZLBrokers = () => {
  let arr = [
    {
      title: '背景',
      text: '为推进场外衍生品市场稳定持续发展，提高场外衍生品业务数据报送的电子化程度，规范场外衍生品报送义务人电子化接口报送，加强交易商场外期权场内对冲交易行为的管理，2020年9月，中国证券业协会发布《证券公司场外期权业务管理办法》（以下简称《办法》），以加强场外期权业务的自律管理，促进业务的健康规范发展。其中，场外业务电子化报送是一项重点革新内容。《办法》表明报送的内容涵盖场外期权与收益互换，明确了各报表的报送截止时间。并委托中证机构间报价系统股份有限公司（以下简称"衍生品"）以场外证券业务分类分层为基础，出具数据报送接口规范，并接收来自券商的数据，构建完善各场外证券业务交易报告库。此后，衍生品针对场外期权、收益互换、收益凭证等业务及跨境业务分别出具了接口规范。此外，沪深交易亦针对一级交易商出具了相应的接口规范。',
      src: finance1
    },
    {
      title: '报送的自动化处理',
      text: '监管报送系统能够满足衍生品、沪深交易所等监管机构的电子化报送要求，分别提供独立的模板用于支持数据源对接、模板数据导入、在线制表等形式填报业务数据，可在线验证数据填报规则，满足多人审批复核的流程方式，解析中证的回执文件信息，回填相关业务编号数据及反馈报文内容，真正实现报送的自动化处理。',
      src: finance4
    },
    {
      title: '日报、月报、季报/半年报',
      text: '其中，向中证备案的内容包含日报、月报（含跨境月报）、季报/半年报三个模块，备案场景包括新增、补正和废止。日报中包含了"主补协议"、"期权交易确认书"、"互换交易确认书"、"期权存续期管理"、"互换存续期管理"、"权益端支付"、"交易确认书附件"、"履约担保"、"收益凭证发行情况报送"、"收益凭证存续期业务情况报送"、"收益凭证产品重大事项信息披露"等；月报中包含了"定期报告-SAC"、"定期报告-NAFMII"、"定期报告-ISDA"及包括"跨境月报业务"在内的一揽子跨境月报；季报/半年报包含了"定期报告-季报/半年报"。系统支持基于业务数据生成符合监管要求的报文包，并通过挂载中证小站实现自动化报送。',
      src: finance2
    },
    {
      title: '电子化报送',
      text: '该系统集成了数据源对接、模板导入、在线制表等功能。提高场外衍生品业务数据报送的电子化程度，规范场外衍生品报送义务人电子化接口报送，加强交易商场外期权场内对冲交易行为的管理。实现了与衍生品的电子化报送对接，全面支持合作券商实现满足监管要求的电子化报送。提高了场外衍生品业务数据报送的电子化程度，规范了场外衍生品报送义务人电子化接口报送，加强了交易商场外期权场内对冲交易行为的管理。监管报送系统集成了数据源对接、模板导入、在线制表等方式满足了用户对于数据填报方面的诉求，同时实现与中证、沪深交易所的电子化报送对接，更好的应对当前市场关于监管报送的需求，达到了客户满意的效果',
      src: finance3
    },
  ]


  return (
    <div >
      <CardBroker info={arr[0]}></CardBroker>

      <CardBroker info={arr[1]} color='#1A559c' direction='right'></CardBroker>
      <CardBroker info={arr[2]} ></CardBroker>
      <CardBroker info={arr[3]} color='#1A559c' direction='right'></CardBroker>
    </div>
  )
}

export default ZLBrokers
