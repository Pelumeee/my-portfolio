import { useState } from "react";
import { Link } from "react-router-dom";
import Glow from "../../components/Glow";
import Button from "../../components/Button";

const skills = [
    ["Version Control", "Git, GitHub"],
    ["CMS", "Web Accessibility, SEO best practices"],
    ["Languages", "HTML, CSS, JavaScript, TypeScript"],
    ["Frameworks & Libraries", "React, Next.js, Vue.js, Tailwind CSS, Bootstrap"],
    ["Responsive Design", "Mobile-first development, Cross-browser compatibility"],
];

const Index = () => {
    const [language, setLanguage] = useState("my");

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };
    return (
        <main className="w-full flex flex-col items-center">
            <div className="hero w-full flex justify-center">
                <div className="lg:w-[70%] w-[90%] lg:min-h-[90vh] flex lg:flex-row flex-col items-center justify-between py-24 gap-16">
                    <div className="flex justify-center pt-10">
                        <div className="xl:w-[500px] md:w-[400px] w-[350px] xl:h-[500px] md:h-[400px] h-[350px] rounded-[50%] bg-[#fff] border border-[#000]"></div>
                    </div>
                    <div className="lg:text-left text-center">
                        <h1 className="2xl:text-4xl xl:text-3xl text-2xl font-bold 2xl:leading-10 xl:leading-9 leading-8 text-purple">Frontend Developer</h1>
                        <h2 className="2xl:text-7xl xl:text-6xl text-5xl font-semibold 2xl:leading-[99px] xl:leading-[70px] leading-[60px] text-[#fff]">Pelumi Ajayi</h2>
                        <p className="text-2xl text-[#fff]">Based in Lagos, Nigeria</p>
                        <div className="mt-4 flex items-center justify-center lg:justify-start gap-4">
                            <Glow />
                            <span className="lg:text-xl text-[#fff]">Available for a full-time position</span>
                        </div>
                    </div>
                </div>
            </div>
            <section className="w-full text-center flex flex-col items-center mt-10">
                <div className="w-full flex flex-col items-center">
                    <h1 className="text-[#fff] font-semibold md:text-4xl text-2xl mb-6">SKILLS</h1>
                    <div className="relative gradient-border lg:w-[60%] w-[90%] lg:max-w-[934px] rounded-[24px] p-10 flex flex-col gap-3 bg-[#000]">
                        {skills.map((pair, index) => (
                            <div key={index} className="flex md:flex-row flex-col items-center justify-center gap-3 mb-4">
                                <Button text={pair[0]} bg={true} />
                                <Button text={pair[1]} border={true} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:mt-28 mt-10 flex flex-col items-center w-full">
                    <h1 className="text-[#fff] font-semibold md:text-4xl text-2xl mb-6">PROJECTS</h1>
                    <div className="relative gradient-border lg:w-[80%] w-[90%] rounded-[24px] lg:p-10 p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 bg-[#000] mb-10">
                        <div className="project-cards">
                            <div className="rounded-[24px] overflow-hidden mb-4">
                                <img src="/images/project.png" alt="" className="w-full h-full object-cover transition-all duration-500" />
                            </div>
                            <span className="text-[#fff] font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300">
                                Safam Website
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        className="transition-all duration-300"
                                        d="M1.34375 12.6575L12.6575 1.34375M12.6575 1.34375L4.17217 1.34383M12.6575 1.34375L12.6575 9.82911"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div className="project-cards">
                            <div className="rounded-[24px] overflow-hidden mb-4">
                                <img src="/images/project.png" alt="" className="w-full h-full object-cover transition-all duration-500" />
                            </div>
                            <span className="text-[#fff] font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300">
                                Safam Website
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        className="transition-all duration-300"
                                        d="M1.34375 12.6575L12.6575 1.34375M12.6575 1.34375L4.17217 1.34383M12.6575 1.34375L12.6575 9.82911"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div className="project-cards">
                            <div className="rounded-[24px] overflow-hidden mb-4">
                                <img src="/images/project.png" alt="" className="w-full h-full object-cover transition-all duration-500" />
                            </div>
                            <span className="text-[#fff] font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300">
                                Safam Website
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        className="transition-all duration-300"
                                        d="M1.34375 12.6575L12.6575 1.34375M12.6575 1.34375L4.17217 1.34383M12.6575 1.34375L12.6575 9.82911"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    
                    <Link to={'/projects'} className="text-[#fff] font-medium text-sm inline-block rounded-[47px] py-3 px-5 bg-purple hover:rounded-[8px] transition-all">
                        See all projects
                    </Link>
                </div>
            </section>
            <section className="w-full flex flex-col items-center text-center lg:mt-40 mt-24">
                <h1 className="text-[#fff] font-semibold md:text-4xl text-2xl mb-8">ABOUT</h1>
                <div className="relative gradient-border w-[90%] rounded-[24px] md:py-10 py-6 lg:px-16 px-2 gap-10 bg-[#000]">
                    <div className="w-full flex lg:justify-end justify-center md:mb-10">
                        <select
                            className="bg-inherit focus:outline-none text-[#F4F4F4] border border-[#353434] rounded-[47px] max-w-[195px] lg:p-4 p-3 text-sm"
                            value={language}
                            onChange={handleLanguageChange}
                        >
                            <option value="my">MY LANGUAGE</option>
                            <option value="your">YOUR LANGUAGE</option>
                        </select>
                    </div>
                    <div className={`${language === "my" ? "flex" : "hidden"} w-full`}>
                        <img src="/images/codeImg.png" alt="" className="hidden lg:block" />
                        <img src="/images/codeImg2.jpg" alt="" className="bloock lg:hidden" />
                    </div>
                    <div className={`${language === "your" ? "flex" : "hidden"} flex-col items-center text-center gap-10`}>
                        <p className="text-[#fff] font-light lg:text-2xl text-lg lg:leading-[60px] leading-10">
                            I am a passionate frontend developer with three years of experience creating modern, responsive, and user-friendly web interfaces. With a focus on delivering visually
                            appealing and efficient web solutions, I excel at transforming ideas into functional digital experiences.
                        </p>
                        <p className="text-[#fff] font-light lg:text-2xl text-lg lg:leading-[60px] leading-10">
                            I specialize in building intuitive user interfaces using modern web technologies, and I&apos;m driven by the challenge of solving real-world problems through thoughtful
                            design and clean, maintainable code.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Index;
