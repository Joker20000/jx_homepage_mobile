import * as React from 'react'
import ImageRule from '../images/page_six_rule.png'
import ImageSystem from '../images/page_six_system.png'
import ImageSafe from '../images/page_six_safe.png'
import ImageService from '../images/page_six_service.png'

export class PageSix extends React.Component{
    render () {
        return (
            <div className="page_six">
                <div className="title">我们的服务保障</div>
                <div className="lists">
                    <div className="list">
                        <div className="img">
                            <img src={ImageRule} alt="合规"/>
                        </div>
                        <div className="list_title">合规</div>
                        <div className="detail">
                            <div>专业级薪酬福利咨询顾问服务</div>
                            <div>为企业量身定制发放方案</div>
                            <div>规避财税风险</div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img src={ImageSystem} alt="系统"/>
                        </div>
                        <div className="list_title">系统</div>
                        <div className="detail">
                            <div>底层独立账户交易体系</div>
                            <div>混合云平台部署（阿里云+私有云）</div>
                            <div>多点数据实时备份</div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img src={ImageSafe} alt="安全"/>
                        </div>
                        <div className="list_title">安全</div>
                        <div className="detail">
                            <div>数据SSL加密传输</div>
                            <div>敏感信息明文不落地存储</div>
                            <div>经金融级别安全扫描</div>
                            <div>定期防漏扫描</div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img src={ImageService} alt="服务"/>
                        </div>
                        <div className="list_title">服务</div>
                        <div className="detail">
                            <div>7*12在线和电话客服</div>
                            <div>线下分公司覆盖全国主要城市</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}