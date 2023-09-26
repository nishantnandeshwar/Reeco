import styled from "styled-components";

export const Card = styled.div`
  background: linear-gradient(250.32deg, #E9EAEE 13.13%, #E4E6EB 86.79%), #f5f6f9;
  background-blend-mode: soft-light, normal;
  border: 1.5px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0px 0px 17px rgba(255, 255, 255, 0.5), 4px 4px 8px rgba(35, 35, 72, 0.26);
  padding:1rem 5rem;
`;

export const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? '#00790E' : 'white')};
  color: ${(props) => (props.primary ? 'white' : '#00790E')};
  padding: 10px 20px;
  border: ${(props) => (props.primary ? 'none;' : '1px solid #00790E;')}; 
  border-radius: 20px;
  cursor: pointer;
  margin: 0px 1rem;
  &:hover {
    background-color: ${(props) => (props.primary ? '#00790E' : '#e0e0e0')};
  }
`;

export const StyledStatusButton = styled.button`
  background-color: ${(props) => (props.primary==="green"? '#00790E' : props.primary=== "red"? '#f70707': props.primary=== "fent-red"? '#f24e4e':"" )};
  color: white;
  padding: 10px 10px;
  border: ${(props) => (props.primary ? 'none;' : '1px solid #00790E;')}; 
  border-radius: 20px;
  cursor: pointer;
  margin: 0px 1rem;
  width:10%
`;