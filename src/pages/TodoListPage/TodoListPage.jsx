import { useRecoilState } from 'recoil';
import { userState } from '../../shared/state/atoms';
import { StyledContentContainer, StyledTodoListSectionWrapper, StyledTodoListTitle, StyledTodoListComponent } from "./styles";

const TodoListPage = () => {

  const [user] = useRecoilState(userState);
  const userName = user.name;

  return (
    <StyledContentContainer>
      <StyledTodoListSectionWrapper>
        <StyledTodoListTitle>
          <span>{userName}'s</span> TODO list
        </StyledTodoListTitle>
        <StyledTodoListComponent></StyledTodoListComponent>
      </StyledTodoListSectionWrapper>
    </StyledContentContainer>
  );
};

export default TodoListPage;
