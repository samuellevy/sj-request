import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Block = styled.div`
  padding: 20px 0;
`;

export const Label = styled.span`
  color: #bd93f9;
`;

export const Value = styled.span`
  padding: 0 10px;
  color: ${props => (props.available ? "#50fa7b" : "#ff5555")};
`;

export const PresentationBox = styled.div`
  padding: 40px;
  background-color: #44475a;
  margin: 5px 0;
`;
