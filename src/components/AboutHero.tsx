import AboutSearchBox from "./AboutSearchBox";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 xl:py-0 xl:h-[1087px] bg-hero3 xl:bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-center xl:justify-start">
        <AboutSearchBox/>
      </div>
    </section>
  );
}

export default Hero;
