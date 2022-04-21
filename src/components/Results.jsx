import Pet from "./Pet";

function Results({ pets }) {
  return (
    <>
      {!pets.length ? (
        <h1>No pets found.</h1>
      ) : (
        pets.map(({ name, animal, breed, id, images, city, state }) => (
          <Pet
            key={id}
            name={name}
            animal={animal}
            breed={breed}
            images={images}
            location={`${city}, ${state}`}
            id={id}
          />
        ))
      )}
    </>
  );
}

export default Results;
