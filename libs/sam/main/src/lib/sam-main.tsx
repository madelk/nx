import { ComponentsRoulette } from '@madelk/components/roulette';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SamMainProps {}

const StyledSamMain = styled.div`
  background-size: cover;
  background-color: #ffffff70;
  background-blend-mode: overlay;
  background-image: url('https://static-cdn.jtvnw.net/jtv_user_pictures/b299a047-6bdb-4f06-acb2-cfa12c86be6b-profile_banner-480.jpeg');
`;
const StyledHeader = styled.h1`
  text-align: center;
`;

export function SamMain(props: SamMainProps) {
  return (
    <StyledSamMain>
      <StyledHeader>Wheel of Soonami</StyledHeader>
      <ComponentsRoulette />
    </StyledSamMain>
  );
}

export default SamMain;
