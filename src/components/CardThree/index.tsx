import * as React from 'react'
import { NavLink } from 'react-router-dom'

import style from './style.module.less'

const ZLCardThree = (props: { info: any }) => {
  // state & props
  const { info } = props

  return (
    <div className={style.zlCardThreeWrapper} onClick={() => {
      console.log('[ 1 ] >', info)
    }}>
      <NavLink to={info.path}>
        <div className={style.icon}>
          <img src={info.imgUrl} alt="" />
        </div>
        <div className={style.desc}>
          <span>{info.title}</span>
          <br />
          <span>{info.desc}</span>
        </div>
      </NavLink>

    </div>
  )
}

export default ZLCardThree
