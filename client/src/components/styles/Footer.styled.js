import styled from 'styled-components'

export const StyledFooter = styled.div
`
@import "font-awesome";

.main {
    max-height: 550px;;
    background-color: #EE82EE;
    color: rgb(58, 0, 0);
    font-size: 38px;
    text-align: center;
    line-height: 550px;
   }

   .footer-distributed {
    box-shadow: 0 1px 1px 0 rgba(0, 17, 116, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: bold 42px !important;
    padding: 55px 50px;
   }
    
   .footer-distributed .footer-left,
   .footer-distributed .footer-center,
   .footer-distributed .footer-right{
    display: inline-block;
    vertical-align: top;
   }
    
   .footer-distributed .footer-left{
    width: 40%;
   }
    
   .footer-distributed h3{
    color:  #1b1616;
    margin: 0;
    font-size: 42px;
   }
    
   .footer-distributed h3 span{
    color:  #EE82EE;
   }
    
    
   .footer-distributed .footer-links{
    font-size: 32px;
    color:  #312c2c;
    margin: 20px 0 12px;
    padding: 0;
   }
    
   .footer-distributed .footer-links a{
    display:inline-block;
    line-height: 1.8;
    text-decoration: none;
    color:  inherit;
   }
    
   .footer-distributed .footer-company-name{
    color:  #312c2c;
    font-size: 20px;
    font-weight: normal;
    margin: 0;
   }
    
    
   .footer-distributed .footer-center{
    width: 35%;
   }
    
   .footer-distributed .footer-center i{
    background-color:  #EE82EE;
    color: #ffffff;
    font-size: 25px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    text-align: center;
    line-height: 42px;
    margin: 10px 15px;
    vertical-align: middle;
   }
    
   .footer-distributed .footer-center i.fa-envelope{
    font-size: 17px;
    line-height: 38px;
   }
    
   .footer-distributed .footer-center p{
       font-size: 26px;
    display: inline-block;
    color: #312c2c;
    vertical-align: middle;
    margin:0;
   }
    
   .footer-distributed .footer-center p span{
    display:block;
    font-weight: normal;
    font-size:24px;
    line-height:2;
   }
    
   .footer-distributed .footer-center p a{
    color:  #000;
    text-decoration: none;
   }
    
   .footer-distributed .footer-right{
    width: 20%;
   }
    
   .footer-distributed .footer-company-about{
    direction: rtl;
    line-height: 30px;
    color:  #000;
    font-size: 26px;
    font-weight: normal;
    text-align: justify;
    margin: 0;
   }
    
   .footer-distributed .footer-company-about span{
    display: block;
    color:  #ffffff;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
   }
    
   .footer-distributed .footer-icons{
    margin-top: 25px;
   }
    
   .footer-distributed .footer-icons a{
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color:  #EE82EE;
    border-radius: 2px;
    
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    
    margin-right: 3px;
    margin-bottom: 5px;
   }
    
    
   @media (max-width: 880px) {
    
    .footer-distributed{
    font: bold 14px sans-serif;
    
    }
    
    .footer-distributed .footer-left,
    .footer-distributed .footer-center,
    .footer-distributed .footer-right{
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
    }
    
    .footer-distributed .footer-center i{
    margin-left: 0;
    }
    .main {
    line-height: normal;
    font-size: auto;
    }
    
   }
`
