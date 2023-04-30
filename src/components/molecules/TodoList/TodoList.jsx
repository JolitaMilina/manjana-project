import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { API } from '../../../shared/api/api';
import ListItem from '../../atoms/ListItem';
import Modal from '../Modal/Modal';
import ICONS from '../../../shared/icons';
import { StyledTodoList, ListItemWrapper } from './styles';

const TodoList = ({ userId }) => {

    const [showTodoModal, setShowTodoModal] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleTodoItemClick = (todo) => {
        setSelectedTodo(todo);
        setShowTodoModal(true);
    };

    const { isLoading, error, data } = useQuery(['todos', userId], async () => {
        const response = await API.getTodos();
        return response.filter((todo) => todo.userId === userId);
    });

    const queryClient = useQueryClient();

    const toggleTodoStatus = async (todo) => {
        const updatedTodo = {
            ...todo,
            status: todo.status === 'In progress' ? 'Done' : 'In progress',
        };
        await API.updateTodo(updatedTodo);

        queryClient.setQueryData(['todos', userId], (oldData) =>
            oldData.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
        );
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <StyledTodoList>
                {data.map((todo) => (
                    <ListItemWrapper key={todo.id}>
                        <span
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleTodoStatus(todo);
                            }}
                            style={{ color: todo.status === 'In progress' ? `#534581` : `#72D989` }}
                        >
                            {todo.status === 'In progress'
                                ? ICONS.checkNone
                                : ICONS.checkDone}
                        </span>
                        <ListItem
                            title={todo.title}
                            action={() => handleTodoItemClick(todo)}
                        />
                    </ListItemWrapper>
                ))}
            </StyledTodoList>
            {showTodoModal && (
                <Modal
                    onClose={() => setShowTodoModal(false)}
                    title={selectedTodo.title}
                ></Modal>
            )}
        </>
    );
};

export default TodoList;
