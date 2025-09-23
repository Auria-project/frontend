/** @jsxImportSource @emotion/react */
import * as s from "./styles";

function MyPage() {
  return (
  <div>
    
    <div css={s.body}>
      <div css={s.gridContainer}>

        <div css={s.mainProductCard}>
          <div css={s.productImg}/>
          <div css={s.detail}>
            <span css={s.productName}>나만의</span>
            <div css={s.productDscr}>꽃 향기</div>
            <div css={s.infoBox}>
              <span className="price"> 91000</span>
              <span className="volume"> 420ml</span>
            </div>
            <div css={s.actBtn}>
              <button css={s.button}>MORE INFO</button>
            </div>  
          </div>
        </div>

        <div css={s.mainProductCard}>
          <div css={s.productImg}></div>
          <div css={s.detail}>
            <span css={s.productName}>향수</span>
            <div css={s.productDscr}>우디</div>
            <div css={s.infoBox}>
              <span className="price"> 42400</span>
              <span className="volume"> 420ml</span>
            </div>
            <div css={s.actBtn}>
              <button css={s.button}>MORE INFO</button>
            </div>  
          </div>
        </div>
        
        <div css={s.mainProductCard}>
          <div css={s.productImg}></div>
          <div css={s.detail}>
            <span css={s.productName}>만들기</span>
            <div css={s.productDscr}>시트러스</div>
            <div css={s.infoBox}>
              <span className="price"> 125000</span>
              <span className="volume">420ml</span>
            </div>
            <div css={s.actBtn}>
              <button css={s.button}>MORE INFO</button>
            </div>  
          </div>
        </div>
        
        <div css={s.mainProductCard}>
          <div css={s.productImg}></div>
          <div css={s.detail}>
            <span css={s.productName}>를 해보자</span>
            <div css={s.productDscr}>등 등 등</div>
            <div css={s.infoBox}>
              <span className="price"> 62500</span>
              <span className="volume">420ml</span>
            </div>
            <div css={s.actBtn}>
              <button css={s.button}>MORE INFO</button>
            </div>  
          </div>
        </div> 
        
      </div>
    </div>
  </div>
  );
};

export default MyPage;