import React, { Component } from 'react';
import styles from "./categoryList.module.css";

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  createCategoryElements() {
    const {
      categories, 
      currentCategoryId, 
      setCurrentCategoryId
    } = this.props;

    return categories.map((category) => {
      return <p 
        key={category.id} 
        onClick={() => {setCurrentCategoryId(category.id)}} 
        className={[styles.category, category.id === currentCategoryId ? styles.active:""].join(" ")}>
          {category.name}
      </p>
    });
  }

  render() { 
    return (
      <div className={styles.container}>
        {this.createCategoryElements()}
      </div>
    );
  }
}
 
export default CategoryList;