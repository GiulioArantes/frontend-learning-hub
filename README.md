# Frontend Learning Hub 🚀

Repository showcasing advanced front-end development skills through practical implementations and modern techniques.

## 🛠 Current Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Rest API](https://img.shields.io/badge/REST_API-FF6F00?style=flat)
![Animations](https://img.shields.io/badge/Animations-FF6B6B?style=flat)
![LocalStorage](https://img.shields.io/badge/LocalStorage-0D47A1?style=flat)

## 🌟 Key Features

### 🎮 Interactive Components

- Complex API integration with error handling
- Dynamic DOM manipulation with modal systems
- Real-time form validation
- Async/await operations with loading states
- Responsive sidebar navigation with toggle functionality

### 🛠 Core Implementations

```mermaid
graph TD
    A[Async Operations] --> B[NASA API]
    A --> C[Movie Database]
    A --> D[Country Data]
    E[DOM Manipulation] --> F[Dynamic Tables]
    E --> G[Live Search]
    E --> H[Complex Forms]
    I[CSS Mastery] --> J[Grid/Flexbox]
    I --> K[Keyframe Animations]
    I --> L[Responsive Design]
```

## 📂 Project Structure

```plaintext
frontend-portfolio/
├── public/
│   ├── images/          # Project assets
│   └── fonts/           # Custom fonts
├── src/
│   ├── core/            # Fundamental implementations
│   │   ├── animation/   # CSS animations
│   │   ├── dom/         # Advanced DOM manipulation
│   │   └── api/         # API integration samples
│   │
│   ├── projects/        # Complete applications
│   │   ├── pokeapi/     # Pokémon API explorer
│   │   ├── async-lab/   # Async operations playground
│   │   └── gallery/     # Responsive image grid
│   │
│   └── utils/           # Helper utilities
│       ├── css-advanced # Modern CSS techniques
│       └── js-practice  # JavaScript experiments
├── .prettierrc          # Code formatting
└── README.md            # Project documentation
```

## 🚀 Highlighted Projects

### API Integration Lab 🔌

**Features:**

- Multiple API endpoints (NASA, Movies, Countries)
- Error handling with try/catch
- Local storage caching
- Dynamic modal system
- Real-time data filtering

```javascript
// Example async/await implementation
async function fetchNasaData() {
  try {
    const response = await fetch('https://api.nasa.gov/planetary/apod');
    const data = await response.json();
    renderNasaMedia(data);
  } catch (error) {
    showErrorUI(error);
  }
}
```

### Animation Playground 🎨

**Techniques:**

- CSS keyframe animations
- Transform transitions
- Interactive hover states
- Responsive layout transitions
- Complex grid layouts

## 🛠 Development Practices

**Code Quality:**

```bash
# Format all project files
npx prettier --write "**/*.{html,css,js}"

# Lint JavaScript files
eslint src/**/*.js
```

**Git Workflow:**

```bash
# Standard commit pattern
git commit -m "feat: add NASA API integration
- Implement async data fetching
- Add error handling
- Create modal display system"
```

## 🧭 Learning Roadmap

```mermaid
graph LR
    Current((Current Skills)) --> React[React Framework]
    Current --> TS[TypeScript]
    Current --> Tests[Testing Library]
    React --> Next[Next.js]
    Tests --> Cypress[Cypress E2E]
```

## 🔄 CI/CD Pipeline Implemented by [@Antoineio](https://github.com/Antoineio)

[![Test Coverage](https://img.shields.io/badge/coverage-100%25-success)](https://github.com/GiulioArantes/meu-projeto-didatico/actions)

**Key Implementation:**

- Strict code validation with ESLint + Stylelint
- Test suite with Jest (e.g. `api-integration.test.js`)
- Automated build with Jekyll
- Continuous deployment to GitHub Pages
- Main branch protection
- npm dependency caching
- Job parallelization

## 🤝 Contribution Guidelines

1. Fork the repository
2. Create feature branch:

```bash
git checkout -b feat/improved-search
```

3. Commit changes with semantic messages:

```bash
git commit -m "perf: optimize API calls
- Implement request caching
- Add debounce to search
- Update error handling"

# Verify locally before pushing
npm run lint && npm test
```

4. Open Pull Request with detailed description.
   _Special thanks to @Antoineio for architecting our robust CI/CD pipeline!_

---

**Connect with me:** [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/giulio-arantes/)
_MIT Licensed | Updated: October 2023 🍂_
