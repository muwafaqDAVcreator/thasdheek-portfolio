import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import {
  ArrowRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Edit3,
  Eye,
  EyeOff,
  FileText,
  Filter,
  GripVertical,
  LayoutDashboard,
  Lock,
  Mail,
  MapPin,
  Moon,
  Pencil,
  Phone,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Sun,
  Trash2,
  Upload,
  UserRound,
  Wrench,
  X
} from "lucide-react";
import "./styles.css";

const ASSETS = {
  photo: "/assets/thasdheeque-profile.jpeg",
  certificate: "/assets/C201- MOHAMED THASDHEEQUE.pdf",
  cv: "/assets/Thasdheeque CV - QS.pdf"
};

const blankProject = {
  name: "",
  location: "",
  category: "Joinery",
  description: "",
  tags: "",
  image: "",
  value: "",
  featured: true,
  published: true,
  order: 1
};

const seedData = {
  hero: {
    name: "Mohamed Thasdheeque",
    title: "Joinery Estimator and Quantity Surveyor",
    summary:
      "Commercial fit-out and joinery specialist with 9+ years delivering BOQs, tender estimates, valuations, claims, and final accounts across GCC landmark projects.",
    photo: ASSETS.photo,
    primaryCta: "View Projects",
    secondaryCta: "Download CV"
  },
  about:
    "Mohamed Thasdheeque is a Quantity Surveyor with deep fit-out, joinery, and millwork experience across project lifecycles. His work spans detailed bill preparation from IFT drawings, material take-off, CCS Candy cost build-ups, interim applications, subcontractor claim review, variations, supplier negotiation, cost control, and final account settlement.",
  contact: {
    email: "mthasdheeque@gmail.com",
    phone: "+974 70200725",
    whatsapp: "+974 70200725",
    location: "Al Sadd Street, Doha",
    linkedIn: "www.linkedin.com/in/mohamed-thasdheeque-17645352"
  },
  tools: [
    {
      id: "tool-candy",
      name: "CCS Candy",
      description:
        "Estimating, BOQ forecasting, resource build-ups, cost codes, planning, and tender control.",
      level: 96,
      priority: 1,
      icon: "BarChart3",
      published: true
    },
    {
      id: "tool-bluebeam",
      name: "Bluebeam",
      description:
        "Digital measurement, markups, quantity take-off collaboration, and drawing review.",
      level: 90,
      priority: 2,
      icon: "FileText",
      published: true
    },
    {
      id: "tool-autocad",
      name: "AutoCAD",
      description:
        "2D drawing review, joinery detailing coordination, and measurement support.",
      level: 84,
      priority: 3,
      icon: "Building2",
      published: true
    }
  ],
  projects: [
    {
      id: "p-shura",
      name: "Shura Island Projects",
      location: "Saudi Arabia",
      category: "Hospitality",
      description:
        "Commercial joinery and fit-out estimating across high-value island hospitality packages.",
      tags: "HE2, HE3, HC1, HW4, BOQ, Tender",
      value: "Featured GCC development",
      image: "",
      featured: true,
      published: true,
      order: 1
    },
    {
      id: "p-amaala",
      name: "Amaala Ritz Carlton Triple Bay",
      location: "Saudi Arabia",
      category: "Hospitality",
      description:
        "Luxury resort joinery and fit-out commercial support from tender pricing through project control.",
      tags: "Luxury, Fit-out, Valuation",
      value: "Luxury hospitality",
      image: "",
      featured: true,
      published: true,
      order: 2
    },
    {
      id: "p-riyadh",
      name: "Riyadh Airport Lounge",
      location: "Riyadh",
      category: "Airport",
      description:
        "Airport lounge fit-out estimating, take-off, and supplier comparison for premium interior works.",
      tags: "Airport, Lounge, Joinery",
      value: "Airport fit-out",
      image: "",
      featured: true,
      published: true,
      order: 3
    },
    {
      id: "p-qiddiya",
      name: "Qiddiya Speed Park",
      location: "Saudi Arabia",
      category: "Entertainment",
      description:
        "Commercial estimating and tender coordination for a fast-moving entertainment destination package.",
      tags: "Tender, Cost Control, BOQ",
      value: "Mega project",
      image: "",
      featured: true,
      published: true,
      order: 4
    },
    {
      id: "p-wajh",
      name: "Al Wajh Airport",
      location: "Saudi Arabia",
      category: "Airport",
      description:
        "Quantity take-off, BOQ preparation, and commercial documentation for airport fit-out scope.",
      tags: "Airport, BOQ, Tender",
      value: "Airport development",
      image: "",
      featured: true,
      published: true,
      order: 5
    },
    {
      id: "p-qrail",
      name: "Q-Rail Green, Red & Gold Lines",
      location: "Qatar",
      category: "Transit",
      description:
        "Detailed BOQ and fit-out quantity surveying for rail packages delivered under Basic Elements Solutions.",
      tags: "Rail, Fit-out, Interim Payment",
      value: "QR 92 Million",
      image: "",
      featured: false,
      published: true,
      order: 6
    },
    {
      id: "p-hia",
      name: "Hamad International Airport",
      location: "Doha",
      category: "Airport",
      description:
        "Commercial fit-out support including material take-off, cost estimates, payments, and final accounts.",
      tags: "Airport, CCS Candy, Final Accounts",
      value: "QR 34 Million",
      image: "",
      featured: false,
      published: true,
      order: 7
    },
    {
      id: "p-oasis",
      name: "Doha Oasis",
      location: "Doha",
      category: "Mixed-use",
      description:
        "Fit-out quantity surveying package with estimate reporting and supplier price comparisons.",
      tags: "Mixed-use, Fit-out, RFQ",
      value: "QR 24 Million",
      image: "",
      featured: false,
      published: true,
      order: 8
    },
    {
      id: "p-messila",
      name: "128 Commercial Villa at Messila",
      location: "Qatar",
      category: "Residential",
      description:
        "Physical measurement, BOQs, invoices, RFQs, variations, and commercial offer support.",
      tags: "Villas, Variation, Tender",
      value: "QR 75 Million",
      image: "",
      featured: false,
      published: true,
      order: 9
    },
    {
      id: "p-hmc",
      name: "HMC Heart Hospital",
      location: "Qatar",
      category: "Healthcare",
      description:
        "Quotation, take-off, subcontractor bill checking, material orders, and variation claims.",
      tags: "Healthcare, Claims, Measurement",
      value: "QR 54 Million",
      image: "",
      featured: false,
      published: true,
      order: 10
    },
    {
      id: "p-stadium",
      name: "District Indoor Stadium",
      location: "Sri Lanka",
      category: "Sports",
      description:
        "Early-career QS role covering quotations, quantity take-off, measurement, and variation submissions.",
      tags: "Sports, Take-off, Quotation",
      value: "QR 4,640,000",
      image: "",
      featured: false,
      published: true,
      order: 11
    }
  ],
  shura: [
    { id: "sh-he2", name: "HE2", scope: "Hospitality element estimating package", published: true, order: 1 },
    { id: "sh-he3", name: "HE3", scope: "Joinery and fit-out package coordination", published: true, order: 2 },
    { id: "sh-hc1", name: "HC1", scope: "Commercial BOQ and valuation support", published: true, order: 3 },
    { id: "sh-hw4", name: "HW4", scope: "Tender measurement and package controls", published: true, order: 4 }
  ],
  experience: [
    {
      id: "exp-bes",
      company: "Basic Elements Solutions",
      role: "Leadership Quantity Surveyor",
      dates: "04/2018 - Present",
      projectValues: "QR 150M+ highlighted packages",
      responsibilities:
        "Q-Rail Green, Red & Gold Lines; Hamad International Airport; Doha Oasis. BOQs, CCS Candy breakdowns, interim payment applications, final accounts, subcontractor claims, cost control, purchase orders, inspection requests, and supplier negotiations.",
      published: true,
      order: 1
    },
    {
      id: "exp-fabrica",
      company: "Fabrica Trading & Contracting",
      role: "Quantity Surveyor",
      dates: "03/2016 - 03/2018",
      projectValues: "QR 75 Million",
      responsibilities:
        "128 Commercial Villa at Messila. Physical measurement, material take-off, BOQs, invoices, schedule revisions, RFQs, tender calculations, variations, and commercial offers.",
      published: true,
      order: 2
    },
    {
      id: "exp-thulathi",
      company: "Al Thulathi Trading & Contracting",
      role: "Junior Quantity Surveyor",
      dates: "02/2015 - 02/2016",
      projectValues: "QR 54 Million",
      responsibilities:
        "HMC Heart Hospital. Quotations, estimated take-off, site measurement, subcontractor bill checking, material orders, and variation coordination.",
      published: true,
      order: 3
    },
    {
      id: "exp-eco",
      company: "Eco Builders - Sri Lanka",
      role: "Quantity Surveyor",
      dates: "03/2013 - 11/2014",
      projectValues: "QR 4,640,000",
      responsibilities:
        "District Indoor Stadium. Quotations, quantities, material take-off, physical measurement, and variation submissions.",
      published: true,
      order: 4
    }
  ],
  certificates: [
    {
      id: "cert-c201",
      name: "C201 - Construction Estimating & Valuations",
      registration: "C201/05/2026/035",
      date: "May 2026",
      description:
        "Completed training covering Introduction to Candy, Candy User Interface, Estimating, Bill Creation, Worksheets, Resources, Subcontract Adjudicator, Post Tender Control, Cost Codes & Group Codes, Task Codes, and Forecasting the BOQ using Candy Planning.",
      file: ASSETS.certificate,
      published: true,
      order: 1
    }
  ],
  skills: [
    { id: "sk-est", name: "Cost Estimation", level: 96, published: true, order: 1 },
    { id: "sk-boq", name: "BOQ Preparation", level: 95, published: true, order: 2 },
    { id: "sk-takeoff", name: "Material Take-off", level: 94, published: true, order: 3 },
    { id: "sk-claims", name: "Claims and Variations", level: 90, published: true, order: 4 },
    { id: "sk-tender", name: "Tender Documentation", level: 92, published: true, order: 5 },
    { id: "sk-control", name: "Cost Control", level: 91, published: true, order: 6 },
    { id: "sk-negotiation", name: "Supplier Negotiation", level: 88, published: true, order: 7 },
    { id: "sk-payment", name: "Interim Payments & Final Accounts", level: 93, published: true, order: 8 }
  ],
  messages: [
    {
      id: "msg-demo",
      name: "Demo Inquiry",
      email: "client@example.com",
      subject: "Airport lounge package estimate",
      message: "Please share availability for a joinery tender review.",
      status: "New",
      createdAt: "2026-09-17"
    }
  ]
};

