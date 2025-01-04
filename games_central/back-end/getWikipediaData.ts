export default function GetWikipediaData(id:number){
    const search = [
        {
            name: "Pong",
            text: "Pong é o primeiro videogame lucrativo da história, dando origem a um novo setor da indústria. Foi de importância fundamental na história dos videogames. Foi criado por Nolan Bushnell e Ted Dabney na forma de um console ligado a um monitor, movido a moedas. A primeira instalação em um bar de San Francisco, Califórnia, mostrou aos dois a possibilidade de lucro da criação. Assim, em 27 de Junho de 1972, a empresa Atari foi fundada.",
            img:'https://i.guim.co.uk/img/static/sys-images/Technology/Pix/pictures/2008/04/16/Pong460x276.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=23ab69eee3e6fe57a29a95e3da4be528',
            credit:'',
        },
        {
            name: 'Space Invaders', 
            text:'Space Invaders é um jogo de videogame de arcade desenhado por Tomohiro Nishikado e lançado em 1978. Foi originalmente construído pela Taito Corporation e um tempo depois foi licenciado para produção nos Estados Unidos pela Midway Games. Space Invaders foi um dos primeiros jogos de tiro com gráfico bidimensional. O objetivo é destruir ondas de naves com uma espaçonave humana para ganhar o maior número de pontos possível. Para construir o jogo, Nishikado se inspirou na mídia popular, como A Guerra dos Mundos e Star Wars. Apesar de seus controles simples comparados com os jogos de hoje, este jogo ajudou a expandir a indústria de video game para uma indústria mundial. Quando o jogo foi primeiramente lançado, ele fez muito sucesso virando popular.',
            img:'https://s.glbimg.com/po/tt2/f/original/2016/03/02/space-invaders.jpg', 
            credit:'', 
            
        },
        {
            name: 'Breakout', 
            text:'Breakout  é um jogo eletrônico para Arcade desenvolvido pela Atari, Inc e lançado em 13 de maio de 1976. Foi idealizado por Nolan Bushnell e Steve Bristow e influenciado pelo jogo de arcade de 1972 pong, também da Atari. O jogo foi convertido para os consoles e atualizado como Super Breakout.  Além disso, Breakout foi a base e inspiração para livros, jogos, e o computador Apple II.  No jogo, uma camada de tijolos é alinhada no topo da tela. A bola passa pela tela, rebatendo nas paredes laterais e superiores da tela. Quando um tijolo é atingido, a bola rebate de volta e o tijolo é destruído. O jogador perde uma vida quando a bola toca a parte inferior da tela. Para prevenir que isso aconteça, o jogador move uma palheta para rebater a bola para cima, mantendo-a no jogo. O gabinete de arcade usa um monitor preto e branco. Entretanto, o monitor tinha camadas de celofane colorido posto por cima para parecer que os tijolos eram coloridos.',
            img:'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Breakout_game_screenshot.png/220px-Breakout_game_screenshot.png', 
            credit:'', 
        }
    ]

    return(search[id]);
    

}