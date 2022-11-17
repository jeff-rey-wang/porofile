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
    "This player only averages 0.33 gank deaths per game pre-15 minutes. Think carefully before attempting a gank in their lane.",
  ],
  VisionFocused: [
    "Vision Focused",
    rgba(71, 204, 66, 255),
    "This player averages 1.77 vision score per minute. They really prioritize placing and clearing wards.",
  ],
  SolidLaner: [
    "Solid Laner",
    rgba(71, 204, 66, 255),
    "This player only averages 0.33 gank deaths per game pre-15 minutes. Think carefully before attempting a gank in their lane.",
  ],
  DeadlyDuelist: [
    "Deadly Duelist",
    rgba(71, 204, 66, 255),
    "This player only averages 0.33 gank deaths per game pre-15 minutes. Think carefully before attempting a gank in their lane.",
  ],
  UltimatePredator: [
    "Ultimate Predator",
    rgba(71, 204, 66, 255),
    "This player only averages 0.33 gank deaths per game pre-15 minutes. Think carefully before attempting a gank in their lane.",
  ],
  Pacifist: [
    "Pacfist",
    rgba(238, 183, 12, 255),
    "This player only averages 0.33 gank deaths per game pre-15 minutes. Think carefully before attempting a gank in their lane.",
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
    "This player only averages 0.33 gank deaths per game pre-15 minutes. Think carefully before attempting a gank in their lane.",
  ],
  RiskBlind: [
    "Risk Blind",
    rgba(221, 38, 112, 255),
    "This player only averages 0.33 gank deaths per game pre-15 minutes. Think carefully before attempting a gank in their lane.",
  ],
};

function populate_col(username) {
  if (username == "jasminebrew") {
    // no solo, B2 flex
    //Escapist - green
    //Pacifist - yellow
    //Visionless - red
    //sup 25% vs 100% opacity on no-sup vs sup
    //seraphine 34 - 50%wr - 1.5/6.6/8.7 - 1.55kda
    //jinx 27 - 44%wr - 3.4/7.0/6.9 - 1.47kda
    //ashe 22 - 45%wr - 1.0/6.5/9.7 - 1.63kda
    // Tyv 56wr 18games, Boxerme 50wr, 6games
  } else if (username == "qotato") {
    //G3 solo, no flex
    //Midgame Master - green
    //Lane tyrant - green
    //Late bloomer - green
    //top, bot
    //teemo 15 - 53%wr - 6.3/5.7/5.9 - 2.1kda
    //samira 11 - 36%wr - 8.3/5.1/5.1 - 2.6kda
    //fiora 4 - 75%wr - 4.0/4.3/3.5 - 1.8kda
    //Boxerme 70wr 10 games, ElegantDisaster 66wr 6 games
  } else if (username == "Boxerme") {
    // no solo, B1 flex
    //Late bloomer - green
    //Hungry for Blood - yellow
    //Ready to Rumble - yellow
    //mid, top
    //galio 10-40%wr - 4.5/7.0/8.2 - 1.8kda
    //shen 8 -75%wr - 4.0/3.0/8.4 - 4.1kda
    //xerath 8 - 25%wr - 8.9/6.0/9.8 - 3.1kda
    //jasminebrew 53wr 17 games, Tyv 55wr, 13 games
  } else if (username == "ElegantDisaster") {
    // G2 solo, no flex
    //Early Warder - green
    //Vision focused - green
    //Risk blind - red
    // bot, sup
    // zyra 61 - 62wr 3.3/6.3/11.5 - 2.33kda
    // yuumi 52 - 56wr 2.4/4.5/17.0 - 4.3kda
    // MF 39 - 51wr 4.8/5.9/8.2 - 2.19kda
    // qotato 50wr 12 game, Tyv 50wr 4 game
  } else if (username == "Tyv") {
    // D4 solo, G2 flex
    //Deadly Duelist - green
    //Solid Laner - green
    //Ultimate Predator - green
    // mid, bot
    // zed 193 - 64wr 9.6/4.8/5.2 - 3.1kda
    // sylas 77 - 58wr 8.1/7.3/6.9 - 1.9kda
    // zoe 73 - 50wr 6.8/4.4/7.6 - 3.25kda
    // jasminebrew 43wr 7 game, ElegantDisaster 50 wr 4 game
  } else {
    //User not found scenario
  }
}
