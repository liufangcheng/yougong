import * as React from 'react'

import { Map } from 'react-amap'
import ZLCarousel from '@/components/Carousel'

import style from './style.module.less'
import { Form, Input, message } from 'antd'
import { Rule } from 'antd/lib/form'
import { QuestionConsultation } from '@/api/save'

const ZLConcat = () => {
  const [form] = Form.useForm();
  const emailReg = /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/;
  const emailRule: Rule = {
    message: '请填写正确格式邮箱',
    pattern: emailReg,
  };

  const submit = async () => {
    try {
      await form.validateFields()
      let params = form.getFieldsValue(true);
      let res = await QuestionConsultation(params);
      message.success('发送成功，请等待我们回应')
    } catch (error) {
    }
  }
  const mapKey = 'e33eadd4321c1e7a328abdaec0c28afd'
  const position = {
    longitude:
      120.07426, latitude: 30.292076
  }

  return (
    <div className={style.zlConcatWrapper}>
      <div className={style.carousel}>
        <ZLCarousel />
      </div>
      <div className={style.center}>
        <div className={`${style.form} `}>
          <Form
            layout='vertical'
            form={form}
            style={{ width: '100%' }}
          >
            <Form.Item label="姓名" name='name' rules={[{ required: true, message: '请填写你的姓名' }]} >
              <Input placeholder="" bordered={true} maxLength={50} style={{ height: '40px', borderRadius: '20px' }} />
            </Form.Item>
            <Form.Item label="电话" name='phone' rules={[{ required: true, message: '请填写你的电话' }, { pattern: /^1[3456789]\d{9}$/, message: '请填写正确手机号' }]}>
              <Input placeholder="" bordered={true} maxLength={50} style={{ height: '40px', borderRadius: '20px' }} />
            </Form.Item>
            <Form.Item label="公司" name='company' rules={[{ required: true, message: '请填写你的公司名称' }]}>
              <Input placeholder="" bordered={true} maxLength={50} style={{ height: '40px', borderRadius: '20px' }} />
            </Form.Item>
            <Form.Item label="邮箱" name='email' rules={[{ required: true, message: '请填写你的公司邮箱' }, emailRule]}>
              <Input placeholder="" bordered={true} maxLength={50} style={{ height: '40px', borderRadius: '20px' }} />
            </Form.Item>
            <Form.Item label="留言" name='remark' rules={[{ required: true, message: '请填写留言' }]}>
              <Input placeholder="" bordered={true} maxLength={50} style={{ height: '40px', borderRadius: '20px' }} />
            </Form.Item>
            <div className={`${style.rightButton} `} onClick={() => {
              submit()
            }}>
              提交
            </div>

          </Form>
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
            <Map amapkey={mapKey} zoom={20} center={position} ></Map>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ZLConcat
