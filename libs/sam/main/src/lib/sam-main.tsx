import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SamMainProps {}

const StyledSamMain = styled.div`
  color: pink;
`;

export function SamMain(props: SamMainProps) {
  return (
    <StyledSamMain>
      <h1>Welcome to SamMain!</h1>
    </StyledSamMain>
  );
}

export default SamMain;