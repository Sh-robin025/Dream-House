import styled from "styled-components";

const detailsPageStyle = styled.div`
    .cover{
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("https://lh3.googleusercontent.com/proxy/9l19hwMTDrJgfMKEdcrhOTt0r94MF_VXT7thTIS4pCbbDQiI3DxJVhDGnIvKWsZtUGedNpOh2DRgDBVBHRcIGQyZ9TOeEMci9wGwuxidb0NHvCQ");
        height: 250px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        z-index: 1;
        & :: before{
            content: '';
            // display: block;
            top: 0;
            left:0;
            width: 100%;
            height: 100%;
            position: absolute;
            background: rgb(67 67 74);
            opacity: .7;
            z-index: -1;
        }
    }
    form{
        input{
            width: 100%;
            padding: 7px;
            margin-top: 10px;
        }
        textarea{
            width: 100%;
            padding: 7px;
            margin-top: 10px;
        }
        button{
            width: 100%;
            border: none;
            margin-top: 15px;
            padding: 10px 30px;
            background: #f47629;
            &: hover{
                background: #fff;
            }
        }
    }
`
export default detailsPageStyle;