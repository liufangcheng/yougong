import * as React from 'react'

import { Map } from 'react-amap'
import ZLCarousel from '@/components/Carousel'

import style from './style.module.less'

const ZLConcat = () => {
  const mapKey = 'e33eadd4321c1e7a328abdaec0c28afd'
  const position = { longitude: 120.094675, latitude: 30.306749 }

  return (
    <div className={style.zlConcatWrapper}>
      <div className={style.carousel}>
        <ZLCarousel />
      </div>
      <div className={style.content}>
        <div className={style.info}>
          <h2 className={style.title}>杭州友恭科技有限公司</h2>
          <ul className={style.desc}>
            <li></li>

            <li>联系邮箱：surport@yougonghz.com</li>
            <li>总部地址：杭州市西湖区西溪银泰南2楼7层703室</li>
          </ul>
        </div>
        <div className={style.map}>
          <Map amapkey={mapKey} zoom={15} center={position}></Map>
        </div>
      </div>
    </div>
  )
}

export default ZLConcat
