const Tags = {
  Escapist: [
    "Escapist",
    "rgb(136, 212, 152, 255)",
    "This player only averages 0.33 gank deaths per game pre-15 minutes. Think carefully before attempting a gank in their lane.",
  ],
  MidgameMaster: [
    "Midgame Master",
    "rgb(136, 212, 152, 255)",
    "This player averages 26.55 CS% in from 15 to 30 minutes, they really shine during the mid game.",
  ],
  LaneTyrant: [
    "Lane Tyrant",
    "rgb(136, 212, 152, 255)",
    "Uh oh, this player averages 18.23 CS difference by 15 minutes! They often dominate the laning phase.",
  ],
  LateBloomer: [
    "Late Bloomer",
    "rgb(136, 212, 152, 255)",
    "We detect you as a Late Bloomer due to the time it takes for you to make an impact on the game.",
  ],
  EarlyWarder: [
    "Early Warder",
    "rgb(136, 212, 152, 255)",
    "This player has placed their first ward of the game during the first 3 minutes across 96.12% of their matches. It may be difficult to gank them early on.",
  ],
  VisionFocused: [
    "Vision Focused",
    " rgb(136, 212, 152, 255)",
    "This player averages 1.77 vision score per minute. They really prioritize placing and clearing wards.",
  ],
  SolidLaner: [
    "Solid Laner",
    " rgb(136, 212, 152, 255)",
    "This player averages 4.48 CS difference by 15 minutes. They won't dominate the early game but they won't be horrible either.",
  ],
  DeadlyDuelist: [
    "Deadly Duelist",
    "rgb(136, 212, 152, 255)",
    "Wow, this player has a 60.14% win rate in 1v1 situations! Consider avoiding them unless you have a friend nearby to help.",
  ],
  UltimatePredator: [
    "Ultimate Predator",
    " rgb(136, 212, 152, 255)",
    "We detect you as the Ultimate Predator because of your commitment to stalking prey throughout the game.",
  ],
  Responsible: [
    "Responsible",
    "rgb(136, 212, 152, 255)",
    "We detect you as a Responsible player because of your commitment to overall team performance. You spend your money placing wards for your team when you have the gold to spare instead of hoarding it.",
  ],
  Pacifist: [
    "Pacifist",
    "rgb(255, 224, 132, 255)",
    "This player only averages 1.33 kills + assists by 15 minutes so expect them to play defensively.",
  ],
  HungryForBlood: [
    "Hungry for Blood",
    "rgb(255, 224, 132, 255)",
    "This player has participated the First Blood of the match in 47.72% of their matches. Expect them to play aggressively and look for the first kill, even if it means dying themselves.",
  ],
  ReadyToRumble: [
    "Ready to Rumble",
    "rgb(255, 224, 132, 255)",
    "This player has gotten their first kill within the first 5 minutes of their game in 82.97% of their matches. Expect them to join or make action happen early.",
  ],
  Visionless: [
    "Visionless",
    "rgb(234, 158, 141, 255)",
    "This player only averages 0.24 vision score per minute. They hardly contribute to helping their team control vision at all.",
  ],
};

const Roles = {
  Top: ["Top", "assets/imgs/Top_icon.png"],
  Jg: ["Jungle", "assets/imgs/Jungle_icon.png"],
  Mid: ["Mid", "assets/imgs/Middle_icon.png"],
  Bot: ["Bot", "assets/imgs/Bottom_icon.png"],
  Sup: ["Support", "assets/imgs/Support_icon.png"],
};

