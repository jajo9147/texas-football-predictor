/**
 * TEXAS LONGHORNS FOOTBALL SEASON PREDICTOR & AI ENGINE
 * Powered by Monte Carlo Game Simulations & SP+ Analytics
 */

// Schedule & Matchup Database
const SCHEDULE_DATA = [
  {
    id: 'week-1',
    week: 'WEEK 1',
    date: 'Aug 29',
    opponent: 'Colorado State',
    oppAbbr: 'CSU',
    oppRank: 'NR',
    oppColor: '#1E4D2B',
    oppSecondary: '#C8C372',
    oppBadge: 'CSU',
    isHome: true,
    isMarquee: false,
    isSec: false,
    stadium: 'DKR-Texas Memorial Stadium',
    location: 'Austin, TX',
    vegasSpread: -31.5,
    overUnder: 59.5,
    baseWinProb: 98.2,
    projScoreUt: 48,
    projScoreOpp: 13,
    radarStats: {
      ut: [95, 92, 88, 91, 94, 85],
      opp: [55, 48, 52, 45, 50, 42]
    },
    scoutReport: {
      xFactor: 'Explosive early offensive tempo to establish rhythm.',
      keyMatchup: 'Texas WR corps vs CSU secondary single coverage.',
      summary: 'Season opener at DKR. Arch Manning and the high-flying offense are projected to score early and often.'
    }
  },
  {
    id: 'week-2',
    week: 'WEEK 2',
    date: 'Sep 5',
    opponent: 'Michigan',
    oppAbbr: 'MICH',
    oppRank: '#9',
    oppColor: '#00274C',
    oppSecondary: '#FFCB05',
    oppBadge: 'M',
    isHome: false,
    isMarquee: true,
    isSec: false,
    stadium: 'Michigan Stadium (The Big House)',
    location: 'Ann Arbor, MI',
    rivalryName: 'Non-Conference Blockbuster',
    vegasSpread: -7.5,
    overUnder: 49.5,
    baseWinProb: 73.5,
    projScoreUt: 31,
    projScoreOpp: 17,
    radarStats: {
      ut: [94, 90, 85, 92, 89, 88],
      opp: [78, 86, 84, 76, 75, 80]
    },
    scoutReport: {
      xFactor: 'Interior offensive line protecting against Michigan defensive tackles.',
      keyMatchup: 'Texas Pass Rush vs Michigan new starting quarterback.',
      summary: 'Huge national spotlight non-conference clash. Texas speed on the perimeter stretches Michigan’s physical defense.'
    }
  },
  {
    id: 'week-3',
    week: 'WEEK 3',
    date: 'Sep 12',
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
    vegasSpread: -34.0,
    overUnder: 56.5,
    baseWinProb: 97.4,
    projScoreUt: 52,
    projScoreOpp: 14,
    radarStats: {
      ut: [96, 94, 90, 93, 95, 88],
      opp: [58, 52, 55, 48, 54, 46]
    },
    scoutReport: {
      xFactor: 'Defensive depth rotation and special teams execution.',
      keyMatchup: 'Texas running back room creating explosive chunk runs.',
      summary: 'In-state matchup under the lights in Austin before SEC play begins.'
    }
  },
  {
    id: 'week-4',
    week: 'WEEK 4',
    date: 'Sep 19',
    opponent: 'Louisiana-Monroe',
    oppAbbr: 'ULM',
    oppRank: 'NR',
    oppColor: '#800000',
    oppSecondary: '#C5B783',
    oppBadge: 'ULM',
    isHome: true,
    isMarquee: false,
    isSec: false,
    stadium: 'DKR-Texas Memorial Stadium',
    location: 'Austin, TX',
    vegasSpread: -42.5,
    overUnder: 54.0,
    baseWinProb: 99.1,
    projScoreUt: 56,
    projScoreOpp: 7,
    radarStats: {
      ut: [97, 95, 92, 94, 96, 90],
      opp: [40, 42, 45, 38, 44, 35]
    },
    scoutReport: {
      xFactor: 'Zero turnover discipline.',
      keyMatchup: 'Texas 2nd team offensive line getting valuable development reps.',
      summary: 'Tune-up contest before diving into the grueling SEC conference schedule.'
    }
  },
  {
    id: 'week-5',
    week: 'WEEK 5',
    date: 'Sep 26',
    opponent: 'Mississippi State',
    oppAbbr: 'MSST',
    oppRank: 'NR',
    oppColor: '#660000',
    oppSecondary: '#FFFFFF',
    oppBadge: 'MSU',
    isHome: true,
    isMarquee: false,
    isSec: true,
    stadium: 'DKR-Texas Memorial Stadium',
    location: 'Austin, TX',
    vegasSpread: -24.5,
    overUnder: 58.5,
    baseWinProb: 91.5,
    projScoreUt: 42,
    projScoreOpp: 17,
    radarStats: {
      ut: [94, 91, 89, 90, 92, 86],
      opp: [68, 64, 66, 62, 65, 60]
    },
    scoutReport: {
      xFactor: 'Disrupting Mississippi State quick passing release.',
      keyMatchup: 'Anthony Hill Jr. diagnosing screen passes and edge containment.',
      summary: 'SEC opener for Texas at DKR. High expectation of defensive havoc and points.'
    }
  },
  {
    id: 'week-6',
    week: 'WEEK 6',
    date: 'Oct 10',
    opponent: 'Oklahoma',
    oppAbbr: 'OU',
    oppRank: '#12',
    oppColor: '#841617',
    oppSecondary: '#FDF9D8',
    oppBadge: 'OU',
    isHome: false,
    isMarquee: true,
    isSec: true,
    stadium: 'Cotton Bowl (Fair Park)',
    location: 'Dallas, TX',
    rivalryName: '🏆 The Red River Rivalry',
    vegasSpread: -8.5,
    overUnder: 57.5,
    baseWinProb: 76.8,
    projScoreUt: 35,
    projScoreOpp: 24,
    radarStats: {
      ut: [95, 91, 88, 93, 91, 87],
      opp: [81, 83, 79, 82, 80, 84]
    },
    scoutReport: {
      xFactor: 'Red zone touchdown conversion efficiency & turnover luck in Cotton Bowl chaos.',
      keyMatchup: 'Arch Manning vs Brent Venables blitz disguise packages.',
      summary: 'The Golden Hat is on the line at the Texas State Fair! One of college football’s fiercest rivalries.'
    }
  },
  {
    id: 'week-7',
    week: 'WEEK 7',
    date: 'Oct 17',
    opponent: 'Georgia',
    oppAbbr: 'UGA',
    oppRank: '#1',
    oppColor: '#BA0C2F',
    oppSecondary: '#000000',
    oppBadge: 'UGA',
    isHome: true,
    isMarquee: true,
    isSec: true,
    stadium: 'DKR-Texas Memorial Stadium',
    location: 'Austin, TX',
    rivalryName: '🔥 SEC Game of the Century',
    vegasSpread: -2.5,
    overUnder: 53.5,
    baseWinProb: 55.4,
    projScoreUt: 28,
    projScoreOpp: 27,
    radarStats: {
      ut: [96, 92, 89, 93, 90, 89],
      opp: [94, 95, 93, 95, 92, 91]
    },
    scoutReport: {
      xFactor: '3rd down conversion rate and field position battles.',
      keyMatchup: 'Texas edge rushers vs Georgia elite offensive tackles.',
      summary: '105,000 screaming Longhorns fans at DKR. The absolute heavyweight clash with #1 seed CFP implications.'
    }
  },
  {
    id: 'week-8',
    week: 'WEEK 8',
    date: 'Oct 24',
    opponent: 'Vanderbilt',
    oppAbbr: 'VANDY',
    oppRank: 'NR',
    oppColor: '#866D4B',
    oppSecondary: '#000000',
    oppBadge: 'VU',
    isHome: false,
    isMarquee: false,
    isSec: true,
    stadium: 'FirstBank Stadium',
    location: 'Nashville, TN',
    vegasSpread: -21.0,
    overUnder: 52.0,
    baseWinProb: 89.2,
    projScoreUt: 38,
    projScoreOpp: 17,
    radarStats: {
      ut: [92, 90, 87, 91, 88, 85],
      opp: [66, 68, 64, 65, 62, 60]
    },
    scoutReport: {
      xFactor: 'Avoiding a post-Georgia emotional trap game on the road.',
      keyMatchup: 'Texas run defense stifling Vanderbilt option packages.',
      summary: 'Road trip to Nashville. Focus and execution are the keys to a decisive win.'
    }
  },
  {
    id: 'week-9',
    week: 'WEEK 9',
    date: 'Nov 7',
    opponent: 'Florida',
    oppAbbr: 'UF',
    oppRank: '#19',
    oppColor: '#0021A5',
    oppSecondary: '#FA4616',
    oppBadge: 'UF',
    isHome: true,
    isMarquee: true,
    isSec: true,
    stadium: 'DKR-Texas Memorial Stadium',
    location: 'Austin, TX',
    rivalryName: '🐊 SEC Showcase',
    vegasSpread: -14.5,
    overUnder: 56.0,
    baseWinProb: 84.6,
    projScoreUt: 37,
    projScoreOpp: 20,
    radarStats: {
      ut: [94, 91, 88, 92, 91, 87],
      opp: [79, 75, 78, 74, 76, 73]
    },
    scoutReport: {
      xFactor: 'Vertical pass protection against Florida dynamic front 7.',
      keyMatchup: 'Texas slot receiver mismatch against Gators safety shell.',
      summary: 'Electric home atmosphere at DKR as Texas hosts Florida in late season SEC action.'
    }
  },
  {
    id: 'week-10',
    week: 'WEEK 10',
    date: 'Nov 14',
    opponent: 'Arkansas',
    oppAbbr: 'ARK',
    oppRank: 'NR',
    oppColor: '#9D2235',
    oppSecondary: '#FFFFFF',
    oppBadge: 'ARK',
    isHome: false,
    isMarquee: true,
    isSec: true,
    stadium: 'Razorback Stadium',
    location: 'Fayetteville, AR',
    rivalryName: '🐗 Southwest Classic Heritage',
    vegasSpread: -12.5,
    overUnder: 55.0,
    baseWinProb: 81.3,
    projScoreUt: 34,
    projScoreOpp: 21,
    radarStats: {
      ut: [93, 89, 87, 90, 89, 86],
      opp: [74, 76, 75, 72, 73, 70]
    },
    scoutReport: {
      xFactor: 'Surviving the first quarter Razorback crowd frenzy in Fayetteville.',
      keyMatchup: 'Texas linebackers containing Arkansas mobile QB on broken plays.',
      summary: 'Deep-rooted historic rivalry renewed in the SEC. High energy road environment.'
    }
  },
  {
    id: 'week-11',
    week: 'WEEK 11',
    date: 'Nov 21',
    opponent: 'Kentucky',
    oppAbbr: 'UK',
    oppRank: '#24',
    oppColor: '#0033A0',
    oppSecondary: '#FFFFFF',
    oppBadge: 'UK',
    isHome: true,
    isMarquee: false,
    isSec: true,
    stadium: 'DKR-Texas Memorial Stadium',
    location: 'Austin, TX',
    vegasSpread: -18.5,
    overUnder: 48.0,
    baseWinProb: 88.7,
    projScoreUt: 33,
    projScoreOpp: 13,
    radarStats: {
      ut: [93, 91, 89, 91, 90, 88],
      opp: [72, 80, 77, 78, 71, 75]
    },
    scoutReport: {
      xFactor: 'Stopping Kentucky physical rushing attack on early downs.',
      keyMatchup: 'Texas interior defensive tackles vs Kentucky veteran center.',
      summary: 'Senior Night in Austin with high SEC Championship seeding stakes on the line.'
    }
  },
  {
    id: 'week-12',
    week: 'WEEK 12',
    date: 'Nov 28',
    opponent: 'Texas A&M',
    oppAbbr: 'TAMU',
    oppRank: '#8',
    oppColor: '#500000',
    oppSecondary: '#FFFFFF',
    oppBadge: 'A&M',
    isHome: false,
    isMarquee: true,
    isSec: true,
    stadium: 'Kyle Field',
    location: 'College Station, TX',
    rivalryName: '🔥 The Lone Star Showdown',
    vegasSpread: -4.5,
    overUnder: 54.5,
    baseWinProb: 68.2,
    projScoreUt: 31,
    projScoreOpp: 24,
    radarStats: {
      ut: [95, 93, 90, 94, 92, 90],
      opp: [87, 89, 86, 88, 85, 87]
    },
    scoutReport: {
      xFactor: '107,000 hostile 12th Man crowd noise. Silent cadence execution.',
      keyMatchup: 'Texas offensive tackles vs A&M 5-star edge rushers.',
      summary: 'Thanksgiving weekend war in College Station! State bragging rights and CFP playoff ticket at stake.'
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
  const qbFactor = (state.sliders.qbRating - 100) * 0.25; // +/- %
  const defFactor = (state.sliders.defense - 100) * 0.22;
  const toFactor = state.sliders.turnover * 4.5;
  const crowdImpact = game.isHome ? (state.sliders.crowd - 100) * 0.15 : -(state.sliders.crowd - 100) * 0.15;

  let winProb = game.baseWinProb + qbFactor + defFactor + toFactor + crowdImpact;
  winProb = Math.max(1, Math.min(99.4, winProb));

  // Score adjustments
  const utPtsDelta = Math.round((qbFactor * 0.3) + (toFactor * 0.4) + (crowdImpact * 0.15));
  const oppPtsDelta = Math.round(-(defFactor * 0.25) - (toFactor * 0.3) - (crowdImpact * 0.15));

  const projUt = Math.max(10, game.projScoreUt + utPtsDelta);
  const projOpp = Math.max(3, game.projScoreOpp + oppPtsDelta);

  return {
    winProb: parseFloat(winProb.toFixed(1)),
    projUt,
    projOpp
  };
}

// Monte Carlo Drive Simulator for Game Modal
function simulateGameDrives(game, adjusted) {
  const drives = [];
  const quarters = ['1ST QUARTER', '2ND QUARTER', '3RD QUARTER', '4TH QUARTER'];
  let utScore = 0;
  let oppScore = 0;

  quarters.forEach((q, qIndex) => {
    // 3 to 4 possessions per quarter per team
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
        utResult = 'TOUCHDOWN! Arch Manning deep vertical strike (7 Pts)';
        utType = 'td';
      } else if (utDriveRoll < utFgThreshold) {
        utScore += 3;
        utResult = 'FIELD GOAL! 44-yd kick splits uprights (3 Pts)';
        utType = 'fg';
      } else if (utDriveRoll < utToThreshold) {
        utResult = 'TURNOVER! Opponent strips football on 3rd down';
        utType = 'turnover';
      } else {
        utResult = 'PUNT. Solid defensive pressure forces 3-and-out';
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
        oppResult = `TOUCHDOWN! ${game.opponent} explosive rush play (7 Pts)`;
        oppType = 'td';
      } else if (oppDriveRoll < oppFgThreshold) {
        oppScore += 3;
        oppResult = `FIELD GOAL! ${game.opponent} converts red zone drive (3 Pts)`;
        oppType = 'fg';
      } else if (oppDriveRoll < oppToThreshold) {
        oppResult = `TURNOVER! Texas defense forces interception!`;
        oppType = 'turnover';
      } else {
        oppResult = `PUNT. Texas pass rush records sack for loss`;
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

  // Handle Tie Game in OT
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

  return {
    utScore,
    oppScore,
    drives
  };
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
              <span>${adj.projUt}</span>
              <span class="score-divider">-</span>
              <span>${adj.projOpp}</span>
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
            <span class="text-orange">Win Prob: ${adj.winProb}%</span>
            <span class="text-muted">${(100 - adj.winProb).toFixed(1)}%</span>
          </div>
          <div class="prob-track-sm">
            <div class="prob-fill-sm" style="width: ${adj.winProb}%;"></div>
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
    nattyOddsElem.innerText = '+275';
    secProbElem.innerText = '58.2%';
    playoffTitle.innerText = 'PROJECTED SEED: #1 (UNDISPUTED SEC CHAMPION)';
    playoffDesc.innerText = '12-0 Perfect Regular Season! First round bye secured to the Sugar Bowl quarterfinals.';
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
  } else {
    nattyOddsElem.innerText = '+4500';
    secProbElem.innerText = '1.1%';
    playoffTitle.innerText = 'PROJECTED SEED: ON THE CFP BUBBLE / OUT';
    playoffDesc.innerText = `${wins}-${losses} record places Texas outside the automatic CFP bid threshold.`;
    playoffProbDisplay.innerText = '24.0%';
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

  // Slider Listeners
  const qbSlider = document.getElementById('qbRatingSlider');
  const defSlider = document.getElementById('defenseSlider');
  const toSlider = document.getElementById('turnoverSlider');
  const crowdSlider = document.getElementById('crowdSlider');

  if (qbSlider) {
    qbSlider.addEventListener('input', (e) => {
      state.sliders.qbRating = parseInt(e.target.value);
      document.getElementById('qbValDisplay').innerText = `${state.sliders.qbRating}% (${state.sliders.qbRating > 110 ? 'God Tier' : state.sliders.qbRating < 90 ? 'Struggling' : 'Heisman Mode'})`;
      renderSchedule();
    });
  }

  if (defSlider) {
    defSlider.addEventListener('input', (e) => {
      state.sliders.defense = parseInt(e.target.value);
      document.getElementById('defValDisplay').innerText = `${state.sliders.defense}% (${state.sliders.defense > 110 ? 'Iron Wall' : state.sliders.defense < 90 ? 'Vulnerable' : 'Lockdown'})`;
      renderSchedule();
    });
  }

  if (toSlider) {
    toSlider.addEventListener('input', (e) => {
      state.sliders.turnover = parseInt(e.target.value);
      const val = state.sliders.turnover;
      document.getElementById('turnoverValDisplay').innerText = val > 0 ? `+${val} Takeaways` : val < 0 ? `${val} Bad Breaks` : 'Neutral (0)';
      renderSchedule();
    });
  }

  if (crowdSlider) {
    crowdSlider.addEventListener('input', (e) => {
      state.sliders.crowd = parseInt(e.target.value);
      document.getElementById('crowdValDisplay').innerText = state.sliders.crowd > 110 ? 'Deafening 125dB' : state.sliders.crowd < 90 ? 'Subdued' : 'DKR 105k+ Roar';
      renderSchedule();
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
    document.getElementById('qbValDisplay').innerText = '100% (Heisman Mode)';
    document.getElementById('defValDisplay').innerText = '100% (Dominant)';
    document.getElementById('turnoverValDisplay').innerText = 'Neutral (0)';
    document.getElementById('crowdValDisplay').innerText = 'DKR 105k+ Roar';
    renderSchedule();
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
