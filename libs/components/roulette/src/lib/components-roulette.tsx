import styled from 'styled-components';
import { Wheel } from 'react-custom-roulette';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface ComponentsRouletteProps {}

const StyledComponentsRoulette = styled.div`
  color: pink;
`;
const StyledWheel = styled(Wheel)`
  color: pink;
`;
const StyledButton = styled.button`
  color: pink;
`;

const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '1', style: { backgroundColor: 'white' } },
  { option: '2' },
];
export function ComponentsRoulette(props: ComponentsRouletteProps) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  return (
    <StyledComponentsRoulette>
      <StyledWheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <StyledButton onClick={handleSpinClick}>SPIN</StyledButton>
    </StyledComponentsRoulette>
  );
}

export default ComponentsRoulette;
