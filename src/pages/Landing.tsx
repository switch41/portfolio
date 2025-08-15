import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin,
  Code,
  Database,
  Cpu,
  Zap,
  Award,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Star,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

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
    short: "Blockchain-based event prediction platform with 99.9% uptime.",
    long: "Built a decentralized prediction platform where users can create and participate in event forecasts. All transactions are executed via Ethereum smart contracts for transparency and immutability, with Web3.js integration for blockchain connectivity.",
    tech: ["React", "Solidity", "Ethereum", "Web3.js", "MetaMask"],
    category: "Blockchain / Web",
    github: "#",
  },
  {
    title: "Redact Tool", 
    short: "AI-powered tool for sensitive data detection and redaction (~80% accuracy).",
    long: "Developed a system that automatically detects and redacts personal information from documents, using NLP for text detection and OpenCV for image-based redaction. Designed for privacy compliance and real-world security needs.",
    tech: ["Python", "Flask", "NLP", "OpenCV", "Regex"],
    category: "AI / Privacy",
    github: "#",
  },
  {
    title: "Switch Healthcare",
    short: "AI healthcare assistant with HIPAA-compliant design.",
    long: "Created a healthcare platform to assist with symptom checking, medication reminders, and patient record management, using NLP for natural language understanding and a secure backend for HIPAA compliance.",
    tech: ["React", "Flask", "Python", "NLP"],
    category: "AI / Healthcare",
    github: "#",
  },
  {
    title: "AI-Powered Chatbot",
    short: "Conversational chatbot with advanced natural language processing.",
    long: "Designed a chatbot that can handle multi-turn conversations, provide informative responses, and adapt to different domains, built with Python NLP models and deployed via a Flask backend.",
    tech: ["Python", "Flask", "NLP", "Transformers"],
    category: "AI / Web",
    github: "#",
  }
];

const skills = {
  "Programming Languages": ["Python", "JavaScript", "Solidity", "SQL", "HTML5", "CSS3"],
  "Frameworks & Libraries": ["React", "Flask", "FastAPI", "OpenCV", "Tailwind CSS", "Bootstrap", "REST APIs", "Web3.js"],
  "Blockchain Technologies": ["Ethereum", "Smart Contracts", "MetaMask", "IPFS", "Truffle"],
  "AI & Machine Learning": ["Artificial Intelligence", "Machine Learning", "NLP", "spaCy", "Transformers", "MediaPipe", "Computer Vision"],
  "Tools & Platforms": ["Git", "GitHub", "Postman", "Render", "Docker", "Tesseract OCR", "Ganache"]
};

const experience = [
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

const achievements = [
  "Team Leader – Team Rookie, internal hackathon winners for Smart India Hackathon (SIH) 2024",
  "Runner-up – Swoparnika-2k23 tech competition (VBIT)",
  "Programming Essentials in Python (PCAP) – Cisco Networking Academy",
  "NDG Linux Essentials – Cisco Networking Academy",
  "Continuous Integration & Delivery – DevOps – Infosys Springboard"
];

export default function Landing() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // NOTE: This is a UI demonstration. A backend mutation would be needed to make this form functional.
    toast.success("Message Sent!", {
      description: "Thank you for reaching out. I'll get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-xl font-bold text-foreground"
              whileHover={{ scale: 1.05 }}
            >
              Kushal Parihar
            </motion.div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          className="container mx-auto px-6 text-center relative z-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Kushal Parihar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              B.Tech Computer Science Student • Blockchain & AI Developer • Full-Stack Engineer
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              size="lg"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center space-x-6"
          >
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
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-colors"
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
            <h2 className="text-4xl font-bold mb-8 text-foreground">About Me</h2>
            <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
              <p>
                Hi, I'm <span className="text-primary font-semibold">Kushal Parihar</span> — a B.Tech Computer Science student from Hyderabad with a passion for building impactful, scalable, and secure applications.
              </p>
              <p>
                If it sounds fun or solves a real problem, I'll probably build it — from blockchain-based prediction platforms to AI-powered privacy tools.
              </p>
              <p>
                I specialize in <span className="font-semibold text-primary/90">Blockchain</span>, <span className="font-semibold text-primary/90">AI/ML</span>, and <span className="font-semibold text-primary/90">full-stack development</span> with strong skills in Python, JavaScript, Solidity, and React.
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
            className="text-4xl font-bold text-center mb-16 text-foreground"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4">{project.long}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="ghost" 
                    size="sm"
                  >
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
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-foreground"
          >
            Tech Stack & Skills
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="flex items-center mb-4">
                  {category.includes('Programming') && <Code className="w-6 h-6 text-primary mr-3" />}
                  {category.includes('Frameworks') && <Zap className="w-6 h-6 text-primary mr-3" />}
                  {category.includes('Blockchain') && <Database className="w-6 h-6 text-primary mr-3" />}
                  {category.includes('AI') && <Cpu className="w-6 h-6 text-primary mr-3" />}
                  {category.includes('Tools') && <Award className="w-6 h-6 text-primary mr-3" />}
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Achievements Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-foreground"
          >
            Experience & Achievements
          </motion.h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-primary flex items-center">
                <Briefcase className="w-6 h-6 mr-3" />
                Professional Experience
              </h3>
              <div className="relative border-l-2 border-border/50 pl-8 space-y-12">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[38px] top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
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

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-primary flex items-center">
                <Award className="w-6 h-6 mr-3" />
                Certifications
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-4 flex items-start"
                  >
                    <GraduationCap className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{achievement}</p>
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
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Have a question or want to work together? Drop me a message.
            </p>
            
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
              </div>
              <Textarea placeholder="Your Message" rows={5} required />
              <div className="text-center">
                <Button type="submit" size="lg">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
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
            © 2024 Kushal Parihar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}