import React, { useState } from 'react'
import { Outlet } from 'react-router'
import styled from 'styled-components';

export default function() {
  const [visible, setVisible] = useState(false)
  setTimeout(() => {
    setVisible(true)
  }, 3000);
  return (
    <LayoutWrap>
      <div className='main'>
        {
          visible?  <Outlet /> : <span>路由加载中....</span>
        }
      </div>
    </LayoutWrap>
  )
}

const LayoutWrap = styled.div`
  width: 100%;
`
