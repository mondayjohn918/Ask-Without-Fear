// 1. The list of verses (an array of objects)
const verses = [
    {
        text: "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.",
        reference: "Joshua 1:9 (KJV)",
        reflection: "Courage in the Bible is not the absence of fear. It is choosing to keep going because God is with you. Think of one thing you have been avoiding because of fear, and ask what taking one small step might look like today.",
        prayer: "Lord, thank you that I am not alone. Give me courage for today, and help me to trust you in the things I am afraid of. Amen."
    },
    {
        text: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
        reference: "2 Timothy 1:7 (KJV)",
        reflection: "Fear often feels louder than faith, but the Bible says it is not what God has given you. Notice what fear is telling you today, and ask God for power, love and a clear mind to answer it.",
        prayer: "Father, I do not want to be ruled by fear. Fill me with your power, love and a sound mind today. Amen."
    },
    {
        text: "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.",
        reference: "Matthew 7:7 (KJV)",
        reflection: "Jesus invites questions. Asking, seeking and knocking are all active, and he promises that honest seekers will not be ignored. What question have you been holding back from asking God?",
        prayer: "Lord, I bring you my questions today. Give me the courage to ask and the patience to listen. Amen."
    },
    {
        text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.",
        reference: "Philippians 4:6-7 (KJV)",
        reflection: "Anxiety is not a failure of faith. Paul invites us to turn worry into prayer, and to include thanks. Name one worry today and hand it to God in words.",
        prayer: "God, I give you the worries on my mind. Replace my anxiety with your peace. Amen."
    },
    {
        text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.",
        reference: "Isaiah 41:10 (KJV)",
        reflection: "God does not only say do not fear. He gives the reason: I am with you. Where do you need to remember today that you are not facing something alone?",
        prayer: "Lord, strengthen me and help me today. Hold me up when I feel weak. Amen."
    },
    {
        text: "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.",
        reference: "Psalm 34:18 (KJV)",
        reflection: "If you are hurting, this verse says God is close, not distant. You do not have to hide your pain from him. Is there a trusted person you could also let in on what you are carrying?",
        prayer: "Lord, you see where I am hurting. Draw close to me and bring healing. Amen."
    },
    {
        text: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
        reference: "James 1:5 (KJV)",
        reflection: "God does not shame people for lacking wisdom. He gives generously to those who ask. Is there a decision this week where you need wisdom? Ask now, and keep listening.",
        prayer: "Father, I lack wisdom in some areas. Please guide me, and help me to recognise your leading. Amen."
    },
    {
        text: "Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves.",
        reference: "Philippians 2:3 (KJV)",
        reflection: "Selflessness is one of the marks of a true child of God. Christ, who is God over all, chose to come down, live among the people he made, and allow himself to be scorned and killed by them. He is our perfect example. Selfish people push their way to the top at all cost, and they do not mind mocking a brother to entertain the table. Like a garment that wears out, they fade away with no legacy behind. Paul urges us to be interested in others, not only in our own affairs. This does not mean letting people use you. It means keeping the attitude of Christ, who did not change even when others abused his humble nature. Be selfless, and you dig wells of help and deliverance for yourself.",
        prayer: "Lord Jesus, thank you for showing me what true selflessness looks like. Free me from pride and selfish ambition, and help me to value others and care about what concerns them. Give me your attitude today. Amen."
    },
    {
        text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
        reference: "Proverbs 3:5-6 (KJV)",
        reflection: "The world says it is foolish to trust someone you cannot see to take you through life. Yet every day we trust strangers: the doctor at the hospital, the driver of the bus, the cook at the restaurant. If we trust blindly every day, why not trust God, who has proven himself faithful up to this point? Some call it fear of the unknown, but every day we step into the unknown without much concern, and only with God are we told to be careful and logical. Each morning, commit your day to him and trust him to direct your path. His plans for us are good and not evil, to bring us to an expected end. Uncertainty and doubt are the language of the world; faith and trust are the language of the kingdom.",
        prayer: "Father, I choose to trust you with all my heart today. Where I lean on my own understanding, teach me to lean on you. Direct my paths, and help me believe that your plans for me are good. Amen."
    },
    {
        text: "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light.",
        reference: "1 Peter 2:9 (KJV)",
        reflection: "Identity tells you who you are, and purpose tells you what you are made for. When a person's identity is hidden from him, he tends to live below his best, with misplaced priorities, because if the purpose of a thing is not known, abuse is inevitable. For believers, both questions are answered in Scripture, and this verse points out both. So 'Who am I?' and 'What was I made for?' are settled. Are you living with that identity? Are you fulfilling that purpose? You are a lamp set on a hill, and your light should not be hidden. If you are afraid of shining, you are not on the path to fulfilling purpose. This week, go out and shine, and show God that his investment in you is not in vain.",
        prayer: "Lord, thank you for calling me out of darkness into your marvellous light. Help me to live from my true identity and to fulfil my purpose. Give me courage to shine, and let my life bring you glory. Amen."
    },
    {
        text: "O taste and see that the LORD is good: blessed is the man that trusteth in him.",
        reference: "Psalm 34:8 (KJV)",
        reflection: "Life is a series of adventures in God, and the quality of life we experience depends on where we place our emphasis. Doing life with God has taught me many lessons. To be honest, it is not always pleasant, but it has its perks. One of them is that anyone who trusts and relies on the Lord cannot be put to shame. I am a witness to God's faithfulness, grace, love, mercy and goodness, and I recommend him. Know Jesus, know life. No Jesus, no life.",
        prayer: "Lord, I want to taste and see that you are good. Thank you for your faithfulness, grace and mercy. Teach me to trust you fully, so that I am never put to shame. Amen."
    }
];


// 2. Work out today's day number
const today = new Date();

const dayNumber = Math.floor(
    Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000
);


// 3. Pick today's verse
const todaysVerse = verses[dayNumber % verses.length];


// 4. Find the places on the page where the content goes
const dateElement = document.getElementById("verse-date");
const textElement = document.getElementById("verse-text");
const refElement = document.getElementById("verse-ref");
const reflectionElement = document.getElementById("verse-reflection");
const prayerElement = document.getElementById("verse-prayer");


// 5. Put the content on the page
dateElement.textContent = today.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});

textElement.textContent = todaysVerse.text;
refElement.textContent = todaysVerse.reference;
reflectionElement.textContent = todaysVerse.reflection;
prayerElement.textContent = todaysVerse.prayer;