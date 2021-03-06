import { Component } from "react";

class Subject extends Component {
  render() {
    console.log("Subject render");
    return (
      // 하나의 최상의 태그만 써야 함.
      <header>
        <h1>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
