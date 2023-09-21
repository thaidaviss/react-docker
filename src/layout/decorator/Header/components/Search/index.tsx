import { SearchIcon } from '@assets/index';
import { categories } from '@constants/menuHeader';
import { Select, Input } from 'antd';
import { SearchContainer } from './style';

function Search() {
  return (
    <SearchContainer>
      <Input
        placeholder="Search for items"
        addonBefore={(
          <Select
            options={categories}
            value=""
            style={{ minWidth: '100px' }}
          />
        )}
        allowClear
        suffix={<SearchIcon />}
      />
    </SearchContainer>
  );
}

export default Search;
