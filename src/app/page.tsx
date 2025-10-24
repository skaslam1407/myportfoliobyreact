'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Palette, Smartphone, Sparkles, ArrowRight, Star, Zap, Globe, Server, GitBranch, Wrench } from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const skills = [
    { name: 'React/Next.js', icon: Code, level: 95, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js/Express', icon: Zap, level: 90, color: 'from-green-400 to-emerald-500' },
    { name: 'PHP/Laravel', icon: Server, level: 92, color: 'from-purple-400 to-pink-500' },
    { name: 'Python/Django', icon: Code, level: 85, color: 'from-blue-400 to-indigo-500' },
    { name: 'MySQL/MongoDB', icon: Database, level: 88, color: 'from-orange-400 to-red-500' },
    { name: 'JavaScript/jQuery', icon: Code, level: 95, color: 'from-yellow-400 to-orange-500' },
    { name: 'HTML/CSS/Tailwind', icon: Palette, level: 93, color: 'from-pink-400 to-rose-500' },
    { name: 'Git/GitHub', icon: GitBranch, level: 90, color: 'from-gray-400 to-gray-600' }
  ]

  const projects = [
    {
      title: 'Enterprise E-Commerce Platform',
      description: 'Large-scale e-commerce solution serving 100K+ daily users with Laravel, React, and microservices architecture.',
      tech: ['Laravel', 'React', 'MySQL', 'Redis', 'Docker'],
      github: '#',
      demo: '#',
      gradient: 'from-purple-500 to-pink-500',
      icon: '🛍️'
    },
    {
      title: 'SaaS Project Management Tool',
      description: 'Multi-tenant SaaS platform with real-time collaboration, built with Next.js, Node.js, and PostgreSQL.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Socket.io', 'AWS'],
      github: '#',
      demo: '#',
      gradient: 'from-blue-500 to-cyan-500',
      icon: '📊'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Machine learning dashboard for data visualization and predictive analytics using Python and React.',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI', 'MongoDB'],
      github: '#',
      demo: '#',
      gradient: 'from-green-500 to-emerald-500',
      icon: '🤖'
    },
    {
      title: 'Real-time Chat Application',
      description: 'Scalable chat platform with WebSocket, Node.js, and MongoDB supporting millions of concurrent users.',
      tech: ['Node.js', 'Socket.io', 'MongoDB', 'Redis', 'Docker'],
      github: '#',
      demo: '#',
      gradient: 'from-orange-500 to-red-500',
      icon: '💬'
    },
    {
      title: 'Enterprise CRM System',
      description: 'Comprehensive CRM solution with Laravel, Vue.js, and complex business logic automation.',
      tech: ['Laravel', 'Vue.js', 'MySQL', 'Elasticsearch', 'Docker'],
      github: '#',
      demo: '#',
      gradient: 'from-indigo-500 to-purple-500',
      icon: '🏢'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with React Native, Node.js backend, and payment gateway integration.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      github: '#',
      demo: '#',
      gradient: 'from-teal-500 to-green-500',
      icon: '🏦'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 50%)`
          }}
        />
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center">
              <Sparkles className="mr-2" size={20} />
              Sekh Aslam Ali
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-400 transition-all duration-300 relative group ${
                    activeSection === section ? 'text-purple-400' : ''
                  }`}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform transition-transform duration-300 ${
                    activeSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 capitalize hover:bg-white/10 rounded-md transition-all duration-300 ${
                    activeSection === section ? 'text-purple-400 bg-white/10' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-8">
              <Sparkles className="mr-2 text-purple-400" size={16} />
              <span className="text-sm text-purple-300">10+ Years of Full-Stack Excellence</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Hi, I'm Sekh
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-white/90">Aslam Ali</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Seasoned Full-Stack Developer with 
            <span className="text-purple-400 font-semibold"> 10+ years</span> of experience building 
            <span className="text-pink-400 font-semibold"> scalable web solutions</span> across multiple platforms and technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Explore My Work
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-6 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 rounded-full transition-all duration-300"
            >
              Let's Connect
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a href="#" className="group">
              <div className="p-3 bg-white/10 rounded-full hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110">
                <Github size={24} className="text-white group-hover:text-purple-400" />
              </div>
            </a>
            <a href="#" className="group">
              <div className="p-3 bg-white/10 rounded-full hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={24} className="text-white group-hover:text-blue-400" />
              </div>
            </a>
            <a href="#" className="group">
              <div className="p-3 bg-white/10 rounded-full hover:bg-pink-500/20 transition-all duration-300 transform hover:scale-110">
                <Mail size={24} className="text-white group-hover:text-pink-400" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Unique Diagonal Layout */}
      <section id="about" className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">My Journey</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  I'm a passionate full-stack developer with over a decade of experience crafting robust, scalable web applications. 
                  My journey began with PHP and has evolved to encompass modern technologies like React, Node.js, and cloud architectures. 
                  I've worked across diverse industries, from startups to enterprise-level organizations.
                </p>
                <p className="text-white/80 leading-relaxed">
                  My expertise spans the entire development stack - from database design and backend APIs to responsive frontends and 
                  deployment strategies. I'm passionate about writing clean, maintainable code and mentoring fellow developers. 
                  When I'm not coding, I contribute to open-source projects and stay updated with emerging technologies.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20 backdrop-blur-sm">
                  <Globe className="text-blue-400 mb-3" size={32} />
                  <h4 className="font-bold text-blue-300 mb-2">Frontend Mastery</h4>
                  <p className="text-sm text-white/70">React, Next.js, Vue.js, JavaScript, jQuery, HTML5, CSS3, Tailwind</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20 backdrop-blur-sm">
                  <Zap className="text-green-400 mb-3" size={32} />
                  <h4 className="font-bold text-green-300 mb-2">Backend Excellence</h4>
                  <p className="text-sm text-white/70">Node.js, Express, PHP, Laravel, Python, Django, REST APIs</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                  <Database className="text-purple-400 mb-3" size={32} />
                  <h4 className="font-bold text-purple-300 mb-2">Database Expertise</h4>
                  <p className="text-sm text-white/70">MySQL, MongoDB, PostgreSQL, Redis, Database Design</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20 backdrop-blur-sm">
                  <Wrench className="text-orange-400 mb-3" size={32} />
                  <h4 className="font-bold text-orange-300 mb-2">DevOps & Tools</h4>
                  <p className="text-sm text-white/70">Git, GitHub, Docker, AWS, CI/CD, Linux, Agile</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-1 rounded-2xl">
                  <div className="bg-black p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      10+ Years Impact
                    </h3>
                    <div className="space-y-6">
                      <div className="text-center group">
                        <div className="text-4xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">100+</div>
                        <div className="text-white/60">Projects Delivered</div>
                      </div>
                      <div className="text-center group">
                        <div className="text-4xl font-bold text-pink-400 group-hover:scale-110 transition-transform duration-300">10+</div>
                        <div className="text-white/60">Years Experience</div>
                      </div>
                      <div className="text-center group">
                        <div className="text-4xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-300">50+</div>
                        <div className="text-white/60">Happy Clients</div>
                      </div>
                      <div className="text-center group">
                        <div className="text-4xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">5M+</div>
                        <div className="text-white/60">Users Impacted</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Comprehensive Tech Stack */}
      <section id="skills" className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Technical Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                <div className="relative bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg mr-3`}>
                      <skill.icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-bold">{skill.name}</h3>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-white/60">Proficiency</span>
                      <span className="text-xs font-bold text-white">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Diverse Portfolio */}
      <section id="projects" className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  <div className="p-8">
                    <div className="text-4xl mb-4">{project.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-white/10 text-white/80 hover:bg-white/20 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        className={`flex items-center text-white/80 hover:text-white transition-colors group/link`}
                      >
                        <Github size={18} className="mr-2 group-hover/link:scale-110 transition-transform" />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.demo} 
                        className={`flex items-center text-white/80 hover:text-white transition-colors group/link`}
                      >
                        <ExternalLink size={18} className="mr-2 group-hover/link:scale-110 transition-transform" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Professional Layout */}
      <section id="contact" className="py-32 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Let's Build Something Amazing</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to collaborate on your next project?
                </h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  With 10+ years of full-stack development experience, I bring deep technical expertise and 
                  problem-solving skills to every project. Whether you need a complex enterprise application, 
                  a scalable API, or a modern web interface, I'm here to help you achieve your goals.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="text-pink-400" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Email</div>
                    <div className="text-white">sekhaslamali@example.com</div>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <Github className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">GitHub</div>
                    <div className="text-white">github.com/sekhaslamali</div>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <Linkedin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">LinkedIn</div>
                    <div className="text-white">linkedin.com/in/sekhaslamali</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-xl opacity-20" />
              <div className="relative bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-purple-400 focus:ring-purple-400/20"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-purple-400 focus:ring-purple-400/20"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-purple-400 focus:ring-purple-400/20"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    Send Message
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="group">
              <div className="p-3 bg-white/10 rounded-full hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110">
                <Github size={20} className="text-white group-hover:text-purple-400" />
              </div>
            </a>
            <a href="#" className="group">
              <div className="p-3 bg-white/10 rounded-full hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={20} className="text-white group-hover:text-blue-400" />
              </div>
            </a>
            <a href="#" className="group">
              <div className="p-3 bg-white/10 rounded-full hover:bg-pink-500/20 transition-all duration-300 transform hover:scale-110">
                <Mail size={20} className="text-white group-hover:text-pink-400" />
              </div>
            </a>
          </div>
          <p className="text-white/60">
            © 2024 Sekh Aslam Ali. 10+ Years of Full-Stack Development Excellence
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}