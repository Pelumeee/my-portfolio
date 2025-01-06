const Index = () => {
    return (
        <main className="w-full flex flex-col items-center">
            <div className="lg:w-[70%] w-[90%] md:mt-36 pt-32 text-center">
                <h1 className="text-purple font-semibold md:text-7xl text-4xl leading-[90px]">About</h1>
                <p className="text-[#fff] md:text-xl text-lg md:mt-6">Hey,👋🏻 it’s nice to meet you!</p>
                <div className="w-full flex justify-center py-16">
                    <div className="xl:w-[500px] md:w-[400px] w-[350px] xl:h-[500px] md:h-[400px] h-[350px] rounded-[50%] bg-[#fff] border border-[#000]"></div>
                </div>
                <div className="flex flex-col items-center lg:mt-24 mt-10">
                    <div className="relative gradient-border rounded-[24px] md:p-10 p-6 grid md:grid-cols-2 grid-cols-1 gap-10 bg-[#000] mb-10">
                        <div className="relative gradient-border-sm rounded-[24px] lg:p-10 text-left bg-[#000]">
                            <h1 className="text-white font-semibold md:text-4xl text-2xl md:mb-16 mb-6">HOW I GOT HERE</h1>
                            <div className="flex flex-col gap-6 mt-4">
                                <p className="text-white leading-7 text-sm md:text-base">🎓 Previously, I obtained my Bachelor of Science in Microbiology 🧬 at the University of Lagos.</p>
                                <p className="text-white leading-7 text-sm md:text-base">
                                    😩 After school, I was uncertain about pursuing biology, as my passion for technology and building solutions that make a difference had always intrigued me. I just
                                    wasn’t sure where I would fit in
                                </p>
                                <p className="text-white leading-7 text-sm md:text-base">
                                    🧠 My friend introduced me to frontend development, which bridged the gap between my interests. Frontend development allows me to combine my passion for
                                    problem-solving with my creativity in building engaging web experiences.
                                </p>
                            </div>
                        </div>
                        <div className="relative gradient-border-sm rounded-[24px] lg:p-10 text-left bg-[#000]">
                            <div className="bg-[#000]">
                                <h1 className="text-white font-semibold md:text-4xl text-2xl md:mb-16 mb-6">FUN FACTS</h1>
                                <div className="flex flex-col gap-6 mt-4">
                                    <p className="text-white leading-7 text-sm md:text-base">🗣I know how to speak 3 languages: English, Yoruba, and Pidgin!</p>
                                    <p className="text-white leading-7 text-sm md:text-base">✈️ I love travelling and have visited 0 countries😩</p>
                                    <p className="text-white leading-7 text-sm md:text-base">😋I’m obsessed with Snooker game. I’m a pro!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Index;
