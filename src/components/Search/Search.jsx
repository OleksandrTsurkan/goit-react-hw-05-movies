import { ButtonSearch, FormInput, FormSearch } from "./Search.styled";

const Search = ({ onSubmitSearch, value }) => (
  <div>
    <FormSearch onSubmit={onSubmitSearch}>
      <FormInput
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        defaultValue={value}
        placeholder="Search for a movie..."
      />
      <ButtonSearch type="submit">Search</ButtonSearch>
    </FormSearch>
  </div>
);

export default Search;