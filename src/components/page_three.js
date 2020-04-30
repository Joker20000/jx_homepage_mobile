import * as React from 'react'
import ImageCompany from '../images/page_three_for_company.png'
import ImagePerson from '../images/page_three_for_person.png'

export class PageThree extends React.Component{
    render () {
        return (
            <div className="page_three">
                <div className="title">用嘉薪平台发工资</div>
                <div className="lists">
                    <div className="list">
                        <div className="img">
                            <img src={ImageCompany} alt="公司"/>
                        </div>
                        <div className="detail">
                            <div className="detail_title">为企业客户提供贴心增值服务</div>
                            <div>实时发薪 属地报税</div>
                            <div>银行收款 安全稳定</div>
                            <div>余额增值 只能返利</div>
                            <div>账期服务 费率优惠</div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img src={ImagePerson} alt="员工"/>
                        </div>
                        <div className="detail">
                            <div className="detail_title">为员工提供省心便利服务</div>
                            <div>工资钱包 实时提现</div>
                            <div>工资增值 省时省力</div>
                            <div>工资消费 返利多多</div>
                            <div>工资预支 解燃眉之急</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}