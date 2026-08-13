/**
 * TEXAS LONGHORNS FOOTBALL SEASON PREDICTOR & AI ENGINE
 * Powered by Monte Carlo Game Simulations & SP+ Analytics
 */

// 2026 Texas Longhorns Fall Schedule & Matchup Database
const SCHEDULE_DATA = [
  {
    id: 'week-1',
    week: 'WEEK 1',
    date: 'Sep 5, 2026',
    opponent: 'Texas State',
    oppAbbr: 'TXST',
    oppRank: 'NR',
    oppColor: '#501214',
    oppSecondary: '#B4975A',
    oppBadge: 'TXST',
    isHome: true,
    isMarquee: false,
    isSec: false,
    stadium: 'DKR-Texas Memorial Stadium',
    location: 'Austin, TX',
    vegasSpread: -34.5,
    overUnder: 61.5,
    baseWinProb: 98.6,
    projScoreUt: 49,
    projScoreOpp: 14,
    radarStats: {
      ut: [95, 93, 89, 92, 94, 88],
      opp: [52, 48, 50, 44, 46, 40]
    },
    scoutReport: {
      xFactor: 'Fast offensive tempo to break in new offensive rhythm.',
      keyMatchup: 'Arch Manning clean pocket delivery vs Texas State pass rush.',
      summary: '2026 season opener at DKR in Austin. Warmup contest before the massive Week 2 Ohio State blockbuster.'
    }
  },
  {
    id: 'week-2',
    week: 'WEEK 2',
    date: 'Sep 12, 2026',
    opponent: 'Ohio State',
    oppAbbr: 'OSU',
    oppRank: '#2',
    oppColor: '#BB0000',
    oppSecondary: '#666666',
    oppBadge: 'O',
    isHome: true,
    isMarquee: true,
    isSec: false,
    stadium: 'DKR-Texas Memorial Stadium',
    location: 'Austin, TX',
    rivalryName: '🔥 NATIONAL GAME OF THE YEAR (ABC)',
    vegasSpread: -3.5,
    overUnder: 55.5,
    baseWinProb: 58.4,
    projScoreUt: 31,
    projScoreOpp: 27,
    radarStats: {
      ut: [96, 93, 90, 94, 91, 89],
      opp: [95, 94, 92, 93, 92, 90]
    },
    scoutReport: {
      xFactor: 'Arch Manning decision making under heavy 4-man pressure without blitzing.',
      keyMatchup: 'Texas WR corps vs Ohio State 5-star lockdown cornerbacks.',
      summary: '105,000+ deafening crowd at DKR on ABC Primetime! A clash of national championship titans.'
    }
  },
  {
    id: 'week-3',
    week: 'WEEK 3',
    date: 'Sep 19, 2026',
    opponent: 'UTSA',
    oppAbbr: 'UTSA',
    oppRank: 'NR',
    oppColor: '#0C2340',
    oppSecondary: '#F15A24',
    oppBadge: 'UTSA',
    isHome: true,
    isMarquee: false,
    isSec: false,
    stadium: 'DKR-Texas Memorial Stadium',
    location: 'Austin, TX',
    vegasSpread: -31.0,
    overUnder: 58.0,
    baseWinProb: 96.5,
    projScoreUt: 45,
    projScoreOpp: 14,
    radarStats: {
      ut: [94, 92, 88, 91, 93, 86],
      opp: [58, 54, 56, 50, 52, 48]
    },
    scoutReport: {
      xFactor: 'Zero hangover focus following the Ohio State emotional high.',
      keyMatchup: 'Texas running back room creating explosive outside zone runs.',
      summary: 'In-state battle in Austin before opening the grueling SEC gauntlet.'
    }
  },
  {
    id: 'week-4',
    week: 'WEEK 4',
    date: 'Sep 26, 2026',
    opponent: 'Ole Miss',
    oppAbbr: 'MISS',
    oppRank: '#11',
    oppColor: '#14213D',
    oppSecondary: '#CE1126',
    oppBadge: 'REBS',
    isHome: true,
    isMarquee: true,
    isSec: true,
    stadium: 'DKR-Texas Memorial Stadium',
    location: 'Austin, TX',
    rivalryName: '⚡ SEC Opener Shootout',
    vegasSpread: -7.5,
    overUnder: 64.5,
    baseWinProb: 74.2,
    projScoreUt: 38,
    projScoreOpp: 28,
    radarStats: {
      ut: [95, 91, 88, 93, 90, 88],
      opp: [89, 81, 83, 86, 78, 82]
    },
    scoutReport: {
      xFactor: 'Limiting Lane Kiffin rapid tempo and explosive 40+ yard pass plays.',
      keyMatchup: 'Anthony Hill Jr. & Texas linebackers defending RPO pass keys.',
      summary: 'SEC season opener under the lights at DKR against a high-octane Rebels offense.'
    }
  },
  {
    id: 'week-5',
    week: 'WEEK 5',
    date: 'Oct 3, 2026',
    opponent: 'Mississippi State',
    oppAbbr: 'MSST',
    oppRank: 'NR',
    oppColor: '#660000',
    oppSecondary: '#FFFFFF',
    oppBadge: 'MSU',
    isHome: false,
    isMarquee: false,
    isSec: true,
    stadium: 'Davis Wade Stadium',
    location: 'Starkville, MS',
    vegasSpread: -17.5,
    overUnder: 54.0,
    baseWinProb: 88.3,
    projScoreUt: 38,
    projScoreOpp: 17,
    radarStats: {
      ut: [93, 90, 87, 91, 89, 86],
      opp: [69, 72, 70, 68, 67, 65]
    },
    scoutReport: {
      xFactor: 'Dealing with 55,000 ringing cowbells in Starkville on road silent snap count.',
      keyMatchup: 'Texas offensive line establishing ground dominance.',
      summary: 'First true SEC road test before heading to the Cotton Bowl.'
    }
  },
  {
    id: 'week-6',
    week: 'WEEK 6',
    date: 'Oct 10, 2026',
    opponent: 'Oklahoma',
    oppAbbr: 'OU',
    oppRank: '#10',
    oppColor: '#841617',
    oppSecondary: '#FDF9D8',
    oppBadge: 'OU',
    isHome: false,
    isMarquee: true,
    isSec: true,
    stadium: 'Cotton Bowl (Fair Park)',
    location: 'Dallas, TX',
    rivalryName: '🏆 The Red River Rivalry',
    vegasSpread: -6.5,
    overUnder: 58.5,
    baseWinProb: 71.8,
    projScoreUt: 34,
    projScoreOpp: 24,
    radarStats: {
      ut: [95, 91, 89, 93, 90, 88],
      opp: [84, 85, 82, 84, 83, 85]
    },
    scoutReport: {
      xFactor: 'Turnover differential and red-zone TD percentage amidst 50/50 Cotton Bowl split.',
      keyMatchup: 'Arch Manning vs Brent Venables disguised blitz packages.',
      summary: 'The Golden Hat is on the line at the Texas State Fair. Pure rivalry intensity!'
    }
  },
  {
    id: 'week-7',
    week: 'WEEK 7',
    date: 'Oct 17, 2026',
    opponent: 'Tennessee',
    oppAbbr: 'TENN',
    oppRank: '#7',
    oppColor: '#FF8200',
    oppSecondary: '#58595B',
    oppBadge: 'VOLS',
    isHome: false,
    isMarquee: true,
    isSec: true,
    stadium: 'Neyland Stadium',
    location: 'Knoxville, TN',
    rivalryName: '🔥 Battle of the Real UT',
    vegasSpread: -3.5,
    overUnder: 62.0,
    baseWinProb: 62.4,
    projScoreUt: 35,
    projScoreOpp: 30,
    radarStats: {
      ut: [95, 92, 88, 92, 90, 88],
      opp: [90, 88, 86, 89, 87, 85]
    },
    scoutReport: {
      xFactor: '102,000 screaming fans in Checkerboard Neyland Stadium. Neutralizing Vol edge rushers.',
      keyMatchup: 'Texas secondary containing wide-split vertical receiver routes.',
      summary: 'Massive top-10 showdown in Knoxville with direct SEC Championship and CFP seeding at stake.'
    }
  },
  {
    id: 'week-8',
    week: 'WEEK 8',
    date: 'Oct 24, 2026',
    opponent: 'Florida',
    oppAbbr: 'UF',
    oppRank: '#18',
    oppColor: '#0021A5',
    oppSecondary: '#FA4616',
    oppBadge: 'UF',
    isHome: true,
    isMarquee: true,
    isSec: true,
    stadium: 'DKR-Texas Memorial Stadium',
    location: 'Austin, TX',
    rivalryName: '🐊 SEC Showcase',
    vegasSpread: -13.5,
    overUnder: 56.5,
    baseWinProb: 83.5,
    projScoreUt: 37,
    projScoreOpp: 20,
    radarStats: {
      ut: [94, 91, 88, 92, 91, 87],
      opp: [80, 77, 79, 76, 78, 75]
    },
    scoutReport: {
      xFactor: 'Pass protection against Florida defensive interior push.',
      keyMatchup: 'Texas play-action passing attack stretching Florida secondary.',
      summary: 'Home SEC clash at DKR. Texas looks to stay on track for the SEC title race.'
    }
  },
  {
    id: 'week-9',
    week: 'WEEK 9',
    date: 'Nov 7, 2026',
    opponent: 'LSU',
    oppAbbr: 'LSU',
    oppRank: '#5',
    oppColor: '#461D7C',
    oppSecondary: '#FDD023',
    oppBadge: 'TIGERS',
    isHome: false,
    isMarquee: true,
    isSec: true,
    stadium: 'Tiger Stadium (Death Valley)',
    location: 'Baton Rouge, LA',
    rivalryName: '🐯 Death Valley Saturday Night War',
    vegasSpread: -1.5,
    overUnder: 59.5,
    baseWinProb: 54.8,
    projScoreUt: 31,
    projScoreOpp: 28,
    radarStats: {
      ut: [95, 93, 89, 93, 91, 89],
      opp: [93, 92, 90, 91, 89, 90]
    },
    scoutReport: {
      xFactor: '102,321 fans under the lights in Baton Rouge. Surviving early momentum surges.',
      keyMatchup: 'Texas edge pressure forcing LSU QB out of pocket.',
      summary: 'Saturday night in Death Valley. One of the toughest road tests in all of college football.'
    }
  },
  {
    id: 'week-10',
    week: 'WEEK 10',
    date: 'Nov 14, 2026',
    opponent: 'Arkansas',
    oppAbbr: 'ARK',
    oppRank: 'NR',
    oppColor: '#9D2235',
    oppSecondary: '#FFFFFF',
    oppBadge: 'ARK',
    isHome: true,
    isMarquee: true,
    isSec: true,
    stadium: 'DKR-Texas Memorial Stadium',
    location: 'Austin, TX',
    rivalryName: '🐗 Historic Rivalry Renewed',
    vegasSpread: -16.5,
    overUnder: 53.5,
    baseWinProb: 88.9,
    projScoreUt: 38,
    projScoreOpp: 17,
    radarStats: {
      ut: [93, 91, 88, 91, 90, 87],
      opp: [74, 76, 75, 73, 72, 71]
    },
    scoutReport: {
      xFactor: 'Disciplined gap containment on Arkansas QB run options.',
      keyMatchup: 'Texas wideouts winning 1-on-1 contested catches.',
      summary: 'Historic rivalry in Austin as Texas enters the late November championship push.'
    }
  },
  {
    id: 'week-11',
    week: 'WEEK 11',
    date: 'Nov 21, 2026',
    opponent: 'Missouri',
    oppAbbr: 'MIZZOU',
    oppRank: '#16',
    oppColor: '#F1B82D',
    oppSecondary: '#000000',
    oppBadge: 'MIZ',
    isHome: false,
    isMarquee: false,
    isSec: true,
    stadium: 'Faurot Field (Memorial Stadium)',
    location: 'Columbia, MO',
    vegasSpread: -9.5,
    overUnder: 51.0,
    baseWinProb: 77.2,
    projScoreUt: 33,
    projScoreOpp: 21,
    radarStats: {
      ut: [93, 91, 88, 91, 90, 87],
      opp: [81, 83, 80, 82, 81, 79]
    },
    scoutReport: {
      xFactor: 'Cold November weather execution and third-down conversions.',
      keyMatchup: 'Texas interior D-line stopping Missouri inside power run.',
      summary: 'Tough November road trip to Columbia with SEC Championship seeding on the line.'
    }
  },
  {
    id: 'week-12',
    week: 'WEEK 12',
    date: 'Nov 27, 2026',
    opponent: 'Texas A&M',
    oppAbbr: 'TAMU',
    oppRank: '#6',
    oppColor: '#500000',
    oppSecondary: '#FFFFFF',
    oppBadge: 'A&M',
    isHome: true,
    isMarquee: true,
    isSec: true,
    stadium: 'DKR-Texas Memorial Stadium',
    location: 'Austin, TX',
    rivalryName: '🔥 The Lone Star Showdown (Thanksgiving Climax)',
    vegasSpread: -4.5,
    overUnder: 55.5,
    baseWinProb: 66.8,
    projScoreUt: 31,
    projScoreOpp: 24,
    radarStats: {
      ut: [95, 93, 90, 94, 92, 90],
      opp: [89, 91, 88, 90, 88, 89]
    },
    scoutReport: {
      xFactor: 'State bragging rights, SEC Championship berth, and CFP Bye on the line!',
      keyMatchup: 'Arch Manning vs A&M 5-star pass rush front four.',
      summary: 'Thanksgiving weekend war in Austin! The entire state of Texas comes to a complete standstill.'
    }
  }
];

