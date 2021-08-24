import './App.css';
import './pics/download.svg';
import  './pics/images.jpg'


function App() {
  return (
    <div className="App">
    <header>
    <div className="header-div1">
      <nav className="nav">
      <div className="header-div2">
      <ul class="ul">
        <li class="list"><button className="btn-1" aria-haspopup="true" aria-expanded="false">
        <p class="menu">Menu</p>
        </button>
        <span className="underscore-hover-element"></span>
        </li>
        <li class="list"><div><a href="/" aria-current="page" class="ritual-link" title="Ritual">Ritual
        </a></div></li>
        <li class="list"><a href="/What we are" class="wwa-link">Who we are</a></li>
        <li class="list cart"><a href="/cart" class="cart-link" aria-label="Cart">Cart</a></li>
      </ul>
      </div>
      </nav>
    </div>
    </header>
    <div class="main">
    <section class="section"></section>
    
        <div class="row">
        <h1  class="title">
        <div>The future</div>
        of Health
        <div><em>-is clear</em></div>
        </h1>
        <div class="shop-all">
        <a href="/shopAll" title="Shop All" class="shop-link">Shop all</a></div>
        </div>
   
   <div class="bgimg">
   <div class="image-wrap">
   <img alt="" role="presentation" aria-hidden="true" 
   class="img"
   src="download.svg">
   </img>
   
    <div class="after-img" aria-hidden="true" data-placeholder-image="">
    </div>

   <picture><source type="image/webp" srcset="" sizes="(min-width: 912px) 912px, 100vw" />
   <img class="main-img" data-gatsby-image-ssr="" id="page-hero_mobile-image" 
   data-main-image="" sizes="(min-width: 912px) 912px, 100vw" decoding="async" loading="eager" src="./Pics/images.jpg" 
   alt="" />
   </picture>
   
   </div>
   </div>
   </div>

   </div>
  );
}

export default App;

