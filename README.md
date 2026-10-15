#  byQuest

**Explore the city. Discover the stories. Collect experiences.**

byQuest is a gamified city exploration app designed to help students discover their city, connect with others, and engage with local journalism through interactive quests.

Developed for the **Polaris Media Hackathon 2026**.

##  About the Project

Moving to a new city as a student can be overwhelming. Finding interesting places, affordable activities, and opportunities to meet new people isn't always easy.

**byQuest turns the city into an interactive adventure.**

Through a playful, illustrated city map, students can explore different locations, complete challenges, discover local stories, and earn experience points (XP).

By integrating local journalism from Polaris Media, we aim to make local news and information more engaging, accessible, and relevant to students.

##  Features

-  **Interactive City Map** – Explore the city through a visually engaging map with quest locations.
-  **Location-Based Quests** – Discover new places and complete challenges around the city.
-  **Local Journalism** – Explore stories and information connected to real locations and local events.
-  **Quizzes & Challenges** – Test your knowledge through interactive questions.
-  **XP & Progression** – Earn experience points, level up, and track completed quests.
-  **Achievements** – Unlock digital badges for completing challenges.
-  **Social Exploration** – Discover the city and complete activities with friends.

Some features are planned for future development and may not be included in the initial prototype.

##  Our Goals

- Help students feel more connected to their student city.
- Encourage exploration, social interaction, and affordable activities.
- Make local journalism relevant and engaging for younger audiences.
- Promote local communities, businesses, and cultural experiences.
- Create an enjoyable experience that students want to return to.

##  Tech Stack

| Technology | Purpose |
|---|---|
| React Native | Cross-platform mobile development |
| Expo | App development and testing |
| TypeScript | Type-safe development |
| Expo Router | Navigation between screens |
| React Native SVG | Interactive illustrated map |
| AsyncStorage | Local progress storage |

The initial prototype uses local quest data without requiring a backend.

##  Project Structure

```text
byQuest/
├── .github/
│   └── ISSUE_TEMPLATE/
├── mobile/
│   ├── app/
│   ├── components/
│   ├── assets/
│   ├── data/
│   └── types/
├── README.md
└── .gitignore
```

*The structure may evolve during development.*

##  Getting Started

### Prerequisites

- Node.js
- npm
- Expo Go (for testing on a physical device)

### Installation

Clone the repository:

```bash
git clone https://github.com/taraaqe/byQuest.git
cd byQuest
```

Install dependencies:

```bash
cd mobile
npm install
```

Start the development server:

```bash
npx expo start
```

Scan the QR code using Expo Go to run the app on your phone.

##  Git Workflow

We use a branch-based workflow to support collaboration.

| Branch | Purpose |
|---|---|
| `main` | Stable demo-ready version |
| `dev` | Shared development branch |
| `feature/*` | Development of new features |
| `fix/*` | Bug fixes |

### Contribution Workflow

1. Create a new branch from `dev`.
2. Implement your feature.
3. Commit your changes.
4. Push your branch to GitHub.
5. Open a Pull Request targeting `dev`.
6. Review and merge the Pull Request.

Avoid pushing directly to `main`.

##  Future Development

- New quests and challenges every two weeks
- Collaborative quests and social challenges
- Partnerships with local businesses and student organizations
- Student discounts and partner rewards
- Personalized city exploration
- Integration with Polaris Media's local news platforms
- Expansion to additional student cities

##  Polaris Media Hackathon

byQuest explores how local journalism can become part of students' everyday experiences.

Instead of simply reading about their city, students can discover its stories by actively exploring it.

Our vision is to connect **students, local communities, and journalism** through an engaging mobile game.

---

**Made with ❤️ for Polaris Media Hackathon 2026.**