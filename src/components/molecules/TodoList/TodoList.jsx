import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { API } from '../../../shared/api/api';
import ListItem from '../../atoms/ListItem';
import ICONS from '../../../shared/icons';
import Modal from '../Modal/Modal';
import { StyledTodoList, ListItemWrapper } from './styles';

const TodoList = ({ userId, filter }) => {
    const [showTodoModal, setShowTodoModal] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleTodoItemClick = (todo) => {
        setSelectedTodo(todo);
        setShowTodoModal(true);
    };

    const { isLoading, error, data } = useQuery(
        ['todos', userId, filter],
        async () => {
            const response = await API.getTodos();
            const filteredTodos = response.filter((todo) => todo.userId === userId);

            if (filter === 'all') {
                return filteredTodos.sort((a, b) => b.id - a.id);
            } else {
                return filteredTodos
                    .filter((todo) => todo.status === filter)
                    .sort((a, b) => b.id - a.id);
            }
        },
        {
            refetchOnWindowFocus: false,
            keepPreviousData: true,
        }
    );

    const queryClient = useQueryClient();

    const toggleTodoStatus = async (todo) => {
        const updatedTodo = {
            ...todo,
            status: todo.status === 'In progress' ? 'Done' : 'In progress',
        };
        await API.updateTodo(updatedTodo);

        queryClient.setQueryData(['todos', userId, filter], (oldData) => {
            if (oldData === undefined) {
                return [updatedTodo];
            } else {
                return oldData.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));
            }
        });

        setTimeout(() => {
            queryClient.invalidateQueries(['todos', userId]);
        }, 100);
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
                            style={{
                                color: todo.status === 'In progress' ? `#534581` : `#98E3A9`,
                            }}
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
