import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { FolderCode, Globe, Briefcase, FileText } from "lucide-react";

const counters = [
  {
    value: 4,
    suffix: "+",
    label: "Major Projects",
    icon: FolderCode,
  },
  {
    value: 3,
    suffix: "",
    label: "Live Applications",
    icon: Globe,
  },
  {
    value: 1,
    suffix: "",
    label: "Completed Internship",
    icon: Briefcase,
  },
  {
    value: 1,
    suffix: "",
    label: "Research Paper Accepted",
    icon: FileText,
  },
];

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      setCount(value);
      return;
    }

    let animationFrame;
    let startTime = null;

    const duration = 1600;

    const animate = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, reduceMotion]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function CounterBand() {
  return (
    <div className="counter-band">
      <div className="wrap">
        <div className="counter-grid">
          {counters.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="counter-card"
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
              >
                <div className="counter-icon">
                  <Icon size={26} strokeWidth={1.6} />
                </div>

                <div className="counter-number">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </div>

                <div className="counter-label">{item.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CounterBand;
