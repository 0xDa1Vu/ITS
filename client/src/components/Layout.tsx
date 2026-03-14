import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #eee' }}>
        <h1 style={{ margin: 0 }}>Vehicle Rental</h1>
      </header>
      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
}
