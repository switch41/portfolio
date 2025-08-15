import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown,
  Star,
  Send,
  Code,
  Database,
  Cpu,
  Zap,
  Briefcase,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Skills } from "@/components/portfolio/Skills";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const projects = [
  {
    title: "Prediction Market",
    long: "A decentralized prediction platform on the Ethereum blockchain, enabling users to forecast event outcomes with smart contracts.",
    tech: ["React", "Solidity", "Web3.js", "MetaMask"],
    category: "Blockchain",
    github: "#",
  },
  {
    title: "Redact Tool", 
    long: "An AI-powered tool for detecting and redacting sensitive data from documents, ensuring privacy and compliance.",
    tech: ["Python", "Flask", "NLP", "OpenCV"],
    category: "AI/ML",
    github: "#",
  },
  {
    title: "Switch Healthcare",
    long: "A HIPAA-compliant AI healthcare assistant for symptom checking, medication reminders, and patient record management.",
    tech: ["React", "Flask", "Python", "NLP"],
    category: "AI/Healthcare",
    github: "#",
  },
];

const experience = [
  {
    title: "Graphic Designer",
    company: "IETE_ISF_VBIT",
    period: "Sep 2024 – Jan 2025",
    description: [
      "Part-time graphic design role.",
      "Ghatkesar, Telangana, India · Hybrid"
    ]
  },
  {
    title: "Intern – Data Analytics & Process Automation",
    company: "Alteryx SparkED",
    period: "Jul 2024 – Sep 2024",
    description: [
      "Built no-code workflows for data preparation, blending, and automation using Alteryx Designer.",
      "Delivered analytics solutions to real-world problems efficiently."
    ]
  },
  {
    title: "Intern – AI & Sustainability",
    company: "1M1B (with IBM Foundation)",
    period: "Aug 2024 – Oct 2024",
    description: [
      "Developed AI-based waste management tools.",
      "Used tech innovation to improve sustainability outcomes."
    ]
  }
];

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message Sent!", {
      description: "Thank you for reaching out. I'll get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-['Arial_Rounded_MT_Bold',_'Helvetica_Rounded',_Arial,_sans-serif]">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full z-50 bg-background/30 backdrop-blur-lg border-b border-white/20"
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-xl font-bold y2k-gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              switch41
            </motion.div>
            <div className="flex items-center space-x-2">
              <div className="hidden md:flex items-center space-x-6">
                {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                  <motion.div
                    key={item}
                    className="relative"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    <motion.button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-muted-foreground hover:y2k-gradient-text transition-colors pb-1"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.button>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-center"
                      variants={{
                        rest: { scaleX: 0 },
                        hover: { scaleX: 1 }
                      }}
                      transition={{ duration: 0.3, ease: "circOut" }}
                    />
                  </motion.div>
                ))}
              </div>
              <ThemeToggle />
              <div className="md:hidden">
                <motion.button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-muted-foreground"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/80 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-muted-foreground hover:y2k-gradient-text transition-colors text-lg"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-500/30 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/30 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <motion.div 
          className="container mx-auto px-6 text-center relative z-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 y2k-gradient-text tracking-tighter">
              Kushal Parihar
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Blockchain & AI Dev • Full-Stack Engineer
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-12">
            <Button onClick={() => scrollToSection('projects')} size="lg" className="y2k-button px-8 py-4">
              View My Work
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center space-x-4">
            {[
              { icon: Github, href: "https://github.com/switch41", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/kushal-parihar", label: "LinkedIn" },
              { icon: Mail, href: "mailto:kushalparihar013@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 y2k-gradient-text">About Me</h2>
            <div className="text-base sm:text-lg text-muted-foreground space-y-6 leading-relaxed p-6 bg-white/5 rounded-3xl border border-white/10">
              <p>
                Hey, I'm <span className="font-bold text-primary">kushal parihar (aka switch41)</span>. I'm a B.Tech CS student from Hyderabad, passionate about building cool stuff that makes a difference.
              </p>
              <p>
                From secure blockchain platforms to smart AI tools, if it's a fun challenge, I'm in.
              </p>
              <p>
                My specialties are <span className="font-bold text-primary/90">Blockchain</span>, <span className="font-bold text-primary/90">AI/ML</span>, and <span className="font-bold text-primary/90">full-stack development</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-16 y2k-gradient-text"
          >
            My Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md group"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">{project.title}</h3>
                <Badge variant="outline" className="mb-4">{project.category}</Badge>
                <p className="text-muted-foreground mb-4">{project.long}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="y2k-button mt-4">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-16 y2k-gradient-text"
          >
            Experience
          </motion.h2>
          
          <div className="max-w-2xl mx-auto">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-8 text-primary flex items-center">
                <Briefcase className="w-6 h-6 mr-3" />
                Professional Experience
              </h3>
              <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[39px] top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                    <h4 className="text-lg font-semibold text-primary">{exp.title}</h4>
                    <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <Star className="w-3 h-3 text-primary/80 mr-2 mt-1 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 y2k-gradient-text">Let's Connect</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-12 text-center">
              Got a project or just want to say hi? Drop me a line.
            </p>
            
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input placeholder="Your Name" required className="bg-white/5 border-white/10 rounded-full"/>
                <Input type="email" placeholder="Your Email" required className="bg-white/5 border-white/10 rounded-full"/>
              </div>
              <Textarea placeholder="Your Message" rows={5} required className="bg-white/5 border-white/10 rounded-2xl"/>
              <div className="text-center">
                <Button type="submit" size="lg" className="y2k-button px-8 py-4">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <div className="flex justify-center space-x-6 mb-4">
              {[
                { icon: Github, href: "https://github.com/switch41", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/kushal-parihar", label: "LinkedIn" },
                { icon: Mail, href: "mailto:kushalparihar013@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          <p className="text-sm">
            © 2025 switch41. Handcrafted with code.
          </p>
        </div>
      </footer>
    </div>
  );
}