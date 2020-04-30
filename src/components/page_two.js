import * as React from 'react'
import ImageHard from '../images/page_two_hard.png'
import ImageError from '../images/page_two_error.png'
import ImageSlow from '../images/page_two_slow.png'
import ImageExpensive from '../images/page_two_expensive.png'
import ImageWeight from '../images/page_two_weight.png'

export class PageTwo extends React.Component{
    render () {
        return (
            <div className="page_two">
                <div className="title">传统发工资</div>
                <div className="lists">
                    <div className="list">
                        <span><img src={ImageHard} alt="难"/></span>
                        <span>收集员工信息难，费时费力</span>
                    </div>
                    <div className="list">
                        <span><img src={ImageError} alt="错"/></span>
                        <span>操作繁琐，对高频次大批量发放易出错</span>
                    </div>
                    <div className="list">
                        <span><img src={ImageSlow} alt="慢"/></span>
                        <span>发薪时效低，无法满足实时发放</span>
                    </div>
                    <div className="list">
                        <span><img src={ImageExpensive} alt="贵"/></span>
                        <span>通过非银行机构代发，担心资金安全，且代发成本高</span>
                    </div>
                    <div className="list">
                        <span><img src={ImageWeight} alt="重"/></span>
                        <span>职工薪酬刚性兑付，现金流紧张时企业财务压力重</span>
                    </div>
                </div>
            </div>
        )
    }
}