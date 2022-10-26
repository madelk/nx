import styled from 'styled-components';
import { Wheel } from 'react-custom-roulette';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface ComponentsRouletteProps {}

const StyledComponentsRoulette = styled.div`
  img {
    display: block;
    content: url('https://static-cdn.jtvnw.net/emoticons/v2/306872160/default/light/2.0');
  }
  text-align: center;
  div {
    margin: 0px auto;
  }
  canvas {
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 50%;
    background-size: contain;
    background-image: url('https://pbs.twimg.com/profile_images/1410485845321207813/hKAF8XZ3_400x400.jpg');
  }
`;
const StyledWheel = styled(Wheel)``;
const StyledButton = styled.button`
  position: relative;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  background-color: red;

  color: pink;
  width: 72px;
  height: 72px;
  background-image: url('https://static-cdn.jtvnw.net/badges/v1/dcc70f58-5334-4ec8-83d2-5a7ef30482ab/3');
`;

const StyledButtonArea = styled.div`
  display: block;
  position: relative;
  text-align: center;
`;
const StyledWinner = styled.h2``;
const StyledButtonText = styled.div`
  text-transform: uppercase;
  font-size: 12px;
`;

const data = [
  { option: 'Dick' },
  { option: 'Random Animal' },
  { option: 'Viewer Choice' },
  { option: 'Sam has to sing happy birthday to herself' },
  { option: 'Party Hat' },
  { option: 'Cupcake' },
  { option: '“Birthday girl” written' },
  { option: 'Birthday Gifts' },
  { option: 'Phallic phallacies' },
  { option: 'Birthday cake ' },
  { option: 'Tiddy' },
  { option: 'Baloons' },
  {
    option: 'Sam choice',
    style: { backgroundColor: '#FF44AA', textColor: 'black' },
  },
];
export function ComponentsRoulette(props: ComponentsRouletteProps) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winner, setWinner] = useState('Spin to find out');

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setWinner('spinning...');
    setMustSpin(true);
  };
  const handleSpinStop = () => {
    setMustSpin(false);
    setWinner(data[prizeNumber].option);
  };
  return (
    <StyledComponentsRoulette>
      <StyledWinner>Winner: {winner}</StyledWinner>
      <StyledWheel
        backgroundColors={['red', 'blue']}
        textColors={['blue', 'red']}
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={handleSpinStop}
      />
      <StyledButtonArea>
        <StyledButton onClick={handleSpinClick} />
        <StyledButtonText>SPIN</StyledButtonText>
      </StyledButtonArea>
    </StyledComponentsRoulette>
  );
}

export default ComponentsRoulette;
