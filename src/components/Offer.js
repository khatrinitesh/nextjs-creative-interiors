import Image from "next/image";
import OfferThumb from "../assets/img/offer.png"
import OfferData from "./OfferData";
import Link from "next/link";

const Offer = () => {
  return (
    <section className="py-[80px] dark:bg-primaryDarkGradient bg-secondaryDarkGradient">
      <div className="container mx-auto">
        <div class="grid grid-cols-2">
            <div className="OfferContent pe-[100px]">
                <div className="sectionTitle mb-[50px]">
                    <h2 className="text-fs36 font-monsterratB dark:text-white text-primaryDark mb-[20px]">INTERIOR DESIGN SERVICES WE OFFER</h2>
                    <p className="text-fs16 font-monsterratR dark:text-white text-primaryDark">At <Link href='https://creativeinteriors.in/' target="_blank" className="font-monsterratB">Creative Interior</Link>, we specialize in creating bespoke interiors that reflect your lifestyle and vision. Our comprehensive interior design services cover every aspect of transforming your space into a personalized haven. Whether you're looking to refresh a single room or undertake a full home renovation, we're here to bring your dreams to life.</p>
                </div>
                <div class="grid gap-10 grid-cols-2  grid-rows-2">
                    <OfferData/>
                </div>
            </div>
            <div className="thumbnail">
                <Image src={OfferThumb}/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
