import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ReactLoading from 'react-loading';
import theme from '../styles/themes';

const StyledLoading = styled(ReactLoading)`
  margin-right: 2rem;
`;

// styled-components needs the className
export const UnstyledButton = ({
  children, icon, iconRight, className, disabled, loading, innerRef, inline, ...rest
}) => {
  return (
    <button disabled={disabled} className={className} ref={innerRef} {...rest}>
      {loading && (
        <StyledLoading width="2em" height="2em" type="spin" />
      )}
      {!iconRight && icon}
      {children}
      {iconRight && icon}
    </button>
  );
};

const marginLeft = css`
  margin-left: 1rem;
`;

const marginRight = css`
  margin-right: 1rem;
`;

/* This is the base style for all buttons. Includes things like focus state */
export const BaseStyledButton = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  margin: 0 1.5rem;
  border-radius: 100px;
  text-align: center;
  transition: all 0.15s;

  ${props => (props.size === 'large' ? 'padding-left: 8rem; padding-right: 8rem' : '')};

  :hover {
    cursor: pointer;
  }

  :focus {
    opacity: 0.75;
    background: ${theme.baseButtonFocusColor};
    color: ${theme.baseButtonFocusFontColor};
  }

  :disabled {
    cursor: auto;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  svg {
    background: transparent !important;
    vertical-align: middle;
    ${props => (props.iconRight ? marginLeft : marginRight)}
    margin-top: -0.125rem;
    box-sizing: unset;
  }
`;

UnstyledButton.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.object,
  iconRight: PropTypes.bool,
};

const defaultProps = {
  disabled: false,
  icon: null,
  iconRight: false,
};

// eslint-disable-next-line local-rules/no-default-props
UnstyledButton.defaultProps = defaultProps;
