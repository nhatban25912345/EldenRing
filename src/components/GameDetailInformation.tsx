function GameDetailInformation() {
  return (
    <div className="mx-2 flex w-full flex-col pb-16 sm:mx-5 lg:pb-[72px]">
      <div className="w-full rounded-[20px] bg-[#f6f6f6]">
        <div className="container flex flex-col py-7 md:flex-row md:justify-between md:py-[56px]">
          <div className="flex w-full flex-col md:mr-[50px] md:w-1/2 md:max-w-[357px]">
            <div className="relative w-full">
              <div className="py-4 md:pb-7">
                <div className="text-lg font-semibold">Release date</div>
                <div className="text-[#737373]">25 Feb 2022</div>
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#ddd]"></div>
            </div>
            <div className="relative w-full">
              <div className="py-4 md:pb-7">
                <div className="text-lg font-semibold">Developer</div>
                <div className="text-[#737373]">FromSoftware, Inc</div>
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#ddd]"></div>
            </div>
            <div className="relative w-full">
              <div className="py-4 md:pb-7">
                <div className="text-lg font-semibold">Genre</div>
                <div className="text-[#737373]">
                  Role playing (RPG), Action, Adventure
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#ddd]"></div>
            </div>
          </div>

          <div className="flex w-full flex-col md:mr-[50px] md:w-1/2 md:max-w-[357px]">
            <div className="relative w-full">
              <div className="py-4 md:pb-7">
                <div className="text-lg font-semibold">Platform</div>
                <div className="text-[#737373]">
                  XBOX One, PlayStation 4, PlayStation 5, XBOX Series X|S, PC
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#ddd]"></div>
            </div>
            <div className="relative w-full">
              <div className="py-4 md:pb-7">
                <div className="text-lg font-semibold">Subtitles</div>
                <div className="text-[#737373]">English, German, Italian</div>
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#ddd]"></div>
            </div>
            <div className="relative w-full">
              <div className="py-4 md:pb-7">
                <div className="text-lg font-semibold">Audio</div>
                <div className="text-[#737373]">English</div>
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#ddd]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 text-sm sm:mt-[30px] sm:text-base">
        ELDEN RING™& ©Bandai Namco Entertainment Inc. / ©2023 FromSoftware,
        Inc.
      </div>
    </div>
  );
}

export default GameDetailInformation;
