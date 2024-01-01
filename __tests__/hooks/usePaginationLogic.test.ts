import { describe, it, expect, vi, Mock , beforeEach} from 'vitest';
import { renderHook } from '@testing-library/react';
import { usePaginationLogic } from '@/lib/hooks/usePaginationLogic';
import { act } from 'react-dom/test-utils';
import { useRouter } from 'next/router';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('usePaginationLogic', () => {
  let mockPush: Mock;

  beforeEach(() => {
    mockPush = vi.fn();
    vi.mocked(useRouter).mockReturnValue({ push: mockPush } as any);
    vi.clearAllMocks();
  });

  it('navigates to the correct page on changePage', () => {
    const { result } = renderHook(() =>
      usePaginationLogic({ nextPage: 3, previousPage: 1, lastPage: 5 })
    );

    act(() => {
      result.current.changePage(2);
    });

    expect(mockPush).toHaveBeenCalledWith('/task/2');
  });

  it('does not navigate on invalid page number', () => {
    const { result } = renderHook(() =>
      usePaginationLogic({ nextPage: 3, previousPage: 1, lastPage: 5 })
    );

    act(() => {
      result.current.changePage(6);
    });
    expect(mockPush).not.toHaveBeenCalled();
  });
});
