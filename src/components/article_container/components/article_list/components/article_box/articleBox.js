import React, { Component } from 'react';
import styles from "./articleBox.module.css";

class ArticleBox extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {columns, article} = this.props;
    const img = `url("https://obs.line-scdn.net/${article.thumbnail.hash}")`;
    const title = article.title;
    const description = article.publisher;
    let articleBoxStyle = {}

    if (columns === 1) {
      articleBoxStyle = {
        gridTemplateColumns: "112px auto",
        alignItems: "center"
      }
    } else if (columns > 1) {
      articleBoxStyle = {
        gridAutoRows: "min-content",
        alignItems: "flex-start"
      }
    }

    return (
      <div 
        className={styles.articleBox} 
        style={articleBoxStyle}
        onClick={() => {window.location = article.url.url}}
      >
        <div className={styles.imageContainer} style={{backgroundImage: img}}></div>
        <div className={styles.textContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    );
  }
}
 
export default ArticleBox;