import bg from "../../../public/contactUsbackground.png";
import Image from "next/image";
import { jost, playfair } from "../ui/fonts";
import Link from "next/link";
import DiscordIcon from "../../../public/Discord2.png";
import { url } from "inspector";

export default function ContactUs() {
  const form = [
    {
      htmlFor: "name",
      value: "Name",
      type: "text",
      id: "name",
      placeholder: "Enter Your Name",
    },
    {
      htmlFor: "email",
      value: "Email",
      type: "email",
      id: "email",
      placeholder: "Enter Your Email",
    },
    {
      htmlFor: "number",
      value: "Number",
      type: "number",
      id: "number",
      placeholder: "Enter Phone Number",
    },
    {
      htmlFor: "message",
      value: "Message",
      type: "text",
      id: "message",
      placeholder: "Enter Your Message",
    },
  ];

  return (
    <div>
      {/*Cover*/}
      <section
        className="bg-cover bg-no-repeat bg-left bg-black px-5"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="container mx-auto py-24">
          <div className="text-white w-fit">
            <h1 className={`${playfair.className} font-bold text-6xl mb-4`}>
              Contact Us
            </h1>
            <p className={`${jost.className} text-sm text-center`}>
              Home &gt; Contact Us
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center lg:justify-evenly container w-full mx-auto mt-12 mb-24 flex-wrap">
        {/*Left*/}
        <div className=" flex flex-col items-center">
          <div>
            <h1 className={`${playfair.className} text-4xl font-bold mb-3`}>
              Get in Touch
            </h1>
            <p className={`${jost.className} text-main-gray`}>
              Join Our Community Rise of Kingdoms Spartans
            </p>
          </div>
          <div> ------------ </div>
        </div>
        {/*Middle Line*/}
        <div className="bg-main-gray lg:p-px my-2 bg-opacity-30"></div>
        {/*Right*/}
        <form
          action=""
          className={`${jost.className} flex flex-col w-full p-5 shadow-xl rounded-xl max-w-lg`}
        >
          <label htmlFor="name" className="mb-1 text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="p-4 container mx-auto border-main-gray border-2 rounded-xl border-opacity-15 mb-5"
          />
          <label htmlFor="email" className="mb-1 text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="p-4 container mx-auto border-main-gray border-2 rounded-xl border-opacity-15 mb-5"
          />
          <label htmlFor="number" className="mb-1 text-sm">
            Phone Number
          </label>
          <input
            type="number"
            id="number"
            placeholder="Enter Phone Number"
            className="p-4 container mx-auto border-main-gray border-2 rounded-xl border-opacity-15 mb-5"
          />
          <label htmlFor="message" className="mb-1 text-sm">
            Message
          </label>
          <input
            type=""
            id="message"
            placeholder="Enter Your Message"
            className="p-4 container mx-auto border-main-gray border-2 rounded-xl border-opacity-15 mb-5"
          />
          <input
            type="submit"
            value="Send Enquiry"
            className="cursor-pointer bg-main-yellow p-4 rounded-xl"
          />
        </form>
      </section>
    </div>
  );
}

{
  /*      <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter Your Name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Your Email" />
          <label htmlFor="number">Phone Number</label>
          <input type="number" id="number" placeholder="Enter Phone Number" />
          <label htmlFor="message">Message</label>
          <input type="" id="message" placeholder="Enter Your Message" /> */
}

{
  /* <div className="flex flex-col p-5 ">
          {form.map((el, index) => {
            return (
              <form action="" key={index}>
                <label htmlFor={el.htmlFor}>{el.value}</label>
                <input type={el.type} id={el.id} placeholder={el.placeholder} />
              </form>
            );
          })}
          <input
            type="submit"
            value="Send Enquiry"
            className="cursor-pointer"
          />
        </div> */
}
