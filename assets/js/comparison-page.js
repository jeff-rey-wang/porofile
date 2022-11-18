// populate content based on the searched username
const Tags = {
  Escapist: [
    "Escapist",
    rgba(71, 204, 66, 255),
    "This player only averages 0.33 gank deaths per game pre-15 minutes. Think carefully before attempting a gank in their lane.",
  ],
  MidgameMaster: [
    "Midgame Master",
    rgba(71, 204, 66, 255),
    "This player averages 26.55 CS% in from 15 to 30 minutes, they really shine during the mid game.",
  ],
  LaneTyrant: [
    "Lane Tyrant",
    rgba(71, 204, 66, 255),
    "Uh oh, this player averages 18.23 CS difference by 15 minutes! They often dominate the laning phase.",
  ],
  LateBloomer: [
    "Late Bloomer",
    rgba(71, 204, 66, 255),
    "We detect you as a Late Bloomer due to the time it takes for you to make an impact on the game.",
  ],
  EarlyWarder: [
    "Early Warder",
    rgba(71, 204, 66, 255),
    "This player has placed their first ward of the game during the first 3 minutes across 96.12% of their matches. It may be difficult to gank them early on.",
  ],
  VisionFocused: [
    "Vision Focused",
    rgba(71, 204, 66, 255),
    "This player averages 1.77 vision score per minute. They really prioritize placing and clearing wards.",
  ],
  SolidLaner: [
    "Solid Laner",
    rgba(71, 204, 66, 255),
    "This player averages 4.48 CS difference by 15 minutes. They won't dominate the early game but they won't be horrible either.",
  ],
  DeadlyDuelist: [
    "Deadly Duelist",
    rgba(71, 204, 66, 255),
    "Wow, this player has a 60.14% win rate in 1v1 situations! Consider avoiding them unless you have a friend nearby to help.",
  ],
  UltimatePredator: [
    "Ultimate Predator",
    rgba(71, 204, 66, 255),
    "We detect you as the Ultimate Predator because of your commitment to stalking prey throughout the game.",
  ],
  Responsible: [
    "Responsible",
    rgba(71, 204, 66, 255),
    "We detect you as a Responsible player because of your commitment to overall team performance. You spend your money placing wards for your team when you have the gold to spare instead of hoarding it.",
  ],
  Pacifist: [
    "Pacfist",
    rgba(238, 183, 12, 255),
    "This player only averages 1.33 kills + assists by 15 minutes so expect them to play defensively.",
  ],
  HungryForBlood: [
    "Hungry for Blood",
    rgba(238, 183, 12, 255),
    "This player has participated the First Blood of the match in 47.72% of their matches. Expect them to play aggressively and look for the first kill, even if it means dying themselves.",
  ],
  ReadyToRumble: [
    "Ready to Rumble",
    rgba(238, 183, 12, 255),
    "This player has gotten their first kill within the first 5 minutes of their game in 82.97% of their matches. Expect them to join or make action happen early.",
  ],
  Visionless: [
    "Visionless",
    rgba(221, 38, 112, 255),
    "This player only averages 0.24 vision score per minute. They hardly contribute to helping their team control vision at all.",
  ],
};

const Roles = {
  Top: [],
  Jungle: [],
  Mid: [],
  Bot: [],
  Support: [],
};

function player(username, winrate, gamesPlayed) {
  this.username = username;
  this.winrate = winrate;
  this.gamesPlayed = gamesPlayed;
}
function champStats(
  champName,
  gamesPlayed,
  winrate,
  kills,
  deaths,
  assists,
  kda,
  picture,
  banner
) {
  this.champName = champName;
  this.gamesPlayed = gamesPlayed;
  this.winrate = winrate;
  this.kills = kills;
  this.deaths = deaths;
  this.assists = assists;
  this.kda = kda;
  this.URL = picture;
  this.bannerURL = banner;
}

