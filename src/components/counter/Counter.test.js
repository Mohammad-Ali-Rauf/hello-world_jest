import { expect } from '@jest/globals'
import Counter from './Counter'
import { render } from '@testing-library/react'

describe(Counter, () => {
  it("counter displays correct value based on ' initialCount '", () => {
    const { getByTestId } = render(<Counter initialCount={0} />)
    const count = getByTestId('count').textContent
    expect(parseInt(count)).toEqual(0)
  })
})
