import { RiArrowRightUpLine, RiGithubFill } from "@remixicon/react";

const Github = ({ githubData }) => (
  <section className="content-section" id="github">
    <div className="section-heading">
      <p className="github-label"><RiGithubFill size={13} /> GITHUB ACTIVITY // OPEN SOURCE</p>
      <h2>GitHub Contributions &amp; Repos</h2>
      <p>Consistent contributions, open source libraries, and production code metrics.</p>
    </div>
    <div className="github-stats">
      <article className="surface-card github-stat"><span>Contributions this year</span><strong>{githubData.loaded ? githubData.contributions.reduce((total, day) => total + day.count, 0).toLocaleString() : "..."}</strong><small>Public activity over the last year</small></article>
      <article className="surface-card github-stat"><span>Stars across repositories</span><strong>{githubData.loaded ? githubData.stars.toLocaleString() : "..."}</strong><small>Stars on public repositories</small></article>
      <article className="surface-card github-stat"><span>Public repositories</span><strong>{githubData.loaded ? githubData.repositories.toLocaleString() : "..."}</strong><small>Projects and open source work</small></article>
    </div>
    <article className="surface-card github-heatmap">
      <div className="heatmap-heading"><div><h3>Activity heatmap</h3><p>{githubData.loaded ? `${githubData.activeDays} active days · Longest streak ${githubData.longestStreak} days` : "Loading contribution activity..."}</p></div><span>{new Date().getFullYear() - 1}–{new Date().getFullYear()}</span></div>
      <div className="heatmap-months" aria-hidden="true">{["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => <span key={month}>{month}</span>)}</div>
      <div className="heatmap-grid" role="grid" aria-label="GitHub contribution activity over the last year">
        {githubData.contributions.map((day) => {
          const level = day.count === 0 ? 0 : day.count < 3 ? 1 : day.count < 6 ? 2 : day.count < 10 ? 3 : 4;
          return <span className={`heatmap-day level-${level}`} role="gridcell" aria-label={`${day.count} contributions on ${day.date}`} title={`${day.count} contributions on ${day.date}`} key={day.date} />;
        })}
      </div>
      <div className="heatmap-legend"><span>Less</span>{[0, 1, 2, 3, 4].map((level) => <i className={`heatmap-day level-${level}`} key={level} />)}<span>More</span></div>
    </article>
    <a className="github-profile-link" href="https://github.com/abhishek-250505" target="_blank" rel="noreferrer">View GitHub profile <RiArrowRightUpLine size={14} /></a>
  </section>
);

export default Github;
