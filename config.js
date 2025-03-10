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
                '"A Tenth Chapter of Us"',
                'by Ridhwan',
                " ‎ ",
                "On a cool December night,",
                "Under twinkling stars of Jakarta,",
                "Our eyes first met—a spark",
                "Igniting a journey of shared laughter and whispered dreams.",
                "",
                "From karaoke serenades",
                "To quiet moments in a bustling library,",
                "Each date a cherished verse",
                "In the unfolding poem of us.",
                " ‎ ",
                "You, strong and independent,",
                "Yet revealing a gentle, feminine grace,",
                "Carefree and wonderfully straightforward—",
                "Making every moment feel like a timeless melody.",
                " ‎ ",
                "I love you more than words can say,",
                "For you've made my life brighter and happier.",
                "I can't imagine a day without you,",
                "And on this, our tenth encounter,",
                "I long to call you mine—",
                "To write our forever in every heartbeat.",
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
        musicUrl: "https://rr4---sn-hvcp4vox8o-i5oz.googlevideo.com/videoplayback?expire=1741638248&ei=CPbOZ7WjE4-OvcAPlIDNyQM&ip=2402%3A9d80%3A855%3Ac960%3A9940%3A189f%3A6e9b%3A7e5e&id=o-AGLkN60urO7X8KhLbrcs6Fi-KopEK1P7ToF7VmxZJTYv&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1741616648%2C&mh=U5&mm=31%2C29&mn=sn-hvcp4vox8o-i5oz%2Csn-i3b7knsl&ms=au%2Crdu&mv=m&mvi=4&pcm2cms=yes&pl=44&rms=au%2Cau&initcwndbps=1476250&bui=AUWDL3xR4USaAsf-Nll2veAlYM9IKjhR72SADrYZ64GmBzwGDU_zY1HX_-iSyxcsgnd_mkRAhIR2tSkD&spc=RjZbSfWyhNftagWDTGpZyTngvtDamkhQLFoz2zL7Ie9ElGZ6ax4YbRW5n6EKhNx-GEH2rQ&vprv=1&svpuc=1&xtags=heaudio%3Dtrue&mime=video%2Fmp4&ns=kvib7SqOJPr-DcpK-dYf9TkQ&rqh=1&cnr=14&ratebypass=yes&dur=182.137&lmt=1733104948283301&mt=1741616232&fvip=4&fexp=51326932%2C51331020%2C51358317%2C51411871&c=MWEB&sefc=1&txp=4438434&n=8TYCnW93VHvdFw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cxtags%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Crms%2Cinitcwndbps&lsig=AFVRHeAwRAIgDkqBOM8q12vGuW_HfjXMSHXPFdViFsNnlwnEIbClxO8CIAag9IoPmwB6B8hIV5NX88qjOQet3dJ_98YNMLIrBVoq&sig=AJfQdSswRgIhAJdkIp-he106W4Dstpw1F3FN4lEtpasoqXqTOEKe0nlBAiEA9sgnljSCFVQexH0WztrCOUrDjxPHvmOY_TIV2D96kW8%3D&title=Reality%20Club%20-%20Oh%2C%20Bella%20(Official%20Lyric%20Video)", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 