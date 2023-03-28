import styled from '@emotion/styled';

const setBgColor = props => {
  switch (props.status) {
    case true:
      return 'rgb(2, 100, 2)';
    default:
      return 'rgb(156, 5, 5)';
  }
};

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 25px;
  background-color: ${setBgColor};
`;

export const Avatar = styled.img``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  height: 100px;
  width: 500px;
  gap: 10px;
  padding: 0;
  padding-left: 10px;
  margin: 0;
  list-style: none;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 1px 3px 3px rgb(134, 134, 134);
`;
export const Name = styled.p`
  padding: 0;
  margin: 0;
`;
