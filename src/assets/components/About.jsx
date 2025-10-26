const aboutItems = [
  {
    label: "Project done",
    number: 0,
  },
  {
    label: "Years of experience",
    number: 0,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hi I&apos; Suwit Saiso, and I hold a Bachelor’s degree in Computer Engineering from Naresuan University. During my studies, I built a solid foundation in computer systems, programming, and problem-solving, which has fueled my passion for computer networks and software development.
          </p>
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            I am a highly motivated individual who is always eager to improve my skills and knowledge. I enjoy exploring new technologies and continuously developing myself to adapt to the fast-changing IT landscape. My goal is to apply my abilities to create innovative solutions and contribute effectively to any team or organization I am part of.
          </p>
          <div className="flex flex-warp items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="star-logo.svg"
              alt="Logo"
              className="ml-auto md:w-[40px] md:h-[40px]"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
