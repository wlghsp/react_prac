import { Component } from "react";

class TOC extends Component {
  render() {
    console.log("TOC render");
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a href={"/content/" + data[i].id}>{data[i].title}</a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

// 다른데서 TOC라는 이름으로 사용할 수 있게 함.
export default TOC;
