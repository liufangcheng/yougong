import * as React from 'react'

import { Outlet, useLocation } from 'react-router-dom'
import ZLHeader from '@/components/Header'

import style from './style.module.less'
import ZLFooter from '@/components/Footer'
import ZLSlider from '@/components/Slider'
import { useEffect } from 'react'

const ZLLayout = () => {
  const location = useLocation();
  useEffect(() => {
    if (document && location.pathname != '/') {
      if (document?.documentElement || document?.body) {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
      }
    }
  }, [location.pathname]);

  return (
    <div className={style.zlLayoutWrapper}>
      <ZLHeader />
      <div className={style.content}>
        <Outlet />
      </div>
      <ZLSlider />
      <ZLFooter />
    </div>
  )
}

export default ZLLayout
