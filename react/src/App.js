import React, { Component } from 'react';
import '../siimple-3.0.0/dist/siimple.min.css';

class App extends Component {

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <div className="">
                <div className="siimple-jumbotron siimple-jumbotron--yellow siimple-jumbotron--fluid">
                    <div className="siimple-jumbotron-title">Right Price Game</div>
                    <div className="siimple-jumbotron-subtitle">Find the right price</div>
                    <div className="siimple-jumbotron-detail">And compete with your friends</div>
                    <div className="siimple-btn siimple-btn--yellow">PLAY NOW</div>
                </div>
            </div>
        );
    }
}

export default App;
