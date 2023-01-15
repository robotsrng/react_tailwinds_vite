import { vi } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import * as apiRoutes from '../../../data-fetching/api-routes';
import [FTName]sPage from '../[FTName]sPage';

vi.mock('src/data-fetching/api-routes', () => {
  return {
    get[FTName]s: async () => {
      console.log(11111);
      return await [];
    },
  };
});
describe('<[FTName]sPage />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<[FTName]sPage />);
    expect(baseElement).toBeTruthy();
  });

