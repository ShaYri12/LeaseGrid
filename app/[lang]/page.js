import LanguagePageClient from "../components/LanguagePageClient";

// Generate static params for languages (App Router)
export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "de" }
  ];
}

// Server Component - wraps the client component
export default async function LanguagePage({ params }) {
  const { lang } = await params;
  return <LanguagePageClient lang={lang} />;
}
