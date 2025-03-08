import React, { useState, useEffect } from "react";
import { Star, Award, BookOpen, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const InspirationalWomenDay = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Set up auto-slide functionality
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === backgroundImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, []);

  // Background images from placeholders
  const backgroundImages = [
    "/api/placeholder/1920/1080",
    "/api/placeholder/1920/1080",
    "/api/placeholder/1920/1080"
  ];

  // Sudha Murty quotes
  const quotes = [
    "Money is one thing which rarely unites and mostly divides people.",
    "A good book is like a extraordinary gift from an unknown friend.",
    "You cannot cross the sea merely by standing and staring at the water.",
    "Courage is the most important of all virtues because without courage, you cannot practice any other virtue consistently."
  ];

  // Achievements data
  const achievements = [
    {
      icon: <Star style={{ color: "#9333ea", width: "48px", height: "48px" }} />,
      title: "Pioneering Engineer",
      description: "First female engineer at TELCO (Tata Motors), breaking barriers for women in STEM fields in India."
    },
    {
      icon: <Award style={{ color: "#9333ea", width: "48px", height: "48px" }} />,
      title: "Philanthropic Impact",
      description: "Chairperson of Infosys Foundation, leading initiatives in education, healthcare, and rural development."
    },
    {
      icon: <BookOpen style={{ color: "#9333ea", width: "48px", height: "48px" }} />,
      title: "Accomplished Author",
      description: "Published numerous books, including children's literature, novels, and non-fiction works celebrating Indian culture."
    },
    {
      icon: <Heart style={{ color: "#9333ea", width: "48px", height: "48px" }} />,
      title: "Cultural Ambassador",
      description: "Preserving and promoting Indian heritage, values and traditions through her writing and social work."
    }
  ];

  // Function to navigate slides
  const navigateSlide = (direction) => {
    if (direction === "next") {
      setCurrentSlide((prev) => (prev === backgroundImages.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentSlide((prev) => (prev === 0 ? backgroundImages.length - 1 : prev - 1));
    }
  };

  // Random quote selection
  const randomQuote = quotes[Math.floor(Math.random() % quotes.length)];

  // Inline styles
  const styles = {
    container: {
      position: "relative",
      minHeight: "100vh",
      width: "100%",
      overflow: "hidden",
      background: "linear-gradient(to bottom, #f3e8ff, #ffffff)"
    },
    backgroundSlideshow: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0.2,
      zIndex: 0
    },
    slide: (isActive) => ({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      transition: "opacity 1000ms ease-in-out",
      opacity: isActive ? 1 : 0,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }),
    slideButton: {
      position: "absolute",
      top: "50%",
      zIndex: 10,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: "50%",
      padding: "8px",
      color: "#6b21a8",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    prevButton: {
      left: "16px"
    },
    nextButton: {
      right: "16px"
    },
    content: (isVisible) => ({
      position: "relative",
      zIndex: 10,
      maxWidth: "1152px",
      margin: "0 auto",
      padding: "64px 16px",
      transition: "all 1000ms",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(40px)"
    }),
    header: {
      textAlign: "center",
      marginBottom: "64px"
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#581c87",
      marginBottom: "16px"
    },
    subtitle: {
      fontSize: "1.25rem",
      color: "#374151",
      maxWidth: "768px",
      margin: "0 auto"
    },
    quoteBox: {
      marginTop: "32px",
      padding: "24px",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(4px)",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      maxWidth: "768px",
      margin: "0 auto"
    },
    quote: {
      fontSize: "1.25rem",
      fontStyle: "italic",
      color: "#6b21a8"
    },
    attribution: {
      marginTop: "8px",
      fontWeight: "600"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "24px",
      marginBottom: "64px"
    },
    card: (isVisible, index) => ({
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "24px",
      transform: isVisible ? "translateY(0)" : "translateY(40px)",
      opacity: isVisible ? 1 : 0,
      transition: "all 500ms",
      transitionDelay: `${index * 150}ms`
    }),
    cardHover: {
      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
      transform: "translateY(-8px)"
    },
    iconContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "16px"
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "8px",
      textAlign: "center"
    },
    cardDescription: {
      color: "#4b5563",
      textAlign: "center"
    },
    timelineSection: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(4px)",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "24px 32px"
    },
    timelineTitle: {
      fontSize: "1.875rem",
      fontWeight: "bold",
      color: "#581c87",
      marginBottom: "24px",
      textAlign: "center"
    },
    timelineList: {
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    },
    timelineItem: {
      display: "flex",
      flexDirection: "row",
      gap: "16px"
    },
    timelineYear: {
      width: "25%",
      fontWeight: "bold",
      color: "#6b21a8"
    },
    timelineEvent: {
      width: "75%"
    },
    footer: {
      textAlign: "center",
      marginTop: "64px"
    },
    footerText: {
      fontSize: "0.875rem",
      color: "#6b7280"
    }
  };

  return (
    <div style={styles.container}>
      {/* Background Slideshow */}
      <div style={styles.backgroundSlideshow}>
        {backgroundImages.map((img, index) => (
          <div 
            key={index}
            style={{
              ...styles.slide(currentSlide === index),
              backgroundImage: `url(${img})`
            }}
          />
        ))}
      </div>

      {/* Slideshow Controls */}
      <button 
        onClick={() => navigateSlide("prev")}
        style={{...styles.slideButton, ...styles.prevButton}}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(216, 180, 254, 0.9)"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)"}
      >
        <ChevronLeft />
      </button>
      <button 
        onClick={() => navigateSlide("next")}
        style={{...styles.slideButton, ...styles.nextButton}}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(216, 180, 254, 0.9)"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)"}
      >
        <ChevronRight />
      </button>

      {/* Main Content */}
      <div style={styles.content(isVisible)}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Celebrating Sudha Murty</h1>
          <p style={styles.subtitle}>
            Engineer, Philanthropist, Author, and Inspiration to Millions
          </p>
          <div style={styles.quoteBox}>
            <p style={styles.quote}>"{randomQuote}"</p>
            <p style={styles.attribution}>— Sudha Murty</p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div style={styles.grid}>
          {achievements.map((item, index) => (
            <div 
              key={index}
              style={styles.card(isVisible, index)}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
                e.currentTarget.style.transform = styles.cardHover.transform;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={styles.iconContainer}>
                {item.icon}
              </div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline/Bio Section */}
        <div style={styles.timelineSection}>
          <h2 style={styles.timelineTitle}>Journey of Inspiration</h2>
          <div style={styles.timelineList}>
            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>1950</div>
              <div style={styles.timelineEvent}>Born in Shiggaon, Karnataka, India</div>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>1974</div>
              <div style={styles.timelineEvent}>Became first female engineer at TELCO (now Tata Motors)</div>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>1981</div>
              <div style={styles.timelineEvent}>Founded Infosys Foundation with husband Narayana Murthy</div>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>1996</div>
              <div style={styles.timelineEvent}>Published first book "How I Taught My Grandmother to Read"</div>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>2006</div>
              <div style={styles.timelineEvent}>Awarded Padma Shri, India's fourth-highest civilian honor</div>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>2023</div>
              <div style={styles.timelineEvent}>Nominated to Rajya Sabha, the upper house of Indian Parliament</div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Women's Day Exhibition 2025 | Celebrating Women Changemakers
          </p>
        </div>
      </div>
    </div>
  );
};

export default InspirationalWomenDay;