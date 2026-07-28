import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import RouteFocus from './components/layout/RouteFocus';

const HomePage = lazy(() => import('./pages/HomePage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ResumePage = lazy(() => import('./pages/ResumePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function RouteLoading() {
  return (
    <main className="route-loading" aria-live="polite">
      <span className="route-loading__dot" />
      <span className="sr-only">Loading page</span>
    </main>
  );
}

function AppRoutes() {
  return (
    <>
      <RouteFocus />
      <Suspense fallback={<RouteLoading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <AppRoutes />
      </SiteLayout>
    </BrowserRouter>
  );
}