// App State
const state = {
  activeFilter: 'all',
  gamePicks: {}, // id -> 'W' or 'L'
  activeModalGame: null,
  radarCategories: ['Offensive EPA', 'Pass Rush Havoc', 'Rush Success', 'Red Zone TD%', '3rd Down Stops', 'Turnover Margin'],
  sliders: {
    qbRating: 100,
    defense: 100,
    turnover: 0,
    crowd: 100
  },
  audioEnabled: false
};

// Initialize default picks to projected outcomes
SCHEDULE_DATA.forEach(game => {
  state.gamePicks[game.id] = game.baseWinProb >= 50 ? 'W' : 'L';
});

// Sound Synthesizer via Web Audio API
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
}

function playSound(type) {
  if (!state.audioEnabled) return;
  try {
    initAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const now = audioCtx.currentTime;

    if (type === 'whistle') {
      // Referee Whistle Chirp
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc1.frequency.setValueAtTime(2600, now);
      osc2.frequency.setValueAtTime(2850, now);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(audioCtx.destination);
      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.35);
      osc2.stop(now + 0.35);
    } else if (type === 'horn') {
      // Stadium Horn / Touchdown blast
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(330, now + 0.4);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.8);
    } else if (type === 'click') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  } catch (e) {
    console.log('Audio error:', e);
  }
}

