const appendProfile = (username) => {
  console.log(username);
  // fill in content
  var numProfiles = $(".profile-container profile-root-class-name").length;
  var { intro, ranks, tags, positions, champs, playedWith } =
    populate_col(username);
  console.log(intro, ranks, tags, positions, champs, playedWith);
  var element = createDiv(
    numProfiles,
    intro,
    ranks,
    tags,
    positions,
    champs,
    playedWith
  );

  // append element onto the profile
  $("#profile_placeholder").before(element);
};

function getRankPhotoURLFromString(str) {
  if (str.startsWith("Unranked")) return "assets/imgs/Unranked.png";
  if (str.startsWith("B")) return "assets/imgs/Bronze.png";
  if (str.startsWith("G")) return "assets/imgs/Gold.png";
  if (str.startsWith("D")) return "assets/imgs/Diamond.png";
}

const createDiv = (
  number,
  intro,
  ranks,
  tags,
  positions,
  champs,
  playedWith
) => {
  var top_opacity = 0.35;
  var jg_opacity = 0.35;
  var mid_opacity = 0.35;
  var bot_opacity = 0.35;
  var sup_opacity = 0.35;

  console.log("poaitiosdna");
  console.log(positions);

  if (positions[0][0] == Roles.Top[0] || positions[1][0] == Roles.Top[0])
    top_opacity = 1;
  if (positions[0][0] == Roles.Jg[0] || positions[1][0] == Roles.Jg[0])
    jg_opacity = 1;
  if (positions[0][0] == Roles.Mid[0] || positions[1][0] == Roles.Mid[0])
    mid_opacity = 1;
  if (positions[0][0] == Roles.Bot[0] || positions[1][0] == Roles.Bot[0])
    bot_opacity = 1;
  if (positions[0][0] == Roles.Sup[0] || positions[1][0] == Roles.Sup[0])
    sup_opacity = 1;

  var rank1 = getRankPhotoURLFromString(ranks[0]);
  var rank2 = getRankPhotoURLFromString(ranks[1]);

  return `
    <div id = "a_user_profile_${
      intro[2]
    }" class="profile-container profile-root-class-name">
    <div id="profile_banner_container" class="profile-banner">
      <div
        id="profile_banner"
        class="banner-container banner-root-class-name"
        style="
          width: 275px;
          height: 80px;
          display: flex;
          position: relative;
          align-items: flex-start;
          border-radius: var(--dl-radius-radius-radius8);
          flex-direction: row;
          background-size: cover;
          background-image: url('${intro[2]}');"
      >
        <button
          type="button"
          onclick="remove_profile()"
        >
        <div id="banner_x_button" class="banner-container1 button">
          <span id="banner_x_text"><span>X</span></span>
        </div>
        </button>
        <script>
          function remove_profile(){
            document.getElementById("a_user_profile_${
              intro[2]
            }").style.display = "none"
          }
        </script>
        <div id="banner_iconname_container" class="banner-container2">
          <div id="banner_picture_container" class="banner-picture">
            <img
              id="banner_profile_icon"
              alt="image"
              src="${intro[1]}"
              class="banner-image"
            />
          </div>
          <div id="banner_username_container" class="banner-username">
            <span id="banner_username_text" class="banner-text1">
              <span>${intro[0]}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div id="profile_tags_container" class="profile-tags">
      <div
        id="profile_taglist"
        class="taglist-container taglist-root-class-name"
      >
        <div id="taglist_tag1_container" class="taglist-tag1" data-tooltip="${
          tags[0][2]
        }" style="background-color: ${tags[0][1]};">
          <span id="taglist_tag1_text" class="taglist-tag1text">
            <span>${tags[0][0]}</span>
          </span>
        </div>
        <div id="taglist_tag2_container" class="taglist-tag2" data-tooltip="${
          tags[1][2]
        }" style="background-color: ${tags[1][1]};">
          <span id="taglist_tag2_text" class="taglist-tag2text">
            <span>${tags[1][0]}</span>
          </span>
        </div>
        <div id="taglist_tag3_container" class="taglist-tag3" data-tooltip="${
          tags[2][2]
        }" style="background-color: ${tags[2][1]};">
          <span id="taglist_tag3_text" class="taglist-tag3text">
            <span>${tags[2][0]}</span>
          </span>
        </div>
      </div>
    </div>
    <div id="profile_ranks_container" class="profile-ranks">
      <div
        class="rank-carousel-container rank-carousel-root-class-name"
      >
          
          
          <div class="rank-carousel-ranked-contents">
              <head>
                  <style>
                      .row{
                          box-sizing: border-box;
                      }
                      /* Set additional styling options for the columns*/
                      .column {
                          float: left;
                          width: 50%;
                          text-align: center;
                      }
                      .row .column img{
                        display: inline-block;
                      }
                      .row:after {
                          content: "";
                          display: table;
                          clear: both;
                      }
                  </style>
              </head>
              <div class="row">
                  <div class="column">
                      Ranked Solo
                      <img id="gold_icon"
                           alt="Gold Division Icon"
                           src="${rank1}" 
                           width="1000" height="1000"
                           class="role-list-image"/>
                      <p>${ranks[0]}</p>
                  </div>
                  <div class="column">
                      Ranked Flex
                      <img id="unranked_icon"
                           alt="Unranked Icon"
                           src="${rank2}"
                           class="role-list-image"/>
                      <p>${ranks[1]}</p>
                  </div>
              </div>
          </div>
        
          
      </div>
    </div>
    <div id="profile_role_container" class="profile-container1">
      <div
        id="profile_rolelist"
        class="role-list-container role-list-root-class-name"
      >
        <img
          id="top_icon"
          alt="image"
          src="assets/imgs/Top_icon.png"
          class="role-list-image"
          style='opacity: ${top_opacity};'
        />
        <img
          id="jg_icon"
          alt="image"
          src="assets/imgs/Jungle_icon.png"
          class="role-list-image1"
          style='opacity: ${jg_opacity};'
        />
        <img
          id="mid_icon"
          alt="image"
          src="assets/imgs/Middle_icon.png"
          class="role-list-image2"
          style='opacity: ${mid_opacity};'
        />
        <img
          id="adc_icon"
          alt="image"
          src="assets/imgs/Bottom_icon.png"
          class="role-list-image3"
          style='opacity: ${bot_opacity};'
        />
        <img
          id="sup_icon"
          alt="image"
          src="assets/imgs/Support_icon.png"
          class="role-list-image4"
          style='opacity: ${sup_opacity};'
        />
      </div>
    </div>
    <div id="profile_champions_container" class="profile-container2">
      <div
        class="most-played-champs-container most-played-champs-root-class-name"
      >
        <div
          id="champs_title_container"
          class="most-played-champs-title"
        >
          <span id="mostplayedChamps_text">
            <span>Most Played Champions</span>
          </span>
        </div>
        <div
          id="champs_1_container"
          class="most-played-champs-container01"
          style="background-image: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('${
            champs[0].bannerURL
          }');"

        >
          <div
            id="champ1_WRandgames_container"
            class="most-played-champs-container02"
          >
            <div
              id="champ1_WR_container"
              class="most-played-champs-container03"
            >
              <span
                id="champ1_WR_text"
                class="most-played-champs-text01"
              >
                <span>${champs[0].winrate}%</span>
              </span>
            </div>
            <div
              id="champ1_totalgames_container"
              class="most-played-champs-container04"
            >
              <span
                id="champ1_totalgames_text"
                class="most-played-champs-text02"
              >
                <span>${champs[0].gamesPlayed} played</span>
              </span>
            </div>
          </div>
          <div
            id="champ1_champIconandName_container"
            class="most-played-champs-container05"
          >
            <div
              id="champ1_icon"
              class="most-played-champs-container06"
              style="background-image: url('${champs[0].URL}');"
            ></div>
            <div
              id="champ1_charactername_container"
              class="most-played-champs-container07"
            >
              <span
                id="champ1_charactername_text"
                class="most-played-champs-text03"
              >
                <span>${champs[0].champName}</span>
              </span>
            </div>
          </div>
          <div
            id="champ1_KDAstats_container"
            class="most-played-champs-container08"
          >
            <div
              id="champ1_KDA_container"
              class="most-played-champs-container09"
            >
              <span
                id="champ1_KDA_text"
                class="most-played-champs-text04"
              >
                <span>${champs[0].kda} KDA</span>
              </span>
            </div>
            <div
              id="champ1_fullKDA_container"
              class="most-played-champs-container10"
            >
              <span
                id="champ1_fullKDA_text"
                class="most-played-champs-text05"
              >
                <span>${champs[0].kills} / ${champs[0].deaths} / ${
    champs[0].assists
  }</span>
              </span>
            </div>
          </div>
        </div>
        <div
          id="champs_2_container"
          class="most-played-champs-container11"
          style="background-image: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('${
            champs[1].bannerURL
          }');"
        >
          <div
            id="champ2_WRandgames_container"
            class="most-played-champs-container12"
          >
            <div
              id="champ2_WR_container"
              class="most-played-champs-container13"
            >
              <span
                id="champ2_WR_text"
                class="most-played-champs-text06"
              >
                <span>${champs[1].winrate}%</span>
              </span>
            </div>
            <div
              id="champ2_totalgames_container"
              class="most-played-champs-container14"
            >
              <span
                id="champ2_totalgames_text"
                class="most-played-champs-text07"
              >
                <span>${champs[1].gamesPlayed} played</span>
              </span>
            </div>
          </div>
          <div
            id="champ2_champIconandName_container"
            class="most-played-champs-container15"
          >
            <div
              id="champ2_icon"
              class="most-played-champs-container16"
              style="background-image: url('${champs[1].URL}');"
            ></div>
            <div
              id="champ2_charactername_container"
              class="most-played-champs-container17"
            >
              <span
                id="champ2_charactername_text"
                class="most-played-champs-text08"
              >
                <span>${champs[1].champName}</span>
              </span>
            </div>
          </div>
          <div
            id="champ2_KDAstats_container"
            class="most-played-champs-container18"
          >
            <div
              id="champ2_KDA_container"
              class="most-played-champs-container19"
            >
              <span
                id="champ2_KDA_text"
                class="most-played-champs-text09"
              >
                <span>${champs[1].kda} KDA</span>
              </span>
            </div>
            <div
              id="champ2_fullKDA_container"
              class="most-played-champs-container20"
            >
              <span
                id="champ2_fullKDA_text"
                class="most-played-champs-text10"
              >
                <span>${champs[1].kills} / ${champs[1].deaths} / ${
    champs[1].assists
  }</span>
              </span>
            </div>
          </div>
        </div>
        <div
          id="champs_3_container"
          class="most-played-champs-container21"
          style="background-image: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('${
            champs[2].bannerURL
          }');"
        >
          <div
            id="champ3_WRandgames_container"
            class="most-played-champs-container22"
          >
            <div
              id="champ3_WR_container"
              class="most-played-champs-container23"
            >
              <span
                id="champ3_WR_text"
                class="most-played-champs-text11"
              >
                <span>${champs[2].winrate} %</span>
              </span>
            </div>
            <div
              id="champ3_totalgames_container"
              class="most-played-champs-container24"
            >
              <span
                id="champ3_totalgames_text"
                class="most-played-champs-text12"
              >
                <span>${champs[2].gamesPlayed} played</span>
              </span>
            </div>
          </div>
          <div
            id="champ3_champIconandName_container"
            class="most-played-champs-container25"
          >
            <div
              id="champ3_icon"
              class="most-played-champs-container26"
              style="background-image: url('${champs[2].URL}');"
            ></div>
            <div
              id="champ3_charactername_container"
              class="most-played-champs-container27"
            >
              <span
                id="champ3_charactername_text"
                class="most-played-champs-text13"
              >
                <span>${champs[2].champName}</span>
              </span>
            </div>
          </div>
          <div
            id="champ3_KDAstats_container"
            class="most-played-champs-container28"
          >
            <div
              id="champ3_KDA_container"
              class="most-played-champs-container29"
            >
              <span
                id="champ3_KDA_text"
                class="most-played-champs-text14"
              >
                <span>${champs[2].kda} KDA</span>
              </span>
            </div>
            <div
              id="champ3_fullKDA_container"
              class="most-played-champs-container30"
            >
              <span
                id="champ3_fullKDA_text"
                class="most-played-champs-text15"
              >
                <span>${champs[2].kills} / ${champs[2].deaths} / ${
    champs[2].assists
  }</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="profile_recentplayedwith_container"
      class="profile-container3"
    >
      <div
        class="recenty-played-with-container recenty-played-with-root-class-name"
      >
        <div id="rpw_title_container" class="recenty-played-with-title">
          <span id="rpw_text"><span>Recently Played With:</span></span>
        </div>
        <div class="recenty-played-with-contents">
          
          <div
            id="rpw_users_container"
            class="recenty-played-with-container01"
          >
          <button
            type="button"
            
          >
            <div
              id="rpw_user1_container"
              class="recenty-played-with-container02 button"
            >
              <div
                id="rpw_user1_name_container"
                class="recenty-played-with-container03"
              >
                <span id="rpw_user1_name_text"><span>${
                  playedWith[0].username
                }</span></span>
              </div>
              <div
                id="rpw_user1_wr_container"
                class="recenty-played-with-container04"
              >
                <span
                  id="rpw_user1_wr_text"
                  class="recenty-played-with-text3"
                >
                  <span>${playedWith[0].winrate}%</span>
                </span>
              </div>
              <div
                id="rpw_user1_numgames_container"
                class="recenty-played-with-container05"
              >
                <span
                  id="rpw_user1_numgames_text"
                  class="recenty-played-with-text4"
                >
                  <span>${playedWith[0].gamesPlayed + " "}games</span>
                </span>
              </div>
            </div>
            </button>
            <button
            type="button"
            
          >
            <div
              id="rpw_user2_container"
              class="recenty-played-with-container06 button"
            >
              <div
                id="rpw_user2_name_container"
                class="recenty-played-with-container07"
              >
                <span id="rpw_user2_name_text"><span>${
                  playedWith[1].username
                }</span></span>
              </div>
              <div
                id="rpw_user2_wr_container"
                class="recenty-played-with-container08"
              >
                <span
                  id="rpw_user2_wr_text"
                  class="recenty-played-with-text6"
                >
                  <span>${playedWith[1].winrate}%</span>
                </span>
              </div>
              <div
                id="rpw_user2_numgames_container"
                class="recenty-played-with-container09"
              >
                <span
                  id="rpw_user2_numgames_text"
                  class="recenty-played-with-text7"
                >
                  <span>${playedWith[1].gamesPlayed + " "} games</span>
                </span>
              </div>
            </div>
          </button>
          </div>
          
        </div>
      </div>
    </div>
  </div>
    `;
};
