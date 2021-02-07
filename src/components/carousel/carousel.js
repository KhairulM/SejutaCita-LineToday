import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {getDataByCategoryId} from '../../services/general.service';
import styles from "./carousel.module.css";

class HighlightCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselItems: []
    }
  }

  async componentDidUpdate() {
    const {currentCategoryId} = this.props;
    const resp = await getDataByCategoryId(currentCategoryId);

    if (resp) {
      let carouselItems = [];
      let articles = resp.category.templates[1].sections[0].articles;
      for (let article of articles) {
        let carouselItem = {
          src: `https://obs.line-scdn.net/${article.thumbnail.hash}`,
          caption: article.title,
          url: article.url.url
        }
        carouselItems.push(carouselItem);
      }

      this.setState({
        carouselItems: carouselItems
      })
    }
  }

  createCarouselItems() {
    let {carouselItems} = this.state;
    return carouselItems.map((el, idx) => {
      let {src, caption, url} = el
      return (
        <Carousel.Item key={idx}>
          <img onClick={() => {window.location = url}} loading="lazy" className={styles.image} src={src} alt={caption}/>
          <Carousel.Caption>
            <div className={styles.captionContainer}>
              <p className={styles.caption}>{caption}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
  }

  render() { 
    return (
      <Carousel interval={3000} controls={false}>
        {this.createCarouselItems()}
      </Carousel>
    );
  }
}
 
export default HighlightCarousel;