// Calculate adjusted win probability and scores based on sliders
function calculateAdjustedMatchup(game) {
  const qbFactor = (state.sliders.qbRating - 100) * 0.65; // High responsiveness for Arch Manning form
  const defFactor = (state.sliders.defense - 100) * 0.50; // High responsiveness for defense
  const toFactor = state.sliders.turnover * 5.0;          // Turnovers
  const crowdImpact = game.isHome ? (state.sliders.crowd - 100) * 0.35 : -(state.sliders.crowd - 100) * 0.35;

  let winProb = game.baseWinProb + qbFactor + defFactor + toFactor + crowdImpact;
  winProb = Math.max(1.0, Math.min(99.4, winProb));

  // Dynamic score adjustments
  const utPtsDelta = Math.round((qbFactor * 0.35) + (toFactor * 0.5) + (crowdImpact * 0.2));
  const oppPtsDelta = Math.round(-(defFactor * 0.35) - (toFactor * 0.4) - (crowdImpact * 0.2));

  const projUt = Math.max(6, game.projScoreUt + utPtsDelta);
  const projOpp = Math.max(3, game.projScoreOpp + oppPtsDelta);

  return {
    winProb: parseFloat(winProb.toFixed(1)),
    projUt,
    projOpp
  };
}

// Automatically recalculate every matchup pick and playoff seeding when sliders move
function updatePicksFromTuning() {
  SCHEDULE_DATA.forEach(game => {
    const adj = calculateAdjustedMatchup(game);
    state.gamePicks[game.id] = adj.winProb >= 50.0 ? 'W' : 'L';
  });
  renderSchedule();
  updateTopMetricsAndPlayoff();
}

