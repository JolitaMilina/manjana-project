import React from 'react';
import { useState } from 'react';
import Button from '../../atoms/Button';
import { StyledFiltersContainer } from './styles';

const FilterTodo = React.memo(({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterChange = (filterBy) => {
    setSelectedFilter(filterBy);
    onFilterChange(filterBy);
  };

  return (
    <StyledFiltersContainer>
      <Button
        action={() => handleFilterChange('all')}
        className={selectedFilter === 'all' ? 'selected' : ''}
        inverted='inverted'
        focused='focused'
      >
        All
      </Button>
      <Button
        action={() => handleFilterChange('In progress')}
        className={selectedFilter === 'In progress' ? 'selected' : ''}
        inverted='inverted'
        focused='focused'
      >
        In progress
      </Button>
      <Button
        action={() => handleFilterChange('Done')}
        className={selectedFilter === 'Done' ? 'selected' : ''}
        inverted='inverted'
        focused='focused'
      >
        Done
      </Button>
    </StyledFiltersContainer>
  );
});

export default FilterTodo;
