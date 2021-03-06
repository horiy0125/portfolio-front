import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/variables';
import { classes } from '../../../utils/classes';
import Icon from '../icons/Icon';

type Props = {
  children: React.ReactNode;
  onClick: (arg: any) => void;
  icon?: React.ReactNode;
  className?: string;
};

const Root = styled.button`
  display: flex;
  align-items: center;
  color: ${colors.defaultBlue};
  fill: ${colors.defaultBlue};
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

type LabelProps = {
  hasIcon: boolean;
};
const Label = styled.span<LabelProps>`
  margin-left: ${props => (props.hasIcon ? '8px' : '0')};
`;

const BasicButton: React.VFC<Props> = ({
  children,
  onClick,
  icon,
  className,
}) => {
  const hasIcon = Boolean(icon);

  return (
    <Root className={classes(className)} onClick={arg => onClick(arg)}>
      {icon ? <Icon icon={icon} /> : null}
      <Label hasIcon={hasIcon}>{children}</Label>
    </Root>
  );
};

export default BasicButton;
