import React from 'react';
import { ReactDOM } from 'react';
import './Sslide.scss';

const Component = React.Component;
// const render = ReactDOM.render;

const LeftArrow = props => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <span className="fas fa-arrow-left fa-2x left-arrow" aria-hidden="true" />
    </div>
  );
};

const RightArrow = props => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <span
        className="fas fa-arrow-right fa-2x right-arrow"
        aria-hidden="true"
      />
    </div>
  );
};

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(https://uploads.codesandbox.io/uploads/user/c305e6cc-ea68-47be-af8e-6704979be98d/${image}.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
  };
  return <div className="slide" style={styles} />;
};

class Sslide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        'sdrl-aurora',
        '1GtP-rockets-in-the-sky',
        'P1at-galaxies',
        'Oggr-oriens-belt',
        'E3Gq-martin',
      ],
      currentIndex: 0,
      translateValue: 0,
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.images.length - 1,
        translateValue: (this.state.images.length - 1) * -this.slideWidth(),
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue - -this.slideWidth(),
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  };

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth;
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}
export default Sslide;
// render(<Sslide />, document.querySelector('#root'));
