import { useState } from "react";
import "./Avatar.css";

// Drop your photo at /public/profile.jpg (same filename) and it will
// appear automatically. Until then, a placeholder monogram is shown.
export default function Avatar({ src = "/profile.jpeg", initials = "PT" }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="avatar">
      <svg className="avatar__blob" viewBox="0 0 200 200" aria-hidden="true">
        <path
          fill="var(--sage-teal)"
          d="M55.7,-58.7C69.8,-47.6,78.2,-28.6,79.6,-9.3C81,10,75.4,29.5,63.6,44.6C51.8,59.7,33.8,70.3,14.1,74.9C-5.6,79.5,-27,78,-44.3,67.6C-61.6,57.2,-74.8,37.8,-78.5,16.6C-82.2,-4.6,-76.4,-27.6,-63.1,-39.9C-49.7,-52.2,-28.8,-53.8,-8.4,-52.6C12,-51.4,41.6,-69.7,55.7,-58.7Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="avatar__frame">
        {!errored ? (
          <img
            src={src}
            alt="Portrait"
            onError={() => setErrored(true)}
            className="avatar__img"
          />
        ) : (
          <div className="avatar__placeholder">
            <span>{initials}</span>
            <p>Add your photo at<br /><code>/public/profile.jpg</code></p>
          </div>
        )}
      </div>

      <span className="mono-tag avatar__badge">
        <span className="dot" /> available for internships
      </span>
    </div>
  );
}
