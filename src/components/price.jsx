export const Price = (props) => {
    return (
      <div id='price'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2 style={{  color:"white"}}>各業務報價</h2>
          </div>
          
          
          <div id="tab">
      
      <div class="wrapper">
        <input type="radio" name="slider"  id="home"></input>
        <input type="radio" name="slider" id="blog"></input>
        <input type="radio" name="slider" id="code"></input>
        <input type="radio" name="slider" id="help"></input>
        <input type="radio" name="slider" id="aaa"></input>
        <nav>
          <label for="home" className="home"><i class="fas"></i>網頁</label>
          <label for="blog" className="blog"><i class="fas"></i>行銷</label>
          <label for="code" className="code"><i class="fas"></i>區塊鍊</label>
          <label for="help" className="help"><i class="far"></i>商圖</label>
          <label for="aaa" className="aaa"><i class="far"></i>3D列印</label>
          <div className="slider"></div>
        </nav>
        <section>
        
        <div className="content-body content content-1"  style={{ zIndex: "1"}}>
        <div className="card" style={{ zIndex: "-1"}} > </div>
        
        <div class="project-boxes jsGridView">

        <div className="project-box-wrapper" style={{width: "100%"}}>
        <div className="project-box" style={{backgroundColor: "rgb(255 255 255 / 67%)"}}>
            <div className="project-box-header">
              <span>經濟版(Wordpress)</span> 
             </div>
             
             <div class="project-boxes jsGridView">
             <div className="project-box-content-header" style={{color: "black", textAlign: "left",marginRight:"30%"}}>
          <p className="box-content-header" >簡易型NT$12,000</p>
          <p className="box-content-subheader">1.公司簡介(單頁編輯)</p>
          <p className="box-content-subheader">2.產品介紹(一層)</p>
          <p className="box-content-subheader">3.聯絡我們</p>
        </div>

        <div className="project-box-content-header" style={{color: "black", textAlign: "left"}}>
          <p className="box-content-header" >基本型(內含五大功能)NT$20,800</p>
          <p className="box-content-subheader">1.公司簡介(單頁編輯)</p>
          <p className="box-content-subheader">2.產品介紹(兩層)</p>
          <p className="box-content-subheader">3.聯絡我們</p>
          <p className="box-content-subheader">4.功能首頁</p>
          <p className="box-content-subheader">5.最新消息</p>
        </div></div>

        <div className="project-box-footer">
        
        <div className="project-box-content-header" >
          <p className="box-content-header" >基本維護費用(含伺服器月費、網域費用、即時維修、資安維護)</p>
          <p className="box-content-header" >800/月</p>
          <p className="box-content-header" >8,000/年</p>
        </div>
            
        </div>
             
             </div>    
             
    </div>
    
    </div>

    <div class="project-boxes jsGridView">

<div className="project-box-wrapper" style={{width: "100%"}}>
<div className="project-box" style={{backgroundColor: "rgb(255 255 255 / 67%)"}}>
    <div className="project-box-header">
      <span>高CP版本(安防功能、RWD網頁設計、客製需求)</span> 
     </div>
     
     <div class="project-boxes jsGridView">
     <div className="project-box-content-header" style={{color: "black", textAlign: "left",marginRight:"30%"}}>
  <p className="box-content-header" >簡易型NT$15,000</p>
  <p className="box-content-subheader">1.公司簡介(單頁編輯)</p>
  <p className="box-content-subheader">2.產品介紹(一層)</p>
  <p className="box-content-subheader">3.聯絡我們</p>
</div>

<div className="project-box-content-header" style={{color: "black", textAlign: "left"}}>
  <p className="box-content-header" >基本型(內含五大功能)NT$26,000</p>
  <p className="box-content-subheader">1.公司簡介(單頁編輯)</p>
  <p className="box-content-subheader">2.產品介紹(兩層)</p>
  <p className="box-content-subheader">3.聯絡我們</p>
  <p className="box-content-subheader">4.功能首頁</p>
  <p className="box-content-subheader">5.最新消息</p>
</div></div>

<div className="project-box-footer">

<div className="project-box-content-header" >
  <p className="box-content-header" >基本維護費用(含伺服器月費、網域費用、即時維修、資安維護)</p>
  <p className="box-content-header" >1,000/月</p>
  <p className="box-content-header" >10,000/年</p>
</div>
    
</div>
     
     </div>    
     
</div>

</div>

<div class="project-boxes jsGridView">

<div className="project-box-wrapper" style={{width: "100%"}}>
<div className="project-box" style={{backgroundColor: "rgb(255 255 255 / 67%)"}}>
    <div className="project-box-header">
      <span>企業版本(高安防功能、網站高流量、客製需求更高、大量動態設定、顧客後台管理)</span> 
     </div>
     
<div className="project-box-content-header" style={{color: "black", textAlign: "left"}}>
  <p className="box-content-subheader">1.靜態網頁五萬(多一個客製頁面+1萬，不含設計費)</p>
  <p className="box-content-subheader">2.動態網頁+1萬up</p>
  <p className="box-content-subheader">3.設計顧問+2萬(可多次修圖)</p>
  <p className="box-content-subheader">4.有後端功能(另議)+5萬up</p>
  <p className="box-content-subheader">5.SEO維持在搜尋前十(廣告規劃等)+10萬up</p>
  <p className="box-content-subheader">6.其他客製功能(邏輯AI、小遊戲...等)另議</p>
</div>

<div className="project-box-footer">

<div className="project-box-content-header" >
  <p className="box-content-header" >基本維護費用(含伺服器月費、網域費用、即時維修、資安維護)</p>
  <p className="box-content-header" >3,000/月</p>
  <p className="box-content-header" >30,000/年</p>
</div>
    
</div>
     
     </div>    
     
</div>

</div>

<div class="project-boxes jsGridView">

<div className="project-box-wrapper" style={{width: "100%"}}>
<div className="project-box" style={{backgroundColor: "rgb(255 255 255 / 67%)"}}>
    <div className="project-box-header">
      <span>網頁設計月費方案(網頁設計做到好+行銷整合)詳細內洽</span> 
     </div> 
     
     </div>    
     
</div>

</div>



        </div>
       
        
        <div className="content-body content content-2" style={{ zIndex: "1"}}>
        
        <div className="card"style={{ zIndex: "-1"}} > </div>
        
        <div class="project-boxes jsGridView">

        <div className="project-box-wrapper">
        <div className="project-box" style={{backgroundColor: "#fee4cb"}}>
            <div className="project-box-header">
              <span>顧問服務</span> 
             </div>
             
             <div className="project-box-content-header">
          <p className="box-content-header">整合行銷(1/hr)</p>
          <p className="box-content-subheader">NT$5,000 ~8,000</p>
        </div>

        <div className="project-box-footer">
        <button  className="add-participant" style={{color: "#ff942e"}}>
             <a href='#contact'  style={{fontWeight: "bold"}}>
                Contact</a>
            </button>
        </div>
             
             </div>    
             
    </div>


    <div className="project-box-wrapper">
        <div className="project-box" style={{backgroundColor: "#fee4cb"}}>
            <div className="project-box-header">
              <span>顧問服務</span> 
             </div>
             
             <div className="project-box-content-header">
          <p className="box-content-header">社群行銷(1/hr)</p>
          <p className="box-content-subheader">NT$2,000 ~3,500</p>
        </div>

        <div className="project-box-footer">
        <button  className="add-participant" style={{color: "#ff942e"}}>
             <a href='#contact'  style={{fontWeight: "bold"}}>
                Contact</a>
            </button>
        </div>
             
             </div>    
             
    </div>

   <div className="project-box-wrapper">
        <div className="project-box" style={{backgroundColor: "#fee4cb"}}>
            <div className="project-box-header">
              <span>顧問服務</span> 
             </div>
             
             <div className="project-box-content-header">
          <p className="box-content-header">網站體驗(1/hr)</p>
          <p className="box-content-subheader">NT$3,500 ~5,000</p>
        </div>

        <div className="project-box-footer">
        <button  className="add-participant" style={{color: "#ff942e"}}>
             <a href='#contact'  style={{fontWeight: "bold"}}>
                Contact</a>
            </button>
        </div>
             
             </div>    
             
    </div>

    <div className="project-box-wrapper">
        <div className="project-box" style={{backgroundColor: "#fee4cb"}}>
            <div className="project-box-header">
              <span>顧問服務</span> 
             </div>
             
             <div className="project-box-content-header">
          <p className="box-content-header">檔期活動(1/hr)</p>
          <p className="box-content-subheader">NT$2,000 ~3,500</p>
        </div>

        <div className="project-box-footer">
        <button  className="add-participant" style={{color: "#ff942e"}}>
             <a href='#contact'  style={{fontWeight: "bold"}}>
                Contact</a>
            </button>
        </div>
             
             </div>    
             
    </div>

    <div className="project-box-wrapper">
        <div className="project-box" style={{backgroundColor: "#fee4cb"}}>
            <div className="project-box-header">
              <span>顧問服務</span> 
             </div>
             
             <div className="project-box-content-header">
          <p className="box-content-header">網紅行銷</p>
          <p className="box-content-subheader">NT$3,000 ~4,500</p>
        </div>

        <div className="project-box-footer">
        <button  className="add-participant" style={{color: "#ff942e"}}>
             <a href='#contact'  style={{fontWeight: "bold"}}>
                Contact</a>
            </button>
        </div>
             
             </div>    
             
    </div>

    <div className="project-box-wrapper">
        <div className="project-box" style={{backgroundColor: "#e9e7fd"}}>
            <div className="project-box-header">
              <span>社群貼文製作</span> 
             </div>
             
             <div className="project-box-content-header">
          <p className="box-content-header">單圖 6 則</p>
          <p className="box-content-subheader">NT$4,500 ~6,000</p>
        </div>

        <div className="project-box-footer">
        <button  className="add-participant" style={{color: "#ff942e"}}>
             <a href='#contact'  style={{fontWeight: "bold"}}>
                Contact</a>
            </button>
        </div>
             
             </div>    
             
    </div>

    <div className="project-box-wrapper">
        <div className="project-box" style={{backgroundColor: "#e9e7fd"}}>
            <div className="project-box-header">
              <span>社群貼文製作</span> 
             </div>
             
             <div className="project-box-content-header">
          <p className="box-content-header">多圖(5p) 6 則</p>
          <p className="box-content-subheader">NT$6,000 ~8,500</p>
        </div>

        <div className="project-box-footer">
        <button  className="add-participant" style={{color: "#ff942e"}}>
             <a href='#contact'  style={{fontWeight: "bold"}}>
                Contact</a>
            </button>
        </div>
             
             </div>    
             
    </div>

    <div className="project-box-wrapper">
        <div className="project-box" style={{backgroundColor: "#e9e7fd"}}>
            <div className="project-box-header">
              <span>社群貼文製作</span> 
             </div>
             
             <div className="project-box-content-header">
          <p className="box-content-header">檔期/系列 6 則 </p>
          <p className="box-content-subheader">NT$4,000 ~8,500</p>
        </div>

        <div className="project-box-footer">
        <button  className="add-participant" style={{color: "#ff942e"}}>
             <a href='#contact'  style={{fontWeight: "bold"}}>
                Contact</a>
            </button>
        </div>
             
             </div>    
             
    </div>

    <div className="project-box-wrapper">
        <div className="project-box" style={{backgroundColor: "#e9e7fd"}}>
            <div className="project-box-header">
              <span>社群貼文製作</span> 
             </div>
             
             <div className="project-box-content-header">
          <p className="box-content-header">廣告單則</p>
          <p className="box-content-subheader">NT$800 ~1,500</p>
        </div>

        <div className="project-box-footer">
        <button  className="add-participant" style={{color: "#ff942e"}}>
             <a href='#contact'  style={{fontWeight: "bold"}}>
                Contact</a>
            </button>
        </div>
             
             </div>    
             
    </div>

    <div className="project-box-wrapper">
        <div className="project-box" style={{backgroundColor: "#dbf6fd"}}>
            <div className="project-box-header">
              <span>企劃</span> 
             </div>
             
             <div className="project-box-content-header">
          <p className="box-content-header">營運</p>
          <p className="box-content-subheader">NT$35,000 以上</p>
        </div>

        <div className="project-box-footer">
        <button  className="add-participant" style={{color: "#ff942e"}}>
             <a href='#contact'  style={{fontWeight: "bold"}}>
                Contact</a>
            </button>
        </div>
             
             </div>    
             
    </div>

    <div className="project-box-wrapper">
        <div className="project-box" style={{backgroundColor: "#dbf6fd"}}>
            <div className="project-box-header">
              <span>企劃</span> 
             </div>
             
             <div className="project-box-content-header">
          <p className="box-content-header">產品</p>
          <p className="box-content-subheader">NT$20,000 以上</p>
        </div>

        <div className="project-box-footer">
        <button  className="add-participant" style={{color: "#ff942e"}}>
             <a href='#contact'  style={{fontWeight: "bold"}}>
                Contact</a>
            </button>
        </div>
             
             </div>    
             
    </div>

    <div className="project-box-wrapper">
        <div className="project-box" style={{backgroundColor: "#dbf6fd"}}>
            <div className="project-box-header">
              <span>企劃</span> 
             </div>
             
             <div className="project-box-content-header">
          <p className="box-content-header">行銷</p>
          <p className="box-content-subheader">NT$35,000 以上</p>
        </div>

        <div className="project-box-footer">
        <button  className="add-participant" style={{color: "#ff942e"}}>
             <a href='#contact'  style={{fontWeight: "bold"}}>
                Contact</a>
            </button>
        </div>
             
             </div>    
             
    </div>

    <div className="project-box-wrapper">
        <div className="project-box" style={{backgroundColor: "#dbf6fd"}}>
            <div className="project-box-header">
              <span>企劃</span> 
             </div>
             
             <div className="project-box-content-header">
          <p className="box-content-header">社群</p>
          <p className="box-content-subheader">NT$20,000 以上</p>
        </div>

        <div className="project-box-footer">
        <button  className="add-participant" style={{color: "#ff942e"}}>
             <a href='#contact'  style={{fontWeight: "bold"}}>
                Contact</a>
            </button>
        </div>
             
             </div>    
             
    </div>








    </div>


        </div>



        <div className="content-body content content-3" style={{ zIndex: "1"}}>
        
        <div className="card"style={{ zIndex: "-1"}} > </div>
        
          <h2 className="text-center" style={{ zIndex: "3"}}>請來電洽詢</h2>
        </div>



        <div className="content-body content content-4" style={{ zIndex: "1"}}>
        
        <div className="card"style={{ zIndex: "-1"}} > </div>
        
          <h2 className="text-center" style={{ zIndex: "3"}}>請來電洽詢</h2>
        </div>
        


        <div className="content-body content content-5" style={{ zIndex: "1"}}>
        
        <div className="card"style={{ zIndex: "-1"}} > </div>
        
          <h2 className="text-center" style={{ zIndex: "3"}}>請來電洽詢</h2>
        </div>


        </section>
          
</div></div>






        </div>
      </div>


      
    )
  }
  