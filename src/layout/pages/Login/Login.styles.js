import styled from 'styled-components';

export const WelcomeContainer = styled.div`
    display: grid;
    grid-template-columns: 2.5fr 2fr;
    background: linear-gradient(to bottom, rgb(6, 108, 224),  rgb(14, 48, 122));
    width: 1100px;
    height: 530px;
    margin: 4% auto;;
    border-radius: 15px;
    -webkit-backface-visibility : hidden; /* the magic ingredient */
    -webkit-transform           : skew(26deg, 0);
`

export const LoginContainer = styled.div`
    text-align: center;
    margin: 3% 5% 3% 8%;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 0px 50px 30px 30px;
`

export const Wrapper = styled.div`
    width: 1200px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 200px 50px 60px 30px;
    margin: 5px;
`

export const Title = styled.div`
    text-align:center;
    font-weight:bold;
    font-size:60px;
    margin-top:2%;
    line-height:10px;
    word-wrap:break-word;
    word-break:break-word;
    color: #e0dfdc;
    letter-spacing: .1em;
    text-shadow: 
      0 -1px 0 #fff, 
      0 1px 0 #2e2e2e, 
      0 2px 0 #2c2c2c, 
      0 3px 0 #2a2a2a, 
      0 4px 0 #282828, 
      0 22px 30px rgba(0, 0, 0, 0.9);
`
export const ProfileCard = styled.img`
    -webkit-transform           : skew(-26deg, 0);
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    borderWidth: 3;
    borderColor: "blue";
    border-radius: 50%;
`

export const ContentHolder = styled.img`
    text-align: center;
    color: white;
    font-size: 15px;
    font-weight: lighter;
    letter-spacing: 1px;
    margin-top: 15%;
    padding: 50px;
    -webkit-transform: skew(-26deg, 0);
`

export const ContentText = styled.img`
    font-size: 38px;
    margin: 20px auto;
`