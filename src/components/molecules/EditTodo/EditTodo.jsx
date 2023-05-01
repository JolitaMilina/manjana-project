import React, { useState, useEffect } from 'react';
import { API } from "../../../shared/api/api";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import { StyledEditTodoWrapper, StyledInputWrapper, StyledInput, StyledInputLabel, StyledErrorMessage, StyledButtonContainer } from './styles';

const EditTodo = ({ todo, onUpdateTodo, onDeleteTodo, onClose }) => {
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [isTitleValid, setIsTitleValid] = useState(true);


    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    useEffect(() => {
        setIsTitleValid(title.trim().length > 0);
    }, [title]);


    const handleConfirmChanges = async () => {
        if (!isTitleValid) return;

        const updatedTodo = {
            ...todo,
            title,
            description,
        };

        await API.updateTodo(updatedTodo);
        onUpdateTodo(updatedTodo);
        onClose();
    };

    const handleCancelChanges = () => {
        setTitle(todo.title);
        setDescription(todo.description);
        onClose();
    };

    const handleDeleteTodo = async () => {
        await API.deleteTodo(todo.id);
        onDeleteTodo(todo);
        onClose();
    };

    return (
        <>
            <StyledEditTodoWrapper>
                <StyledInputWrapper>
                    <StyledInput>
                        <StyledInputLabel>Title</StyledInputLabel>
                        <Input
                            label='title'
                            value={title}
                            onChange={handleTitleChange}
                            placeholder='Enter your TODO title...'
                            maxLength={25}
                        />
                        {!isTitleValid && <StyledErrorMessage>Required</StyledErrorMessage>}
                    </StyledInput>
                    <StyledInput>
                        <StyledInputLabel>Description</StyledInputLabel>
                        <Input
                            multiline
                            value={description}
                            onChange={handleDescriptionChange}
                            placeholder="Enter your TODO description..."
                        />
                    </StyledInput>
                </StyledInputWrapper>
                <StyledButtonContainer>
                    <Button action={handleDeleteTodo} warning='warning'>Delete Todo</Button>
                    <span>
                        <Button action={handleCancelChanges} outline='outline'>Cancel</Button>
                        <Button action={handleConfirmChanges}>Update</Button>
                    </span>
                </StyledButtonContainer>
            </StyledEditTodoWrapper>
        </>
    );
};

export default EditTodo;
