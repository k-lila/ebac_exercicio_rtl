import { render, screen } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente Post', () => {
    it('Deve renderizar corretamente', () => {
        const testeImg = "https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg"
        render(
            <Post imageUrl={testeImg}>
                Teste
            </Post>
        )
        expect(screen.getByRole('img')).toHaveAttribute('src', testeImg);
        expect(screen.getByText('Teste')).toBeInTheDocument();
    })
})