function populate_col(username) {
  if (username == "jasminebrew") {
    background = "assets/imgs/jasminebrew.png";
    ranks = ["none", "B2"];
    tags = [Tags.Escapist, Tags.Visionless, Tags.Pacifist];
    positions = ["sup"];
    champs = [
      champStats(
        "Seraphine",
        34,
        50,
        1.5,
        6.6,
        8.7,
        1.55,
        "assets/imgs/Seraphine_OriginalCircle.png",
        "assets/imgs/Seraphine_OriginalCentered.png"
      ),
      champStats(
        "Jinx",
        27,
        44,
        3.4,
        7.0,
        6.9,
        1.47,
        "assets/imgs/Jinx_OriginalCircle.png",
        "assets/imgs/Jinx_OriginalCentered.png"
      ),
      champStats(
        "Ashe",
        22,
        45,
        1.0,
        6.5,
        9.7,
        1.63,
        "assets/imgs/Ashe_OriginalCircle.png",
        "assets/imgs/Ashe_OriginalCentered.png"
      ),
    ];
    playedWith = [player("Tyv", 56, 18), player("Boxerme", 50, 6)];
  } else if (username == "qotato") {
    background = "assets/imgs/qotato.png";
    //G3 solo, no flex
    ranks = ["G3", "none"];
    //Midgame Master - green
    //Lane tyrant - green
    //Late bloomer - green
    tags = [Tags.MidgameMaster, Tags.LaneTyrant, Tags.LateBloomer];
    //top, bot
    positions = ["top", "bot"];
    //teemo 15 - 53%wr - 6.3/5.7/5.9 - 2.1kda
    //samira 11 - 36%wr - 8.3/5.1/5.1 - 2.6kda
    //fiora 4 - 75%wr - 4.0/4.3/3.5 - 1.8kda
    champs = [
      champStats(
        "Teemo",
        15,
        53,
        6.3,
        5.7,
        5.9,
        2.1,
        "assets/imgs/Teemo_OriginalCircle.png",
        "assets/imgs/Teemo_OriginalCentered.png"
      ),
      champStats(
        "Samira",
        11,
        36,
        8.3,
        5.1,
        5.1,
        2.6,
        "assets/imgs/Samira_OriginalCircle.png",
        "assets/imgs/Samira_OriginalCentered.png"
      ),
      champStats(
        "Fiora",
        4,
        75,
        4.0,
        4.3,
        3.5,
        1.8,
        "assets/imgs/Fiora_OriginalCircle.png",
        "assets/imgs/Fiora_OriginalCentered.png"
      ),
    ];
    //Boxerme 70wr 10 games, ElegantDisaster 66wr 6 games
    playedWith = [player("Boxerme", 70, 10), player("ElegantDisaster", 66, 6)];
  } else if (username == "Boxerme") {
    background = "assets/imgs/Boxerme.png";
    ranks = ["none", "B1"];
    tags = [Tags.LateBloomer, Tags.ReadyToRumble, Tags.HungryForBlood];
    positions = ["mid", "top"];
    champs = [
      champStats(
        "Galio",
        10,
        40,
        4.5,
        7.0,
        8.2,
        1.8,
        "assets/imgs/Galio_OriginalCircle.png",
        "assets/imgs/Galio_OriginalCentered.png"
      ),
      champStats(
        "Shen",
        8,
        75,
        4.0,
        3.0,
        8.4,
        4.1,
        "assets/imgs/Shen_OriginalCircle.png",
        "assets/imgs/Shen_OriginalCentered.png"
      ),
      champStats(
        "Xerath",
        8,
        25,
        8.9,
        6.0,
        9.8,
        3.1,
        "assets/imgs/Xerath_OriginalCircle.png",
        "assets/imgs/Xerath_OriginalCentered.png"
      ),
    ];
    playedWith = [
      player("jasminebrew", 53, 17),
      player("ElegantDisaster", 55, 13),
    ];
  } else if (username == "ElegantDisaster") {
    background = "assets/imgs/ElegantDisaster.png";
    ranks = ["G2", "none"];
    tags = [Tags.EarlyWarder, Tags.VisionFocused, Tags.Responsible];
    positions = ["bot", "sup"];
    champs = [
      champStats(
        "Zyra",
        61,
        40,
        3.3,
        6.3,
        11.5,
        2.33,
        "assets/imgs/Zyra_OriginalCircle.png",
        "assets/imgs/Zyra_OriginalCentered.png"
      ),
      champStats(
        "Yuumi",
        52,
        75,
        2.4,
        4.5,
        17.0,
        4.3,
        "assets/imgs/Yuumi_OriginalCircle.png",
        "assets/imgs/Yuumi_OriginalCentered.png"
      ),
      champStats(
        "Miss Fortune",
        39,
        25,
        4.8,
        5.9,
        8.2,
        2.19,
        "assets/imgs/Miss_Fortune_OriginalCircle.png",
        "assets/imgs/Miss_Fortune_OriginalCentered.png"
      ),
    ];
    playedWith = [player("qotato", 50, 12), player("Tyv", 50, 4)];
  } else if (username == "Tyv") {
    background = "assets/imgs/Tyv.png";
    ranks = ["D4", "none"];
    tags = [Tags.DeadlyDuelist, Tags.SolidLaner, Tags.UltimatePredator];
    positions = ["mid", "bot"];
    champs = [
      champStats(
        "Zed",
        193,
        64,
        9.6,
        4.8,
        5.2,
        3.1,
        "assets/imgs/Zed_OriginalCircle.png",
        "assets/imgs/Zed_OriginalCentered.png"
      ),
      champStats(
        "Sylas",
        77,
        58,
        8.1,
        7.3,
        6.9,
        1.9,
        "assets/imgs/Sylas_OriginalCircle.png",
        "assets/imgs/Sylas_OriginalCentered.png"
      ),
      champStats(
        "Zoe",
        73,
        50,
        6.8,
        4.4,
        7.6,
        3.25,
        "assets/imgs/Zoe_OriginalCircle.png",
        "assets/imgs/Zoe_OriginalCentered.png"
      ),
    ];
    playedWith = [
      player("jasminebrew", 43, 7),
      player("ElegantDisaster", 50, 4),
    ];
  } else {
  }
}
