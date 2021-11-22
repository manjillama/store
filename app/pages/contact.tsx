import React, { useEffect } from 'react';
import Image from 'next/image';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import Footer from '../components/footer';
import PageHead from '../components/page-head';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const ContactMap = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [85.330807, 27.727948],
      zoom: 13,
      // dragPan: false,
    });
    // map.scrollZoom.disable();
    // if (map.tap) map.tap.disable();

    new mapboxgl.Marker()
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3>Yatri Experience Center</h3>`)
      )
      .setLngLat([85.32983251439876, 27.730766501226416])
      .addTo(map);
  }, []);

  return <div id="map"></div>;
};
const ContactPage = () => (
  <>
    <PageHead
      title="Contact Us | Yatri Experience Center"
      description="General inquiries: info@yatrimotorcycles.com, Baluwatar Thirbam Sadak, Kathmandu 44600, Kathmandu, Nepal"
    ></PageHead>

    <div className="contact-page">
      <div className="contact-header">
        <Image
          src={`https://s3.ap-south-1.amazonaws.com/yatri.static/render6.jpg`}
          alt=""
          layout="fill"
          className="img-cover"
        />
      </div>
      <section>
        <div className="container-md">
          <div className="contact-body">
            <div>
              <div className="left">
                <h2>OUR EXPERIENCE CENTER</h2>
                <p>Baluwatar, KTM</p>
              </div>
              <div className="right">
                <div>
                  <h3>
                    <span className="bullet"></span>ADDRESS:
                  </h3>
                  <p>44616 Thirbam Sadak, Baluwatar</p>
                  <p>Kathmandu, Nepal</p>
                </div>
                <div>
                  <h3>
                    <span className="bullet"></span>CONTACT:
                  </h3>
                  <p>
                    <a href="tel:+9779803577436">+977 (980) 358-7436</a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="left">
                <h2>OUR HEADQUARTER</h2>
                <p>Budanilkantha, KTM</p>
              </div>
              <div className="right">
                <div>
                  <h3>
                    <span className="bullet"></span>ADDRESS:
                  </h3>
                  <p>44600, Budanilkantha</p>
                  <p>Kathmandu, Nepal</p>
                </div>
                <div>
                  <h3>
                    <span className="bullet"></span>CONTACT:
                  </h3>
                  <p>
                    <a
                      style={{ textDecoration: 'underline' }}
                      href="mailto:info@yatrimotorcycles.com"
                    >
                      info@yatrimotorcycles.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: 300, width: '100%' }}>
            <ContactMap />
          </div>
        </div>
      </section>
      <Footer theme="dark" />
    </div>
  </>
);

export default ContactPage;
