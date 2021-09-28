import styled from'styled-components'

export const NavBar = styled.div
`
.navbar-light .navbar-nav .nav-link {
    font-size: 32px;
    color: black;
  }
  
  #nhebnkhdem {
    font-size: 36px;
    color: palevioletred;
  }
  
  label {
    display: block;
    margin-top: 10px;
  }
  
  .card-container.card {
    max-width: 350px !important;
    padding: 40px 40px;
  }
  
  .card {
    background-color: #f7f7f7;
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
  
  .profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
  }
  .nav-item {
    display: flex;
  }
  svg{
    margin-top: 23px;
    color: palevioletred;
    stroke:palevioletred;
  
  }
   a:hover, Link:hover {
    text-decoration: underline palevioletred;
    text-underline-position: under;
   } 
//    a {
//        padding: 22px 10px 10px;
//    }
`