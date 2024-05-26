
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Teste para o componente App', () => {
    it('Deve renderizar corretamente', () => {
        render(<App />)
        const textareaTest = screen.getByTestId('textarea-test');
        const buttonTest = screen.getByTestId('btn-test');
        fireEvent.change(textareaTest, {
            target: {
                value: 'teste'
            }
        })
        fireEvent.click(buttonTest)
        expect(screen.getByText('teste')).toBeInTheDocument()
    })
})
