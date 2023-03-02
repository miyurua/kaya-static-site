import { Dropdown, Image, Input, Menu } from 'antd';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

export const Container = styled(Content)`
  padding-left: 120px;
  padding-right: 120px;

  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (min-width: 1200px) {
    margin: auto;
  }
`;

export const HeaderWrapper = styled.header`
  height: 72px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  background: ${(props) => props.theme.colors.background.light};
  z-index: 99;
  top: 0px;
  left: 0px;
  align-items: center;
  padding: 24px;
`;

export const SubHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled(Image)`
  height: 24px;
  cursor: pointer;
  object-fit: contain;

  @media only screen and (${(props) => props.theme.breakPoints.sm}) {
    display: none;
  }
`;

export const MobileLogo = styled(Image)`
  display: none;
  cursor: pointer;

  @media only screen and (${(props) => props.theme.breakPoints.sm}) {
    display: block;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 50px;

  @media (max-width: 890px) {
    display: none;
  }
`;

export const SearchInput = styled(Input.Search)`
  width: 250px;
`;

export const MenuItems = styled.div`
  display: flex;
  justify-content: space-evenly;

  > span {
    margin-right: ${(props) => props.theme.margin.jumbo};
  }

  > a {
    margin-right: ${(props) => props.theme.margin.jumbo};
  }
`;

export const MenuItemWrapper = styled.span`
  cursor: pointer;
  font-size: ${(props) => props.theme.fonts.size.medium};
  text-align: center;
  font-weight: ${(props) => props.theme.fonts.weight.strong};
  color: ${(props) => props.theme.gray.gray700} !important;

  :hover {
    color: ${(props) => props.theme.gray.gray800};
  }

  a {
    font-size: ${(props) => props.theme.fonts.size.medium};
    color: ${(props) => props.theme.gray.gray700};
  }

  & + & {
    margin-left: 10px;
  }
`;

export const DropDownMenu = styled(Dropdown)`
  cursor: pointer;
  font-size: ${(props) => props.theme.fonts.size.medium};
  text-align: center;
  font-weight: ${(props) => props.theme.fonts.weight.strong};
  color: ${(props) => props.theme.gray.gray700};
`;

export const DropDownMenuItem = styled(Menu.Item)`
  font-size: ${(props) => props.theme.fonts.size.small};
  color: ${(props) => props.theme.gray.gray700};
  line-height: 20px;
  width: 200px;
  margin: 0;
  padding: ${(props) => props.theme.padding.medium};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    border: none;
    box-shadow: none;
    justify-content: center;
    display: flex;
    align-items: center;
    margin-right: ${(props) => props.theme.margin.small};
  }
`;
export const UserAvatarSectionWrapper = styled.div`
  display: flex;

  @media screen and (${(props) => props.theme.device.sm}) {
    display: none;
  }
`;
export const NavbarProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  margin-left: ${(props) => props.theme.margin.small};
`;

export const NavbarButtonWrapper = styled.div`
  display: flex;

  @media only screen and (${(props) => props.theme.breakPoints.sm}) {
    display: none;
  }
`;

// export const NavbarSingleLink = styled(Link)`
//   cursor: pointer;
//   font-size: ${(props) => props.theme.fonts.size.medium};
//   text-align: center;
//   font-weight: ${(props) => props.theme.fonts.weight.strong};
//   color: ${(props) => props.theme.gray.gray700} !important;

//   :hover {
//     color: ${(props) => props.theme.gray.gray800};
//   }
// `;

export const ProfileDropdownMenu = styled(Menu)`
  border: 1px solid ${(props) => props.theme.gray.gray200};
  border-radius: 8px;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
`;

export const MobileSliderMenu = styled.div`
  display: none;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: block;
  }
`;
