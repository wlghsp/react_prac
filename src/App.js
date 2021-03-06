import "./App.css";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      subject: { title: "state의 웹이다", sub: "World Wide Web!" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML은 정보를 위한 것이다" },
        { id: 2, title: "CSS", desc: "CSS은 디자인을 위한 것이다" },
        {
          id: 3,
          title: "JavaScript",
          desc: "자바스크립트는 인터랙티브를 위한 것이다.",
        },
      ],
    };
  }
  // 렌더라는 함수 보다 먼저 그 컨포넌트를 초기화시켜주는 코드는  컨스트럭터에 작성
  // props나 state 값이 바뀌면 화면을 다시 그려줌.
  render() {
    console.log("App render");
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log("render", this);
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        {/* <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                console.log(e);
                // this.state.mode = "welcome";
                this.setState({
                  mode: "welcome",
                });
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header> */}
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
