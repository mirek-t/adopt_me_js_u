import { useState } from "react";

const animals = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          placeholder="Location"
          onChange={(event) => setLocation(event.target.value)}
        />

        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          onChange={(event) => {
            setAnimal(event.target.value);
          }}
          onBlur={(event) => {
            setAnimal(event.target.value);
          }}
        >
          <option />
          {animals.map((animal) => {
            return (
              <option value={animal} key={animal}>
                {animal}
              </option>
            );
          })}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