class player {
  constructor(username, winrate, gamesPlayed) {
    this.username = username;
    this.winrate = winrate;
    this.gamesPlayed = gamesPlayed;
  }
}
class champStats {
  constructor(
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
}

function populate_col(username) {
  if (username == "jasminebrew") {
    return {
      intro: [
        "jasminebrew",
        "assets/imgs/jasminebrew.png",
        "assets/imgs/Seraphine_OriginalCentered.png",
      ],
      ranks: ["Unranked", "B2"],
      tags: [Tags.Escapist, Tags.Pacifist, Tags.Visionless],
      positions: [Roles.Sup, Roles.Sup],
      champs: [
        new champStats(
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
        new champStats(
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
        new champStats(
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
      ],
      playedWith: [new player("Tyv", 56, 18), new player("Boxerme", 50, 6)],
    };
  } else if (username == "qotato") {
    return {
      intro: [
        "qotato",
        "assets/imgs/qotato.png",
        "assets/imgs/Teemo_OriginalCentered.png",
      ],
      //G3 solo, no flex
      ranks: ["G3", "Unranked"],
      //Midgame Master - green
      //Lane tyrant - green
      //Late bloomer - green
      tags: [Tags.MidgameMaster, Tags.LaneTyrant, Tags.LateBloomer],
      //top, bot
      positions: [Roles.Top, Roles.Bot],
      //teemo 15 - 53%wr - 6.3/5.7/5.9 - 2.1kda
      //samira 11 - 36%wr - 8.3/5.1/5.1 - 2.6kda
      //fiora 4 - 75%wr - 4.0/4.3/3.5 - 1.8kda
      champs: [
        new champStats(
          "Teemo",
          15,
          87,
          6.3,
          5.7,
          5.9,
          2.1,
          "assets/imgs/Teemo_OriginalCircle.png",
          "assets/imgs/Teemo_OriginalCentered.png"
        ),
        new champStats(
          "Samira",
          11,
          63,
          8.3,
          5.1,
          5.1,
          2.6,
          "assets/imgs/Samira_OriginalCircle.png",
          "assets/imgs/Samira_OriginalCentered.png"
        ),
        new champStats(
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
      ],
      //Boxerme 70wr 10 games, LemonT 66wr 6 games
      playedWith: [new player("Boxerme", 70, 10), new player("LemonT", 66, 6)],
    };
  } else if (username == "Boxerme") {
    return {
      intro: [
        "Boxerme",
        "assets/imgs/Boxerme.png",
        "assets/imgs/Galio_OriginalCentered.png",
      ],
      ranks: ["Unranked", "B1"],
      tags: [Tags.LateBloomer, Tags.ReadyToRumble, Tags.HungryForBlood],
      positions: [Roles.Mid, Roles.Bot],
      champs: [
        new champStats(
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
        new champStats(
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
        new champStats(
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
      ],
      playedWith: [
        new player("jasminebrew", 53, 17),
        new player("LemonT", 55, 13),
      ],
    };
  } else if (username == "LemonT") {
    return {
      intro: [
        "LemonT",
        "assets/imgs/ElegantDisaster.png",
        "assets/imgs/Zyra_OriginalCentered.png",
      ],
      ranks: ["G2", "Unranked"],
      tags: [Tags.EarlyWarder, Tags.VisionFocused, Tags.Responsible],
      positions: [Roles.Bot, Roles.Sup],
      champs: [
        new champStats(
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
        new champStats(
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
        new champStats(
          "Ms.Fortune",
          39,
          25,
          4.8,
          5.9,
          8.2,
          2.19,
          "assets/imgs/Miss_Fortune_OriginalCircle.png",
          "assets/imgs/Miss_Fortune_OriginalCentered.png"
        ),
      ],
      playedWith: [new player("qotato", 50, 12), new player("Tyv", 50, 4)],
    };
  } else if (username == "Tyv") {
    return {
      intro: [
        "Tyv",
        "assets/imgs/Tyv.png",
        "assets/imgs/Zed_OriginalCentered.png",
      ],
      ranks: ["D4", "Unranked"],
      tags: [Tags.DeadlyDuelist, Tags.SolidLaner, Tags.UltimatePredator],
      positions: [Roles.Mid, Roles.Bot],
      champs: [
        new champStats(
          "Zed",
          93,
          64,
          9.6,
          4.8,
          5.2,
          3.1,
          "assets/imgs/Zed_OriginalCircle.png",
          "assets/imgs/Zed_OriginalCentered.png"
        ),
        new champStats(
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
        new champStats(
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
      ],
      playedWith: [
        new player("jasminebrew", 43, 7),
        new player("LemonT", 50, 4),
      ],
    };
  } else {
    // something else?
  }
}
