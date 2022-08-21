import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';

import { SamMain } from '@madelk/sam/main';

const StyledApp = styled.div`
  // Your style here
  padding: 0;
  margin: 0;
  border: 1px solid gray;
`;
const StyledNavigation = styled.ul`
  list-style: none;
  background-color: aliceblue;
  margin: 0;
  padding: 1em;
`;
const StyledHr = styled.hr`
  margin: 0;
`;
const StyledNavigationItem = styled.li`
  display: inline-block;
  padding-left: 1em;
  padding-right: 1em;
`;

export function App() {
  return (
    <StyledApp>
      <div role="navigation">
        <StyledNavigation>
          <StyledNavigationItem>
            <Link to="/">Home</Link>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <Link to="/sam">Sam</Link>
          </StyledNavigationItem>
        </StyledNavigation>
      </div>
      <StyledHr />
      <Routes>
        <Route path="/sam" element={<SamMain />} />
        <Route
          path="*"
          element={
            <div>
              You won't find anything here
            </div>
          }
        />
      </Routes>
    </StyledApp>
  );
}

export default App;
