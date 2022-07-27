import { Button } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components'

export default function() {
  const [showUser, setShowUser] = useState(false)
  const changeShowUser = () => {
    setShowUser(!showUser)
  }
  return (
    <UserWrap>
      name: styled-components data-qiankun 没有覆盖
    </UserWrap>
  );
}

const UserWrap = styled.div`
  width: 100%;
  color: red;
  margin-bottom: 100px;
`
