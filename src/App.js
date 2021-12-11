import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Cards from "./Components/Cards/Cards";
// import About from './Components/About/About'
import Mens from "./Components/Mens/Mens";

function App() {
  const productsMens = [
    {
      name: "",
      image:
        "https://images.allsaints.com/products/1200/MG123V/162/MG123V-162-1.jpg",
    },
    {
      name: "",
      image:
        "https://images.allsaints.com/products/1200/MG123V/162/MG123V-162-1.jpg",
    },
    {
      name: "",
      image:
        "https://images.allsaints.com/products/1200/MG123V/162/MG123V-162-1.jpg",
    },
    {
      name: "",
      image:
        "https://images.allsaints.com/products/1200/MG123V/162/MG123V-162-1.jpg",
    },
    {
      name: "",
      image:
        "https://images.allsaints.com/products/1200/MG123V/162/MG123V-162-1.jpg",
    },
    {
      name: "",
      image:
        "https://images.allsaints.com/products/1200/MG123V/162/MG123V-162-1.jpg",
    },
  ];

  const productsWomens = [
    {
      name: "",
      image:
        "https://images.allsaints.com/static/2500/121121-gifting-ww-02.jpg",
    },
    {
      name: "",
      image:
        "https://images.allsaints.com/static/2500/121121-gifting-ww-02.jpg",
    },
    {
      name: "",
      image:
        "https://images.allsaints.com/static/2500/121121-gifting-ww-02.jpg",
    },
    {
      name: "",
      image:
        "https://images.allsaints.com/static/2500/121121-gifting-ww-02.jpg",
    },
    {
      name: "",
      image:
        "https://images.allsaints.com/static/2500/121121-gifting-ww-02.jpg",
    },
    {
      name: "",
      image:
        "https://images.allsaints.com/static/2500/121121-gifting-ww-02.jpg",
    },
  ];

  const productsKids = [
    {
      name: "",
      image:
        "https://www.ralphlauren.co.uk/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_GB/v1639121273354/img/202112/12092021-eu-kids-lp-holiday-dressing/1207_kids_baby_lp_m_c02b_img.jpg",
    },
    {
      name: "",
      image:
        "https://www.ralphlauren.co.uk/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_GB/v1639121273354/img/202112/12092021-eu-kids-lp-holiday-dressing/1207_kids_baby_lp_m_c02b_img.jpg",
    },
    {
      name: "",
      image:
        "https://www.ralphlauren.co.uk/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_GB/v1639121273354/img/202112/12092021-eu-kids-lp-holiday-dressing/1207_kids_baby_lp_m_c02b_img.jpg",
    },
    {
      name: "",
      image:
        "https://www.ralphlauren.co.uk/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_GB/v1639121273354/img/202112/12092021-eu-kids-lp-holiday-dressing/1207_kids_baby_lp_m_c02b_img.jpg",
    },
    {
      name: "",
      image:
        "https://www.ralphlauren.co.uk/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_GB/v1639121273354/img/202112/12092021-eu-kids-lp-holiday-dressing/1207_kids_baby_lp_m_c02b_img.jpg",
    },
    {
      name: "",
      image:
        "https://www.ralphlauren.co.uk/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_GB/v1639121273354/img/202112/12092021-eu-kids-lp-holiday-dressing/1207_kids_baby_lp_m_c02b_img.jpg",
    },
  ];
  // "https://www.ralphlauren.co.uk/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/en_GB/v1639121273354/img/202112/12092021-eu-kids-lp-holiday-dressing/1207_kids_baby_lp_m_c02b_img.jpg"
  const videoURLMens =
    "https://player.vimeo.com/video/505232358?h=faa79f593d";
  const videoURLWomens =
    "https://player.vimeo.com/video/506528791?h=9535cc7afb";
  const videoURLKids =
    "https://player.vimeo.com/video/414266787?title=0&portrait=0&byline=0&autoplay=1";
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
      <Mens videoURL={videoURLMens} products={productsMens} />
      <Mens videoURL={videoURLWomens} products={productsWomens} />
      <Mens videoURL={videoURLKids} products={productsKids} />
      <Footer />
      {/* <About /> */}
    </div>
  );
}

export default App;
