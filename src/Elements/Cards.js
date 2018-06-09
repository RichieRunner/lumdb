import styled from 'styled-components';
import { elevation, transition, colors } from '../Utils';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  color: ${colors.black};
  ${elevation[0]};
  ${transition()};
`;
