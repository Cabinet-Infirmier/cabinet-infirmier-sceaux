import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TestimonialsImage = [
  { id: 1, name: "avis-1.png" },
  { id: 2, name: "avis-2.png" },
  { id: 3, name: "avis-3.png" },
  { id: 4, name: "avis-4.png" },
  { id: 5, name: "avis-5.png" },
];

export default function Testimonial() {
  var settings = {
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 10024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10">
      <div className="container">
        <div className="">
          <h2 className="uppercase text-[#575555] uppercase text-center text-xl font-bold mb-10">
            Témoignages
          </h2>
        </div>
        <div>
          <Slider {...settings}>
            {TestimonialsImage.map((img) => {
              return (
                <div key={img.id} className="flex justify-center">
                  <img
                    src={`/images/testimonials/${img.name}`}
                    alt="name"
                    className="w-80 h-auto mx-auto rounded-xl shadow-lg"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
