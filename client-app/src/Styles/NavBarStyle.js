import styled from 'styled-components';

const NavBarStyle = styled.div`
    span{
        color: #f47629;
    }
    .nav-item{
        padding: 5px 20px;
        text-decoration: none;
        color: black;
        : hover{
            background: #f47629;
            border-radius: 10px;
        }
    }
    button{
        border: none;
        padding: 5px 30px;
        background: #f47629;
        border-radius: 10px;
    }
`
export default NavBarStyle;