import React from "react";
import "./gnb.css";
import { FcSearch } from "react-icons/fc";

function Gnb() {
    return (
        <nav className="gnb">
            <div className="srh">
                <input type="text" className="input-srh" placeholder="지금 위에 넣고 싶은 건?" />
                <button className="btn-srh">
                    <FcSearch />
                </button>
            </div>
            <ul className="gnb-link">
                <li className="links">
                    <h3 className="link-title">프라임 세포가 출출이야</h3>
                    <small>음식을 기준으로 추천 받아요.</small>
                </li>
                <li className="links">
                    <h3 className="link-title">나는야 뚜벅초</h3>
                    <small>지하철역과 버스 정류장을 기준으로 추천 받아요.</small>
                </li>
                <li className="links">
                    <h3 className="link-title">베스트 드라이버</h3>
                    <small>돈 많은 택시러버 또는 차를 소유한 사람들에게 추천 드려요.</small>
                </li>
            </ul>
            <button type="button" className="system-mode"></button>
        </nav>
    );
}

export default Gnb;
