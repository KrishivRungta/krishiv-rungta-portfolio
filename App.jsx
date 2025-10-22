import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

// ===== THEME =====
const theme = {
  colors: {
    bg: "#FAF3E0",
    primary: "#7C3F00",
    accent: "#FFC300",
    card: "#FFF5D7",
    text: "#3B2F2F",
    hover: "#FF9800",
    button: "#FFC300",
    buttonHover: "#7C3F00",
  },
  font: {
    heading: "'Orbitron', 'Courier Prime', monospace",
    body: "'Courier Prime', monospace"
  }
};

// ===== GLOBAL STYLES =====
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font.body};
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    transition: background 0.4s;
    overflow-x: hidden;
  }
  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.bg};
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

// ===== PARALLAX BG =====
const ParallaxBg = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 0;
  left: 0;
  pointer-events: none;
  background: radial-gradient(ellipse at 55% 20%, #FFE7BA88 0%, transparent 75%),
    radial-gradient(ellipse at 80% 70%, #FFC30022 0%, transparent 80%);
  &::before {
    content: "";
    position: absolute;
    top: 30%;
    left: 10%;
    width: 220px;
    height: 220px;
    background: linear-gradient(135deg, #FFF5D7 0%, #FFC300 100%);
    opacity: 0.08;
    filter: blur(60px);
    border-radius: 50%;
  }
  &::after {
    content: "";
    position: absolute;
    top: 70%;
    left: 75%;
    width: 160px;
    height: 160px;
    background: linear-gradient(135deg, #FFC300 0%, #FFF5D7 100%);
    opacity: 0.11;
    filter: blur(50px);
    border-radius: 50%;
  }
`;

// ===== NAVBAR =====
const Nav = styled.nav`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(250,243,224,0.95);
  z-index: 999;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.font.heading};
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 1.2rem 0;
  margin: 0;
`;

const NavLink = styled.a`
  font-size: 1.07rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  transition: color 0.3s;
  font-family: ${({ theme }) => theme.font.heading};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background: ${({ theme }) => theme.colors.accent};
    transition: width 0.3s;
    position: absolute;
    left: 0;
    bottom: -4px;
  }
  &:hover::after {
    width: 100%;
  }
`;

const navSections = [
  { name: "Home", id: "home" },
  { name: "About Me", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Blog/Notes", id: "blog" },
  { name: "Tech Stack", id: "tech" },
  { name: "Contact", id: "contact" },
];

// ===== HOME =====
const HomeSection = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 4rem;
  text-align: center;
  position: relative;
`;

const Tagline = styled.h1`
  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.font.heading};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 2px;
`;

const Summary = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 1.1rem;
  font-family: ${({ theme }) => theme.font.body};
`;

const ResumeBtn = styled.a`
  margin-top: 2.2rem;
  padding: 0.8rem 2.1rem;
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.font.heading};
  border-radius: 6px;
  font-weight: 700;
  font-size: 1.07rem;
  box-shadow: 0 0 10px #FFC30033;
  border: none;
  transition: background 0.3s, box-shadow 0.3s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.card};
    box-shadow: 0 0 16px #7C3F0044;
  }
`;

// ===== ABOUT =====
const AboutSection = styled.section`
  min-height: 30vh;
  padding: 5rem 6vw 3rem 6vw;
  background: ${({ theme }) => theme.colors.card};
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
`;

const AboutTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 1.2rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.heading};
`;

const Bio = styled.p`
  font-size: 1.13rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 650px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.font.body};
`;

// ===== PROJECTS =====
const ProjectsSection = styled.section`
  min-height: 40vh;
  padding: 4rem 6vw 3rem 6vw;
  background: ${({ theme }) => theme.colors.bg};
`;

