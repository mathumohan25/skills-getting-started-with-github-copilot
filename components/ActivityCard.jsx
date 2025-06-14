import React from 'react';
import './ActivityCard.css';

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      {/* ...existing card content... */}
      <div className="activity-details">
        {/* ...existing details... */}
        <div className="participants-section">
          <h4>Participants</h4>
          {activity.participants && activity.participants.length > 0 ? (
            <ul className="participants-list">
              {activity.participants.map((p, idx) => (
                <li key={idx} className="participant-item">
                  {p.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-participants">No participants yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;