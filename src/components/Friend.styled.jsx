import styled from 'styled-components'
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${Friend => (Friend.isOnline ? 'green' : 'red')};
`;

export const ListMember = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px black solid;
  padding: 5px;
  padding-left: 10px;

  margin-bottom: 5px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 400;
`;