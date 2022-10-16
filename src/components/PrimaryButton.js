import styled from 'styled-components';
import { BaseStyledButton } from './Button';

const disabledOrColor = (props, color) => (
  (props.disabled)
    ? props.theme.primaryButtonDisabledColor
    : color
);

export const PrimaryButton = styled(BaseStyledButton)`
  background: ${props => disabledOrColor(props, props.theme.primaryButtonColor)};
  color: ${props => props.theme.primaryButtonFontColor};
  height: 44px;
  font-size: 1.4rem;
  border: none;
  width: ${props => (props.inline ? '100%' : 'auto')};
  min-width: 18rem;

  :hover {
    background: ${props => disabledOrColor(props, props.theme.primaryButtonHoverColor)};
  }

  svg,
  g {
    fill: ${props => props.theme.primaryButtonFontColor};
  }
`;
