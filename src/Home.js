import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home_container">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="1"
          title='Cotton Flower Canvas Wall Art Inspirational Wall Decor Butterfly Decor White Cotton Floral in Rustic Vase Teal Wooden Painting Framed Artwork for Living Room Kitchen Farmhouse Framed Decor 16"x20"
                    Brand:WALLOHERE'
          price={30.7}
          rating={5}
          image="https://m.media-amazon.com/images/I/71ujRyCmChL._AC_UL320_.jpg"
        />
        <Product
          id="2"
          title="KitchenAid RRK150IC 5 Qt. Artisan Series - Ice (Renewed)"
          price={379.87}
          rating={4}
          image="https://m.media-amazon.com/images/I/61JmahvVe0L._AC_SL1280_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="3"
          title="SAMSUNG 75-Inch Class QLED 4K UHD Q90T Series Quantum HDR Smart TV w/Ultra Viewing Angle, Adaptive Picture, Gaming Enhancer, Alexa Built-in (QN75Q90TDFXZA, 2020 Model)"
          price={1797.99}
          rating={4}
          image="	https://m.media-amazon.com/images/I/81MH0WqazVL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="4"
          title="Apple iPhone 13 Pro(512GB,Alpine Green) [Locked] + Carrier Subscription"
          price={1339.97}
          rating={""}
          image="	https://m.media-amazon.com/images/I/611ovP2GkrL._AC_SL1500_.jpg"
        />

        <Product
          id="5"
          title="Smart-Watches Fit Watch for Man Women: Android iOS Reloj para Mujer Sleep Heart Rate Blood Oxygen Weather Breath Training IP68 Waterproof 8 Sports 1.69Inch"
          price={24.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71ls5Gw4aKL._AC_SL1500_.jpg"
        />
        <Product
          id="6"
          title="2021 Apple 11-inch iPad Pro (Wi-Fi, 256GB) - Space Gray"
          price={829.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/81Y5WuARqpS._AC_SL1500_.jpg"
        />
        <Product
          id="7"
          title="Lola Rose Women's Gemstone Inspiration Genuine Leather Strap Watch"
          price={179.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/81kScKis0AL._AC_UX385_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="8"
          title="5 Pcs Women Accessories Including African Midi Dresses African Headwrap Jamaican Bracelet Dangle Pierced Earrings for Women"
          price={23.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81Pf0uNfeQL._AC_UX385_.jpg"
        />

        <Product
          id="9"
          title="Florsheim Men's Medfield Plain Toe Zip Boot Fashion"
          price={129.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81oWYEP9M4L._AC_UL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
