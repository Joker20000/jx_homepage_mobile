import * as React from 'react'
import ImageBill from '../images/page_four_bill.png'
import ImageIncrement from '../images/page_four_increment.png'
import ImageOutsource from '../images/page_four_outsource.png'
import ImageSalary from '../images/page_four_salary.png'
import ImageInsurance from '../images/page_four_insurance.png'
import ImageSocialization from '../images/page_four_socialization.png'

export class PageFour extends React.Component{
    render () {
        return (
            <div className="page_four">
                <div className="title">我们能为您提供什么</div>
                <div className="lists">
                    <div className="list">
                        <div className="img">
                            <img src={ImageSalary} alt="薪酬"/>
                        </div>
                        <div className="list_title">薪酬服务</div>
                        <div className="detail">
                            <div>工资表制单、审核、发放、个税</div>
                            <div>申报，全流程线上服务</div>
                            <div>支持各大重点城市个税异地申报</div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img src={ImageInsurance} alt="社保"/>
                        </div>
                        <div className="list_title">社保服务</div>
                        <div className="detail">
                            <div>全国400+城市</div>
                            <div>代扣代缴社保服务</div>
                            <div>专业社保客服团队1对1服务</div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img src={ImageBill} alt="账期"/>
                        </div>
                        <div className="list_title">账期服务</div>
                        <div className="detail">
                            <div>给予企业发薪垫资服务</div>
                            <div>缓解发薪日资金紧张</div>
                            <div>让企业无后顾之忧</div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img src={ImageSocialization} alt="社会化"/>
                        </div>
                        <div className="list_title">社会化用工服务</div>
                        <div className="detail">
                            <div>为兼职人员提供合理合规税优方案</div>
                            <div>有效降低企业用工成本</div>
                            <div>提升员工实际获得</div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img src={ImageOutsource} alt="外包"/>
                        </div>
                        <div className="list_title">业务外包服务</div>
                        <div className="detail">
                            <div>外包人员劳动合同签订、档案管理</div>
                            <div>并提供社保、工商、公积金</div>
                            <div>居住证等相关服务</div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img src={ImageIncrement} alt="增值"/>
                        </div>
                        <div className="list_title">员工增值服务</div>
                        <div className="detail">
                            <div>电子工资条清晰可查</div>
                            <div>丰富便捷的消费场景</div>
                            <div>在线工资预支额度高</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}