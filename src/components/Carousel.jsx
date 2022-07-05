import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  static DefaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({ active: +event.target.dataset.index });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="Animal" data-testid="hero" />
        <div className="carousel-smaller">
          {images.map((image, idx) => (
            <img
              src={image}
              alt="animal thumbnail"
              key={image}
              className={active === idx ? "avtive" : ""}
              onClick={this.handleIndexClick}
              data-index={idx}
              data-testid={`thumbnail-${idx}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
