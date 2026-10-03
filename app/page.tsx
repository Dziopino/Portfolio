"use client";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Qualifications from './components/Qualifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-950">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <TechStack />
                <Projects />
                <Qualifications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
