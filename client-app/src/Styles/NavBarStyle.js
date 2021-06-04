import styled from 'styled-components';

const NavBarStyle = styled.div`
    span{
        color: #badc03;
    }
    .nav-item{
        padding: 5px 20px;
        text-decoration: none;
        color: black;
        : hover{
            background: #d0f504;
            border-radius: 10px;
        }
    }
    button{
        border: none;
        padding: 5px 30px;
        background: #d0f504;
        border-radius: 10px;
    }
`
export default NavBarStyle;