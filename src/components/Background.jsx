import dottedPattern from "../assets/images/dotted.png";
import linePattern from "../assets/images/grid.png";

const Background = () => {
  return (
    <div className="top-0 -z-10 h-full w-full">
      {/* Gradient Eclipse - Blue */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_60%_90%_at_100%_40%,rgba(48,79,204,0.8),rgba(255,255,255,0))]">
        <div
          className=" inset-0 h-full bg-no-repeat"
          style={{
            backgroundImage: `url(${dottedPattern})`,
            backgroundPosition: "right",
          }}
        ></div>
      </div>

      {/* Gradient Eclipse - White */}
      <div className="absolute top-1/4 left-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_40%_45%_at_10%_50%,rgba(255,255,255,0.8),rgba(255,255,255,0))] opacity-50">
        {/* Grid Background */}
        <div
          className="absolute inset-0 h-full bg-no-repeat"
          style={{ backgroundImage: `url(${linePattern})` }}
        ></div>
      </div>

       {/* Gradient Eclipse - Blue */}
       <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_60%_90%_at_100%_40%,rgba(48,79,204,0.8),rgba(255,255,255,0))]">
        <div
          className=" inset-0 h-full bg-no-repeat"
          style={{
            backgroundImage: `url(${dottedPattern})`,
            backgroundPosition: "right",
          }}
        ></div>
      </div>

      {/* Gradient Eclipse - White */}
      <div className="absolute top-1/4 left-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_40%_45%_at_10%_50%,rgba(255,255,255,0.8),rgba(255,255,255,0))] opacity-50">
        {/* Grid Background */}
        <div
          className="absolute inset-0 h-full bg-no-repeat"
          style={{ backgroundImage: `url(${linePattern})` }}
        ></div>
      </div>
    </div>
  );
};

export default Background;
