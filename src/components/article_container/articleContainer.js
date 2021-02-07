import React, { Component } from 'react';
import ArticleList from "./components/article_list/articleList";
import {getDataByCategoryId} from "../../services/general.service";

class ArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: []
    }
  }

  async componentDidUpdate() {
    const {currentCategoryId} = this.props;
    const resp = await getDataByCategoryId(currentCategoryId);

    if (resp) {
      let sections = [];
      // get every template that have a heading title and non-empty articles
      let templates = resp.category.templates.filter((template) => {
        return template.title && template.sections[0].articles.length
      })
      
      for (let template of templates) {
        let section = {
          heading: template.title,
          description: '',
          articles: template.sections[0].articles,
        }
        
        sections.push(section);
      }

      this.setState({
        sections: sections
      });
    }
  }

  render() { 
    let {sections} = this.state;
    let articleLists = [];

    for (let i = 0; i < sections.length; i++) {
      articleLists.push(
        <ArticleList
          heading={sections[i].heading}
          description={sections[i].description}
          articles={sections[i].articles}
          columns={i === 0? 1:2}
        />
      );
    }

    return (
      <div>{articleLists}</div>
    );
  }
}
 
export default ArticleContainer;