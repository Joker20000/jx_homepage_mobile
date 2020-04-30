import * as React from 'react'
import ImageSafe from '../images/page_five_safe.png'
import ImagePerfect from '../images/page_five_perfect.png'
import ImagePay from '../images/page_five_pay.png'
import ImageFree from '../images/page_five_free.png'

export class PageFive extends React.Component{
    render () {
        return (
            <div className="page_five">
                <div className="title">我们的服务优势</div>
                <div className="lists">
                    <div className="list">
                        <div className="img">
                            <img src={ImagePay} alt="高效"/>
                        </div>
                        <div className="text">高效发薪</div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img src={ImageSafe} alt="安全"/>
                        </div>
                        <div className="text">资金安全</div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img src={ImageFree} alt="免费"/>
                        </div>
                        <div className="text">系统免费</div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img src={ImagePerfect} alt="完善"/>
                        </div>
                        <div className="text">服务完善</div>
                    </div>
                </div>
            </div>
        )
    }
}