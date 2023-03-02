import styled from 'styled-components';

export const MobileMenuIconWrapper = styled.div`
  div.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
`;

export const HamburgerMenuToggleIcon = styled.div`
  cursor: pointer;
`;

export const HamburgerMenubar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) => props.theme.gray.gray700};
  border-radius: 4px;
`;

export const MobileSliderMenu = styled.div``;

export const MobileMenuFooter = styled.div`
  display: flex;
  flex-direction: column;

  .ant-btn {
    margin-bottom: ${(props) => props.theme.margin.medium};
  }
`;
