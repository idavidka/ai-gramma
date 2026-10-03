import type { ReactNode } from 'react';

export function RememberBox({ children }: { children: ReactNode }) {
  return (
    <aside className="remember">
      <strong>Jegyezd meg</strong>
      <div>{children}</div>
    </aside>
  );
}
