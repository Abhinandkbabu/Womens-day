import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css"; 
import { Sparkles } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-bg-container">
        <img
          src="https://images.storyboard18.com/storyboard18/2024/03/Sudha-1019x573.jpg?impolicy=website&width=738&height=440"
          alt="Empowered Women Background"
          className="header-bg "
        />
      </div>
      <div className="header-content">
        <div className="header-text">
          <div className="flex-center gap-2 mb-4">
            <Sparkles className="sparkles" />
            <span className="text-purple font-semibold">
              International Women's Day Special
            </span>
            <Sparkles className="sparkles" />
          </div>
          <h1 className="header-title">Sudha Murty</h1>
          <p className="header-subtitle">
            Breaking Barriers | Inspiring Generations | Empowering Women
          </p>
          <button className="header-button" onClick={() => navigate("/inspiring-women")}>
            Discover Her Legacy
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
