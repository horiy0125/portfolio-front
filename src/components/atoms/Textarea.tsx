import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { classes } from '../../utils/classes';

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};
const Root = styled.textarea`
  border: 1px solid ${colors.borderBlack};
  border-radius: 8px;

  padding: 8px;
`;

const Textarea: React.VFC<Props> = ({ value, onChange, className }) => {
  return (
    <Root
      className={classes(className)}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default Textarea;
