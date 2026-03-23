# English-Arabic Learning App Implementation Plan

We are upgrading the existing LingoLeap application to become a powerful, unique platform for learning English from Arabic. 

## User Review Required

> [!IMPORTANT]
> The requested vocabulary lists sum up to 2350 words (2000 important, 150 essential, 200 unimportant). Generating exactly 2350 accurate, translated, and example-rich words in one go exceeds AI output limits and browser reasonable load sizes for a single inline array. 
> **My Approach:** I will architect the app with `data.js` containing categories and a substantial, high-quality sample of words for each category (around 50-100 words total to verify the categories work perfectly). The app will be designed so you can easily append the rest of the words into the `data.js` file, or load them from a JSON file. Are you okay with this approach?

## Proposed Changes

### Core Content

#### [NEW] [data.js](file:///c:/Users/yasin/Desktop/projects/LearningEnglish/data.js)
- Extract vocabulary from [script.js](file:///c:/Users/yasin/Desktop/projects/LearningEnglish/script.js) and structure it into categories:
  - `essentialWords` (target: 150)
  - `importantWords` (target: 2000)
  - `extraWords` (target: 200)
- Each word object will contain: `english`, `arabic`, `pos` (part of speech), `example`, `arabicExample`.

---

### Logic & Features

#### [MODIFY] [script.js](file:///c:/Users/yasin/Desktop/projects/LearningEnglish/script.js)
- Import/reference `data.js`.
- Add LocalStorage logic to track progress (learned words, quiz scores).
- Implement category switching for flashcards.
- Update Quiz to handle English-to-Arabic and Arabic-to-English questions.

---

### Interface & Experience

#### [MODIFY] [index.html](file:///c:/Users/yasin/Desktop/projects/LearningEnglish/index.html)
- Include Cairo/Tajawal font for beautiful Arabic typography.
- Add a "Dashboard" section with progress stats.
- Create UI cards to navigate between the 3 main vocabulary sections (Essential, Important, Unimportant).
- Link `data.js` in the `<head>` or before [script.js](file:///c:/Users/yasin/Desktop/projects/LearningEnglish/script.js).

#### [MODIFY] [styles.css](file:///c:/Users/yasin/Desktop/projects/LearningEnglish/styles.css)
- Implement bi-directional support styles (handling RTL for Arabic text).
- Add modern animations for the new categories.
- Enhance the premium glassmorphism aesthetic.

## Verification Plan

### Manual Verification
- Verify the UI supports mixed English and Arabic text without layout breakage.
- Test category switching.
- Verify progress is saved across page reloads.
- Use the Speech Synthesis and Recognition features to ensure they work alongside the new data structure.
