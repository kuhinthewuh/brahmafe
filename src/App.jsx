import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import DashboardShell from './pages/dashboard/DashboardShell';
import Overview from './pages/dashboard/Overview';
import CodeChanges from './pages/dashboard/CodeChanges';
import Mother from './pages/dashboard/Mother';
import Children from './pages/dashboard/Children';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardShell />}>
            <Route index element={<Overview />} />
            <Route path="code-changes" element={<CodeChanges />} />
            <Route path="mother" element={<Mother />} />
            <Route path="children" element={<Children />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App;