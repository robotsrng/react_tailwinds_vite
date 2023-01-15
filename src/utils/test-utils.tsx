/* eslint-disable import/export */
import { AuthProvider } from '@hooks/useAuth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { cleanup, render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import React from 'react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactElement }) => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </AuthProvider>
);

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper,
    ...options,
  });
const customRenderHook = (hook: () => any, options = {}) =>
  renderHook(hook, {
    wrapper,
    ...options,
  });

export * from '@testing-library/react';
// override render export
export { customRender as render, customRenderHook as renderHook };
