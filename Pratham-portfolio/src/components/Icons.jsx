// Minimal inline SVG icon set — no external image/icon library needed.
const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function GithubIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.4 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7M7 7v.01M12 17v-4.5a2.5 2.5 0 0 1 5 0V17M12 10v7" />
    </svg>
  );
}

export function CodeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
    </svg>
  );
}

export function TrophyIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H5a3 3 0 0 0 3 5M16 5h3a3 3 0 0 1-3 5M9 20h6M12 15v5" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  leetcode: CodeIcon,
  codeforces: TrophyIcon,
  mail: MailIcon,
};

export function SocialIcon({ name, ...props }) {
  const Cmp = ICONS[name] || CodeIcon;
  return <Cmp {...props} />;
}
