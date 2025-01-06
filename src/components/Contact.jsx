const Contact = () => {
    return (
        <section className="w-full flex flex-col items-center text-center mt-40">
            <div className="relative gradient-border lg:w-[70%] w-[90%]  rounded-[24px] py-10 lg:px-16 px-6 gap-10 bg-[#000] text-center">
                <p className="text-[#fff] font-light lg:text-2xl text-base lg:leading-[60px] leading-7">Feel free to reach out through my email or connect with me on LinkedIn.</p>
                <h1 className="text-[#fff] font-semibold lg:text-4xl fd:text-xl text-base">Oluwapelumi019a@gmail.com</h1>
                <div className="flex lg:flex-row flex-col items-center justify-center gap-8 my-10">
                    <a href="" className="flex items-center gap-3 text-[#fff] font-medium text-sm rounded-[47px] py-3 px-5 bg-purple hover:rounded-[8px] transition-all">
                        Download CV
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
                    </a>
                    <a href="" className="flex items-center gap-3 text-[#fff] font-medium text-sm rounded-[47px] py-3 px-5 border border-purple hover:rounded-[8px] transition-all">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
