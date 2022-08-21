import { render } from '@testing-library/react';

import ComponentsRoulette from './components-roulette';

describe('ComponentsRoulette', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsRoulette />);
    expect(baseElement).toBeTruthy();
  });
});
