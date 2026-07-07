import type { Metadata } from 'next';
import { UsesClient } from './UsesClient';

export const metadata: Metadata = {
  title: 'Uses — Isaac Ayodele',
  description: 'My development environment, tools, and hardware setup.'
};

const UsesPage = () => <UsesClient />;

export default UsesPage;
