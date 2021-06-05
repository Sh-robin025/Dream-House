import styled from "styled-components";

const HeroSectionStyle = styled.div`
  #HeroSection {
    position: relative;
    height: 500px;
    background: url("../../Images/heroSectionBG.png") no-repeat center;
    background-size: cover;

    .HeroText {
      position: relative;
      top: 35%;
      z-index: 2;
      color: #fff;
      .heroSearch {
        width: 50%;
        margin: auto;
        .HeroSearchBtn {
          width: 36%;
          margin: 0 10px;
        }
      }
    }
    .HeroBGOverlay {
      width: 100%;
      height: 500px;
      background: #000;
      opacity: 0.8;
      position: absolute;
      z-index: 1;
      top: 0;
    }
    .HeroSearchBtn {
      width: 36%;
      margin: 0 10px;
    }
  }
`;

export default HeroSectionStyle;