// Monte Carlo Drive Simulator for Game Modal
function simulateGameDrives(game, adjusted) {
  const drives = [];
  const quarters = ['1ST QUARTER', '2ND QUARTER', '3RD QUARTER', '4TH QUARTER'];
  let utScore = 0;
  let oppScore = 0;

  quarters.forEach((q, qIndex) => {
    const numDrives = 3;
    for (let i = 0; i < numDrives; i++) {
      // Texas Drive
      const utDriveRoll = Math.random() * 100;
      const utTdThreshold = (adjusted.winProb / 100) * 38;
      const utFgThreshold = utTdThreshold + 22;
      const utToThreshold = utFgThreshold + (6 - state.sliders.turnover);

      let utResult = '';
      let utType = '';
      if (utDriveRoll < utTdThreshold) {
        utScore += 7;
        utResult = 'TOUCHDOWN! Arch Manning explosive scoring drive (7 Pts)';
        utType = 'td';
      } else if (utDriveRoll < utFgThreshold) {
        utScore += 3;
        utResult = 'FIELD GOAL! 45-yd kick splits uprights (3 Pts)';
        utType = 'fg';
      } else if (utDriveRoll < utToThreshold) {
        utResult = 'TURNOVER! Pass picked off or fumble lost on 3rd down';
        utType = 'turnover';
      } else {
        utResult = 'PUNT. Defensive pressure forces 3-and-out';
        utType = 'punt';
      }

      drives.push({
        quarter: q,
        team: 'TEXAS 🤘',
        result: utResult,
        type: utType,
        scoreAfter: `${utScore} - ${oppScore}`
      });

      // Opponent Drive
      const oppDriveRoll = Math.random() * 100;
      const oppTdThreshold = ((100 - adjusted.winProb) / 100) * 34;
      const oppFgThreshold = oppTdThreshold + 20;
      const oppToThreshold = oppFgThreshold + (8 + state.sliders.turnover);

      let oppResult = '';
      let oppType = '';
      if (oppDriveRoll < oppTdThreshold) {
        oppScore += 7;
        oppResult = `TOUCHDOWN! ${game.opponent} explosive score (7 Pts)`;
        oppType = 'td';
      } else if (oppDriveRoll < oppFgThreshold) {
        oppScore += 3;
        oppResult = `FIELD GOAL! ${game.opponent} converts red zone kick (3 Pts)`;
        oppType = 'fg';
      } else if (oppDriveRoll < oppToThreshold) {
        oppResult = `TURNOVER! Texas defense forces takeaway!`;
        oppType = 'turnover';
      } else {
        oppResult = `PUNT. Texas pass rush records sack`;
        oppType = 'punt';
      }

      drives.push({
        quarter: q,
        team: game.oppAbbr,
        result: oppResult,
        type: oppType,
        scoreAfter: `${utScore} - ${oppScore}`
      });
    }
  });

  if (utScore === oppScore) {
    if (adjusted.winProb >= 50) {
      utScore += 6;
      drives.push({
        quarter: 'OVERTIME',
        team: 'TEXAS 🤘',
        result: 'WALK-OFF TOUCHDOWN IN OT! TEXAS WINS!',
        type: 'td',
        scoreAfter: `${utScore} - ${oppScore}`
      });
    } else {
      oppScore += 6;
      drives.push({
        quarter: 'OVERTIME',
        team: game.oppAbbr,
        result: `${game.opponent} scores in OT to win`,
        type: 'td',
        scoreAfter: `${utScore} - ${oppScore}`
      });
    }
  }

  return { utScore, oppScore, drives };
}

