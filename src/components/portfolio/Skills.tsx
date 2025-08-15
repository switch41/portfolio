import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export function Skills() {
  const skills = useQuery(api.skills.list, {});
  
  const groupedSkills = skills?.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground">
            SKILLS & TECHNOLOGIES
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        {skills === undefined && (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        )}

        <div className="space-y-12">
          {groupedSkills && Object.entries(groupedSkills).map(([category, skillsInCategory], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 capitalize text-primary text-center md:text-left">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                {skillsInCategory.map((skill, skillIndex) => (
                  <motion.div
                    key={skill._id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-card/60 backdrop-blur-lg border border-border/50 hover:border-primary/50 p-4 rounded-xl flex items-center gap-4 w-full sm:w-[240px] transition-all duration-300"
                  >
                    {skill.logoUrl ? (
                      <motion.img
                        src={skill.logoUrl}
                        alt={`${skill.name} logo`}
                        className="w-10 h-10 object-contain"
                        transition={{ duration: 0.3 }}
                      />
                    ) : (
                      <motion.div
                        className="bg-primary/10 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full text-2xl font-bold text-primary"
                        transition={{ duration: 0.6 }}
                      >
                        {skill.name.charAt(0)}
                      </motion.div>
                    )}
                    <div>
                      <h4 className="font-bold text-lg text-foreground">{skill.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}