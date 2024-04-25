import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import Input from '.';
import { beforeEach, describe } from 'node:test';
import { HTMLInputTypeAttribute } from 'react';

const mockOnChange = jest.fn();

const placeholder = 'placeHolder';
const inputName = 'inputName';

const renderInput = (
  value: string,
  type?: HTMLInputTypeAttribute,
) =>
  render(
  <Input
    placeholder={placeholder}
    inputName={inputName}
    type={type}
    onChange={mockOnChange}
    value={value}
  />);

describe('input', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render', () => {
    renderInput('');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('text input should render if type text is passed as prop', () => {
    renderInput('text');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('number input should render if type number is passed as prop', () => {
    renderInput('', 'number');
    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
  });

  test('if there is no value, placeholder should render', () => {
    renderInput('');
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  test('should call onChange and value types needs to be displayes', () => {
    renderInput('aaa');
    fireEvent.change(screen.getByRole('textbox'), {target: {value: 'aaa'}});
    expect(screen.getByRole('textbox')).toHaveValue('aaa');
  });
});
