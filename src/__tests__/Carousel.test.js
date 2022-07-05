/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { act } from "@testing-library/react";
import Carousel from "../components/Carousel";

test("lets users click on thumbnail to make them the hero", async () => {
  const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

  const carousel = render(<Carousel images={images} />);

  const hero = await carousel.findByTestId("hero");
  expect(hero.src).toContain(images[0]);

  for (const image of images) {
    const id = images.indexOf(image);
    const thumbnail = await carousel.findByTestId(`thumbnail-${id}`);
    await act(() => {
      thumbnail.click();
    });

    expect(hero.src).toContain(image);
    expect(thumbnail.classList).toContain("active");
  }
});
