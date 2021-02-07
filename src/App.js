import React, { Component } from 'react';
import Header from "./components/header/header";
import HighlightCarousel from "./components/carousel/carousel";
import ArticleContainer from "./components/article_container/articleContainer";
import {getAllData} from "./services/general.service";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      currentCategoryId: null,
    }
  }

  async componentDidMount() {
    const resp = await getAllData();
    if (resp) {
      // get categories
      let categories = resp.categoryList.map((category) => {
        return {
          id:category.id,
          name:category.name
        };
      });

      this.setState({
        categories: categories,
        currentCategoryId: categories[0].id
      })
    }
  }

  setCurrentCategoryId = (categoryId) => {
    this.setState({
      currentCategoryId: categoryId
    });
  }

  render() { 
    let {categories, currentCategoryId} = this.state;

    return (
    <div className="App">
      <div className="wrapper">
        <Header 
          categories={categories} 
          currentCategoryId={currentCategoryId}
          setCurrentCategoryId={this.setCurrentCategoryId}
        />
        <HighlightCarousel currentCategoryId={currentCategoryId}/>
        <ArticleContainer currentCategoryId={currentCategoryId}/>
      </div>
    </div>
    );
  }
}
 
export default App;