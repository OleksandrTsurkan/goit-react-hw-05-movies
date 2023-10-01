const Search = ({ onSubmitSearch, value }) => (
  <div>
    <form onSubmit={onSubmitSearch}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        defaultValue={value}
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
    </form>
  </div>
);

export default Search;