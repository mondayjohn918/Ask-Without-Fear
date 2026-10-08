# Ask Without Fear

**Questions you may be afraid to ask. Answers rooted in Scripture.**

Ask Without Fear is a Christian youth website where young people can ask honest questions about faith, relationships, marriage, purity, prayer and purpose, read Scripture-based answers, get a daily Bible verse, and join a community. Questions can be sent anonymously.

Powered by **Revival Hub**.

---

## Pages

| Page | File | What it does |
|---|---|---|
| Welcome screen (entry page) | `index.html` | Full-screen intro with a rotating image slideshow and an "Enter the Platform" button. This is the first page visitors see |
| Home | `home.html` | Hero section, topics, how it works (Ask, Discover, Grow, Belong), and the anonymous-question call to action |
| Questions & Answers | `pages/questions.html` | Common questions with answers, filterable by topic |
| Daily Word | `pages/daily-word.html` | A new verse, reflection and prayer each day |
| Ask a Question | `pages/ask-question.html` | Question form (topic, question, optional email) with a safety notice |
| Community | `pages/community.html` | Community values, guidelines, and a link to join Revival Hub on WhatsApp |

## Features

- **Topic filter:** the Q&A page shows one topic at a time (Faith, Relationships, Marriage, Purity, Prayer, Purpose).
- **Daily Word:** 11 verses (KJV) with a reflection and a prayer. The verse changes automatically each day, based on the date.
- **Anonymous asking:** the email field is optional. A question is sent without a name unless the person chooses to add an email.
- **Form with character counter:** limit of 1,000 characters, spam trap (honeypot), consent checkbox, and clear success and error messages.
- **Safety notice:** reminds users that the form is not monitored in real time and points them to emergency help.
- **Invite a Friend:** copies the Revival Hub WhatsApp invite link.
- **Mobile friendly:** responsive layout for phones and tablets.

## Project structure

```
Ask Without Fear/
├── index.html            Welcome / splash screen (entry page)
├── home.html             Home page
├── README.md             This file
├── css/
│   └── style.css         All styling
├── js/
│   ├── script.js         Welcome-screen image slideshow
│   ├── questions.js      Topic filter on the Q&A page
│   ├── daily-word.js     Verse list + picks today's verse
│   ├── ask-question.js   Form: counter, sending, messages
│   └── community.js      Copy invite link
├── images/
│   ├── awf-logo.png
│   └── youth-1.jpg, youth-2.jpg, youth-3.jpg
└── pages/
    ├── questions.html
    ├── daily-word.html
    ├── ask-question.html
    └── community.html
```

## Technology

Plain **HTML, CSS and JavaScript**. There is no framework, no build step and no database, so it can be hosted on any static host.

## How questions are delivered

The form sends questions to [Web3Forms](https://web3forms.com), which emails them to the Revival Hub team. The access key is in the hidden `access_key` field in `pages/ask-question.html`. This is how Web3Forms is designed to work, but keep an eye on the submissions inbox, and generate a new key from your Web3Forms dashboard if it is ever misused.

## Running it locally

Open `index.html` in any browser. The form needs an internet connection to send.

## Editing content

- **Add or change daily verses:** edit the `verses` list in `js/daily-word.js`. Each entry has `text`, `reference`, `reflection` and `prayer`. The rotation adjusts automatically to the number of entries.
- **Add a Q&A:** in `pages/questions.html`, copy an existing `qa-item` block and set its `data-topic` to one of: `faith`, `relationships`, `marriage`, `purity`, `prayer`, `purpose`.
- **Change the WhatsApp link:** update it in `js/community.js`, `pages/community.html` and `pages/questions.html`.
- **Change colours and layout:** `css/style.css`.

---

## Hosting it from your phone

There are two meanings of "host on a phone". Pick whichever fits.

### Option A: Put it online with a free host (recommended)

This gives you a public link anyone can open. You only need a phone browser.

**Important before uploading:** the files must sit at the top level of the upload, so that `index.html` is at the root and not inside an extra folder. If your zip contains an outer `Ask without Fear` folder, upload the **contents** of that folder (or use the ready-made `AskWithoutFear-deploy.zip`).

**GitHub Pages**
1. Create a free account at github.com and tap **New repository**. Name it `ask-without-fear` and make it **Public**.
2. Tap **Add file > Upload files** and upload the project files, keeping the `css`, `js`, `images` and `pages` folders. (On a phone, switching the browser to "Desktop site" makes folder upload easier.)
3. Go to **Settings > Pages**. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
4. After a minute or two your site is live at `https://YOUR-USERNAME.github.io/ask-without-fear/`.

**Cloudflare Pages or Netlify (zip upload)**
1. Create a free account.
2. Choose a direct upload option (Cloudflare Pages: **Upload assets**; Netlify: **Add new site > Deploy manually**) and upload the deploy zip.
3. You get a free link such as `yourname.pages.dev` or `yourname.netlify.app`. You can rename it in the site settings.

### Option B: Run the server on the phone itself (Android)

The site is only reachable on your own Wi-Fi network, not by the public.
1. Install **Termux** (from F-Droid).
2. Run:
   ```
   pkg install python
   cd /path/to/Ask-Without-Fear
   python -m http.server 8080
   ```
3. Open `http://localhost:8080` on the phone, or `http://PHONE-IP:8080` from another device on the same Wi-Fi.

This stops when Termux closes, so use Option A for a real, always-on site.

### After it is live

- Test the **Ask a Question** form once on the live link and confirm the email arrives.
- Open the link on a phone and check every page.
- Visitors land on the welcome screen (`index.html`), and its button leads to the home page (`home.html`).
- Optional: connect a custom domain in your host's settings.

---

## Credits

Built for **Revival Hub**.
Scripture quotations are from the King James Version (public domain).

&copy; 2026 Ask Without Fear. All rights reserved.
