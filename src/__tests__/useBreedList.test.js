/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useBreedList from "./../hooks/useBreedList";

// function getBreedList(animal) {
//   let list;

//   function TestComponent() {
//     list = useBreedLists(animal);
//     return null;
//   }

//   render(<TestComponent />);

//   return list;
// }

test("give an empty list with no animal", async () => {
  const { result } = renderHook(() => useBreedList());

  const [breedList, status] = result.current;
  expect(breedList).toHaveLength(0);
  expect(status).toBe("unloaded");
});

test("give back breeds with an animal", async () => {
  const breeds = [
    "Havanese",
    "Bichon Frise",
    "Poodle",
    "Maltese",
    "Golden Retriever",
    "Labrador",
    "Husky",
  ];

  fetch.mockResponseOnce(JSON.stringify({ animal: "dog", breeds }));

  let result = await act(() => {
    const { result } = renderHook(() => useBreedList("dog"));
  });

  const [breedList, status] = result.current;
  expect(status).toBe("loaded");
  expect(breedList).toEqual(breeds);
});
