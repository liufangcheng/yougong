import * as React from 'react'

import ZLCardTwo from '@/components/CardTwo'
import {
  CarryOutOutlined,
  FormOutlined,
  FundOutlined,
  SettingOutlined
} from '@ant-design/icons'

import style from './style.module.less'

import ZLCarousel from '@/components/Carousel'
const ZLSolution = () => {
  // state & props
  const [info] = React.useState([
    {
      id: 1,
      title: '产品溯源',
      desc: '创造有影响力的公司活动和形象',
      icon: CarryOutOutlined,
      path: '/product'
    },
    {
      id: 2,
      title: '资产保管',
      desc: '呈现出完美的舞台效果',
      icon: FormOutlined,
      path: '/assetCustody'
    },
    {
      id: 3,
      title: '算力管理与运营',
      desc: '展会、展厅、文化馆等专业设计',
      icon: FundOutlined,
      path: '/arithmetical'
    },
    {
      id: 4,
      title: '行业解决方案',
      desc: '专业影视制作团队,量身定制',
      icon: SettingOutlined,
      path: '/industry'
    }
  ])

  return (
    <div className={style.zlSolutionWrapper}>
      <div className={style.carousel}>
        <ZLCarousel />
      </div>
      <div className={style.content}>
        <h2 className={style.title}>
          <span className={style.titleOne}>区块链技术&nbsp;/&nbsp;</span>
          <span className={style.titleTwo}>Blockchain Technology</span>
        </h2>
        <div className={style.card}>
          {info.map((item: any) => {
            return (
              <div className={style.item} key={item.id}>
                <ZLCardTwo info={item} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ZLSolution
