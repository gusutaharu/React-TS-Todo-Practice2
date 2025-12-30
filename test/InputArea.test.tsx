import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputArea } from '../src/components/InputArea';

describe(InputArea, () => {
  test('初期レンダリングが正しく行われる', () => {
    render(<InputArea todos={[]} setTodos={() => {}} />);
    expect(screen.getByRole('button', { name: '追加' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('TODOを入力')).toBeInTheDocument();
  });
});
