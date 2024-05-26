import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Deve adicionar dois ou mais comentários', () => {
        render(<PostComment />);        
        const textareaTest = screen.getByTestId('textarea-test');
        const buttonTest = screen.getByTestId('btn-test');
        const comentarios = [
            'comentario 1',
            // 'comentario 2',
            // 'comentario 3',
            // 'comentario 4',
            'comentario 5' 
        ]
        comentarios.forEach((comentario) => {
            fireEvent.change(textareaTest, {
                target: {
                    value: comentario
                }
            });
            fireEvent.click(buttonTest)
            expect(screen.getByText(comentario)).toBeInTheDocument()
        })
    })
});