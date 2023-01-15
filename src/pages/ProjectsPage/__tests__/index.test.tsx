import { vi } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import ProjectsPage from '../ProjectsPage';

vi.mock('src/data-fetching/api-routes', () => {
  return {
    getProjects: async () => {
      console.log(11111);
      return await [];
    },
  };
});

describe('<ProjectsPage />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectsPage />);
    expect(baseElement).toBeTruthy();
  });
});
