import { Link } from "react-router-dom";

import { LibraryInfoStyle } from "../../style/Borough";

function LibraryInfo(props) {
  const { library, hasMapBtn } = props;
  const infoList = [
    { dt: "운영시간", dd: library.OP_TIME },
    { dt: "정기휴관일", dd: library.FDRM_CLOSE_DATE },
    { dt: "전화번호", dd: library.TEL_NO },
    { dt: "주소", dd: library.ADRES },
  ];

  let libraryFunc = "";
  if (library.HMPG_URL || hasMapBtn) {
    libraryFunc = (
      <div className="library__func">
        {library.HMPG_URL && (
          <a
            href={library.HMPG_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn--sec-bright"
          >
            <span className="btn__text">홈페이지</span>
            {/* 구글 아이콘 폰트 */}
            <span className="material-symbols-outlined btn__icon">
              open_in_new
            </span>
          </a>
        )}
        {hasMapBtn && (
          <Link to={`${library.LBRRY_SEQ_NO}`} className="btn btn--sec">
            지도
          </Link>
        )}
      </div>
    );
  }

  return (
    <LibraryInfoStyle>
      <div className="library__heading">
        <strong className="library__title bold">{library.LBRRY_NAME}</strong>
        <span className="badge">{library.LBRRY_SE_NAME}</span>
      </div>
      <dl className="library__content">
        {infoList.map((info) => {
          if (!info.dd) return;

          let ddContent = info.dd;
          if (info.dt === "전화번호") {
            ddContent = (
              <a href={`tel:${info.dd}`} className="library-info__tel">
                {info.dd.trim()}
              </a>
            );
          }
          return (
            <div className="library-info" key={Math.random()}>
              <dt className="library-info__dt">{info.dt}</dt>
              <dd className="library-info__dd">{ddContent}</dd>
            </div>
          );
        })}
      </dl>
      {libraryFunc}
    </LibraryInfoStyle>
  );
}

export default LibraryInfo;
