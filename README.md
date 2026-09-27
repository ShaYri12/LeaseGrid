# 🏢 LeaseGrid

A modern, multilingual property lease management platform built with Next.js 15, featuring internationalization support for English and German.

## ✨ Features

- **🌍 Multilingual Support**: Built-in internationalization with English and German languages
- **⚡ Next.js 15**: Leveraging the latest Next.js App Router for optimal performance
- **🎨 Modern UI**: Responsive design with Tailwind CSS
- **🔄 Client-Side Routing**: Seamless navigation with automatic language detection
- **📱 Fully Responsive**: Mobile-first design approach
- **🚀 Optimized Performance**: Static generation for lightning-fast page loads

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **React**: 18.3.1
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Internationalization**: [react-i18next](https://react.i18next.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Language Detection**: i18next-browser-languagedetector

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd LeaseGrid
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
LeaseGrid/
├── app/
│   ├── [lang]/              # Dynamic language routes
│   │   └── page.js          # Main language page
│   ├── components/          # React components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── KeyFeatures.js
│   │   ├── Testimonials.js
│   │   ├── ChoosePlan.js
│   │   ├── WhyChoose.js
│   │   ├── FrequentlyAskedQuestion.js
│   │   ├── Footer.js
│   │   └── LanguageDropdown.js
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   └── page.js              # Root redirect page
├── public/
│   ├── assets/              # Images and icons
│   └── locales/             # Translation files
│       ├── en.json          # English translations
│       └── de.json          # German translations
├── i18n.js                  # i18next configuration
└── next.config.mjs          # Next.js configuration
```

## 🌐 Internationalization

The project supports two languages:
- **English** (`/en`)
- **German** (`/de`)

Translation files are located in `public/locales/`:
- `en.json` - English translations
- `de.json` - German translations

The app automatically:
1. Redirects from root (`/`) to the default language (`/en`)
2. Detects and stores user language preference in localStorage
3. Generates static pages for both language routes

### Adding a New Language

1. Create a new translation file in `public/locales/` (e.g., `fr.json`)
2. Add the language code to `generateStaticParams()` in `app/[lang]/page.js`:
```javascript
export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "de" },
    { lang: "fr" }, // Add new language
  ];
}
```

## 🎨 Components

- **Header**: Navigation bar with language switcher
- **Hero**: Landing section with call-to-action
- **KeyFeatures**: Showcase of main features
- **Testimonials**: Customer reviews and feedback
- **ChoosePlan**: Pricing plans section
- **WhyChoose**: Benefits and advantages
- **FrequentlyAskedQuestion**: FAQ accordion
- **Footer**: Contact info and links
- **LanguageDropdown**: Language selection component

## 🌍 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- **Netlify**: Connect your Git repository
- **AWS Amplify**: Deploy via console or CLI
- **Railway**: One-click deploy from Git
- **Docker**: Use the included Next.js standalone output

Build command: `npm run build`  
Output directory: `.next`

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file for local environment variables:
```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

### Next.js Config

Modify `next.config.mjs` for custom configurations:
```javascript
const nextConfig = {
  // Add your custom config here
};
```

## 🐛 Troubleshooting

### Build Errors on Vercel

If you encounter build errors related to i18next:
- Ensure all locale files are present in `public/locales/`
- Check that `generateStaticParams` is correctly configured
- Verify no Pages Router functions (`getStaticProps`, `getStaticPaths`) are used

### Language Not Switching

- Clear browser localStorage
- Check browser console for errors
- Verify translation files exist and are valid JSON

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please contact the development team.

---

Built with ❤️ using Next.js and React
