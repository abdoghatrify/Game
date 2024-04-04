import Robert from "../../../public/Robert.png";
import ReviewCard from "../Components/ReviewCard";

export default function ReviewsSection() {
  const reviews = [
    {
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imgSrc: Robert,
      name: "Robert Hawkins",
      country: "California, United State",
      rating: 2,
    },
    {
      review: "It is a long established fact that a reader will at its layout.",
      imgSrc: Robert,
      name: "Robert Hawkins",
      country: "California, United State",
      rating: 4,
    },
    {
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imgSrc: Robert,
      name: "Robert Hawkins",
      country: "California, United State",
      rating: 3,
    },
    {
      review: "It is a long established fact that .",
      imgSrc: Robert,
      name: "Robert Hawkins",
      country: "California, United State",
      rating: 2,
    },
    {
      review:
        "It is a long established fact that a reader will be distracted by the readable content of ",
      imgSrc: Robert,
      name: "Robert Hawkins",
      country: "California, United State",
      rating: 4,
    },
    {
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imgSrc: Robert,
      name: "Robert Hawkins",
      country: "California, United State",
      rating: 3,
    },
  ];

  const reviewsElements = reviews.map((el, index) => {
    return (
      <ReviewCard
        key={index}
        country={el.country}
        imgSrc={el.imgSrc}
        name={el.name}
        rating={el.rating}
        review={el.review}
      />
    );
  });

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 container mx-auto mb-5 p-5">
        {reviewsElements}
      </div>
    </>
  );
}
