import { TOPICS } from './data.js';

function getTopicData(key) {
  if (TOPICS[key]) {
    return TOPICS[key];
  } else {
    console.warn('Topic not found');
    return TOPICS['phishing-attacks']; 
  }
}

function renderTopic(key) {
  const t = getTopicData(key); 
  const out = document.getElementById('topicOutput'); 
  out.innerHTML = `
    <div class="info-card">
      <div class="info-card-inner">

        <h3 class="info-card-title">${t.title}</h3>
        <p class="info-card-desc">${t.desc}</p>

        <div class="info-stats">
          ${t.stats.map(s => `
            <div class="stat-cell">
              <div class="stat-label">${s.label}</div>
              <div class="stat-val">${s.val}</div>
            </div>
          `).join('')}
        </div>

        <p class="insights-heading">Key insights</p>
        <ul class="info-list">
          ${t.points.map(p => `<li>${p}</li>`).join('')}
        </ul>

      </div>
    </div>
  `;
}

document.getElementById('topicSelect').addEventListener('change', function () {
  renderTopic(this.value);
});

renderTopic('phishing-attacks');