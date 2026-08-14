"use client";

import SectionHeader from "@/components/layout/SectionHeader";
import { processSteps } from "@/data/services";
import { motion } from "framer-motion";

export default function ServicesProcess() {
  return (
    <div className="span-full pt-[var(--space-4)]">
      <SectionHeader title="The Sacred Process." />

      <div className="marketing-grid">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.step}
            className="card-surface relative flex min-h-[14rem] flex-col justify-between p-[var(--space-4)] sm:min-h-[calc(var(--card-height-2col)/1.618)]"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{ y: -3, scale: 1.02 }}
          >
            <motion.span
              className="type-display leading-none text-de-blue"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 + 0.08 }}
            >
              {String(step.step).padStart(2, "0")}
            </motion.span>

            <div className="text-right">
              <p className="type-subhead leading-tight">{step.title}</p>
              <p className="type-body mt-[var(--space-3)] text-balance">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
