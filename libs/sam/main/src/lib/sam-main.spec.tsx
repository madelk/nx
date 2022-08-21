import { render } from '@testing-library/react';

import SamMain from './sam-main';

describe('SamMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SamMain />);
    expect(baseElement).toBeTruthy();
  });
});
