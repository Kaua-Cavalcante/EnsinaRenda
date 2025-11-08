export const COURSE_DATA = [
  {
    id: 1,
    title: 'Módulo 1 - Desvendando a Renda Fixa – Primeiros Passos',
    introduction: {
      title: 'Introdução',
      contentHtml: `
        <p>Olá, futuro(a) investidor(a)!</p>
        <p>Inicialmente, é um prazer tê-lo(a) aqui em nosso curso! Se você nunca ouviu falar sobre renda fixa, não se preocupe: este é o lugar certo para começar. Aqui, vamos desvendar um pouco de um dos caminhos mais populares e seguros para fazer o seu dinheiro trabalhar para você.</p>
        <p>Você sabia que a renda fixa é, hoje, a porta de entrada para a maioria dos brasileiros no mundo dos investimentos? Entre o segundo trimestre de 2024 e o segundo trimestre de 2025, o número de investidores em renda fixa no Brasil superou a marca de <strong>100 milhões de CPFs</strong>.</p>
        <p>Considerando que o Brasil tem cerca de 210 milhões de habitantes, isso significa que <strong>quase 50% da população investe em renda fixa</strong>!</p>
        <p>Tendo este dado em vista, dá para reparar que muitas pessoas confiam nesse tipo de investimento, não é mesmo? Agora é a sua vez de aprender e começar a investir!</p>
      `,
    },
    lessons: [
      {
        id: 1,
        title: 'Aula 1 - O Que é Renda Fixa e Por Que Ela Importa?',
        contentHtml: `
        <div class="contentHtml">
          <h3 class="subtitle">O Conceito Fundamental: O que é a “Renda Fixa”</h3>
          <p>Para entender a Renda Fixa da forma mais simples possível, pense nela como um <strong>“empréstimo ao contrário”</strong>, onde você é o banco.</p>
          <p>Quando você solicita um empréstimo, o banco lhe empresta dinheiro e, em troca, você o devolve com juros, certo?</p>
          <p>No investimento em Renda Fixa, o papel é invertido! Você – investidor – empresta o seu dinheiro para alguém, que pode ser:</p>
          <ul>
            <li>O <strong>Governo</strong> (para financiar obras, saúde, etc.);</li>
            <li>Um <strong>Banco</strong> (para oferecer empréstimos a outros clientes);</li>
            <li>Uma <strong>Empresa</strong> (para expandir suas operações).</li>
          </ul>
          <p>Em troca do seu "empréstimo", eles se comprometem a devolver todo o seu dinheiro no futuro, com juros acrescentados ao valor. Esse valor em juros é o seu lucro, a rentabilidade do seu investimento! </p>
          <p>É por isso que o nome é "Renda Fixa": as regras de como seu dinheiro vai render (a taxa de juros) são <strong>fixadas</strong> e combinadas desde o início. Você já investe sabendo como o seu retorno será calculado, o que traz muito mais <strong>previsibilidade e segurança.</strong></p>
        </div>
        `,
      },
      {
        id: 2,
        title: 'Aula 2 - Renda Fixa versus Renda Variável',
        contentHtml: `
        <div class="contentHtml">
          <h3 class="subtitle">Como escolher entre previsibilidade e oportunidade de valorização.</h3>
          <p>Agora que sabemos como funciona a renda fixa, ficará mais simples compreender a lógica da alternativa de investimentos: a Renda Variável </p>
          <p>Na renda variável, você não empresta o dinheiro, mas sim <strong>torna-se sócio</strong> de algum negócio. É como se você comprasse um pedaço de uma empresa e participasse dos lucros. <strong>Quando a empresa lucra, todos os investidores ganham uma parte dos lucros;</strong> mas, <strong>quando a empresa tem déficits, você perde uma parte do capital investido.</strong> </p>
          <p>Vamos deixar isso um pouco mais claro em uma tabela que resume os dois tipos de investimento:</p>
          <table>
            <tr><th>Característica</th><th>Renda Fixa</th><th>Renda Variável</th></tr>
            <tr><td>Previsibilidade</td><td>Alta. Você sabe as regras do seu rendimento desde o início.</td><td>Baixa. O retorno é incerto e pode mudar a todo momento (podendo ser um retorno positivo ou negativo).</td></tr>
            <tr><td>Risco</td><td>Baixo. É considerada a porta de entrada para investimentos seguros.</td><td>Alto. O risco de perder parte do dinheiro investido é maior.</td></tr>
            <tr><td>Potencial de Retorno</td><td>Moderado. Os ganhos são mais limitados, porém mais constantes.</td><td>Elevado. O potencial de lucro é muito maior para compensar o risco.</td></tr>
          </table>
          <p>Agora, uma analogia com bolos para auxiliar no entendimento.</p>
          <h4>Primeiro cenário: Renda Fixa</h4>
          <p>Você fala com um familiar próximo e faz o seguinte acordo:</p>
          <p>“Eu vou te emprestar 1kg de farinha. Daqui a uma semana, você precisa me devolver a mesma quantia de farinha emprestada e, como agradecimento, você deverá me dar um pedaço do bolo que vai fazer.” </p>
          <p>Não importa se o bolo vai ficar muito bom, ou somente “ok”, foi acordado entre vocês que o seu familiar deverá te devolver o mesmo 1kg de farinha (capital inicial, investido) e um pedaço do bolo (os juros). Veja que o seu retorno é fixo e previsível. </p>
          <h4>Segundo cenário: Renda Variável</h4>
          <p>Você, falando com o mesmo familiar do exemplo anterior, faz um acordo diferente: </p>
          <p>“Eu vou te emprestar toda a farinha necessária para o bolo e você entra com todos os outros ingredientes. Ao invés de me dever uma fatia, nós dois seremos sócios do bolo e vamos dividir o resultado.” </p>
          <p>Aqui, diferente do primeiro exemplo, o retorno é variável, porque depende do sucesso do bolo. Há três possibilidades: </p>
          <p>(Cenário ótimo) – O bolo ficou incrível! Todo mundo que passa por vocês dois quer comprar um pedaço do bolo para provar, e vendem por um valor altíssimo. Como sócio, os lucros obtidos da venda serão distribuídos, e você vai receber um retorno maior. </p>
          <p>(Cenário “ok”) – O bolo fica bom, mas não incrível. Vocês conseguem vender algumas fatias, mas o lucro é pequeno. Como o lucro é pequeno, os dois vão acabar recebendo menos retorno. </p>
          <p>(Cenário péssimo) – O bolo queimou no forno! Não há bolo para dividir e nem para vender. E a farinha que você deu? Ela foi usada e perdida no processo. Você não recebe nada de volta, nem mesmo a farinha que investiu. Você perdeu seu capital inicial. </p>
        </div>
        `,
      },
      {
        id: 3,
        title: 'Aula 3 - As Três Engrenagens de um Título',
        contentHtml: `
        <div class="contentHtml">
          <p>Pense em um investimento como uma máquina com <strong>três engrenagens principais</strong> Se você entender como cada uma delas funciona, você será capaz de analisar e entender qualquer título de Renda Fixa que encontrar pela frente. Os três pontos são: <strong>Rentabilidade, Prazo e Liquidez.</strong></p>

          <h4>Engrenagem 1: Rentabilidade (Como o dinheiro cresce?)</h4>
          <p>Esta é a primeira pergunta que todo mundo faz. A rentabilidade é a forma como os juros do seu investimento serão calculados. Existem três tipos principais:</p>
          
          <h4>Rentabilidade Pré-Fixada</h4>
          <ul>
            <li>Neste modelo, a rentabilidade é definida no momento que você faz o investimento. Você sabe qual o percentual que vai receber. </li>
            <li>Exemplo: você investe em um CDB que paga 10% ao ano. Significa que, se você investir R$1000, terá R$1100, que é o capital + 10% de lucro (sem considerar os impostos). </li>
          </ul>

          <h4>Rentabilidade Pós-Fixada</h4>
          <ul>
            <li>Aqui, a rentabilidade não é um número fixo. Ela é atrelada a algum índice da economia do país. Se o índice sobe, o rendimento acompanha (e o caminho contrário também). Neste tipo de investimento, estão alguns termos comuns, como: </li>
            <ul>
              <li>Taxa SELIC: A taxa básica de juros da economia do Brasil, definida pelo Governo. Ela é, basicamente, um termômetro criado para controlar a inflação do país. </li>
              <li>CDI (Certificado de Depósito Interbancário): É a taxa de juros que os bancos usam para emprestar dinheiro entre si. Na prática, o que você precisa saber é: o valor do CDI é quase idêntico ao da Taxa Selic. Ele é a principal referência da Renda Fixa.</li>
            </ul>
            <li>Exemplo: Você investe em um CDB que paga 110% do CDI. Isso significa que, se o CDI render 10% em um ano, seu investimento renderá 11% (110% de 10%). Você acompanha a principal taxa de juros do mercado. </li>
          </ul>

          <h4>Rentabilidade Híbrida</h4>
          <ul>
            <li>Como o nome diz, é uma mistura das duas anteriores: uma parte da rentabilidade é fixa (prefixada) e a outra parte acompanha um índice (pós-fixada). O índice mais comum aqui é o IPCA.  </li>
            <li>IPCA (Índice de Preços do Consumidor Amplo): é o indicador oficial da inflação no Brasil, calculado mensalmente pelo IBGE. Ele mede a variação de preços de uma cesta de produtos e serviços consumidos pela maioria das famílias brasileiras com renda entre 1 e 40 salários-mínimos. Se a inflação foi de 5% no ano, seu dinheiro precisa render mais que isso para você realmente ter um ganho.</li>
            <li>Exemplo: Você investe no Tesouro IPCA+ que paga IPCA + 5% ao ano. Isso significa que o seu dinheiro vai render o valor total da inflação daquele ano mais uma taxa de juros real e já garantida de 5%.</li>
          </ul>

          <h4>Engrenagem 2: Prazo (Quando o dinheiro é devolvido?)</h4>
          <p>O prazo é, simplesmente, a data de vencimento do investimento. É a data final do seu “contrato” de empréstimo. </p>
          <p>O que acontece no vencimento? Na data combinada, o dinheiro (o valor que você aplicou + todos os juros acumulados) cai automaticamente na sua conta da corretora, já com os impostos descontados.</p>
          <p>Por que é importante? Você deve sempre tentar alinhar o prazo do seu investimento com o prazo do seu objetivo. Se você quer comprar um carro daqui a 3 anos, pode escolher um título que vença exatamente nesse período.</p>

          <h4>Engrenagem 3: Liquidez (Com que facilidade posso resgatar?)</h4>
          <p>A liquidez é a sua “porta de saída”. Ela define a facilidade com que você pode transformar seu investimento em dinheiro na sua conta antes da data de vencimento.  </p>
          <p>Existem dois tipos principais:  </p>
          <p>Liquidez Diária: Significa que a "porta de saída" está sempre aberta. Você pode pedir o resgate do seu dinheiro a qualquer dia útil, e ele cairá na sua conta em pouco tempo (geralmente no mesmo dia ou no dia seguinte). É importante ressaltar que há exceções com relação ao dia útil (como o “Cofrinho” do Itaú, entre outros), que permite o resgate a qualquer dia.</p>
          <p>Este tipo de liquidez é o mais adequado para montar uma reserva de emergência, uma vez que a emergência não tem data marcada para acontecer.  </p>
          <p>Liquidez no Vencimento: Significa que a "porta de saída" fica trancada até o final do prazo. Ao investir, você se compromete a deixar o dinheiro render até a data de vencimento. Em troca de você deixar o dinheiro por mais tempo, é oferecido uma rentabilidade maior. </p>
          

          <p>Com isso, você entende como analisar qualquer título de Renda Fixa!</p>
        </div>  
        `,
      },
    ],
    conclusion: {
      title: 'Parabéns, investidor(a)!',
      contentHtml: `
        <p>Missão dada é missão cumprida! Você concluiu a primeira etapa e montou seu kit essencial sobre Renda Fixa.</p>
        <p>Nos próximos módulos, vamos aprender a usar essas ferramentas de forma ainda mais inteligente.</p>
        <p><strong>Vamos juntos para o próximo nível?</strong></p>
      `,
    },
  },
];
