import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
        className="flex flex-wrap justify-center gap-3 sm:gap-4"
      >
        {technologies.map((technology) => (
          <motion.div
            key={technology.name}
            variants={{
              hidden: { opacity: 0, y: 18, scale: 0.94 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ y: -5, scale: 1.04 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 shadow-lg backdrop-blur-sm transition-colors duration-300 hover:border-[#915EFF]/50 hover:bg-[#915EFF]/10"
          >
            <span className="text-sm font-semibold text-secondary transition-colors duration-300 group-hover:text-white sm:text-base">
              {technology.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-secondary sm:text-base"
      >
        A practical toolkit built through projects, internships and continuous learning.
      </motion.p>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