const iconMap = { BarChart3, FileText, Building2, BriefcaseBusiness, Award, Wrench };
const API_URL = 'http://localhost:3000/api';

function usePortfolioData() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem("thasdheeque-cms-data");
      return saved ? { ...seedData, ...JSON.parse(saved) } : seedData;
    } catch {
      return seedData;
    }
  });

  // Fetch data from backend API on mount
  useEffect(() => {
    const withId = (item) => ({ ...item, id: item._id });
    const byOrder = (a, b) => (a.order ?? 0) - (b.order ?? 0);
    const byPriority = (a, b) => (a.priority ?? 0) - (b.priority ?? 0);

    const fetchData = async () => {
      try {
        const [settingsRes, projRes, skillRes, toolRes, shuraRes, expRes, certRes] = await Promise.all([
          fetch(`${API_URL}/settings`),
          fetch(`${API_URL}/projects`),
          fetch(`${API_URL}/skills`),
          fetch(`${API_URL}/tools`),
          fetch(`${API_URL}/shura`),
          fetch(`${API_URL}/experience`),
          fetch(`${API_URL}/certificates`)
        ]);

        const settings = settingsRes.ok ? await settingsRes.json() : null;
        const projects = projRes.ok ? await projRes.json() : [];
        const skills = skillRes.ok ? await skillRes.json() : [];
        const tools = toolRes.ok ? await toolRes.json() : [];
        const shura = shuraRes.ok ? await shuraRes.json() : [];
        const experience = expRes.ok ? await expRes.json() : [];
        const certificates = certRes.ok ? await certRes.json() : [];

        setData((prev) => ({
          ...prev,
          ...(settings ? { hero: { ...prev.hero, ...settings.hero }, about: settings.about || prev.about, contact: { ...prev.contact, ...settings.contact } } : {}),
          ...(projects.length
            ? {
                projects: projects
                  .filter((p) => p.published)
                  .map((p) => ({ ...withId(p), tags: Array.isArray(p.tags) ? p.tags.join(", ") : p.tags }))
                  .sort(byOrder)
              }
            : {}),
          ...(skills.length ? { skills: skills.filter((s) => s.published).map(withId).sort(byOrder) } : {}),
          ...(tools.length ? { tools: tools.filter((t) => t.published).map(withId).sort(byPriority) } : {}),
          ...(shura.length ? { shura: shura.filter((s) => s.published).map(withId).sort(byOrder) } : {}),
          ...(experience.length ? { experience: experience.filter((e) => e.published).map(withId).sort(byOrder) } : {}),
          ...(certificates.length ? { certificates: certificates.filter((c) => c.published).map(withId).sort(byOrder) } : {})
        }));
      } catch (err) {
        console.error('Error fetching from API:', err);
        // Falls back to seedData if API fails
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("thasdheeque-cms-data", JSON.stringify(data));
  }, [data]);

  const update = (patch) => setData((current) => ({ ...current, ...patch }));
  const reset = () => {
    localStorage.removeItem("thasdheeque-cms-data");
    setData(seedData);
  };

  return { data, update, reset };
}

function ThreeBlueprint() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return undefined;
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(4.5, 3.2, 5.2);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const grid = new THREE.GridHelper(5.6, 16, 0x4fa3ff, 0x335066);
    grid.position.y = -0.72;
    group.add(grid);

    const board = new THREE.Mesh(
      new THREE.BoxGeometry(4.2, 0.08, 2.6),
      new THREE.MeshStandardMaterial({ color: 0x0c1720, roughness: 0.55, metalness: 0.2 })
    );
    board.position.y = -0.75;
    group.add(board);

    const glass = new THREE.Mesh(
      new THREE.BoxGeometry(3.7, 0.05, 2.1),
      new THREE.MeshPhysicalMaterial({
        color: 0x1e90ff,
        transparent: true,
        opacity: 0.16,
        roughness: 0.1,
        metalness: 0.1
      })
    );
    glass.position.y = -0.65;
    group.add(glass);

    const materials = [
      new THREE.MeshStandardMaterial({ color: 0xf7c873, roughness: 0.48 }),
      new THREE.MeshStandardMaterial({ color: 0x5bd7d0, roughness: 0.38 }),
      new THREE.MeshStandardMaterial({ color: 0xf2f6f7, roughness: 0.5 })
    ];
    const blocks = [
      [-1.2, -0.24, -0.35, 0.62, 0.95, 0.54, 0],
      [-0.38, -0.1, -0.12, 0.55, 1.25, 0.46, 1],
      [0.36, 0.02, -0.24, 0.75, 1.5, 0.62, 0],
      [1.18, -0.3, 0.2, 0.52, 0.82, 0.5, 2]
    ];
    blocks.forEach(([x, y, z, w, h, d, m]) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), materials[m]);
      mesh.position.set(x, y, z);
      group.add(mesh);
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(mesh.geometry),
        new THREE.LineBasicMaterial({ color: 0x071017, transparent: true, opacity: 0.5 })
      );
      mesh.add(edges);
    });

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x78f5ff, transparent: true, opacity: 0.9 });
    for (let i = 0; i < 5; i += 1) {
      const points = [
        new THREE.Vector3(-1.85 + i * 0.78, -0.57, 1.14),
        new THREE.Vector3(-1.48 + i * 0.78, -0.57, 0.82),
        new THREE.Vector3(-1.14 + i * 0.78, -0.57, 1.02)
      ];
      group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), lineMaterial));
    }

    scene.add(new THREE.AmbientLight(0xffffff, 0.65));
    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(2, 4, 3);
    scene.add(key);
    const accent = new THREE.PointLight(0x48d8ff, 2.2, 7);
    accent.position.set(-2, 1.5, 2.2);
    scene.add(accent);

    let frame;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      group.rotation.y += 0.004;
      group.rotation.x = Math.sin(Date.now() * 0.0008) * 0.035;
      renderer.render(scene, camera);
    };
    animate();

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-scene" ref={mountRef} aria-label="Interactive 3D construction estimating model" />;
}

