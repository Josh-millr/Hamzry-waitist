import Image from "next/image";

export function ProcessCard(props) {
  const { variant, type, img, description, title, imgAlt } = props;

  const variantStyle = {
    container: "",
    tagline: "",
    title: "",
    description: "",
  };

  switch (variant) {
    case "fill":
      variantStyle.container = "bg-[#108239]";
      variantStyle.tagline = "text-white";
      variantStyle.description = "text-white";
      variantStyle.title = "text-white ";
      break;
    case "stroke":
      variantStyle.container = "border-[#108239] border-2 border-dashed";
      variantStyle.tagline = "text-[#108239]";
      variantStyle.description = "text-gray-800";
      variantStyle.title = "text-[#108239]";
      break;
    default:
      break;
  }

  return (
    <div
      className={`grid w-full gap-y-10 rounded-2xl p-6 ${variantStyle.container}`}
    >
      <div className="inine relative h-[286px] w-full sm:h-[264px] md:h-[316px] lg:h-[356px]">
        <Image
          fill
          className="rounded-xl"
          src={img}
          style={{ objectFit: "cover" }}
          alt={imgAlt}
        />
      </div>

      <div className="grid gap-y-2">
        <div className="grid gap-y-2">
          <p className={`text-sm uppercase ${variantStyle.tagline}`}>{type}</p>
          <h2 className={`text-2xl ${variantStyle.title}`}>{title}</h2>
        </div>
        <div className={`text-sm ${variantStyle.description}`}>
          {description}
        </div>
      </div>
    </div>
  );
}

ProcessCard.defaultProps = {
  img: "",
  variant: "fill",
  type: "freelancer",
  title: "Add a title",
  description: "Add a description...",
  imgAlt: "",
};
