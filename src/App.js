import React from 'react'
import Styled from 'styled-components'

import FormInput from './pages/FormInput'
import Table from './pages/Tables'

const BackgroundImg = Styled.div`
    background-image: url('/images/bg-01.jpg ');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
   
`
const GlobalStyle = Styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height:100vh;
    background: -webkit-linear-gradient(left, rgba(0,168,255,0.5), rgba(185,0,255,0.5)); 
    
`
function App() {
  return (
    <BackgroundImg>
      <GlobalStyle>
        <FormInput />
        <Table />
      </GlobalStyle>
    </BackgroundImg>
  )
}

export default App