function Stat({ value, label }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function PublicSite({ data, onAdminOpen, theme, setTheme }) {
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [sent, setSent] = useState(false);
  const projects = data.projects.filter((item) => item.published).sort((a, b) => a.order - b.order);
  const featured = projects.filter((item) => item.featured);
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);
  const tools = data.tools.filter((item) => item.published).sort((a, b) => a.priority - b.priority);
  const skills = data.skills.filter((item) => item.published).sort((a, b) => a.order - b.order);
  const experience = data.experience.filter((item) => item.published).sort((a, b) => a.order - b.order);
  const certificate = data.certificates.find((item) => item.published);

  const submitMessage = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <nav className="nav">
        <a className="brand" href="#top">
          <span>MT</span>
          <strong>Thasdheeque</strong>
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#tools">Tools</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> GCC fit-out commercial specialist</p>
          <h1>{data.hero.name}</h1>
          <h2>{data.hero.title}</h2>
          <p>{data.hero.summary}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              {data.hero.primaryCta} <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href={data.hero.cvFile || ASSETS.cv} target="_blank" rel="noreferrer">
              {data.hero.secondaryCta} <FileText size={18} />
            </a>
          </div>
          <div className="stats-row">
            <Stat value="9+" label="Years Fit-out & Joinery" />
            <Stat value="QR 279M+" label="CV Project Value" />
            <Stat value="11" label="Highlighted Projects" />
          </div>
        </div>
        <div className="hero-visual">
          <ThreeBlueprint />
          <img src={data.hero.photo || ASSETS.photo} alt="Mohamed Thasdheeque" />
        </div>
      </header>

      <main>
        <section className="section intro-grid" id="about">
          <div>
            <p className="eyebrow">Profile</p>
            <h2>Commercial clarity for joinery-heavy project teams.</h2>
          </div>
          <p>{data.about}</p>
        </section>

        <section className="workflow section">
          {["Estimate", "BOQ", "Tender", "Valuation", "Final Account"].map((item, index) => (
            <div className="workflow-step" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Project Showcase</p>
              <h2>Landmark fit-out, joinery, airport, rail, and hospitality work.</h2>
            </div>
            <div className="filter-row">
              {categories.map((category) => (
                <button className={filter === category ? "active" : ""} type="button" key={category} onClick={() => setFilter(category)}>
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.id} onClick={() => setActiveProject(project)}>
                <div className="project-card-top">
                  <span>{project.category}</span>
                  <strong>{project.value}</strong>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.split(",").map((tag) => (
                    <span key={tag.trim()}>{tag.trim()}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shura-band">
          <div>
            <p className="eyebrow">Shura Island Focus</p>
            <h2>Sub-project control across HE2, HE3, HC1, and HW4.</h2>
          </div>
          <div className="shura-grid">
            {data.shura.filter((item) => item.published).map((item) => (
              <div className="shura-item" key={item.id}>
                <strong>{item.name}</strong>
                <span>{item.scope}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="tools">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Specialist Tools</p>
              <h2>Estimation technology built into the workflow.</h2>
            </div>
          </div>
          <div className="tool-grid">
            {tools.map((tool) => {
              const Icon = iconMap[tool.icon] || Wrench;
              return (
                <article className="tool-card" key={tool.id}>
                  <Icon size={26} />
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <div className="meter"><span style={{ width: `${tool.level}%` }} /></div>
                  <small>{tool.level}% priority proficiency</small>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section skill-certificate">
          <div>
            <p className="eyebrow">Competencies</p>
            <h2>QS strengths for tender-stage and live project control.</h2>
            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill.id}>
                  <span>{skill.name}</span>
                  <strong>{skill.level}%</strong>
                  <div className="meter"><span style={{ width: `${skill.level}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
          {certificate && (
            <a className="certificate-card" href={certificate.file} target="_blank" rel="noreferrer">
              <Award size={34} />
              <span>Certificate Highlight</span>
              <h3>{certificate.name}</h3>
              <p>Reg. No: {certificate.registration}</p>
              <p>{certificate.date}</p>
              <small>{certificate.description}</small>
            </a>
          )}
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Experience Timeline</p>
              <h2>From measurement and quotations to leadership QS delivery.</h2>
            </div>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.id}>
                <span>{item.dates}</span>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.projectValues}</p>
                <small>{item.responsibilities}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Ready for fit-out, joinery, and commercial package discussions.</h2>
            <div className="contact-list">
              <a href={`mailto:${data.contact.email}`}><Mail size={18} />{data.contact.email}</a>
              <a href={`tel:${data.contact.phone}`}><Phone size={18} />{data.contact.phone}</a>
              <a href={`https://wa.me/${data.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"><Phone size={18} />WhatsApp</a>
              <span><MapPin size={18} />{data.contact.location}</span>
              <a href={`https://${data.contact.linkedIn}`} target="_blank" rel="noreferrer"><UserRound size={18} />LinkedIn Profile</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={submitMessage}>
            <input required placeholder="Name" />
            <input required type="email" placeholder="Email" />
            <input required placeholder="Subject" />
            <textarea required placeholder="Message" rows="5" />
            <button className="primary-button" type="submit">Send Inquiry <ArrowRight size={18} /></button>
            {sent && <p className="success-text">Inquiry captured in the prototype form state.</p>}
          </form>
        </section>
      </main>

      {activeProject && (
        <Modal title={activeProject.name} onClose={() => setActiveProject(null)}>
          <p>{activeProject.description}</p>
          <div className="modal-meta">
            <span>{activeProject.location}</span>
            <span>{activeProject.category}</span>
            <span>{activeProject.value}</span>
          </div>
          <div className="tag-row">
            {activeProject.tags.split(",").map((tag) => <span key={tag}>{tag.trim()}</span>)}
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({ title, children, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target.className.includes("modal-backdrop")) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={handleBackdropClick}>
      <div className="modal">
        <button className="icon-button modal-close" type="button" onClick={(e) => {e.stopPropagation(); onClose();}} aria-label="Close">
          <X size={18} />
        </button>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}

function AdminPanel({ data, update, reset, onClose }) {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("thasdheeque-admin") === "yes");
  const [tab, setTab] = useState("dashboard");
  const [search, setSearch] = useState("");
  const [confirmAction, setConfirmAction] = useState(null);
  const [loginError, setLoginError] = useState("");

  const handleResetWithConfirm = () => {
    setConfirmAction({
      title: "Reset All Data?",
      message: "This will delete all your changes and restore the default content. This action cannot be undone.",
      action: reset,
      actionLabel: "Reset"
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("thasdheeque-admin");
    setLoggedIn(false);
  };

  const login = (event) => {
    event.preventDefault();
    setLoginError("");
    const form = new FormData(event.currentTarget);
    const username = form.get("username")?.trim();
    const password = form.get("password")?.trim();

    // Admin credentials
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("thasdheeque-admin", "yes");
      setLoggedIn(true);
    } else {
      setLoginError("Invalid username or password");
    }
  };

  if (!loggedIn) {
    return (
      <div className="admin-auth">
        <form onSubmit={login}>
          <ShieldCheck size={42} />
          <h1>Admin Panel</h1>
          <p>Enter your credentials to access the admin dashboard.</p>
          <input name="username" type="text" placeholder="Username" required />
          <input name="password" type="password" placeholder="Password" required />
          {loginError && <p style={{ color: "var(--danger)", fontSize: "0.9rem", margin: "0", textAlign: "center" }}>{loginError}</p>}
          <button className="primary-button" type="submit">Unlock Dashboard</button>
          <button className="secondary-button" type="button" onClick={onClose}>Back to Website</button>
        </form>
      </div>
    );
  }

  const counts = {
    projects: data.projects.length,
    experience: data.experience.length,
    skills: data.skills.length,
    tools: data.tools.length,
    certificates: data.certificates.length,
    messages: data.messages.length
  };

  const tabs = [
    ["dashboard", LayoutDashboard, "Dashboard"],
    ["hero", UserRound, "Hero"],
    ["projects", BriefcaseBusiness, "Projects"],
    ["shura", Building2, "Shura"],
    ["tools", Wrench, "Tools"],
    ["experience", BarChart3, "Experience"],
    ["certificates", Award, "Certificates"],
    ["skills", Sparkles, "Skills"],
    ["contact", Mail, "Contact"],
    ["messages", FileText, "Messages"]
  ];

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-logo"><span>MT</span><strong>CMS</strong></div>
        {tabs.map(([key, Icon, label]) => (
          <button className={tab === key ? "active" : ""} type="button" key={key} onClick={() => setTab(key)}>
            <Icon size={18} /> {label}
          </button>
        ))}
      </aside>
      <section className="admin-main">
        <header className="admin-topbar">
          <div>
            <p className="eyebrow">Admin Panel</p>
            <h1>{tabs.find(([key]) => key === tab)?.[2]}</h1>
          </div>
          <div className="admin-actions">
            <label className="search-box"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search content" /></label>
            <button className="secondary-button" type="button" onClick={onClose}>View Site</button>
            <button className="danger-button" type="button" onClick={handleResetWithConfirm}>Reset Seed</button>
            <button className="secondary-button" type="button" onClick={handleLogout}>Logout</button>
          </div>
        </header>
        {tab === "dashboard" && <Dashboard counts={counts} data={data} />}
        {tab === "hero" && <HeroEditor data={data} update={update} />}
        {tab === "projects" && <CollectionEditor name="projects" fields={projectFields} template={blankProject} data={data} update={update} search={search} />}
        {tab === "shura" && <CollectionEditor name="shura" fields={shuraFields} template={{ name: "", scope: "", published: true, order: 1 }} data={data} update={update} search={search} />}
        {tab === "tools" && <CollectionEditor name="tools" fields={toolFields} template={{ name: "", description: "", icon: "Wrench", level: 75, priority: 1, published: true }} data={data} update={update} search={search} />}
        {tab === "experience" && <CollectionEditor name="experience" fields={experienceFields} template={{ company: "", role: "", dates: "", projectValues: "", responsibilities: "", published: true, order: 1 }} data={data} update={update} search={search} />}
        {tab === "certificates" && <CollectionEditor name="certificates" fields={certificateFields} template={{ name: "", registration: "", date: "", description: "", file: "", published: true, order: 1 }} data={data} update={update} search={search} />}
        {tab === "skills" && <CollectionEditor name="skills" fields={skillFields} template={{ name: "", level: 80, published: true, order: 1 }} data={data} update={update} search={search} />}
        {tab === "contact" && <ContactEditor data={data} update={update} />}
        {tab === "messages" && <MessagesEditor data={data} update={update} search={search} />}
      </section>
      {confirmAction && (
        <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && setConfirmAction(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{confirmAction.title}</h3>
            <p>{confirmAction.message}</p>
            <div style={{ display: "flex", gap: "12px", marginTop: "24px", justifyContent: "flex-end" }}>
              <button className="secondary-button" type="button" onClick={() => setConfirmAction(null)}>Cancel</button>
              <button className="danger-button" type="button" onClick={() => { confirmAction.action(); setConfirmAction(null); }}>{confirmAction.actionLabel}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Dashboard({ counts, data }) {
  return (
    <>
      <div className="dashboard-grid">
        {Object.entries(counts).map(([key, value]) => (
          <div className="dash-card" key={key}>
            <span>{key}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <div className="admin-card">
        <h2>Publishing Snapshot</h2>
        <div className="publish-grid">
          {["projects", "tools", "experience", "certificates", "skills"].map((key) => (
            <div key={key}>
              <span>{key}</span>
              <strong>{data[key].filter((item) => item.published).length} published</strong>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function HeroEditor({ data, update }) {
  const [draft, setDraft] = useState(data);
  const save = (event) => {
    event.preventDefault();
    update({ hero: draft.hero, about: draft.about });
  };
  return (
    <form className="admin-card form-grid" onSubmit={save}>
      <Field label="Name" value={draft.hero.name} onChange={(value) => setDraft({ ...draft, hero: { ...draft.hero, name: value } })} />
      <Field label="Title" value={draft.hero.title} onChange={(value) => setDraft({ ...draft, hero: { ...draft.hero, title: value } })} />
      <Field label="Summary" area value={draft.hero.summary} onChange={(value) => setDraft({ ...draft, hero: { ...draft.hero, summary: value } })} />
      <Field label="Profile photo URL" value={draft.hero.photo} onChange={(value) => setDraft({ ...draft, hero: { ...draft.hero, photo: value } })} />
      <Field label="Primary CTA" value={draft.hero.primaryCta} onChange={(value) => setDraft({ ...draft, hero: { ...draft.hero, primaryCta: value } })} />
      <Field label="Secondary CTA" value={draft.hero.secondaryCta} onChange={(value) => setDraft({ ...draft, hero: { ...draft.hero, secondaryCta: value } })} />
      <Field label="About/Profile" area value={draft.about} onChange={(value) => setDraft({ ...draft, about: value })} />
      <button className="primary-button" type="submit"><Check size={18} /> Save Hero</button>
    </form>
  );
}

const projectFields = [
  ["name", "Project name"],
  ["location", "Location"],
  ["category", "Category"],
  ["value", "Project value"],
  ["tags", "Tags"],
  ["description", "Description", "area"],
  ["image", "Image/visual URL"],
  ["order", "Project order", "number"]
];
const shuraFields = [["name", "Sub-project"], ["scope", "Scope"], ["order", "Order", "number"]];
const toolFields = [["name", "Tool name"], ["description", "Description", "area"], ["icon", "Icon"], ["level", "Skill level", "number"], ["priority", "Priority", "number"]];
const experienceFields = [["company", "Company"], ["role", "Role"], ["dates", "Dates"], ["projectValues", "Project values"], ["responsibilities", "Responsibilities", "area"], ["order", "Order", "number"]];
const certificateFields = [["name", "Certificate name"], ["registration", "Registration number"], ["date", "Date"], ["description", "Description", "area"], ["file", "PDF/image upload URL"], ["order", "Order", "number"]];
const skillFields = [["name", "Skill"], ["level", "Level", "number"], ["order", "Order", "number"]];

function CollectionEditor({ name, fields, template, data, update, search }) {
  const [editing, setEditing] = useState(null);
  const [draft, setDraft] = useState(null);
  const collection = data[name] || [];
  const filtered = collection.filter((item) => JSON.stringify(item).toLowerCase().includes(search.toLowerCase()));

  const open = (item = null) => {
    setEditing(item?.id || "new");
    setDraft(item ? { ...item } : { ...template, id: `${name}-${Date.now()}`, order: collection.length + 1 });
  };
  const save = (event) => {
    event.preventDefault();
    const exists = collection.some((item) => item.id === draft.id);
    const next = exists ? collection.map((item) => (item.id === draft.id ? draft : item)) : [...collection, draft];
    update({ [name]: next });
    setEditing(null);
  };
  const remove = (id) => {
    if (confirm("Delete this item?")) update({ [name]: collection.filter((item) => item.id !== id) });
  };
  const toggle = (item) => update({ [name]: collection.map((entry) => (entry.id === item.id ? { ...entry, published: !entry.published } : entry)) });
  const move = (item, direction) => {
    update({ [name]: collection.map((entry) => (entry.id === item.id ? { ...entry, order: Number(entry.order || 0) + direction } : entry)).sort((a, b) => a.order - b.order) });
  };

  return (
    <div className="admin-card">
      <div className="table-toolbar">
        <h2>{name}</h2>
        <button className="primary-button" type="button" onClick={() => open()}><Plus size={18} /> Add</button>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Name</th>
              <th>Status</th>
              <th>Featured</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.sort((a, b) => (a.order || a.priority || 0) - (b.order || b.priority || 0)).map((item) => (
              <tr key={item.id}>
                <td><GripVertical size={16} /> {item.order || item.priority || "-"}</td>
                <td><strong>{item.name || item.role || item.company}</strong><small>{item.category || item.dates || item.registration}</small></td>
                <td><button className="tiny-button" type="button" onClick={() => toggle(item)}>{item.published ? <Eye size={14} /> : <EyeOff size={14} />}{item.published ? "Published" : "Hidden"}</button></td>
                <td>{Object.hasOwn(item, "featured") ? (item.featured ? "Yes" : "No") : "-"}</td>
                <td className="row-actions">
                  <button className="icon-button" type="button" onClick={() => move(item, -1)} aria-label="Move up"><ChevronDown className="rotate" size={16} /></button>
                  <button className="icon-button" type="button" onClick={() => move(item, 1)} aria-label="Move down"><ChevronDown size={16} /></button>
                  <button className="icon-button" type="button" onClick={() => open(item)} aria-label="Edit"><Pencil size={16} /></button>
                  <button className="icon-button danger" type="button" onClick={() => remove(item.id)} aria-label="Delete"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
            {!filtered.length && <tr><td colSpan="5" className="empty-state">No matching items.</td></tr>}
          </tbody>
        </table>
      </div>
      {editing && (
        <Modal title={editing === "new" ? `Add ${name}` : `Edit ${name}`} onClose={() => setEditing(null)}>
          <form className="form-grid" onSubmit={save}>
            {fields.map(([key, label, type]) => (
              <Field key={key} label={label} area={type === "area"} type={type === "number" ? "number" : "text"} value={draft[key] ?? ""} onChange={(value) => setDraft({ ...draft, [key]: type === "number" ? Number(value) : value })} />
            ))}
            {Object.hasOwn(draft, "featured") && <Toggle label="Featured" checked={draft.featured} onChange={(value) => setDraft({ ...draft, featured: value })} />}
            <Toggle label="Published" checked={draft.published} onChange={(value) => setDraft({ ...draft, published: value })} />
            <label className="upload-hint"><Upload size={16} /> Upload fields currently accept a public URL/path. Connect storage when adding a real backend.</label>
            <button className="primary-button" type="submit"><Check size={18} /> Save</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

function ContactEditor({ data, update }) {
  const [draft, setDraft] = useState(data.contact);
  const save = (event) => {
    event.preventDefault();
    update({ contact: draft });
  };
  return (
    <form className="admin-card form-grid" onSubmit={save}>
      {Object.entries(draft).map(([key, value]) => (
        <Field key={key} label={key} value={value} onChange={(next) => setDraft({ ...draft, [key]: next })} />
      ))}
      <button className="primary-button" type="submit"><Check size={18} /> Save Contact</button>
    </form>
  );
}

function MessagesEditor({ data, update, search }) {
  const messages = data.messages.filter((item) => JSON.stringify(item).toLowerCase().includes(search.toLowerCase()));
  const setStatus = (id, status) => update({ messages: data.messages.map((item) => (item.id === id ? { ...item, status } : item)) });
  return (
    <div className="admin-card">
      <div className="table-wrap">
        <table>
          <thead><tr><th>Sender</th><th>Subject</th><th>Status</th><th>Message</th></tr></thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id}>
                <td><strong>{message.name}</strong><small>{message.email}</small></td>
                <td>{message.subject}</td>
                <td>
                  <select value={message.status} onChange={(event) => setStatus(message.id, event.target.value)}>
                    <option>New</option>
                    <option>Read</option>
                    <option>Archived</option>
                  </select>
                </td>
                <td>{message.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, area = false, type = "text" }) {
  return (
    <label className="field">
      <span>{label}</span>
      {area ? (
        <textarea value={value} onChange={(event) => onChange(event.target.value)} required rows="4" />
      ) : (
        <input type={type} value={value} onChange={(event) => onChange(event.target.value)} required />
      )}
    </label>
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
      <span>{label}</span>
    </label>
  );
}

function App() {
  const { data, update, reset } = usePortfolioData();
  const [view, setView] = useState(location.hash === "#admin" ? "admin" : "site");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return view === "admin" ? (
    <AdminPanel data={data} update={update} reset={reset} onClose={() => setView("site")} />
  ) : (
    <PublicSite data={data} onAdminOpen={() => setView("admin")} theme={theme} setTheme={setTheme} />
  );
}

createRoot(document.getElementById("root")).render(<App />);
