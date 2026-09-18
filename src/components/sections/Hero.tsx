import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#050816] pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(145,94,255,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(0,206,168,0.10),transparent_30%)]" />

      <div className={`relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 ${styles.paddingX} pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14`}>
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="mb-5 flex items-center gap-3">
            <motion.span
              animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-3 w-3 rounded-full bg-[#915EFF] shadow-[0_0_20px_rgba(145,94,255,0.9)]"
            />
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
              Computer Science Engineer
            </span>
          </div>

          <h1 className={`${styles.heroHeadText} max-w-4xl text-white`}>
            Hi, I'm{" "}
            <motion.span
              animate={{ textShadow: ["0 0 0px #915EFF", "0 0 22px #915EFF", "0 0 0px #915EFF"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="text-[#915EFF]"
            >
              {config.hero.name}
            </motion.span>
          </h1>

          <p className={`${styles.heroSubText} mt-5 max-w-2xl text-secondary`}>
            {config.hero.p[0]}
            <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-xl bg-[#915EFF] px-6 py-3 font-bold text-white shadow-[0_0_25px_rgba(145,94,255,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#7c4dff]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-secondary">
            {[
              "Java + DSA",
              "MERN Stack",
              "Responsive UI",
              "Full Stack Projects",
            ].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.12 }}
                className="flex items-center gap-2"
              >
                <span className="text-[#00cea8]">✓</span>{item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[#915EFF]/10 blur-3xl" />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur-sm sm:p-4"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0a1c]">
              <img
                src="/banner.png"
                alt="Sumit Sadafule portfolio banner"
                className="block aspect-[3/2] h-auto w-full object-contain object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/45 via-transparent to-transparent" />
            </div>

            <div className="mt-3 flex items-center justify-between rounded-xl bg-black/30 px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Full Stack Developer</span>
              <span className="flex items-center gap-2 text-xs font-semibold text-white"><span className="h-2 w-2 animate-pulse rounded-full bg-[#00cea8]" />Available for opportunities</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-5 left-0 z-20 flex w-full justify-center"
      >
        <a href="#about" aria-label="Scroll to About section">
          <div className="flex h-[52px] w-[30px] items-start justify-center rounded-3xl border-2 border-white/50 p-2">
            <motion.div
              animate={{ y: [0, 17, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="h-2.5 w-2.5 rounded-full bg-[#915EFF]"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
