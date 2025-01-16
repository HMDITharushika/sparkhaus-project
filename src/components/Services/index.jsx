import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h2 className="font-bebas-neue text-[4rem] mb-20">SERVICES</h2>

      <div className="flex flex-col items-center justify-center w-[80%] space-y-6 text-[1.2rem] ">
        <ServiceCard
          link="/web-design-development"
          text="Web Design & Development"
        />
        <ServiceCard link="/branding" text="Branding" />

        <ServiceCard
          link="/social-media-management"
          text="Social Media Management"
        />
      </div>
    </section>
  );
};

export default Services;
