import React, { Component } from 'react';
import ArticleBox from "./components/article_box/articleBox";
import styles from "./articleList.module.css";

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  createArticleBoxes(columns) {
    const {articles} = this.props;

    let articleBoxes = articles.map((article, idx) => {
      return (
        <ArticleBox key={idx} article={article} columns={columns}/>
      )
    });

    return articleBoxes;
  }

  render() { 
    const {heading, description} = this.props;
    let columns = 2;

    if (this.props.columns) {
      columns = this.props.columns;
    }

    return (
      <div className={styles.articleList}>
        <h4 className={styles.heading}>{heading}</h4>
        <p className={styles.description}>{description}</p>
        <div 
          className={styles.articleContainer}
          style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
          {this.createArticleBoxes(columns)}
        </div>
      </div>
    );
  }
}
 
export default ArticleList;