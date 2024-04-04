import Image from "next/image";
import { jost } from "../ui/fonts";

interface ReviewCardProps {
  review: string;
  imgSrc: any;
  name: string;
  country: string;
  rating: number;
}

export default function ReviewCard({
  review,
  imgSrc,
  name,
  country,
  rating,
}: ReviewCardProps) {
  const ratingStar = (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.53281 1.27141C9.3375 -0.423802 11.6625 -0.423805 12.4672 1.27141L13.8579 4.20118C14.1774 4.87435 14.7951 5.34094 15.5096 5.44888L18.6193 5.91869C20.4187 6.19053 21.1371 8.48954 19.8351 9.80908L17.5849 12.0896C17.0679 12.6136 16.832 13.3685 16.954 14.1084L17.4852 17.3285C17.7926 19.1918 15.9116 20.6126 14.3022 19.7329L11.5208 18.2126C10.8817 17.8633 10.1183 17.8633 9.47917 18.2126L6.69776 19.7329C5.08839 20.6126 3.20742 19.1918 3.51479 17.3286L4.04599 14.1084C4.16804 13.3685 3.93211 12.6136 3.41508 12.0896L1.16488 9.80908C-0.137134 8.48954 0.581328 6.19053 2.38066 5.91869L5.49037 5.44888C6.20489 5.34094 6.82257 4.87435 7.14211 4.20118L8.53281 1.27141Z"
        fill="#F7B34D"
      />
    </svg>
  );

  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(ratingStar);
  }

  return (
    <>
      <div
        className={`${jost.className} flex flex-col gap-5 container p-6 bg-white rounded-3xl w-full justify-between`}
      >
        <div className="flex gap-2">{stars}</div>
        <p>{review}</p>
        <div className="flex items-center gap-5">
          <Image
            alt=""
            src={imgSrc}
            className="rounded-full object-cover w-12 h-12"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-bold">{name}</h1>
            <p className="text-main-gray">{country}</p>
          </div>
        </div>
      </div>
    </>
  );
}
