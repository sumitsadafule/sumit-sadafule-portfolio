import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.2, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ y: -8 }}
    className="w-full overflow-hidden rounded-3xl bg-black-200 p-5 shadow-[0_0_25px_rgba(145,94,255,0.2)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(145,94,255,0.45)] sm:w-[350px]"
  >
    {/* Certificate Image */}
    <div className="flex h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl bg-white">
      <img
        src={image}
        alt={`${name} certificate`}
        className="h-full w-full object-contain"
      />
    </div>

    {/* Certificate Details */}
    <div className="mt-5">
      <h3 className="text-[20px] font-bold text-white">
        {testimonial}
      </h3>

      <p className="mt-2 text-[15px] font-medium text-[#915EFF]">
        {name}
      </p>

      <p className="mt-1 text-[13px] text-secondary">
        {designation} {company && `• ${company}`}
      </p>

      {/* View Certificate Button */}
      <div className="mt-5">
        <a
          href={image}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#915EFF] px-5 py-3 text-[15px] font-bold text-white shadow-[0_0_15px_rgba(145,94,255,0.4)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#7c4dff] hover:shadow-[0_0_25px_rgba(145,94,255,0.7)]"
        >
          🔍 View Certificate
        </a>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-[20px] bg-black-100">
      {/* Section Header */}
      <div
        className={`${styles.padding} min-h-[300px] rounded-2xl bg-tertiary`}
      >
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>

      {/* Certificate Cards */}
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap justify-center gap-7 pb-14`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={`${testimonial.name}-${index}`}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;