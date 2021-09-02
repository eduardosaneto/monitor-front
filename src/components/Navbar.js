import styled from "styled-components";
import growth_monitor from '../assets/img/growth_monitor.png';

export default function Navbar() {

    return (
        <Header>
            <img src={growth_monitor} alt="LOGO" />
        </Header>
    )
}

const Header = styled.header`
    width: 100%;
    height: 90px;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #c9c9c9;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    img {
        width: 200px;
    }

    @media (max-width: 611px){
        width: 100%;
    }
`;