import React, { useState, useEffect } from 'react';
import { Header, PageRoute } from './components/Header';
import { Footer } from './components/Footer';
import { VehicleModal } from './components/VehicleModal';
import { VEHICLES, Vehicle } from './data/vehicles';

// Pages
import { HomePage } from './pages/HomePage';
import { VehiclesPage } from './pages/VehiclesPage';
import { AboutPage } from './pages/AboutPage';
import { VisitPage } from './pages/VisitPage';
import { TestDrivePage } from './pages/TestDrivePage';
import { OffersPage } from './pages/OffersPage';
import { FaqPage } from './pages/FaqPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedVehicleForModal, setSelectedVehicleForModal] = useState<Vehicle | null>(null);
  const [preselectedVehicleForTestDrive, setPreselectedVehicleForTestDrive] = useState<string>('');

  // Handle URL hash changes for robust multi-page routing
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      const [rawPath, rawQuery] = rawHash.split('?');
      const pagePath = rawPath.toLowerCase();

      const validPages: PageRoute[] = [
        'home',
        'vehicles',
        'about',
        'visit',
        'test-drive',
        'offers',
        'faq',
      ];

      // Support parameter like #test-drive?vehicle=Tesla+Model+3
      if (pagePath === 'test-drive') {
        setCurrentPage('test-drive');
        if (rawQuery) {
          const params = new URLSearchParams(rawQuery);
          const v = params.get('vehicle');
          if (v) {
            const decoded = decodeURIComponent(v).trim();
            // Match canonical vehicle name from VEHICLES
            const matched =
              VEHICLES.find((item) => item.name.toLowerCase() === decoded.toLowerCase()) ||
              VEHICLES.find((item) => item.id.toLowerCase() === decoded.toLowerCase());
            setPreselectedVehicleForTestDrive(matched ? matched.name : decoded);
          }
        }
      } else if (validPages.includes(pagePath as PageRoute)) {
        setCurrentPage(pagePath as PageRoute);
      }

      // Always reset scroll to very top on hash route change
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    // Initial check on load
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Ensure whenever currentPage changes via any handler, scroll is immediately reset to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentPage]);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleBookTestDrive = (vehicleName: string) => {
    setPreselectedVehicleForTestDrive(vehicleName);
    setCurrentPage('test-drive');
    window.location.hash = `test-drive?vehicle=${encodeURIComponent(vehicleName)}`;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleSelectVehicleForModal = (vehicle: Vehicle) => {
    setSelectedVehicleForModal(vehicle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#14161B] text-[#F2F0EA] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#C9A24B]/30 selection:text-[#F2F0EA]">
      
      {/* Section 7.1 & 7.5: Persistent Header across all 7 pages with >= 1024px breakpoint */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Viewport Container */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectVehicle={handleSelectVehicleForModal}
          />
        )}

        {currentPage === 'vehicles' && (
          <VehiclesPage
            onSelectVehicle={handleSelectVehicleForModal}
            onBookTestDrive={handleBookTestDrive}
          />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'visit' && <VisitPage onNavigate={handleNavigate} />}

        {currentPage === 'test-drive' && (
          <TestDrivePage
            preselectedVehicle={preselectedVehicleForTestDrive}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'offers' && (
          <OffersPage
            onNavigate={handleNavigate}
            onBookTestDrive={handleBookTestDrive}
          />
        )}

        {currentPage === 'faq' && <FaqPage onNavigate={handleNavigate} />}
      </main>

      {/* Section 7.3: Vehicle Detail Popup Modal overlaying without navigating away */}
      <VehicleModal
        vehicle={selectedVehicleForModal}
        onClose={() => setSelectedVehicleForModal(null)}
        onBookTestDrive={handleBookTestDrive}
      />

      {/* Section 7.1, Section 3 & AC7: Persistent Footer on every page with mandatory disclaimer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
