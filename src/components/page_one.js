import * as React from 'react';

export class PageOne extends React.Component{
    constructor (props) {
        super (props);
    }
    componentDidMount () {
        getData('https://www.baidu.com').then(res=>{
            debugger;
        });
    }
    render () {
        return (
            <div className="page_one"></div>
        )
    }
}

function getData (url) {
    return fetch(url, {
        method: 'GET'
    })
}