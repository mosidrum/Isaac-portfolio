import type { Metadata } from 'next';
import { UsesClient } from './UsesClient';

export const metadata: Metadata = {
  title: 'Uses',
  description: 'Development environment, tools, and hardware setup.',
  alternates: { canonical: '/uses' }
};

const UsesPage = () => <UsesClient />;

export default UsesPage;
