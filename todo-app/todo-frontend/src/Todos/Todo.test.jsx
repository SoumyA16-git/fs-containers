import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Todo from './Todo'

describe('Todo component', () => {
  it('renders not done todo text and buttons correctly', () => {
    const todo = {
      text: 'Write clean container code',
      done: false
    }
    const mockDelete = vi.fn(() => () => {})
    const mockComplete = vi.fn(() => () => {})

    render(<Todo todo={todo} onClickDelete={mockDelete} onClickComplete={mockComplete} />)

    expect(screen.getByText('Write clean container code')).toBeDefined()
    expect(screen.getByText('This todo is not done')).toBeDefined()
    expect(screen.getByText('Set as done')).toBeDefined()
    expect(screen.getByText('Delete')).toBeDefined()
  })

  it('renders done todo with completed text', () => {
    const todo = {
      text: 'Completed containerization task',
      done: true
    }
    const mockDelete = vi.fn(() => () => {})
    const mockComplete = vi.fn(() => () => {})

    render(<Todo todo={todo} onClickDelete={mockDelete} onClickComplete={mockComplete} />)

    expect(screen.getByText('Completed containerization task')).toBeDefined()
    expect(screen.getByText('This todo is done')).toBeDefined()
    expect(screen.getByText('Delete')).toBeDefined()
  })
})
