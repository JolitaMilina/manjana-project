import { useRecoilState } from 'recoil';
import { userState } from '../../../shared/state/atoms';
import TodoList from "../../molecules/TodoList";
import { StyledTodoSystemWrapper } from './styles';

const TodoSystem = () => {
    const [user] = useRecoilState(userState);
    const userId = user.id;

    return (
        <StyledTodoSystemWrapper>
            <TodoList userId={userId} />
        </StyledTodoSystemWrapper>
    );
};

export default TodoSystem;
