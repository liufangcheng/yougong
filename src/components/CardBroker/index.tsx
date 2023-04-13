import * as React from 'react'

import ZLCardThree from '@/components/CardThree'

import style from './style.module.less'
import lunbo1 from '@/assets/images/home/lunbo1.png'
import finance1 from '@/assets/images/home/zq.png'
import finance2 from '@/assets/images/finance/finance2.png'
import finance3 from '@/assets/images/finance/finance3.png'
type CardBrokerProps = {
  info: {
    title: string,
    text: string,
    src: string
  },
  color?: string,
  direction?: string
};

const CardBroker = (props: CardBrokerProps) => {
  const { info, color, direction = 'left' } = props
  return (
    <div className={style.zlFinanceWrapper} style={{ backgroundColor: props.color, color: props.color ? 'white' : '#555555' }}>
      <div className={style.content}>
        <div className={style.detail}>
          {direction == 'left' ? <div className={style.left}>
            <div className={style.title}>
              {props.info.title}
            </div>
            <div className={style.text}>
              {props.info.text}
            </div>
          </div> : <div className={style.right}>
            <img src={props.info.src} alt="" />

          </div>}
          {direction == 'left' ? <div className={style.right}>
            <img src={props.info.src} alt="" />

          </div> : <div className={style.left}>
            <div className={style.title}>
              {props.info.title}
            </div>
            <div className={style.text}>
              {props.info.text}
            </div>
          </div>}


        </div>
      </div>
    </div>
  )
}

export default CardBroker
