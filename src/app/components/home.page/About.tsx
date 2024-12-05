import { NextPage } from "next";

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <div className="flex items-center justify-center w-full p-32">
      <div className="flex items-center justify-center flex-col text-white gap-4">
        <h1 className="font-bold text-4xl">About Me</h1>
        <p className="text-FntGray text-base font-bold text-center">
          I'm a full-stack developer with a passion for building beautiful,
          functional, and user-friendly applications. With expertise in modern
          web technologies, I strive to create impactful digital solutions.
        </p>
        <p className="text-FntGray text-base font-bold text-center">
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or sharing knowledge with the
          developer community.
        </p>
      </div>
    </div>
  );
};

export default About;
