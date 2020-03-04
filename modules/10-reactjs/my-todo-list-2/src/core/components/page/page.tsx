import React, { FunctionComponent } from 'react'

import { bind } from '../../../utils/bind'
import styles from './page.module.css'

const cx = bind(styles)

export const Page: FunctionComponent<{}> = ({ children }) => {
  return <div className={cx('container')}>{children}</div>
}
