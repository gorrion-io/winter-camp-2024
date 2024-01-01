import { wait } from '@/lib/wait'

describe('wait', () => {
  it('should wait for the specified amount of time before resolving the promise', async () => {
    const start = Date.now()
    await wait(1000)
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(1000)
  })
})
