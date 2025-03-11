// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Shafira",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Girlfriend? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    photos: {
        question1: "", // URL for photo on first question page
        question2: "", // URL for photo on love meter page
        animatedText: "", // URL for photo on animated text page
        question3: ""  // URL for photo on final question page
    },
    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        animatedText: {
            text: [
                '"A Tenth Chapter: A Journey of Hope"',
                " ‎ ",
                "Under December’s twinkling stars of Jakarta,",
                "When our eyes first met with hope,",
                "We embarked on a journey of shared smiles,",
                "Late-night calls, and unspoken dreams.",
                " ‎ ",
                "Each encounter—a verse in our unfolding story—",
                "From laughter over karaoke to quiet moments in libraries,",
                "Reveals a tapestry of strength and tenderness,",
                "Your independent spirit graced by a soft, feminine light.",
                " ‎ ",
                "Now, as we celebrate our tenth meeting,",
                "My heart brims with excitement for the path ahead,",
                "A future painted with hope and the possibility",
                "Of a love that grows into forever.",
                " ‎ ",
                "You brighten every day,",
                "I cherish every moment shared,",
                "Eager for the adventures that await—",
                "Toward a tomorrow where our journey blossoms",
            ],
            continueBtn: "Continue ❤️"
        },
        third: {
            text: "Will you be my girlfriend on March 11th, 2025? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift and a big warm hug!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://rr4---sn-bavcx-jg3l.googlevideo.com/videoplayback?expire=1741708948&ei=NArQZ6ivIp_s7OsPyv-ruAE&ip=180.191.194.151&id=o-AOca4h81aAKIsvkcBRCQuGrijN0Ej-tfqHckUdAbw_0-&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1741687348%2C&mh=U5&mm=31%2C29&mn=sn-bavcx-jg3l%2Csn-bavcx-hoael&ms=au%2Crdu&mv=m&mvi=4&pl=24&rms=au%2Cau&initcwndbps=993750&bui=AUWDL3yWKqnBgqAeELtPhlp8YsM-xN-MM61KqFNuv7vTohpC5ZkZdci9uluasqXK1jGWSJt141BP-hWK&vprv=1&svpuc=1&xtags=heaudio%3Dtrue&mime=video%2Fmp4&ns=O2w7vncN4w25Rxx3Q4aXXO8Q&rqh=1&cnr=14&ratebypass=yes&dur=182.137&lmt=1733104948283301&mt=1741687022&fvip=6&lmw=1&fexp=51326932%2C51358316%2C51411872&c=TVHTML5&sefc=1&txp=4438434&n=UtKd68Yx5ZrXVw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Csvpuc%2Cxtags%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AFVRHeAwRQIgL9eD61GvH5Qm9XQxMvOwbC0kt2jO5hooBJZwAVMmUmMCIQCohV4vczIvdTCpOk2iNA2KsSgTbqyQrpXwGaNgJrcYaQ%3D%3D&sig=AJfQdSswRAIgDmRFRAUJXn6_ujESmD9n8Umt6MV8U5NLG9U5Ue2dozcCIF0MrxzVi1xbGBQygkwT8Q43IM94-YYu5-aHe2ejdmCA&title=Reality%20Club%20-%20Oh%2C%20Bella%20(Official%20Lyric%20Video)", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 