// Card.jsx
import React from 'react';
import "./index.css";

const Card = ({ job }) => {
  return (
    <div className="job-card">
      <div className="top">
        <img 
          src={job.brandlogo} 
          alt={job.company} 
          className="company-logo"
        />
        <button className="save-btn">Save</button>
      </div>

      <div className="center">
        <div className="company-info">
          <h3 className="company-name">{job.company}</h3>
          <span className="posted-date">{job.datePosted}</span>
        </div>

        <h2 className="job-role">{job.role}</h2>

        <div className="tags">
          <span className="tag">{job.tag1}</span>
          <span className="tag">{job.tag2}</span>
        </div>
      </div>

      <div className="bottom">
        <div className="pay-location">
          <h3 className="pay">${job.pay}/hr</h3>
          <p className="location">📍 {job.location}</p>
        </div>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default Card;