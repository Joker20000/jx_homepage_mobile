import * as React from 'react'
import ImagePhone from '../images/page_nine_phone.png'
import ImageTime from '../images/page_nine_time.png'
import ImagePosition from '../images/page_nine_position.png'
import ImageOfficeAccount from '../images/page_nine_office_account.png'
import ImageAPP from '../images/page_nine_APP.png'

export class PageNine extends React.Component{
    render () {
        return (
            <div className="page_nine">
                <div className="show_box">
                    <div className="phone_num">
                        <img src={ImagePhone} alt="电话"/>
                        <span>021-640-31776</span>
                    </div>
                    <div className="time">
                        <img src={ImageTime} alt="时间"/>
                        <span>周一至周五9:00-17:30</span>
                    </div>
                    <div className="position">
                        <img src={ImagePosition} alt="位置"/>
                        <span>上海市徐汇区加华商务广场D3座4楼（D341）</span>
                    </div>
                </div>
                <div className="QR_code">
                    <div>
                        <img src={ImageOfficeAccount} alt="公众号"/>
                        <div>嘉薪公众号</div>
                    </div>
                    <div>
                        <img src={ImageAPP} alt="APP"/>
                        <div>嘉薪APP</div>
                    </div>
                </div>
            </div>
        )
    }
}