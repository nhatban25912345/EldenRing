import banner from "../../public/imgs/ELDENRING_01_4K.webp";

function Overview() {
  return (
    <div className="w-full">
      <div className="container py-10 pt-14">
        <h2 className="title lg:px-[76px]">
          Created by Hidetaka Miyazaki and George R. R. Martin
        </h2>
        <div className="my-4 w-full sm:my-10">
          <img
            className="h-full w-full rounded-[20px] object-cover"
            src={banner}
            alt="banner"
          />
        </div>
        <div className="min-[992px]:pl-[474px] min-[992px]:pr-[95px] ">
          <div className="text-[#737373]">
            <p className="">The Golden Order has been broken.</p>
            <p className="mt-4">
              Rise, Tarnished, and be guided by grace to brandish the power of
              the Elden Ring and become an Elden Lord in the Lands Between.
            </p>
            <p className="mt-4">
              In the Lands Between ruled by Queen Marika the Eternal, the Elden
              Ring, the source of the Erdtree, has been shattered.
            </p>
            <p className="mt-4">
              Marika’s offspring, demigods all, claimed the shards of the Elden
              Ring known as the Great Runes, and the mad taint of their newfound
              strength triggered a war: The Shattering. A war that meant
              abandonment by the Greater Will.
            </p>
            <p className="mt-4">
              And now the guidance of grace will be brought to the Tarnished who
              were spurned by the grace of gold and exiled from the Lands
              Between. Ye dead who yet live, your grace long lost, follow the
              path to the Lands Between beyond the foggy sea to stand before the
              Elden Ring.
            </p>
            <p className="mt-4">And become the Elden Lord.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
