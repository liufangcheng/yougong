import * as React from 'react'
import { NavLink } from 'react-router-dom'

import style from './style.module.less'
import Image from '@/assets/images/home/29258332.png'


const ZLFooter = () => {
  return (
    <div className={style.zlFooterWrapper}>
      <div className={style.content}>
        <div className={style.left}>
          <img src={Image} alt="" style={{ width: '208px', height: '70px' }} />
        </div>
        <div className={style.right}>
          <div style={{ marginBottom: '20px' }}>
            邮箱：surport@yougonghz.com
          </div>
          <div style={{ marginBottom: '20px' }}>
            总部地址：杭州市西湖区西溪银泰南2号楼7层703室
          </div>
          <div className={style.line}>
          </div>
          <div style={{ marginTop: '20px' }}>版权所有&copy;杭州友恭科技有限公司</div>
        </div>

      </div>
    </div>
  )
}

export default ZLFooter
