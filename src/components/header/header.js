import React, { Component } from 'react';
import CategoryList from "./components/category_list/categoryList";
import styles from "./header.module.css";
import lineTodayLogo from "../../images/line-today-logo.webp";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return (
      <header className={styles.header}>
        <img className={styles.logo} src={lineTodayLogo} alt="line today logo"/>
        <CategoryList 
          categories={this.props.categories}
          currentCategoryId={this.props.currentCategoryId}
          setCurrentCategoryId={this.props.setCurrentCategoryId}
        />
      </header>
    );
  }
}
 
export default Header;