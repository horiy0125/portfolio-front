import React, { useState } from 'react';
import styled from 'styled-components';
import { paths } from '../../config/paths';
import { fontSize, mqPc } from '../../styles/mixins';
import { colors, fontFamilies, zIndexes } from '../../styles/variables';
import IconButton from '../atoms/buttons/IconButton';
import MenuIcon from '../atoms/icons/MenuIcon';
import NextLink from '../atoms/NextLink';
import MobileMenu from './MobileMenu';

const Root = styled.header`
  ${mqPc(`display: none;`)}

  position: fixed;
  top: 0;
  left: 0;

  z-index: ${zIndexes.header};

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 16px 32px;

  border-bottom: 1px solid ${colors.borderGray};

  background: ${colors.white};
`;

const IndexLink = styled(NextLink)`
  font-family: ${fontFamilies.enFont};
  ${fontSize(20)};
  font-weight: 400;

  text-transform: uppercase;
`;

const StyledIconButton = styled(IconButton)`
  fill: ${colors.buttonGray};
`;

const Header: React.VFC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  if (showMobileMenu) {
    return <MobileMenu close={() => setShowMobileMenu(false)} />;
  }
  return (
    <Root>
      <IndexLink href={paths.index}>
        Portfolio of
        <br />
        Kaito Horiuchi
      </IndexLink>

      <StyledIconButton
        icon={<MenuIcon />}
        onClick={() => setShowMobileMenu(true)}
      />
    </Root>
  );
};

export default Header;
