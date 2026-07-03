import StatCard from "../components/StatCard.jsx";
import RatingChart from "../components/RatingChart.jsx";
import DifficultyChart from "../components/DifficultyChart.jsx";
import { ArrowUpRightIcon, CodeIcon, TrophyIcon } from "../components/Icons.jsx";
import { leetcode, codeforces } from "../siteData.js";
import stats from "../stats.json"
import "./Algorithms.css";

export default function Algorithms() {
  return (
    <section className="section algorithms-page">
      <div className="container">
        <div className="section-heading">
          <span className="mono-tag"><span className="dot" /> competitive programming</span>
          <h2>Algorithms</h2>
          <p style={{ marginTop: 14 }}>
            My live problem-solving stats, pulled together in one scoreboard.
            Update the numbers in <code>src/siteData.js</code> whenever your
            profiles change.
          </p>
        </div>

        {/* -------- LeetCode -------- */}
        <div className="platform-block">
          <div className="platform-block__header">
            <div className="platform-block__title">
              <CodeIcon width={20} height={20} />
              <h3>LeetCode</h3>
            </div>
            <a href={leetcode.profileUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
              @{leetcode.handle} <ArrowUpRightIcon width={14} height={14} />
            </a>
          </div>

          <div className="platform-block__stats">
            <StatCard label="Contest Rating" value={stats.leetcode.rating} accent="coral" />
            <StatCard label="Global Rank" value={`#${stats.leetcode.globalRank}`} accent="sage" />
            <StatCard label="Problems Solved" value={stats.leetcode.totalSolved} accent="coral" />
            <StatCard
              label="Difficulty Distribution:"
              value={`${stats.leetcode.byDifficulty[0].value} Easy ${stats.leetcode.byDifficulty[1].value} Medium ${stats.leetcode.byDifficulty[2].value} Hard`}
              accent="sage"
            />
          </div>

          <div className="platform-block__charts">
            <div className="chart-card card">
              <h4>Rating history</h4>
              <RatingChart data={stats.leetcode.ratingHistory} color="var(--coral)" />
            </div>
            <div className="chart-card card">
              <h4>Solved by difficulty</h4>
              <DifficultyChart data={stats.leetcode.byDifficulty} />
            </div>
          </div>
        </div>

        {/* -------- Codeforces -------- */}
        <div className="platform-block">
          <div className="platform-block__header">
            <div className="platform-block__title">
              <TrophyIcon width={20} height={20} />
              <h3>Codeforces</h3>
            </div>
            <a href={codeforces.profileUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
              @{codeforces.handle} <ArrowUpRightIcon width={14} height={14} />
            </a>
          </div>

          <div className="platform-block__stats">
            <StatCard label="Current Rating" value={stats.codeforces.rating} accent="sage" />
            <StatCard label="Max Rating" value={stats.codeforces.maxRating} accent="coral" />
            <StatCard label="Rank" value={stats.codeforces.rank} accent="sage" />
            <StatCard label="Problems Solved" value={stats.codeforces.totalSolved} accent="coral" />
          </div>

          <div className="platform-block__charts platform-block__charts--single">
            <div className="chart-card card">
              <h4>Rating history</h4>
              <RatingChart data={stats.codeforces.ratingHistory} color="var(--header-footer-deep)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
