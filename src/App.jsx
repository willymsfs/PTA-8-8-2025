import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Apple, Shirt, Scissors, Footprints, Home, Smartphone, Users, CheckCircle, Star } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import './App.css';

// Import images
import parentTeacherImage from './assets/rbrcdweKYkNY.jpg';
import healthyVsJunkImage from './assets/5r3ux6vgyViP.webp';
import foodChartImage from './assets/food_comparison_chart.png';
import neatUniformImage from './assets/8w6fWCuEeEd8.jpg';
import hygieneImage from './assets/s4MJToXDNXjX.png';
import footwearImage from './assets/d2joj8hJg7lj.jpg';
import homeworkImage from './assets/ZwWSqVVslA5d.jpg';
import screenTimeImage from './assets/A8IOfqxERUwm.jpg';
import mobileChartImage from './assets/mobile_impact_chart.png';
import conclusionImage from './assets/conclusion_image.png';

const App = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'intro', title: 'Introduction', icon: Users },
    { id: 'quality-food', title: 'Quality Food', icon: Apple },
    { id: 'neat-uniform', title: 'Neat Uniform', icon: Shirt },
    { id: 'good-hygiene', title: 'Good Hygiene', icon: Scissors },
    { id: 'proper-footwear', title: 'Proper Footwear', icon: Footprints },
    { id: 'parental-involvement', title: 'Parental Involvement', icon: Home },
    { id: 'no-mobiles', title: 'No Mobile Phones', icon: Smartphone },
    { id: 'conclusion', title: 'Conclusion', icon: Star }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="title-font pta-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              PTA Meeting
            </motion.h1>
            <div className="hidden md:flex space-x-6">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section.id 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <section.icon className="w-4 h-4 inline mr-2" />
                  {section.title}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="intro" className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold pta-primary mb-4">
              Parents and Teachers Association Meeting
            </h1>
            <p className="text-xl pta-accent mb-8">
              Working Together for Our Children's Well-being
            </p>
            <p className="text-lg text-gray-600 italic">
              A scientifically-backed approach to child well-being and development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="subtitle-font pta-primary mb-6">Meeting Agenda</h3>
              <div className="space-y-4">
                {sections.slice(1, -1).map((section, index) => (
                  <motion.div
                    key={section.id}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => scrollToSection(section.id)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <section.icon className="w-6 h-6 pta-accent mr-4" />
                    <span className="body-font">{section.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center"
            >
              <img 
                src={parentTeacherImage} 
                alt="Parent-teacher collaboration" 
                className="rounded-lg shadow-lg hover-scale w-full max-w-md"
              />
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <ChevronDown className="w-8 h-8 pta-accent mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Quality Food Section */}
      <section id="quality-food" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="title-font pta-primary text-center mb-12">Quality Food for Children</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Apple className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <h4 className="subtitle-font pta-accent mb-2">Junk Food Risks:</h4>
                      <p className="body-font text-gray-700">
                        High in sugar, unhealthy fats, and sodium while lacking essential nutrients. 
                        Examples include instant noodles (Maggie) and processed biscuits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <h4 className="subtitle-font pta-accent mb-2">Health Impacts:</h4>
                      <p className="body-font text-gray-700">
                        Contributes to childhood obesity, type 2 diabetes, heart problems, and weakened immunity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <h4 className="subtitle-font pta-accent mb-2">Cognitive Effects:</h4>
                      <p className="body-font text-gray-700">
                        Poor nutrition impairs brain development, concentration, and academic performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <motion.img 
                  src={healthyVsJunkImage} 
                  alt="Healthy vs Junk Food Comparison" 
                  className="rounded-lg shadow-lg w-full hover-scale"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img 
                  src={foodChartImage} 
                  alt="Nutritional Value Chart" 
                  className="rounded-lg shadow-lg w-full hover-scale"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neat Uniform Section */}
      <section id="neat-uniform" className="py-16 px-6 pta-gradient">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="title-font pta-primary text-center mb-12">Neat and Clean Uniform</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Shirt className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <h4 className="subtitle-font pta-accent mb-2">Hygiene and Health:</h4>
                      <p className="body-font text-gray-700">
                        Clean uniforms prevent accumulation of dirt, sweat, and bacteria, reducing the risk of skin irritations and infections.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Users className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <h4 className="subtitle-font pta-accent mb-2">Equality and Unity:</h4>
                      <p className="body-font text-gray-700">
                        Well-maintained uniforms minimize socio-economic disparities and foster a sense of belonging and school pride.
                      </p>
                    </div>
                  </div>

                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="subtitle-font pta-primary">Psychological Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 pta-accent mr-2" />
                          <span className="text-lg">Improved self-esteem and confidence</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 pta-accent mr-2" />
                          <span className="text-lg">Reduced peer pressure related to clothing</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 pta-accent mr-2" />
                          <span className="text-lg">Enhanced sense of responsibility</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex justify-center"
              >
                <img 
                  src={neatUniformImage} 
                  alt="Students in neat uniforms" 
                  className="rounded-lg shadow-lg max-w-md w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Good Hygiene Section */}
      <section id="good-hygiene" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="title-font pta-primary text-center mb-12">Good Hygiene Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Scissors className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <h4 className="subtitle-font pta-accent mb-2">Good Haircut & Well-Combed Hair:</h4>
                      <p className="body-font text-gray-700">
                        Prevents accumulation of dirt, oil, and parasites like lice. Reduces risk of scalp infections and skin irritations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <h4 className="subtitle-font pta-accent mb-2">Trimmed Nails:</h4>
                      <p className="body-font text-gray-700">
                        Crucial for preventing the spread of germs and infections. Long, dirty nails can harbor bacteria, fungi, and parasitic eggs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <h4 className="subtitle-font pta-accent mb-2">Self-Esteem & Confidence:</h4>
                      <p className="body-font text-gray-700">
                        Children who practice good personal grooming habits tend to have higher self-esteem and confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex justify-center"
              >
                <img 
                  src={hygieneImage} 
                  alt="Children's hygiene practices infographic" 
                  className="rounded-lg shadow-lg max-w-md w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proper Footwear Section */}
      <section id="proper-footwear" className="py-16 px-6 pta-gradient">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="title-font pta-primary text-center mb-12">Appropriate Footwear</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Footprints className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <h4 className="subtitle-font pta-accent mb-2">Healthy Foot Development:</h4>
                      <p className="body-font text-gray-700">
                        Children's feet are still developing, and ill-fitting shoes can impede healthy bone and muscle growth.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <h4 className="subtitle-font pta-accent mb-2">Importance of Socks:</h4>
                      <p className="body-font text-gray-700">
                        Socks absorb moisture, reduce friction, prevent blisters, and help regulate foot temperature.
                      </p>
                    </div>
                  </div>

                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="subtitle-font pta-primary">Proper Footwear Checklist</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 pta-accent mr-2" />
                          <span className="text-lg">Correct size with room for growth</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 pta-accent mr-2" />
                          <span className="text-lg">Flexible, non-slip soles for stability</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 pta-accent mr-2" />
                          <span className="text-lg">Breathable materials to prevent moisture</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 pta-accent mr-2" />
                          <span className="text-lg">Clean, intact socks of appropriate size</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex justify-center"
              >
                <img 
                  src={footwearImage} 
                  alt="Guide to proper children's footwear" 
                  className="rounded-lg shadow-lg max-w-md w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parental Involvement Section */}
      <section id="parental-involvement" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="title-font pta-primary text-center mb-12">Parental Involvement in Education</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Home className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <h4 className="subtitle-font pta-accent mb-2">Academic Achievement:</h4>
                      <p className="body-font text-gray-700">
                        Studies consistently show a strong correlation between parental involvement and higher academic achievement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Users className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <h4 className="subtitle-font pta-accent mb-2">Holistic Development:</h4>
                      <p className="body-font text-gray-700">
                        Children with involved parents demonstrate better social skills, enhanced self-esteem, and more positive attitudes towards learning.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-blue-50 border-blue-200 text-center">
                      <CardContent className="pt-6">
                        <div className="text-3xl font-bold pta-accent mb-2">81%</div>
                        <p className="text-sm">Higher likelihood of high school graduation</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-blue-50 border-blue-200 text-center">
                      <CardContent className="pt-6">
                        <div className="text-3xl font-bold pta-accent mb-2">40%</div>
                        <p className="text-sm">Fewer behavioral problems</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex justify-center"
              >
                <img 
                  src={homeworkImage} 
                  alt="Parents helping children with homework" 
                  className="rounded-lg shadow-lg max-w-md w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* No Mobile Phones Section */}
      <section id="no-mobiles" className="py-16 px-6 pta-gradient">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="title-font pta-primary text-center mb-12">No Mobile Phones for Children</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Smartphone className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <h4 className="subtitle-font pta-accent mb-2">Academic Performance:</h4>
                      <p className="body-font text-gray-700">
                        Mobile phones are a major source of distraction during study time, leading to reduced concentration and poorer academic outcomes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <h4 className="subtitle-font pta-accent mb-2">Physical Health:</h4>
                      <p className="body-font text-gray-700">
                        Excessive screen time disrupts sleep patterns, causes eye strain, and promotes a sedentary lifestyle.
                      </p>
                    </div>
                  </div>

                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="subtitle-font pta-primary">Supervising Studies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 pta-accent mr-2" />
                          <span className="text-lg">Create a distraction-free study environment</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 pta-accent mr-2" />
                          <span className="text-lg">Set clear rules for technology usage</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 pta-accent mr-2" />
                          <span className="text-lg">Actively engage in homework supervision</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <motion.img 
                  src={screenTimeImage} 
                  alt="Negative effects of screen time" 
                  className="rounded-lg shadow-lg w-full hover-scale"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img 
                  src={mobileChartImage} 
                  alt="Impact of Excessive Mobile Use Chart" 
                  className="rounded-lg shadow-lg w-full hover-scale"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="title-font pta-primary text-center mb-12">Conclusion and Action Steps</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Star className="w-6 h-6 pta-accent mr-4 mt-1" />
                    <div>
                      <p className="body-font text-gray-700">
                        Our children's well-being depends on a holistic approach that addresses nutrition, hygiene, appropriate attire, and balanced technology use.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="subtitle-font pta-primary">Recommended Actions</h4>
                    
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="pt-4">
                        <div className="flex items-center">
                          <Apple className="w-5 h-5 pta-accent mr-3" />
                          <span className="text-lg">Establish a school nutrition policy and provide healthy meal guidelines</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="pt-4">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 pta-accent mr-3" />
                          <span className="text-lg">Implement regular uniform and hygiene checks with positive reinforcement</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="pt-4">
                        <div className="flex items-center">
                          <Smartphone className="w-5 h-5 pta-accent mr-3" />
                          <span className="text-lg">Develop a school technology policy with clear guidelines</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="text-center">
                    <h3 className="subtitle-font pta-accent">Thank you for your participation!</h3>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex justify-center"
              >
                <img 
                  src={conclusionImage} 
                  alt="Collaboration between parents and teachers" 
                  className="rounded-lg shadow-lg max-w-md w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">
            © 2025 Parents and Teachers Association. Working together for our children's future.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

