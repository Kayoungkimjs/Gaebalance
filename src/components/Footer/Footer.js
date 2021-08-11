import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="foot_link">
          <ul>
            <li>
              <Link>
                <strong>FIND A STORE</strong>
                <span>매장안내</span>
              </Link>
            </li>
            <li>
              <Link>
                <strong>TEAM GAEBALANCE</strong>
                <span>개발란스 팀</span>
              </Link>
            </li>
            <li>
              <Link>
                <strong>MEMBER JOIN</strong>
                <span>회원가입</span>
              </Link>
            </li>
            <li>
              <Link>
                <strong>DOWNLOAD APP</strong>
                <span>App 다운로드</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="foot_inner">
          <div className="foot_menu">
            <div className="list">
              <strong>NEED HELP</strong>
              <ul>
                <li>
                  <Link>고객센터</Link>
                </li>
                <li>
                  <Link>FAQs</Link>
                </li>
                <li>
                  <Link>공지사항</Link>
                </li>
                <li>
                  <Link>1:1 문의</Link>
                </li>
                <li>
                  <Link>매장 찾기</Link>
                </li>
                <li>
                  <Link>App 다운로드</Link>
                </li>
              </ul>
            </div>
            <div className="list">
              <strong>INFORMATION</strong>
              <ul>
                <li>
                  <Link>통합 마일리지 안내</Link>
                </li>
                <li>
                  <Link>팀/단체복 주문안내</Link>
                </li>
                <li>
                  <Link>배송 및 교환 반품 안내</Link>
                </li>
                <li>
                  <Link>세탁 및 손질 방법 안내</Link>
                </li>
                <li>
                  <Link>이용약관</Link>
                </li>
                <li>
                  <Link>SITE MAP</Link>
                </li>
              </ul>
            </div>
            <div className="list">
              <strong>INSIDE GB</strong>
              <ul>
                <li>
                  <Link>INSEDE GB</Link>
                </li>
                <li>
                  <Link>MADE IN WECODE</Link>
                </li>
                <li>
                  <Link>GBx GUIDE</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot_info">
            <div className="copyright">
              <p>
                <h2>
                  사이트 제작: 김가영, 황대웅, 이현준, 송진수, 박병주, 김도담
                </h2>
                개인정보 처리방침 / ㈜위코드 / 서울특별시 강남구 테헤란로 427
                위워크타워
                <br></br>
                개발란스 상담실(AS/오프라인) 010-8286-2797,(개발란스)1566-XXXX
                <br></br>
                대표 이메일: guswns1411@gmail.com
                <br></br>
                호스팅 서비스 제공자: ㈜위코드
              </p>
              <p>
                <span>대표이사 : 김가영</span>
                <span>사업자 등록번호 : 없음</span>
                <span>통신판매업신고 : ?</span>
                <br />
                개인정보보호책임자: 백엔드
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
