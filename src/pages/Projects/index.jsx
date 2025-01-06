const Index = () => {
    return (
        <main className="w-full flex flex-col items-center">
            <div className="lg:w-[70%] w-[90%] md:mt-36 pt-32 text-center">
                <h1 className="text-purple font-semibold md:text-7xl text-4xl leading-[90px]">Projects</h1>
                <p className="text-[#fff] md:text-xl text-lg md:mt-6">Check out some of my projects</p>
                <div className="flex flex-col items-center gap-24 md:mt-24 mt-16">
                    <div className="relative gradient-border rounded-[24px] lg:p-10 p-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 bg-[#000] mb-10">
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
                    {/* <div className="relative gradient-border rounded-[24px] p-10 grid grid-cols-3 gap-10 bg-[#000] mb-10">
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
                    <div className="relative gradient-border rounded-[24px] p-10 grid grid-cols-3 gap-10 bg-[#000] mb-10">
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
                    </div> */}
                </div>
            </div>
        </main>
    );
};

export default Index;
