// Info.js
import React from 'react';
import './info.css'; // info.css 파일을 import

function Info() {
  return (
    <div className="info-container">
      <div className="info-text">
        {/* 원하는 정보 및 사용법을 텍스트로 나열 */}
        <p>웹 사이트의 정보와 사용법을 여기에 나열합니다.</p>
        <p>다음 내용을 추가하세요:</p>
        <ul>
          <li>항목 1</li>
          <li>항목 2</li>
          <li>항목 3</li>
          {/* 필요한 만큼 항목을 추가하세요 */}
        </ul>
      </div>
    </div>
  );
}

export default Info;
