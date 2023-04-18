import { useState, useEffect } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import ICONS from '../../../shared/icons';
import {
  StyledSearchFilterWrapper,
  StyledTitleContainer,
  StyledSearchContainer,
  StyledFiltersContainer,
  StyledItemsContainer,
  StyledPaginationContainer,
  StyledButtonContainer,
} from './styles';

const SearchFilter = ({ data, color, itemsPerPage = 5 }) => {
  const { title, types, items } = data;
  const [displayData, setDisplayData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (searchValue) {
      const itemsAfterSearch = items.filter((x) =>
        x.value.toLowerCase().includes(searchValue.toLowerCase())
      );

      setDisplayData(itemsAfterSearch);
    } else {
      setDisplayData(items);
    }
  }, [data, searchValue]);

  const filterData = (filterBy) => {
    if (filterBy === 'all') {
      if (searchValue) {
        const itemsAfterSearch = items.filter((x) =>
          x.value.toLowerCase().includes(searchValue.toLowerCase())
        );

        setDisplayData(itemsAfterSearch);
      } else {
        setDisplayData(items);
      }
    } else {
      if (searchValue) {
        const filteredItems = items
          .filter((x) =>
            x.value.toLowerCase().includes(searchValue.toLowerCase())
          )
          .filter((x) => x.type === filterBy);

        setDisplayData(filteredItems);
      } else {
        const filteredItems = items.filter((x) => x.type === filterBy);

        setDisplayData(filteredItems);
      }
    }

    setSelectedCategory(filterBy);
  };

  const resetFilter = () => {
    setDisplayData(items);
    setSearchValue('');
  };

  const generatePagination = () => {
    return Array(Math.ceil(displayData.length / itemsPerPage))
      .fill()
      .map((_, i) => i + 1)
      .filter((x, i, arr) => {
        if (x === 1) {
          return x;
        } else if (
          x - 1 === currentPage ||
          x - 2 === currentPage ||
          x + 1 === currentPage ||
          x + 2 === currentPage
        ) {
          return x;
        } else if (x === currentPage) {
          return x;
        } else if (x === arr.length) {
          return x;
        }
      })
      .map((x) => (
        <button key={x} onClick={() => setCurrentPage(x)}>
          {x}
        </button>
      ));
  };

  return (
    <StyledSearchFilterWrapper>
      <StyledTitleContainer color={color}>
        <h3>{title}</h3>
      </StyledTitleContainer>
      <StyledSearchContainer color={color}>
        <Input
          type='text'
          value={searchValue}
          setValue={setSearchValue}
          icon={ICONS.search}
          placeholder='Search'
          color={color}
        />
      </StyledSearchContainer>
      <StyledFiltersContainer>
        <a
          onClick={() => filterData('all')}
          className={selectedCategory === 'all' ? 'selected' : ''}
        >
          All
        </a>
        {types.map((x) => (
          <a
            key={x}
            onClick={() => filterData(x)}
            className={selectedCategory === x ? 'selected' : ''}
          >
            {x}
          </a>
        ))}
      </StyledFiltersContainer>
      <StyledItemsContainer>
        {displayData
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((x) => (
            <p key={x.id}>
              {x.beforeValue ? (
                <span>
                  {x.beforeValue} {x.value}
                </span>
              ) : (
                x.value
              )}
            </p>
          ))}
      </StyledItemsContainer>
      <StyledPaginationContainer>
        {generatePagination()}
      </StyledPaginationContainer>
      <StyledButtonContainer>
        <Button
          text='Reset all filter'
          action={resetFilter}
          color={color}
          outline
          fullWidth
        />
      </StyledButtonContainer>
    </StyledSearchFilterWrapper>
  );
};

export default SearchFilter;