const ProjectsTitle = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 2rem;
  margin-bottom: 1.6rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.heading};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 2.4rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 14px;
  padding: 2rem 1.6rem 1.6rem 1.6rem;
  box-shadow: 0 0 18px #FFC30022;
  transition: transform 0.34s cubic-bezier(0.2,0.6,0.4,1), box-shadow 0.34s;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.font.body};
  &:hover {
    transform: translateY(-5px) scale(1.04);
    box-shadow: 0 0 28px #FF980040;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ImgHolder = styled.div`
  width: 100%;
  height: 140px;
  margin-bottom: 1.1rem;
  background: linear-gradient(120deg, #FFF5D7 0%, #FFC300 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  color: #7C3F0022;
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.22rem;
  margin-bottom: 0.6rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.heading};
`;

const Desc = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.7rem;
  text-align: center;
  font-family: ${({ theme }) => theme.font.body};
`;

const ViewMore = styled.a`
  color: ${({ theme }) => theme.colors.button};
  font-weight: 500;
  font-size: 0.97rem;
  margin-top: 0.8rem;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.font.body};
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
    border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;

const projects = [
  {
    title: "Electronic Robotic Skin",
    img: "🤖",
    desc: "Flexible sensor matrix detects touch position and pressure, enabling tactile feedback for robots.",
    link: "#",
  },
  {
    title: "Agricultural Drone",
    img: "🚁",
    desc: "Custom drone automates pesticide administration, improving crop health and reducing manual labor.",
    link: "#",
  },
  {
    title: "Robotic Arm with ML Vision",
    img: "🦾",
    desc: "Camera-controlled arm using Teachable Machine; picks objects based on visual classification.",
    link: "#",
  },
  {
    title: "Spy FPV Vehicle",
    img: "🚗",
    desc: "Remote-controlled robot car with live FPV feed, designed for stealth surveillance and exploration.",
    link: "#",
  },
  {
    title: "Biofuel from Algae",
    img: "🧪",
    desc: "Green energy experiment: cultivating algae and extracting biofuel for sustainable power.",
    link: "#",
  },
  {
    title: "Smart Bin with CNN & Sensors",
    img: "🗑️",
    desc: "AI-powered waste bin uses CNN and sensors to identify and segregate recyclables and trash.",
    link: "#",
  },
];

// ===== BLOG =====
const BlogSection = styled.section`
  min-height: 30vh;
  padding: 4rem 6vw 2rem 6vw;
  background: ${({ theme }) => theme.colors.card};
`;

const BlogTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.heading};
`;

const Post = styled.div`
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.colors.bg};
  padding: 1.2rem 1.4rem;
  border-radius: 8px;
  box-shadow: 0 0 12px #FFC30022;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  transition: box-shadow 0.3s, border-color 0.3s;
  font-family: ${({ theme }) => theme.font.body};
  &:hover {
    box-shadow: 0 0 22px #FF980040;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const PostTitle = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.font.heading};
`;

const PostBody = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.font.body};
`;

const posts = [
  {
    title: "CNN Model Optimization for Smart Bin",
    body: "Explored different architectures and dataset augmentations to enhance waste classification accuracy. Faced challenges with overfitting and real-world sensor noise.",
  },
  {
    title: "Prototyping Robotic Skin: Lessons Learned",
    body: "Iterated flexible PCB designs and sensor layouts. Calibration and real-time pressure mapping required careful circuit tuning and ML integration.",
  },
  {
    title: "Integrating Raspberry Pi with Arduino for IoT",
    body: "As a beginner, connecting Pi to Arduino via serial and MQTT for remote sensor data logging. Overcame OS setup hurdles and GPIO interfacing quirks.",
  },
];

// ===== TECH STACK =====
const TechSection = styled.section`
  min-height: 18vh;
  padding: 3rem 6vw 2rem 6vw;
  background: ${({ theme }) => theme.colors.bg};
`;

const TechTitle = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.7rem;
  margin-bottom: 1.2rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.heading};
`;

const BadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Badge = styled.span`
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px #FFC30033;
  font-family: ${({ theme }) => theme.font.heading};
  margin-bottom: 0.8rem;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.card};
    box-shadow: 0 0 14px #7C3F0044;
  }
`;

const stack = ["Arduino C/C++", "Python", "IoT Sensors", "Java"];

// ===== CONTACT =====
const ContactSection = styled.section`
  min-height: 24vh;
  padding: 3.5rem 6vw 2rem 6vw;
  background: ${({ theme }) => theme.colors.card};
  border-top: 2px solid ${({ theme }) => theme.colors.accent};
`;

const ContactTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.7rem;
  margin-bottom: 1.1rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.heading};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 440px;
  margin: 0 auto;
  gap: 1.1rem;
  font-family: ${({ theme }) => theme.font.body};
`;

const Input = styled.input`
  padding: 0.7rem 1.2rem;
  border-radius: 7px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  box-shadow: 0 0 6px #FFC30022;
  font-family: ${({ theme }) => theme.font.body};
`;

const TextArea = styled.textarea`
  padding: 0.7rem 1.2rem;
  border-radius: 7px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  box-shadow: 0 0 6px #FFC30022;
  min-height: 90px;
  font-family: ${({ theme }) => theme.font.body};
`;

const Submit = styled.button`
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  font-weight: 700;
  font-size: 1.05rem;
  font-family: ${({ theme }) => theme.font.heading};
  border-radius: 7px;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  box-shadow: 0 0 10px #FFC30033;
  transition: background 0.3s, box-shadow 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.card};
    box-shadow: 0 0 16px #7C3F0044;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2.5rem;
`;

const SocialLink = styled.a`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.button};
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// ===== MAIN APP =====
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParallaxBg />
      <Nav>
        <NavList>
          {navSections.map(sec =>
            <li key={sec.id}>
              <NavLink href={`#${sec.id}`}>{sec.name}</NavLink>
            </li>
          )}
        </NavList>
      </Nav>
      <HomeSection id="home">
        <Tagline>
          Robotics Developer&nbsp;|&nbsp;IoT Engineer&nbsp;|&nbsp;Maker of Smart Systems
        </Tagline>
        <Summary>
          Building intelligent machines that sense, think, and act.
        </Summary>
        <ResumeBtn href="/resume.pdf" download>
          Download Résumé
        </ResumeBtn>
      </HomeSection>
      <AboutSection id="about">
        <AboutTitle>About Me</AboutTitle>
        <Bio>
          Hi, I'm Krishiv Rungta — an Arduino enthusiast and robotics hobbyist passionate about building smart automation systems. With hands-on experience in creating IoT devices and experimenting with machine learning, I love prototyping intelligent robots and electronic gadgets. I'm currently expanding my skills in Raspberry Pi and computer vision, and enjoy turning ideas into real-world, automated solutions.
        </Bio>
      </AboutSection>
      <ProjectsSection id="projects">
        <ProjectsTitle>Projects</ProjectsTitle>
        <Grid>
          {projects.map((p, idx) => (
            <Card key={p.title}>
              <ImgHolder>{p.img}</ImgHolder>
              <ProjectTitle>{p.title}</ProjectTitle>
              <Desc>{p.desc}</Desc>
              <ViewMore href={p.link}>View More</ViewMore>
            </Card>
          ))}
        </Grid>
      </ProjectsSection>
      <BlogSection id="blog">
        <BlogTitle>Blog / Notes</BlogTitle>
        {posts.map((p, idx) => (
          <Post key={idx}>
            <PostTitle>{p.title}</PostTitle>
            <PostBody>{p.body}</PostBody>
          </Post>
        ))}
      </BlogSection>
      <TechSection id="tech">
        <TechTitle>Tech Stack</TechTitle>
        <BadgeList>
          {stack.map(s => (
            <Badge key={s}>{s}</Badge>
          ))}
        </BadgeList>
      </TechSection>
      <ContactSection id="contact">
        <ContactTitle>Contact / Collaborate</ContactTitle>
        <Form action="mailto:krishiv.rungta@email.com" method="POST" encType="text/plain">
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <TextArea name="message" placeholder="Your Message" required />
          <Submit type="submit">Send Message</Submit>
        </Form>
        <Socials>
          <SocialLink href="https://github.com/KrishivRungta" target="_blank" rel="noopener"><FaGithub /></SocialLink>
          <SocialLink href="https://linkedin.com/in/krishivrungta" target="_blank" rel="noopener"><FaLinkedin /></SocialLink>
          <SocialLink href="https://youtube.com/@krishivrungta" target="_blank" rel="noopener"><FaYoutube /></SocialLink>
        </Socials>
      </ContactSection>
    </ThemeProvider>
  );
}
