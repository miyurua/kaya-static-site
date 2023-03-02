import styled from 'styled-components';

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: ${(props) => props.theme.gaps.gigantic};
  margin-top: ${(props) => props.theme.margin.larger};

  .content-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.gaps.larger};
  }

  .content {
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.gaps.smaller};
  }

  .button-wrapper {
    display: flex;
    column-gap: ${(props) => props.theme.gaps.small};
    justify-content: center;
  }

  .ant-typography {
    margin-bottom: 0 !important;
  }
`;
