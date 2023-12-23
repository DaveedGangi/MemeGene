// Style your components here

import styled from 'styled-components'

export const DivContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const ImageContainer = styled.div`
  background-image: url(${props =>
    props.imageUrls.length === 0
      ? 'https://assets.ccbp.in/frontend/react-js/nature-img.png'
      : props.imageUrls});

  background-size: cover;
  height: 200px;
  width: 300px;
  color: #ffffff;
  flex-wrap: wrap;
`

export const FontSize = styled.div`
  font-size: ${props => props.fontBold}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 190px;
  width: 270px;
  text-align: center;
  flex-wrap: wrap;
`
export const LabelForFont = styled.div`
  width: 170px;
  height: 33px;
`
export const Heading = styled.h1`
  color: #35469c;
`
export const ButtonElement = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  border: 0px;
  width: 170px;
  height: 26px;
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 140px;
  }
`
