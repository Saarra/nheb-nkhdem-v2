import styled from 'styled-components'

export const StyledEmploi = styled.div
`
h5 {
    color: darkblue;
  }
   h3 {
       color: #262626;
       font-size: 17px;
       line-height: 24px;
       font-weight: 700;
       margin-bottom: 4px;
  }
   p {
       font-size: 17px;
       font-weight: 400;
       line-height: 20px;
       color: #666;
  }
   p.small {
       font-size: 14px;
  }
   .go-corner {
       display: flex;
       align-items: center;
       justify-content: center;
       position: absolute;
       width: 32px;
       height: 32px;
       overflow: hidden;
       top: 0;
       right: 0;
       background-color: #8d0042;
       border-radius: 0 4px 0 32px;
  }
   .go-arrow {
       margin-top: -4px;
       margin-right: -4px;
       color: white;
       font-family: courier, sans;
  }
   .card1 {
       display: block;
       position: relative;
       max-width: 262px;
       background-color: #f2f8f9;
       border-radius: 4px;
       padding: 32px 24px;
       margin: 12px;
       text-decoration: none;
       z-index: 0;
       overflow: hidden;
  }
   .card1:before {
       content: "";
       position: absolute;
       z-index: -1;
       top: -16px;
       right: -16px;
       background: palevioletred;
       height: 32px;
       width: 32px;
       border-radius: 32px;
       transform: scale(1);
       transform-origin: 50% 50%;
       transition: transform 0.25s ease-out;
  }
   .card1:hover:before {
       transform: scale(21);
  }
   .card1:hover p {
       transition: all 0.3s ease-out;
       color: rgba(255, 255, 255, 0.8);
  }
   .card1:hover h3 {
       transition: all 0.3s ease-out;
       color: #fff;
  }
   
  .emplois {
    display: flex;
  }
  .icon-delete {
      color : red;
  }
`