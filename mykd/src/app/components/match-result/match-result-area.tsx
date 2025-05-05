import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import result_bg from '@/assets/img/bg/result_bg.png';
import shape from '@/assets/img/icons/win_shape.svg';
import icon from '@/assets/img/icons/shape.svg';
import win_1 from '@/assets/img/others/win01.png';
import win_2 from '@/assets/img/others/win02.png';
import SvgIconCom from '../common/svg-icon-anim';
import TextAnimation from '../common/text-animation';

// img style 
const imgStyle = {
  height:'auto'
}

// match winner item
// prop type
type IWinnerItem = {name:string;amount:string;img:StaticImageData,id:string;place:string}
function MatchWinnerItem ({name,amount,img,id,place}:IWinnerItem) {
    return (
        <div className="match__winner-wrap">
            <div className="match__winner-info">
                <h4 className="name">{name}</h4>
                <span className="price-amount">${amount}</span>
            </div>
            <div className="match__winner-img tg-svg">
                <div className="team-logo-img">
                    <Link href="/team-details"><Image src={img} alt="img" style={imgStyle}/></Link>
                </div>
                <SvgIconCom icon={shape} id={`svg-${id}`}/>
                <h3 className="match__winner-place">{place}</h3>
            </div>
      </div>
    )
}

const MatchResultArea = () => {
  return (
    <section className="match__result-area">
    <div className="match__result-bg" style={{backgroundImage:`url(${result_bg.src})`}}></div>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
                <div className="section__title text-center mb-55">
                    <TextAnimation title="LATEST RESULTS FOR" />
                    <h3 className="title">EXPERIENCE JUST FOR</h3>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <h4 className="match__winner-title">Premier league</h4>
            </div>
        </div>
        <div className="row match__result-wrapper justify-content-center">
            <div className="col-xl-5 col-sm-6">
                <MatchWinnerItem name='black hunt' amount='500 000' img={win_1} id='3' place='win'/>
            </div>
            <div className="col-xl-5 col-sm-6">
                <MatchWinnerItem name='sky Hunter' amount='300 000' img={win_2} id='4' place='2nd'/>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="grand__final">
                    <h6 className="grand__final-date">December 19, 2021 | 9:50 am</h6>
                    <span className="grand__final-place">grand dubai</span>
                    <div className="grand__final-button d-flex">
                        <Link href="/contact" className="tg-btn-3 tg-svg mx-auto">
                            <SvgIconCom icon={icon} id="svg-5"/>
                            <span>read more</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  );
};

export default MatchResultArea;