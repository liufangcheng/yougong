import * as React from 'react'

import ZLTitle from '@/components/Title'

import style from './style.module.less'
import industry11 from '@/assets/images/home/aws-76f64dd2.png'

const ZLIndustryFour = () => {
  return (
    <div className={style.zlIndustryFourWrapper}>
      <ZLTitle title="基于云服务的架构设计" isHurt={false} />
      <div className={style.content}>
        <span className={style.desc}>
          系统的每个模块都按照微服务的标准进行解耦，整个系统的各个模块间有非常灵活的扩展能力，并且具有高可用的能力。同时结合AWS 云原生的服务，使系统的部署、运营、健康监控都非常简单方便
        </span>
        <div className={style.bg}>
          <img src={industry11} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ZLIndustryFour
