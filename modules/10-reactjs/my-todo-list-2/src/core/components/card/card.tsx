import React, { FunctionComponent } from 'react'
import { bind } from '../../../utils/bind'
import styles from './card.module.css'

const cx = bind(styles)

export const Card: FunctionComponent<{}> = () => {
  return <div className={cx('card')}></div>
}