// Render Schedule Grid Cards
function renderSchedule() {
  const grid = document.getElementById('scheduleGrid');
  if (!grid) return;

  const filtered = SCHEDULE_DATA.filter(game => {
    if (state.activeFilter === 'marquee') return game.isMarquee;
    if (state.activeFilter === 'sec') return game.isSec;
    if (state.activeFilter === 'home') return game.isHome;
    if (state.activeFilter === 'away') return !game.isHome;
    return true;
  });

  document.getElementById('gameCountBadge').innerText = `${filtered.length} MATCHUPS`;

  grid.innerHTML = filtered.map(game => {
    const adj = calculateAdjustedMatchup(game);
    const userPick = state.gamePicks[game.id];
    const isWin = userPick === 'W';

    return `
      <div class="game-card ${game.isMarquee ? 'marquee-border' : ''}" data-id="${game.id}">
        <div class="card-top">
          <div class="week-tag">${game.week} • ${game.date}</div>
          <div class="stadium-location">
            <i class="fa-solid fa-location-dot"></i> ${game.isHome ? 'DKR Austin' : game.location}
          </div>
        </div>

        ${game.rivalryName ? `<div class="rivalry-banner">${game.rivalryName}</div>` : ''}

        <div class="matchup-row">
          <div class="team-pill">
            <div class="team-logo-circle ut-logo">🤘</div>
            <div class="team-text">
              <span class="team-abbr">TEXAS</span>
              <span class="team-ranking-sub">#2 AP</span>
            </div>
          </div>

          <div class="score-center">
            <div class="proj-score-box">
              <span style="color: ${adj.projUt > adj.projOpp ? '#FFF' : '#EF4444'}">${adj.projUt}</span>
              <span class="score-divider">-</span>
              <span style="color: ${adj.projOpp > adj.projUt ? '#FF9B42' : '#9CA3AF'}">${adj.projOpp}</span>
            </div>
            <div class="vegas-line">${game.vegasSpread > 0 ? `+${game.vegasSpread}` : game.vegasSpread} | O/U ${game.overUnder}</div>
          </div>

          <div class="team-pill away">
            <div class="team-logo-circle" style="background: ${game.oppColor}; color: ${game.oppSecondary};">
              ${game.oppBadge}
            </div>
            <div class="team-text">
              <span class="team-abbr">${game.oppAbbr}</span>
              <span class="team-ranking-sub">${game.oppRank}</span>
            </div>
          </div>
        </div>

        <div class="card-stats-row">
          <div class="prob-labels-sm">
            <span class="${adj.winProb >= 50 ? 'text-orange' : 'text-danger'}">Win Prob: ${adj.winProb}%</span>
            <span class="text-muted">${(100 - adj.winProb).toFixed(1)}%</span>
          </div>
          <div class="prob-track-sm">
            <div class="prob-fill-sm" style="width: ${adj.winProb}%; background: ${adj.winProb >= 50 ? 'linear-gradient(90deg, var(--color-burnt-orange), var(--color-orange-light))' : 'linear-gradient(90deg, #991B1B, #EF4444)'}"></div>
          </div>
        </div>

        <div class="card-actions">
          <div class="wl-toggle-wrap">
            <span>Result:</span>
            <button class="wl-toggle-btn ${isWin ? 'win' : 'loss'}" data-game-id="${game.id}" title="Toggle Win / Loss">
              ${isWin ? 'W' : 'L'}
            </button>
          </div>
          <button class="sim-btn-sm" data-sim-id="${game.id}">
            <i class="fa-solid fa-play"></i> Simulate
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Attach Event Listeners to rendered cards
  grid.querySelectorAll('.wl-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      playSound('click');
      const gId = btn.getAttribute('data-game-id');
      state.gamePicks[gId] = state.gamePicks[gId] === 'W' ? 'L' : 'W';
      renderSchedule();
      updateTopMetricsAndPlayoff();
    });
  });

  grid.querySelectorAll('.sim-btn-sm').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      playSound('whistle');
      const gId = btn.getAttribute('data-sim-id');
      openSimModal(gId);
    });
  });
}

// Update Top Record Ticker & CFP Playoff Bracket
function updateTopMetricsAndPlayoff() {
  let wins = 0;
  let losses = 0;

  SCHEDULE_DATA.forEach(game => {
    if (state.gamePicks[game.id] === 'W') wins++;
    else losses++;
  });

  // Top Metrics
  document.getElementById('projRecordVal').innerText = `${wins} - ${losses}`;

  const nattyOddsElem = document.getElementById('nattyOddsVal');
  const secProbElem = document.getElementById('secProbVal');
  const playoffTitle = document.getElementById('playoffTitle');
  const playoffDesc = document.getElementById('playoffDesc');
  const playoffProbDisplay = document.getElementById('playoffProbDisplay');

  if (wins === 12) {
    nattyOddsElem.innerText = '+220';
    secProbElem.innerText = '64.5%';
    playoffTitle.innerText = 'PROJECTED SEED: #1 (UNDISPUTED SEC CHAMPION - FIRST ROUND BYE)';
    playoffDesc.innerText = '12-0 Perfect Season! Arch Manning leads Texas to the #1 overall seed in Atlanta and CFP Natty favorite status.';
    playoffProbDisplay.innerText = '99.9%';
  } else if (wins === 11) {
    nattyOddsElem.innerText = '+420';
    secProbElem.innerText = '38.4%';
    playoffTitle.innerText = 'PROJECTED SEED: #2 (SEC CHAMPION - FIRST ROUND BYE)';
    playoffDesc.innerText = 'Texas earns a bye to the Sugar Bowl / Peach Bowl quarterfinals with an 11-1 regular season.';
    playoffProbDisplay.innerText = '96.4%';
  } else if (wins === 10) {
    nattyOddsElem.innerText = '+750';
    secProbElem.innerText = '18.5%';
    playoffTitle.innerText = 'PROJECTED SEED: #5 (AT-LARGE CFP FIRST ROUND HOST AT DKR)';
    playoffDesc.innerText = '10-2 season earns Texas a massive on-campus College Football Playoff home game in Austin!';
    playoffProbDisplay.innerText = '87.1%';
  } else if (wins === 9) {
    nattyOddsElem.innerText = '+1800';
    secProbElem.innerText = '6.2%';
    playoffTitle.innerText = 'PROJECTED SEED: #10 (AT-LARGE ROAD CFP GAME)';
    playoffDesc.innerText = '9-3 in the brutal SEC schedule squeaks into the 12-team field on the road.';
    playoffProbDisplay.innerText = '62.4%';
  } else if (wins === 8) {
    nattyOddsElem.innerText = '+6500';
    secProbElem.innerText = '1.5%';
    playoffTitle.innerText = 'CFP BUBBLE: OUTSIDE THE 12-TEAM CUTLINE (RELIAQUEST BOWL)';
    playoffDesc.innerText = '8-4 record leaves Texas just outside the CFP field. Headed to Tampa for the ReliaQuest / Citrus Bowl.';
    playoffProbDisplay.innerText = '28.0%';
  } else if (wins === 7) {
    nattyOddsElem.innerText = '+25000';
    secProbElem.innerText = '0.1%';
    playoffTitle.innerText = 'CFP STATUS: ELIMINATED (TEXAS BOWL / LAS VEGAS BOWL)';
    playoffDesc.innerText = '7-5 disappointing campaign. Arch Manning & offense struggled in SEC road gauntlet.';
    playoffProbDisplay.innerText = '4.5%';
  } else {
    nattyOddsElem.innerText = 'OFF BOARD';
    secProbElem.innerText = '0.0%';
    playoffTitle.innerText = 'CFP STATUS: DISASTER SEASON (ARCH MANNING BENCHED / NO BOWL)';
    playoffDesc.innerText = `${wins}-${losses} record. Total meltdown in Austin. Offensive and defensive efficiency collapsed.`;
    playoffProbDisplay.innerText = '0.0%';
  }
}

// Open and Populate Game Simulation Modal
function openSimModal(gameId) {
  const game = SCHEDULE_DATA.find(g => g.id === gameId);
  if (!game) return;

  state.activeModalGame = game;
  const adjusted = calculateAdjustedMatchup(game);
  const sim = simulateGameDrives(game, adjusted);

  document.getElementById('modalMatchupTag').innerText = `${game.week} • ${game.rivalryName ? game.rivalryName.toUpperCase() : 'GAME PREVIEW'}`;
  document.getElementById('modalGameTitle').innerText = `TEXAS LONGHORNS vs ${game.opponent.toUpperCase()}`;
  document.getElementById('modalStadiumInfo').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${game.stadium} • ${game.location}`;

  // Scoreboard
  document.getElementById('simHomeScore').innerText = sim.utScore;
  document.getElementById('simAwayScore').innerText = sim.oppScore;
  document.getElementById('simOppName').innerText = game.oppAbbr;
  document.getElementById('simOppRank').innerText = `${game.oppRank} NATIONALLY`;

  const oppBadge = document.getElementById('simOppBadge');
  oppBadge.innerText = game.oppBadge;
  oppBadge.style.background = game.oppColor;
  oppBadge.style.color = game.oppSecondary;

  document.getElementById('simSpreadDisplay').innerText = `LINE: UT ${game.vegasSpread > 0 ? `+${game.vegasSpread}` : game.vegasSpread} | O/U ${game.overUnder}`;

  // Prob bar
  document.getElementById('simUtWinProbText').innerText = `TEXAS WIN PROB: ${adjusted.winProb}%`;
  document.getElementById('simOppWinProbText').innerText = `${game.oppAbbr}: ${(100 - adjusted.winProb).toFixed(1)}%`;
  document.getElementById('simProbFill').style.width = `${adjusted.winProb}%`;

  // Render Drives
  const drivesContainer = document.getElementById('simDrivesContainer');
  drivesContainer.innerHTML = sim.drives.map(d => `
    <div class="drive-item ${d.type}">
      <div>
        <span class="drive-team text-white">[${d.quarter}] ${d.team}:</span>
        <span>${d.result}</span>
      </div>
      <div class="drive-result">${d.scoreAfter}</div>
    </div>
  `).join('');

  // Tactical Scout pane
  document.getElementById('simScoutDetails').innerHTML = `
    <div class="scout-box">
      <h4><i class="fa-solid fa-star text-orange"></i> Key Matchup X-Factor</h4>
      <p>${game.scoutReport.xFactor}</p>
    </div>
    <div class="scout-box">
      <h4><i class="fa-solid fa-crosshairs text-orange"></i> Spotlight Player Battle</h4>
      <p>${game.scoutReport.keyMatchup}</p>
    </div>
    <div class="scout-box">
      <h4><i class="fa-solid fa-microscope text-orange"></i> Oracle Scouting Verdict</h4>
      <p>${game.scoutReport.summary}</p>
    </div>
  `;

  // Draw Radar Chart
  drawRadarChart(game);

  // Open Modal
  document.getElementById('simModal').classList.add('open');
}

// Canvas-Based Radar Chart Renderer
function drawRadarChart(game) {
  const canvas = document.getElementById('radarChartCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = 130;
  const numAxes = state.radarCategories.length;
  const angleStep = (Math.PI * 2) / numAxes;

  ctx.clearRect(0, 0, width, height);

  // Draw Web concentric polygons
  const levels = 4;
  for (let l = 1; l <= levels; l++) {
    const r = (radius / levels) * l;
    ctx.beginPath();
    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw Axes and Labels
  ctx.font = '11px Outfit, sans-serif';
  ctx.fillStyle = '#9CA3AF';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (let i = 0; i < numAxes; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.stroke();

    const labelX = centerX + (radius + 28) * Math.cos(angle);
    const labelY = centerY + (radius + 28) * Math.sin(angle);
    ctx.fillText(state.radarCategories[i], labelX, labelY);
  }

  // Plot Opponent Polygon
  ctx.beginPath();
  for (let i = 0; i < numAxes; i++) {
    const val = (game.radarStats.opp[i] / 100) * radius;
    const angle = i * angleStep - Math.PI / 2;
    const x = centerX + val * Math.cos(angle);
    const y = centerY + val * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(156, 163, 175, 0.25)';
  ctx.fill();
  ctx.strokeStyle = '#9CA3AF';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Plot Texas Polygon
  ctx.beginPath();
  for (let i = 0; i < numAxes; i++) {
    const val = (game.radarStats.ut[i] / 100) * radius;
    const angle = i * angleStep - Math.PI / 2;
    const x = centerX + val * Math.cos(angle);
    const y = centerY + val * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(191, 87, 0, 0.45)';
  ctx.fill();
  ctx.strokeStyle = '#FF7A18';
  ctx.lineWidth = 2.5;
  ctx.stroke();
}

// Group Chat Hype Card Canvas Generator
function drawHypeCard() {
  const canvas = document.getElementById('hypeCardCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  const select = document.getElementById('cardGameSelect');
  const gameId = select ? select.value : 'week-6';
  const game = SCHEDULE_DATA.find(g => g.id === gameId) || SCHEDULE_DATA[5];
  const adj = calculateAdjustedMatchup(game);

  const userHandle = document.getElementById('cardUserHandle').value || "Jake's Official Pick";
  const hotTake = document.getElementById('cardCustomNote').value || "Arch Manning throwing 4 TDs. Not even close. Hook 'Em! 🤘";

  // Background Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, w, h);
  bgGrad.addColorStop(0, '#10141E');
  bgGrad.addColorStop(0.5, '#07090E');
  bgGrad.addColorStop(1, '#BF5700');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // Border & Glow
  ctx.strokeStyle = '#FF7A18';
  ctx.lineWidth = 6;
  ctx.strokeRect(10, 10, w - 20, h - 20);

  // Header Badge
  ctx.fillStyle = '#BF5700';
  ctx.beginPath();
  ctx.roundRect(30, 30, w - 60, 48, 10);
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 18px Outfit, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('🏈 TEXAS LONGHORNS AI GAME DAY ORACLE', w / 2, 60);

  // User Handle / Stamp
  ctx.fillStyle = '#FFB800';
  ctx.font = 'bold 22px Bebas Neue, sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText(userHandle.toUpperCase(), w / 2, 115);

  // Matchup Title
  ctx.fillStyle = '#9CA3AF';
  ctx.font = '14px Outfit, sans-serif';
  ctx.fillText(`${game.week} • ${game.stadium.toUpperCase()}`, w / 2, 145);

  // Big Score Card Box
  ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
  ctx.beginPath();
  ctx.roundRect(35, 170, w - 70, 220, 16);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 122, 24, 0.4)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Texas Side
  ctx.fillStyle = '#FF9B42';
  ctx.font = 'bold 36px Bebas Neue, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('TEXAS 🤘', 60, 230);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 64px Bebas Neue, sans-serif';
  ctx.fillText(`${adj.projUt}`, 60, 310);
  ctx.fillStyle = '#10B981';
  ctx.font = 'bold 14px Outfit, sans-serif';
  ctx.fillText(`WIN CHANCE: ${adj.winProb}%`, 60, 350);

  // VS divider
  ctx.fillStyle = '#6B7280';
  ctx.font = 'bold 24px Bebas Neue, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('VS', w / 2, 280);

  // Opponent Side
  ctx.fillStyle = '#E5E7EB';
  ctx.font = 'bold 36px Bebas Neue, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText(`${game.oppAbbr}`, w - 60, 230);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 64px Bebas Neue, sans-serif';
  ctx.fillText(`${adj.projOpp}`, w - 60, 310);
  ctx.fillStyle = '#9CA3AF';
  ctx.font = 'bold 14px Outfit, sans-serif';
  ctx.fillText(`SPREAD: UT ${game.vegasSpread > 0 ? `+${game.vegasSpread}` : game.vegasSpread}`, w - 60, 350);

  // Hot Take Box
  ctx.fillStyle = 'rgba(191, 87, 0, 0.2)';
  ctx.beginPath();
  ctx.roundRect(35, 415, w - 70, 140, 12);
  ctx.fill();
  ctx.strokeStyle = '#BF5700';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#FFB800';
  ctx.font = 'bold 14px Outfit, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('🔥 LOCK OF THE WEEK / HOT TAKE:', 55, 445);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '16px Outfit, sans-serif';
  wrapCanvasText(ctx, hotTake, 55, 480, w - 110, 24);

  // Watermark / Footer
  ctx.fillStyle = '#FF7A18';
  ctx.font = 'bold 16px Bebas Neue, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('SIMULATED VIA ANTIGRAVITY AI ENGINE • HOOK \'EM 🤘', w / 2, 600);

  ctx.fillStyle = '#9CA3AF';
  ctx.font = '12px Outfit, sans-serif';
  ctx.fillText('10,000 Monte Carlo Drives • Real-time SEC Analytics', w / 2, 625);
}

// Helper to wrap text on Canvas
function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

// Toast Helper
function showToast(msg) {
  const toast = document.getElementById('toastMessage');
  if (!toast) return;
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Initialize App and Event Handlers
document.addEventListener('DOMContentLoaded', () => {
  renderSchedule();
  updateTopMetricsAndPlayoff();

  // Populate Hype Card Game Select Dropdown
  const cardSelect = document.getElementById('cardGameSelect');
  if (cardSelect) {
    cardSelect.innerHTML = SCHEDULE_DATA.map(g => `
      <option value="${g.id}" ${g.id === 'week-6' ? 'selected' : ''}>
        ${g.week}: vs ${g.opponent} (${g.stadium})
      </option>
    `).join('');
  }

  // Audio Toggle Button
  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      state.audioEnabled = !state.audioEnabled;
      soundBtn.classList.toggle('active', state.audioEnabled);
      if (state.audioEnabled) {
        initAudio();
        playSound('horn');
        showToast('🔊 Stadium sound effects enabled!');
      } else {
        showToast('🔇 Sound muted');
      }
    });
  }

  // Filter Tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      playSound('click');
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeFilter = tab.getAttribute('data-filter');
      renderSchedule();
    });
  });

  // Slider Listeners with Real-Time Prediction Engine Update
  const qbSlider = document.getElementById('qbRatingSlider');
  const defSlider = document.getElementById('defenseSlider');
  const toSlider = document.getElementById('turnoverSlider');
  const crowdSlider = document.getElementById('crowdSlider');

  if (qbSlider) {
    qbSlider.addEventListener('input', (e) => {
      state.sliders.qbRating = parseInt(e.target.value);
      const val = state.sliders.qbRating;
      let label = '100% (Heisman Candidate)';
      if (val >= 140) label = `${val}% (🔥 Heisman Winner / God Tier)`;
      else if (val >= 115) label = `${val}% (Elite All-American)`;
      else if (val >= 90) label = `${val}% (Heisman Form)`;
      else if (val >= 65) label = `${val}% (⚠️ Struggling / Interceptions)`;
      else label = `${val}% (🚨 Benched / Disaster)`;
      
      document.getElementById('qbValDisplay').innerText = label;
      updatePicksFromTuning();
    });
  }

  if (defSlider) {
    defSlider.addEventListener('input', (e) => {
      state.sliders.defense = parseInt(e.target.value);
      const val = state.sliders.defense;
      let label = '100% (Dominant SEC Defense)';
      if (val >= 140) label = `${val}% (🛡️ Steel Curtain / Lockdown)`;
      else if (val >= 115) label = `${val}% (Top 5 Defense)`;
      else if (val >= 90) label = `${val}% (Dominant)`;
      else if (val >= 65) label = `${val}% (⚠️ Vulnerable Pass Rush)`;
      else label = `${val}% (🚨 Paper Defense / Bleeding Points)`;

      document.getElementById('defValDisplay').innerText = label;
      updatePicksFromTuning();
    });
  }

  if (toSlider) {
    toSlider.addEventListener('input', (e) => {
      state.sliders.turnover = parseInt(e.target.value);
      const val = state.sliders.turnover;
      let label = 'Neutral (0)';
      if (val > 0) label = `+${val} (⚡ Takeaway Frenzy)`;
      else if (val < 0) label = `${val} (🚨 Fumble / Pick Nightmares)`;

      document.getElementById('turnoverValDisplay').innerText = label;
      updatePicksFromTuning();
    });
  }

  if (crowdSlider) {
    crowdSlider.addEventListener('input', (e) => {
      state.sliders.crowd = parseInt(e.target.value);
      const val = state.sliders.crowd;
      let label = 'DKR 105k+ Roar (100%)';
      if (val >= 135) label = `Deafening 130dB+ Hostility (${val}%)`;
      else if (val <= 70) label = `Silent Opponent Stadium (${val}%)`;

      document.getElementById('crowdValDisplay').innerText = label;
      updatePicksFromTuning();
    });
  }

  // Reset Sliders
  document.getElementById('resetSlidersBtn').addEventListener('click', () => {
    playSound('click');
    state.sliders = { qbRating: 100, defense: 100, turnover: 0, crowd: 100 };
    qbSlider.value = 100;
    defSlider.value = 100;
    toSlider.value = 0;
    crowdSlider.value = 100;
    document.getElementById('qbValDisplay').innerText = '100% (Heisman Form)';
    document.getElementById('defValDisplay').innerText = '100% (Dominant)';
    document.getElementById('turnoverValDisplay').innerText = 'Neutral (0)';
    document.getElementById('crowdValDisplay').innerText = 'DKR 105k+ Roar';
    updatePicksFromTuning();
    showToast('Simulation weights reset to baseline.');
  });

  // Re-simulate button in Modal
  document.getElementById('runSimButton').addEventListener('click', () => {
    playSound('whistle');
    if (state.activeModalGame) {
      openSimModal(state.activeModalGame.id);
    }
  });

  // Modal Sub-tabs
  document.querySelectorAll('.sub-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      playSound('click');
      document.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = tab.getAttribute('data-subtab');
      const pane = document.getElementById(`pane-${targetPane}`);
      if (pane) pane.classList.add('active');

      if (targetPane === 'radar' && state.activeModalGame) {
        drawRadarChart(state.activeModalGame);
      }
    });
  });

  // Close Simulation Modal
  document.getElementById('closeSimModalBtn').addEventListener('click', () => {
    document.getElementById('simModal').classList.remove('open');
  });

  // Open Hype Card Modal
  const openCardBtn = document.getElementById('openHypeCardBtn');
  if (openCardBtn) {
    openCardBtn.addEventListener('click', () => {
      playSound('horn');
      document.getElementById('cardModal').classList.add('open');
      drawHypeCard();
    });
  }

  // Export card from inside sim modal
  const modalExportBtn = document.getElementById('modalExportCardBtn');
  if (modalExportBtn) {
    modalExportBtn.addEventListener('click', () => {
      document.getElementById('simModal').classList.remove('open');
      if (state.activeModalGame) {
        document.getElementById('cardGameSelect').value = state.activeModalGame.id;
      }
      document.getElementById('cardModal').classList.add('open');
      drawHypeCard();
    });
  }

  // Close Card Modal
  document.getElementById('closeCardModalBtn').addEventListener('click', () => {
    document.getElementById('cardModal').classList.remove('open');
  });

  // Dynamic redraw on card control changes
  if (cardSelect) cardSelect.addEventListener('change', drawHypeCard);
  document.getElementById('cardUserHandle').addEventListener('input', drawHypeCard);
  document.getElementById('cardCustomNote').addEventListener('input', drawHypeCard);

  // Mobile Bottom Navigation Click Handlers
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      if (targetId) {
        playSound('click');
        document.querySelectorAll('.mobile-nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const targetElem = document.querySelector(`.${targetId}`);
        if (targetElem) {
          targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Mobile Floating Hype Button
  const mobileHypeBtn = document.getElementById('mobileHypeBtn');
  if (mobileHypeBtn) {
    mobileHypeBtn.addEventListener('click', () => {
      playSound('horn');
      document.getElementById('cardModal').classList.add('open');
      drawHypeCard();
    });
  }

  // Native Mobile Share API Handler
  const mobileShareBtn = document.getElementById('mobileNativeShareBtn');
  if (mobileShareBtn) {
    mobileShareBtn.addEventListener('click', async () => {
      playSound('whistle');
      const canvas = document.getElementById('hypeCardCanvas');
      const status = document.getElementById('cardCopyStatus');

      try {
        canvas.toBlob(async (blob) => {
          const file = new File([blob], 'texas-longhorns-pick.png', { type: 'image/png' });
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
              title: 'Texas Longhorns AI Season Prediction',
              text: 'Check out this Texas Longhorns game prediction from the AI Season Oracle! 🤘',
              files: [file]
            });
            status.innerText = '✅ Shared successfully!';
          } else if (navigator.share) {
            await navigator.share({
              title: 'Texas Longhorns AI Season Prediction',
              text: 'Check out this Texas Longhorns game prediction from the AI Season Oracle! 🤘',
              url: window.location.href
            });
            status.innerText = '✅ Link shared!';
          } else {
            // Fallback to image download
            document.getElementById('downloadCardBtn').click();
          }
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          document.getElementById('downloadCardBtn').click();
        }
      }
    });
  }

  // Download Card PNG
  document.getElementById('downloadCardBtn').addEventListener('click', () => {
    playSound('whistle');
    const canvas = document.getElementById('hypeCardCanvas');
    const link = document.createElement('a');
    link.download = `texas-longhorns-prediction-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('📸 Card saved to photos!');
  });

  // Copy Card Image to Clipboard
  document.getElementById('copyCardBtn').addEventListener('click', async () => {
    playSound('click');
    const canvas = document.getElementById('hypeCardCanvas');
    const status = document.getElementById('cardCopyStatus');
    try {
      canvas.toBlob(async (blob) => {
        if (navigator.clipboard && window.ClipboardItem) {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ]);
          status.innerText = '✅ Image copied! Paste into iMessage/WhatsApp/GroupMe';
          showToast('Image copied to clipboard!');
        } else {
          status.innerText = 'Click "Download High-Res Image" to save.';
        }
      });
    } catch (err) {
      status.innerText = 'Downloaded image instead!';
      document.getElementById('downloadCardBtn').click();
    }
  });

  // Copy Share Link Button
  document.getElementById('copyShareLinkBtn').addEventListener('click', () => {
    playSound('click');
    navigator.clipboard.writeText(window.location.href);
    showToast('📋 Share link copied to clipboard!');
  });

  // Open Guide Modal
  document.getElementById('viewDeployGuideBtn').addEventListener('click', () => {
    playSound('click');
    document.getElementById('guideModal').classList.add('open');
  });

  // Close Guide Modal
  document.getElementById('closeGuideModalBtn').addEventListener('click', () => {
    document.getElementById('guideModal').classList.remove('open');
  });

  // Close modals on clicking outside
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      e.target.classList.remove('open');
    }
  });
});
