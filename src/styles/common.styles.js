import styled, { css } from 'styled-components';

export const defaultFocusStyle = css`
  &:focus,
  &[data-focused='true'] {
    border-color: ${props => props.theme.focusedFieldBorderColor};
    box-shadow: 0 0 1px ${props => props.theme.focusedFieldBorderColor};
    border-radius: 3px;
  }
`;

export const fieldDefaultStyle = css`
  height: ${props => (props.small ? '3rem' : '4.4rem')};
  min-height: ${props => (props.small ? '3rem' : '4.4rem')};
  font-size: ${props => (props.small ? '1.2rem' : '1.4rem')};
  line-height: ${props => (props.small ? '1.2rem' : '2rem')};
  font-family: Roboto, sans-serif;
  border: 1px solid ${props => props.theme.fieldBorderColor};
  border-radius: 3px;
  margin: 0;

  ${defaultFocusStyle};

  ::placeholder {
    color: ${props => props.theme.fieldPlaceholderColor};
  }
`;

export const EllipsisTextWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const EllipsisText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 1.4em;
  padding-top: 0.2em;
  line-height: normal;
`;

export const SubHeader = styled.div`
  line-height: 1.5;
  margin-top: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.defaultFontColor};
`;

export const SubText = styled.div`
  line-height: 1.5;
  margin-top: 1.5rem;
  color: ${props => props.theme.defaultFontColor};
`;

export const Divider = styled.hr`
  margin-left: 0;
  margin-right: 0;
  border: none;
  border-bottom: 1px solid ${props => props.theme.navBorderColor};
`;

export const StyledFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StyledRowLeftText = styled.div`
  align-self:center;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  & > div {
    align-self: center;
    margin-right: 10px;
  }
`;

export const StyledRowRightText = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  & > div {
    align-self: center;
  }
`;

export const Counter = styled.div`
  border-radius: 20px;
  background-color: ${props => props.theme.baseColors.gray2};
  color: ${props => props.theme.baseColors.gray8};
  font-size: 1.3rem;
  line-height: 1.2rem;
  padding: 0.5rem 1rem;
  & > div {
    color: #939497;
  }
`;

export const AvatarContainer = styled.div`
display: flex;
justify-content: center;
grid-area: avatar;
`;

export const inputPlusButtonDefaultPositiontStyle = css`
  position: absolute;
  top: ${props => (props.small ? '1rem' : '1.2rem')};
  right: ${props => (props.small ? '1rem' : '1.2rem')};
`;

export const inputPlusButtonDefaultStyle = css`
    border: 1px solid ${props => props.theme.fieldBorderColor};
    color: ${props => props.theme.fieldBorderColor};
    background-color: #ffffff;
    border-radius: 3px;
`;
