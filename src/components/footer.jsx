import { useState } from "react";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState([
    {
      name: "Github",
      link: "https://github.com/DudeAj",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ajaygangwar04",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ajaygangwar04",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/ajaygangwar04",
    },
  ]);

  const date = new Date().getFullYear();
  return (
    <div id="contact" className="bg-[#242424]">
      <div className="flex gap-44 px-20 py-10">
        <div className="w-full">
          <h2 className="text-4xl font-bold">
            Available for select freelance opportunities
          </h2>
          <p className="mt-10">
            Have an exciting project you need help with? Send me an email or
            contact me via instant message!
          </p>
        </div>
        <div className="w-full">
          <a
            className="text-3xl font-bold border-b-4 border-purple-500 text-white hover:text-purple-400 transition duration-300"
            href="mailto:ajaygangwar04@gmail.com"
          >
            ajaygangwar04@gmail.com
          </a>
          <div className="mt-5">
            {footerLinks.map((footer, index) => (
              <div key={index}>
                <a
                  target="_blank"
                  href={footer.link}
                  className="text-lg font-semibold hover:underline hover:text-purple-400"
                >
                  {footer.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#1b1b1b] px-20 py-5 flex justify-between">
        <p>@{date} Made In ❤️</p>
        <p>All Right Reserved @Ajay Gangwar</p>
      </div>
    </div>
  );
};

export default Footer;
