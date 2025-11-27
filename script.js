const reels = [

  {
    is_muted: true,
    userName: "art_by_sonu",
    likeCount: 980,
    isLiked: false,
    commentCount: 33,
    caption: "That childhood days ✏️✨",
    video: "./Videos/v20.mp4",
    userProfile: "https://images.unsplash.com/photo-1611086699165-3462914132c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 11,
    isFollowed: false
  },
  {
    is_muted: true,
    userName: "dance_world",
    likeCount: 5600,
    isLiked: true,
    commentCount: 210,
    caption: "Use pain as an opportunity for success",
    video: "videos/v20.mp4",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 80,
    isFollowed: true
  },
  {
    is_muted: true,
    userName: "motivational_mani",
    likeCount: 2400,
    isLiked: false,
    commentCount: 77,
    caption: "Only real brothers can relate 😍😍😍😍",
    video: "videos/v27.mp4",
    userProfile: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 33,
    isFollowed: false
  },
  {
    is_muted: true,
    userName: "nature_shots",
    likeCount: 15000,
    isLiked: true,
    commentCount: 628,
    caption: "Teacher pe toh bahut jorr se crush aaya tha...",
    video: "videos/v24.mp4",
    userProfile: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 350,
    isFollowed: true
  },
  {
    is_muted: true,
    userName: "funny_vibes",
    likeCount: 11000,
    isLiked: false,
    commentCount: 480,
    caption: "MATCH made in HEAVEN!",
    video: "videos/v29.mp4",
    userProfile: "https://images.unsplash.com/photo-1667829186138-55120b70d731?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 200,
    isFollowed: false
  },
  {
    is_muted: true,
    userName: "music_arjun",
    likeCount: 2200,
    isLiked: true,
    commentCount: 92,
    caption: "Mindset Is Everything",
    video: "videos/v21.mp4",
    userProfile: "https://images.unsplash.com/photo-1744066487703-03f169c55a80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 28,
    isFollowed: true
  },
  {
    is_muted: true,
    userName: "coding_simplified",
    likeCount: 5800,
    isLiked: false,
    commentCount: 244,
    caption: "Fail Again Fail Better 🔥🔥",
    video: "videos/v23.mp4",
    userProfile: "https://images.unsplash.com/photo-1674161610452-88bb7b13a931?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 145,
    isFollowed: true
  },
  {
    is_muted: true,
    userName: "fashion_rutu",
    likeCount: 3100,
    isLiked: false,
    commentCount: 134,
    caption: "Never ever play this game with BOYS.",
    video: "videos/v28.mp4",
    userProfile: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 44,
    isFollowed: false
  },
  {
    is_muted: true,
    userName: "carlover_vik",
    likeCount: 9200,
    isLiked: true,
    commentCount: 510,
    caption: "Rumaal | Comedy Shorts | Aakash Gupta ",
    video: "videos/v25.mp4",
    userProfile: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 220,
    isFollowed: true
  },
  {
    is_muted: true,
    userName: "pet_corner",
    likeCount: 4700,
    isLiked: false,
    commentCount: 310,
    caption: "Importance of patience🔥 ",
    video: "videos/v22.mp4",
    userProfile: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 118,
    isFollowed: false
  },

  {
    is_muted: true,
    userName: "memes_center",
    likeCount: 12000,
    isLiked: true,
    commentCount: 502,
    caption: "Believe in yourself anything is possible || Virat Kohli ||",
    video: "videos/v26.mp4",
    userProfile: "https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 260,
    isFollowed: false
  },

];

let all_reels = document.querySelector(".all-reels");


function alldata() {

  let sum = "";
  reels.forEach(function (val, idx) {

    sum = sum + `  <div class="reels">
                <video src="${val.video}" autoplay controls ${val.is_muted ? 'muted' : ''} loop></video>
                 <div class="mute" id="${idx}">
              
                 ${val.is_muted ? ' <i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}
            </div>

                <div class="bottom">
                    <div class="user">
                        <img src="${val.userProfile}" alt="">
                        <h4>${val.userName}</h4>
                        <button id="${idx}" class="follow">${val.isFollowed ? 'unfollow' : 'follow'}</button>
                    </div>
                    <h3>${val.caption}</h3>
                </div>
                <div class="right">
                    <div id=${idx}  class="like">
                        <h4 class="like-section">${val.isLiked ? '<i id="fill" class="ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                        <h6>${val.likeCount}</h6>
                    </div>
                      <div class="Comment">
                        <h4 class="Comment-section"><i class="ri-chat-3-line"></i></h4>
                        <h6>${val.commentCount}</h6>
                    </div>
                      <div class="Share">
                        <h4 class="Share-section"><i class="ri-share-forward-line"></i></h4>
                        <h6>${val.shareCount}</h6>
                    </div>
                     <div class="Menu">
                        <h4 class="Menu-section"><i class="ri-more-2-fill"></i></h4>
                    </div>
                </div>
            </div>`

  })

  all_reels.innerHTML = sum;

}

alldata();

all_reels.addEventListener("click", function (val) {

  // console.log(val.target.className);

  if (val.target.className == 'follow') {
    if (!reels[val.target.id].isFollowed) {
      reels[val.target.id].isFollowed = true
    }
    else {
      reels[val.target.id].isFollowed = false
    }

    alldata()
  }


  if (val.target.className == 'like') {
    if (!reels[val.target.id].isLiked) {
      reels[val.target.id].likeCount++
      reels[val.target.id].isLiked = true

    }
    else {
      reels[val.target.id].likeCount--
      reels[val.target.id].isLiked = false
    }

    alldata()
  }

  if (val.target.className == 'mute') {
    if (!reels[val.target.id].is_muted) {
      reels[val.target.id].is_muted = true
    }
    else {
      reels[val.target.id].is_muted = false
    }

    alldata()
  }

})


