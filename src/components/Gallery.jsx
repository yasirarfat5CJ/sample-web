import './Gallery.css';

function Gallery() {
  return (
    <div className="gallery-wrapper" id="gallery">
      <h2 className="gallery-heading">My Gallery</h2>

      <div className="gallery-grid">
        {/* Sample Images */}
        <img src="/images/img1.jpg" alt="Gallery Pic 1" />
        <img src="/images/img2.jpg" alt="Gallery Pic 2" />
     
       
<img src="/images/img5.jpg" alt="Gallery Pic 3" />

<img src="/images/img7.jpg" alt="Gallery Pic 3" />
<img src="/images/img8.jpg" alt="Gallery Pic 3" />

<img src="/images/img19.jpg" alt="Gallery Pic 3" />
<img src="/images/img20.jpg" alt="Gallery Pic 3" />
<img src="/images/img10.jpeg" alt="Gallery Pic 3" />

<img src="/images/img12.jpeg" alt="Gallery Pic 3" />
<img src="/images/img21.jpg" alt="Gallery Pic 3" />
<img src="/images/img13.jpeg" alt="Gallery Pic 3" />

<img src="/images/img15.jpeg" alt="Gallery Pic 3" />

<img src="/images/img17.jpeg" alt="Gallery Pic 3" />




        {/* Sample Video */}
       
        <video controls>
          <source src="/images/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src="/images/video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
         <video controls>
          <source src="/images/video4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
         <video controls>
          <source src="/images/video5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Gallery;
