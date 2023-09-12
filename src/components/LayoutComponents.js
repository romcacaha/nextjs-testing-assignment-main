import styled from "styled-components";

export const Heading = styled.h1`
  margin: 0;
`;

export const FilterTitle = styled.p`
  color: var(--dark-grey);
  font-size: 1rem;
  margin: 0;
  white-space: nowrap;
`;

export const DescText = styled.p`
  color: var(--dark-grey);
  font-size: 0.75rem;
  margin: 0;
`;

const StyledTrack = styled.div`
  background: ${(props) =>
    props.index === 2 ? "#EDEAE3" : props.index === 1 ? "#119383" : "#EDEAE3"};
  height: 4px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 10px;
`;

export const Track = (props, state) => (
  <StyledTrack {...props} index={state.index} />
);

export const SimpleCard = styled.div`
  border-radius: 0.5rem;
  box-shadow: inset 0 0 0 1px #edeae3;
  transition: all 100ms ease-in-out;
  overflow: hidden;
`;

export const Card = styled(SimpleCard)`
  padding: 0.75rem;
  height: 100%;
  width: 100%;
  @media only screen and (min-width: 520px) {
    max-width: 10rem;
  }
`;

export const NumberInput = styled.input`
  width: 100%;
  flex: 1;
  border: none;
  outline: none;
  padding: 0;
  font-size: 1rem;
`;

export const CatalogImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const LoadMoreBtn = styled.button`
  color: #ffffff;
  background-color: #119383;
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.75rem 2rem;
  margin-top: 1rem;
  margin-inline: auto;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
`;
