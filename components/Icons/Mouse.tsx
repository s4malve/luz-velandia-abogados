import { memo } from 'react'

import Icon from '../../types/icon'

const Mouse = ({ className = '' }: Icon) => (
  <div className={`scrolldown ${className}`}></div>
)

export default memo(Mouse)
