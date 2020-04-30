import * as React from 'react'
import ImageFumin from '../images/page_seven_fumin.png'
import ImageIcardpay from '../images/page_seven_icardpay.png'
import ImageAlipay from '../images/page_seven_alipay.png'
import ImageSafety from '../images/page_seven_safety.png'
import ImageWangyi from '../images/page_seven_wangyi.png'
import ImageSuning from '../images/page_seven_suning.png'
import ImageJd from '../images/page_seven_jd.png'
import ImageMeituan from '../images/page_seven_meituan.png'
import ImageTravel from '../images/page_seven_travel.png'
import ImageUnion from '../images/page_seven_unionpay.png'
import ImageDidi from '../images/page_seven_didi.png'
import ImageJf from '../images/page_seven_jf.png'

export class PageSeven extends React.Component{
    render () {
        return(
            <div className="page_seven">
                <div className="title">合作伙伴</div>
                <div className="lists">
                    <div className="list">
                        <div className="img">
                            <img src={ImageFumin} alt="富民银行"/>
                        </div>
                        <div className="img">
                            <img src={ImageIcardpay} alt="支付通"/>
                        </div>
                        <div className="img">
                            <img src={ImageAlipay} alt="支付宝"/>
                        </div>
                        <div className="img">
                            <img src={ImageSafety} alt="平安付"/>
                        </div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img src={ImageWangyi} alt="网易严选"/>
                        </div>
                        <div className="img">
                            <img src={ImageSuning} alt="苏宁"/>
                        </div>
                        <div className="img">
                            <img src={ImageJd} alt="京东"/>
                        </div>
                        <div className="img">
                            <img src={ImageMeituan} alt="美团"/>
                        </div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img src={ImageTravel} alt="携程"/>
                        </div>
                        <div className="img">
                            <img src={ImageUnion} alt="银联"/>
                        </div>
                        <div className="img">
                            <img src={ImageDidi} alt="滴滴"/>
                        </div>
                        <div className="img">
                            <img src={ImageJf} alt="嘉福"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}