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
  // MÓDULO 2 (Novo)
  {
    id: 2,
    title: 'Módulo 2: A Renda Fixa Avançada: Produtos, Riscos e Estratégia',
    introduction: {
      title: 'Introdução',
      contentHtml: `
        <p>Bem-vindo de volta, investidor(a). Primeiro, parabéns pela jornada! O sinal de sua resiliência com o processo mostra que você é muito mais do que capaz de aprender ainda mais sobre este mundo do mercado financeiro, e evidencia também a sua disciplina com o aprendizado.</p>
        <p>É garantido: daqui você sairá com muito mais conhecimento sobre finanças, e aplicar o seu dinheiro vai ser muito mais fácil, porque já entende parte das ferramentas e processos dos principais tipos de investimento (abordados no primeiro módulo).</p>
        <p>Agora, vamos aprofundar um pouco mais, mas em conceitos mais avançados, como:</p>
        <ul>
          <li>Outros títulos de investimento</li>
          <li>Como e por que diversificar a carteira</li>
          <li>Quais os riscos da renda fixa, e como os investimentos estão assegurados</li>
          <li>Impostos sobre investimentos</li>
          <li>Como analisar os títulos de investimento</li>
        </ul>
        <p>Este módulo está recheado com muito conteúdo, então pegue o caderno e vamos aprender mais!</p>
      `,
    },
    lessons: [
      {
        id: 4,
        title: 'Aula 1: O Universo Expandido da Renda Fixa',
        contentHtml: `
        <div class="contentHtml">
          <h4>1.1. Emprestando Dinheiro para Empresas: As Debêntures</h4>
          <p>Suponha que uma grande companhia, como a Petrobras ou a Vale, deseja erguer uma nova fábrica, porém não quer solicitar financiamento ao banco. Ela tem a possibilidade de solicitar esse valor emprestado diretamente a investidores como você.</p>
          <p>A debênture é o documento que comprova o "empréstimo" que você concedeu à empresa. Em contrapartida, ela promete devolver o valor emprestado com juros.</p>
          <p>Suas categorias são:</p>
          <ul>
            <li><strong>Debêntures Comuns:</strong> representam a norma. O Imposto de Renda será cobrado sobre o lucro que você obtiver com elas, de acordo com a tabela regressiva que veremos mais à frente.</li>
            <li><strong>Debêntures Incentivadas:</strong> São emitidas por empresas de setores que o Governo quer estimular (como infraestrutura, energia, saneamento). Como uma forma de atrair mais dinheiro dos investidores, o Governo “abre mão” do imposto. Isto é, todo o lucro obtido com o investimento em uma debênture incentivada é isento de imposto de renda.</li>
          </ul>
          <p><strong>Analisando o Risco (Rating):</strong> Como as empresas que pagam para os investidores, é necessário ficar atento analisar se as empresas são boas pagadoras (que não dão “calote” nos investidores).</p>
          <p>Mas, como identificar? Agências especializadas (como S&P, Moody's e Fitch) analisam a saúde financeira da empresa e dão uma nota, chamada "rating". Vamos explorar um pouco mais do universo das agências de classificação de crédito.</p>

          <h4>1.2. Agências de classificação de crédito</h4>
          <p>Pense na agência de classificação de crédito como um&nbsp;"detetive financeiro"&nbsp;de empresas e governos.</p>
          <p>O trabalho dela é investigar a fundo a saúde financeira de quem está pedindo dinheiro emprestado no mercado (tanto as empresas, quando emitem uma debênture, ou até mesmo o governo vendendo títulos). Estas agências olham tudo: as dívidas, o lucro, a capacidade de gerar caixa, a organização da empresa e até a situação da economia do país.</p>
          <p>Logo depois que a investigação é concluída, eles coletam as informações e dão uma nota para a empresa ou governo em questão. No mercado financeiro, esta nota é apelidada de “rating”.</p>
          <p>Os ratings funcionam da seguinte maneira:</p>
          <ul>
            <li><strong>Nota alta (como AAA ou AA):</strong>&nbsp;Significa que o tomador é muito confiável e a chance de ele não pagar a dívida (dar um calote) é extremamente baixa. Investir nele é considerado muito seguro.</li>
            <li><strong>Nota média (como BBB ou BB):</strong>&nbsp;Significa que o tomador é confiável, mas exige um pouco mais de atenção. O risco de calote existe, mas ainda é considerado baixo ou moderado.</li>
            <li><strong>Nota baixa (como CCC ou C):</strong>&nbsp;É um sinal de alerta. Significa que o tomador está com dificuldades financeiras e o risco de ele não conseguir pagar a dívida é alto. Geralmente, para convencer alguém a investir, ele precisa oferecer juros muito maiores.</li>
          </ul>
          <p>É importante lembrarmos do seguinte: apesar de ser muito usado, o rating não assegura segurança ou retorno. Ele representa uma avaliação no momento de sua emissão e pode ser alterado à medida que a condição econômica ou financeira do emissor muda.</p>
          <p>Existem empresas responsáveis pelos “ratings” das empresas, e as mais conhecidas são: Standard & Poor's (S&P), a Moody's e a Fitch Ratings.</p>

          <h4>1.3. Investindo no Mercado Imobiliário e no Agronegócio: CRI e CRA</h4>
          <p>Os Certificados de Recebíveis são alternativas utilizadas por Mercados do Agro e Imóveis. O esquema de funcionamento delas é um pouco diferente dos outros tipos de investimento. Vamos explicar cada um deles com um exemplo:</p>
          <ul>
            <li><strong>Certificados de Recebíveis Imobiliários (CRI):</strong> Para este título, vamos pensar em uma empresa de imóveis que acabou de lançar um condomínio, e neste condomínio, existem apartamentos e famílias que os ocuparão. As famílias compram os apartamentos e a imobiliária receberá um valor muito grande a prazo. Eles podem juntar todas estas dívidas que receberão e vender para os investidores utilizando um CRI. Ou seja: os investidores pagarão, agora, os valores que a imobiliária receberia com o tempo. Por ter recebido o valor à vista (e não a prazo), as empresas que “empacotaram” estas dívidas, comprometem-se a pagar os investidores com juros.</li>
            <li><strong>Certificado de Recebíveis do Agronegócio (CRA):</strong> Funciona da mesma forma que o exemplo anterior, porém para o agronegócio. Para facilitar o entendimento, basta pensar que agora é uma empresa do ramo do agronegócio que acabou de colher uma safra e receberá o dinheiro a prazo. Com o intuito de receber o valor à vista, eles realizam a mesma estratégia de “empacotar” os valores a receber e retornam, posteriormente, o valor com juros.</li>
          </ul>
          <p><strong>Principal vantagem:</strong> Assim como as debêntures incentivadas, os&nbsp;CRIs e CRAs são isentos de Imposto de Renda&nbsp;para pessoas físicas.</p>
          <p><strong>Ponto de atenção:</strong> O retorno do investimento é no vencimento (o que indica menor liquidez, mas maior retorno). Geralmente, não é muito fácil vender um CRI ou CRA antes do vencimento. Além disso, o risco está concentrado naquele projeto ou empresa específica, e eles não contam com a proteção do FGC (que veremos a posteriormente).</p>

          <h4>1.4. A Arte da Diversificação na Renda Fixa</h4>
          <p>Aqui vai uma aula extra do módulo, para auxiliar você, investidor, a não tomar decisões que podem te prejudicar na caminhada:</p>
          <p><strong>Princípio fundamental:</strong> uma das frases mais famosas no mundo dos investimentos é: “Não coloque todos os ovos na mesma cesta”. Se você só investir em um único título e o emissor tiver problemas, você pode perder tudo. Espalhando seu dinheiro, o risco diminui!</p>
          
          <h5>E como diversificar?</h5>
          <ul>
            <li><strong>Emissores:</strong>&nbsp;Tenha um pouco em títulos do Governo (Tesouro Direto), um pouco em bancos (CDBs) e um pouco em empresas (Debêntures, CRIs, CRAs).</li>
            <li><strong>Indexadores:</strong>&nbsp;Misture títulos com diferentes tipos de rendimento. Um&nbsp;Prefixado&nbsp;(para garantir uma taxa fixa), um&nbsp;Pós-fixado&nbsp;(atrelado ao CDI/Selic, para acompanhar a taxa de juros) e um&nbsp;Híbrido&nbsp;(atrelado ao IPCA, para se proteger da inflação).</li>
            <li><strong>Prazos:</strong>&nbsp;Tenha investimentos com vencimentos diferentes. Alguns mais curtos para objetivos próximos e outros mais longos para a aposentadoria, por exemplo.</li>
          </ul>
          <p>Com uma diversificação de carteira, é menor o risco! De fato, o rendimento de um investimento está diretamente atrelado aos aportes e a quantia que tem aplicada, mas prefira ter um pouco rendendo em vários locais, do que tudo rendendo em um só lugar!</p>
        </div>
        `,
      },
      {
        id: 5,
        title: 'Aula 2: Os Riscos que Você Precisa Conhecer (e Como se Proteger)',
        contentHtml: `
        <div class="contentHtml">
          <h4>2.1. O Risco de Calote (Risco de Crédito)</h4>
          <p>Por mais seguro que possa parecer, até o investimento em renda fixa tem os seus riscos. Mas, por que são menores os riscos?</p>
          <p><strong>Sua Rede de Segurança (FGC, ou Fundo Garantidor de Créditos):</strong>&nbsp;O Fundo Garantidor de Créditos é um tipo de "seguro" para o investidor. Se o banco onde você tem um&nbsp;investimento quebrar, o FGC garante até R$ 250 mil por pessoa em cada instituição financeira, com um limite total de R$ 1 milhão por pessoa a cada 4 anos.</p>
          <p>É importante lembra que não são todos os títulos que possuem a garantia do FGC!</p>
          <p>Debêntures, CRIs e CRAs, por exemplo, não possuem a proteção do FGC. Por isso, para esses títulos, é ainda mais importante analisar a saúde financeira da empresa emissora, sendo possível analisar através do “rating” da empresa.</p>

          <h4>2.2. A "Montanha-Russa" dos Preços (Risco de Mercado)</h4>
          <p>O preço do seu título pode variar todos os dias. Imagine que você comprou um título Tesouro IPCA+ 2035 por R$1000, e o rendimento dele é a inflação (IPCA) + 6% a.a (ao ano).</p>
          <p>Se você segurar o investimento até 2035, é garantido que você receberá o valor completo (se a inflação for 12%, por exemplo, receberá 18% como rendimento, por ser inflação + 6%), e a marcação a mercado não te afetará. Ela vai te afetar se você vender o seu título antes da data acordada.</p>
          <p>É possível que sejam cobradas taxas sobre o investimento, caso você venda o título antes da data do vencimento. Mas, desconsiderando os impostos aplicados, vamos pensar em exemplos:</p>
          <ul>
            <li>Se novos títulos, próximos ao vencimento do seu, forem negociados a taxas menores (4% a.a., por exemplo), o seu título é valorizado — porque ele paga juros maiores (6%) e se torna mais atrativo.<br>Se você vender agora, receberá um preço de mercado mais alto, obtendo lucro em relação ao que pagou (de R$1000, pode subir para R$1400, por exemplo).</li>
            <li>Se novos títulos, com prazos próximos ao do seu, passarem a ser negociados a taxas maiores (8% a.a., por exemplo), o seu título se desvaloriza, porque ele paga juros menores (6%) e se torna menos atrativo. Caso você venda nesse momento, o preço de mercado do seu título será menor, refletindo a nova taxa mais alta. Assim, você teria um prejuízo, já que o mercado exige rendimentos maiores e, por isso, paga menos pelo seu título (de R$1000, pode cair para R$900, por exemplo).</li>
          </ul>
          <p>É possível usar a analogia de um ticket de show.</p>
          <p>Você pagou 200 reais para um show de uma banda, e eles não são tão famosos assim.</p>
          <p>Com o tempo, surgiu uma nova banda famosíssima na cidade, e eles vão fazer um show também, e todos julgam ser mais interessante... pensando em ir ao outro, você pode vender o seu ingresso para tentar comprar o ingresso do outro show (porém, para que o ingresso seja vendido rápido, o preço precisa ser menor para ser atraente).</p>
          <p>De repente, a banda do show que você tem ingresso, virou a mais famosa da cidade e você tem um ingresso do show deles que comprou muito adiantado (e pagou menos). Se você vender o seu ingresso no mercado com muita gente querendo ele, você pode pedir um preço maior, e esta é η jogada da marcação a mercado.</p>
          <p>No final, a marcação a mercado só afeta quem retira o dinheiro antes da data de vencimento. Quando o dinheiro é retirado na data de vencimento, eles pagam o que prometeram desde o início. Retirando antes da data, a marcação a mercado é aplicada.</p>

          <h4>2.3. A Dificuldade de Vender (Risco de Liquidez)</h4>
          <p>O risco de liquidez é η possibilidade de você não conseguir vender seu investimento quando quiser, ou precisar aceitar um valor menor para conseguir vender.</p>
          <p>Em outras palavras, é o risco de ficar “preso” no investimento até o vencimento porque não há compradores suficientes no mercado.</p>
          <p>Na prática, liquidez significa o quão fácil é transformar um investimento em dinheiro sem perder valor.</p>
          <p>Vamos partir para um exemplo. Vai ser mais fácil de entender.</p>
          <p>Se você tem, por exemplo, um CDB de um banco pequeno com vencimento em 2 anos.</p>
          <p>Se você quiser o dinheiro antes, pode tentar vender o título, mas:</p>
          <ul>
            <li>Pode não haver compradores interessados neste título.</li>
            <li>Ou o comprador pode oferecer um valor menor do que o que você pagou.</li>
          </ul>
          <p>Nesse caso, você sofre com o risco de liquidez — tem um investimento que vale, mas não consegue transformá-lo rapidamente em dinheiro sem prejuízo (e isso força o investidor a vender o seu título por um valor abaixo, com o intuito de receber dinheiro rápido).</p>
        </div>
        `,
      },
      {
        id: 6,
        title: 'Aula 3: Impostos e a Escolha Final: Colocando Tudo na Ponta do Lápis',
        contentHtml: `
        <div class="contentHtml">
          <h4>3.1. O "Sócio" do seu Lucro: Imposto de Renda e IOF</h4>
          <p>No investimento em renda fixa, existem tarifas e impostos cobrados no rendimento do investimento. É como se o governo fosse o “sócio” do seu investimento. Existem dois tipos de impostos cobrados</p>
          
          <p><strong>Imposto de Renda (IR):</strong></p>
          <p>A regra é simples:&nbsp;Quanto mais tempo seu dinheiro fica investido, menos imposto você paga sobre o lucro.</p>
          <p>Geralmente, os impostos sobre os investimentos seguem a seguinte regra:</p>
          <table>
            <tr><th>Tempo</th><th>Percentual de imposto</th></tr>
            <tr><td>Até 180 dias</td><td>22,5%</td></tr>
            <tr><td>De 181 a 360 dias</td><td>20%</td></tr>
            <tr><td>De 361 a 720 dias</td><td>17,5%</td></tr>
            <tr><td>Acima de 720 dias</td><td>15%</td></tr>
          </table>

          <p><strong>Imposto sobre Operações Financeiras (IOF):</strong></t>
          <p>Esse imposto só existe se você tirar o dinheiro nos primeiros 30 dias. A cada dia que passa, ele diminui, até sumir completamente no 30º dia (geralmente, ele começa em 96% e desce 3% todos os dias, até atingir 0%).</p>
          <p>Moral da história: A menos que seja uma emergência, nunca resgate um investimento com menos de um mês.</p>
          <p>Algumas plataformas de investimento podem cobrar o imposto, mas não serão iguais à tabela do IOF (podem ser impostos para a utilização da corretora, por exemplo).</p>

          <h4>3.2. A Comparação Definitiva: Títulos Tributáveis vs. Isentos</h4>
          <p>No mercado de renda fixa, existem tanto títulos que sofrem a incidência do Imposto de Renda, como CDBs, RDBs e Tesouro Direto, quanto títulos que são isentos, como as LCIs, LCAs, CRIs e CRAs. A grande questão para o investidor é saber qual oferece a melhor rentabilidade líquida.</p>
          
          <h5>A Pergunta de Ouro e o Cálculo da Rentabilidade Líquida</h5>
          <p>Para responder à pergunta: "O que rende mais, um CDB de 120% do CDI ou uma LCI de 95% do CDI?", é preciso calcular a rentabilidade líquida. A rentabilidade líquida é o que efetivamente entra no seu bolso após o desconto dos impostos.</p>
          <p>Com a fórmula a seguir, é possível definir qual dos investimentos tem um melhor rendimento:</p>
          <p><strong>Rentabilidade Líquida = Rentabilidade Bruta × (1 - Alíquota do IR)</strong></p>
          
          <p>Vamos colocar em um exemplo:</p>
          <p>Supondo que um investimento de um ano (alíquota de IR de 17,5% para o CDB):</p>
          <ul>
            <li><strong>CDB 120% do CDI:</strong>&nbsp;120% x (1 - 0,175) =&nbsp;<strong>99% do CDI</strong></li>
            <li><strong>LCI 95% do CDI:</strong>&nbsp;Como é isenta, a rentabilidade líquida são os próprios&nbsp;<strong>95% do CDI.</strong></li>
          </ul>
          <p>Neste cenário, o CDB de 120% do CDI seria mais vantajoso.</p>

          <h4>3.3. Checklist Prático: Como Analisar um Título</h4>
          <p>Antes de investir em qualquer título de renda fixa, é crucial fazer uma análise completa dos seus principais aspectos. Aqui está um passo a passo para ajudar na tomada de decisão:</p>
          <ul>
            <li><strong>Emissor e Rating:</strong>&nbsp;Quem está emitindo o título? É um banco grande e sólido, uma instituição menor ou o próprio governo? A saúde financeira do emissor está diretamente ligada à segurança do seu investimento. Uma forma de avaliar isso é através do&nbsp;rating&nbsp;de crédito, uma nota dada por agências especializadas que indica o risco de inadimplência do emissor.</li>
            <li><strong>Proteção FGC:</strong>&nbsp;O Fundo Garantidor de Créditos (FGC) é uma entidade privada que funciona como um seguro para seus investimentos em caso de falência da instituição emissora. CRI, CRA são tipos de investimentos que não possuem a proteção do FGC. Em contrapartida, o lucro é maior por ter um investimento de maior risco.</li>
            <li><strong>Prazo e Liquidez:</strong>&nbsp;É fundamental diferenciar esses dois conceitos. O&nbsp;prazo&nbsp;(ou vencimento) é a data final do investimento, quando o valor principal e os juros serão devolvidos. A&nbsp;liquidez&nbsp;é a facilidade de converter seu investimento em dinheiro antes do vencimento.<br>Títulos com liquidez diária, como alguns CDBs e o Tesouro Selic, são ideais para reservas de emergência, pois permitem o resgate a qualquer momento.</li>
          </ul>
        </div>
        `,
      },
    ],
    conclusion: {
      title: 'E aí, investidor(a)! Parabéns!',
      contentHtml: `
        <p>Se lá no começo deste módulo falamos sobre resiliência e disciplina, você acaba de provar que tem de sobra. Terminamos o Módulo 1 sabendo o básico, mas agora... agora você subiu ainda mais o nível.</p>
        <p>É legal dar uma olhada em todo o conhecimento que foi obtido neste módulo:</p>
        <ul>
          <li><strong>Novos Títulos:</strong> Você desvendou o que são Debêntures, CRIs e CRAs (e suas vantagens, como isenção de IR!).</li>
          <li><strong>Análise de Risco:</strong> Aprendeu a "ler" o Rating de uma empresa (o famoso risco de "calote").</li>
          <li><strong>Proteção:</strong> Entendeu o papel do FGC e desmistificou a temida Marcação a Mercado.</li>
          <li><strong>Impostos:</strong> Compreendeu como o Imposto de Renda (tabela regressiva) e o IOF afetam seus ganhos.</li>
        </ul>
        <p>E o que significa isso tudo? Significa que o "financês" não é mais um bicho de sete cabeças. Você ganhou autonomia para montar uma carteira muito mais inteligente e diversificada (lembre-se: nada de colocar todos os ovos na mesma cesta!).</p>
        <p><strong>Agora, é hora de avançar para o módulo 3! Bora nessa?</strong></p>
      `,
    },
  },
  // MÓDULO 3 (Novo)
  {
    id: 3,
    title: 'Módulo 3: Estratégia, Objetivos e Disciplina',
    introduction: {
      title: 'Introdução',
      contentHtml: `
        <p>E aí, investidor(a)! Já estamos no módulo 3!!! Aprendemos muito até aqui.</p>
        <p>Entendemos o termo “Renda Fixa”, falamos sobre: tipos de investimentos e títulos (alguns dos mais importantes na categoria), a inflação e os indicadores de rendimento que o mercado usa, como identificar se o investimento é confiável ou é um calote, falamos também sobre investimentos com o governo e por que eles são isentos de IR. Aproveitando o gancho, falamos de um dos mais importantes temas na hora de investir: o imposto sobre o retorno do investimento. Muito conteúdo até aqui!</p>
        <p>Agora, vamos voltar para conteúdos menos técnicos e mais estratégicos, que é a ideia de reserva, definição de objetivos e alguns mitos da renda fixa.</p>
        <p>Vamos nessa?</p>
      `,
    },
    lessons: [
      {
        id: 7,
        title: 'Aula 1: O Ponto de Partida Obrigatório: Sua Reserva de Emergência',
        contentHtml: `
        <div class="contentHtml">
          <h4>O Conceito de Reserva de Emergência:</h4>
          <p>É possível assemelhar a reserva de emergência com um colchão que te previne de cair no chão e se machucar. É um dinheiro guardado que pode te auxiliar a cobrir gastos urgentes ou inesperados (como um problema de saúde, saída de um emprego, conserto de casa).</p>
          <p><strong>Por que ela é o alicerce?</strong>&nbsp;Porque ela te dá tranquilidade e segurança para tomar melhores decisões financeiras. Com uma reserva, você não precisa se desesperar diante de um imprevisto e pode manter seus investimentos de longo prazo intactos, trabalhando para você.</p>
          <p><strong>Quanto ter?</strong>&nbsp;A recomendação geral é ter um valor equivalente a 6 a 12 meses do seu custo de vida mensal. Ter este valor guardado é muito importante. Vamos usar um exemplo do seguinte: se você guardou 7 meses de reserva de emergência e foi demitido hoje, você tem 7 meses de segurança para tentar se realocar ou ganhar alguma renda, enquanto isso, a sua reserva de emergência te garante a estabilidade.</p>
          <p>É muito importante, antes de qualquer investimento, pensar na reserva de emergência! A melhor decisão a se tomar (desde o início na vida dos investimentos), é começar montando-a, preparando-se para qualquer imprevisto – como um urso que grandes quantidades de gordura para o período de hibernação, por exemplo (antes do inverno chegar, eles já começam a montar o seu “estoque de gordura”, a sua reserva de emergência).</p>

          <h4>1.2. Títulos Ideais para a Reserva:</h4>
          <p>O dinheiro da reserva de emergência precisa estar em um lugar seguro e, principalmente, de fácil acesso. As duas características mais importantes aqui são&nbsp;<strong>segurança</strong>&nbsp;e&nbsp;<strong>liquidez</strong>&nbsp;(que é a capacidade de resgatar o dinheiro rapidamente, como estudamos anteriormente). Por isso, as melhores opções são:</p>
          <ul>
            <li><strong>Tesouro Selic:</strong>&nbsp;Este é considerado o investimento mais seguro do país, pois é garantido pelo Tesouro Nacional. Ele rende diariamente com base na taxa Selic (a taxa básica de juros da nossa economia) e você pode resgatá-lo a qualquer momento em dias úteis, com o dinheiro caindo na sua conta no mesmo dia (D+0) ou no dia seguinte (D+1).</li>
            <li><strong>CDBs de Liquidez Diária:</strong>&nbsp;São aqueles títulos que vimos (emitidos por bancos), que também permitem o resgate a qualquer momento. É fundamental escolher um CDB que pague, no mínimo, 100% do CDI (uma taxa que anda muito próxima da Selic). Além disso, os CDBs contam com a proteção do Fundo Garantidor de Créditos (FGC), que assegura até R$ 250 mil por CPF e por instituição financeira em caso de quebra do banco.</li>
          </ul>
          <p>Muito bom entender todos estes termos, né? Estudamos todos eles no curso, anteriormente. Agora, lendo eles, fica muito mais fácil entender, tenho certeza!</p>

          <h4>1.3. Como Montar a Sua:</h4>
          <p>Construir a reserva é um processo que exige disciplina. O passo a passo é simples:</p>
          <ul>
            <li><strong>Calcule seu custo de vida mensal:</strong>&nbsp;Some todas as suas despesas fixas e variáveis (aluguel, alimentação, transporte, lazer, etc.).</li>
            <li><strong>Defina sua meta:</strong>&nbsp;Multiplique esse valor por 6 (ou o número de meses que você definiu como ideal). Essa é a sua meta final.</li>
            <li><strong>Abra a sua conta e comece a investir:</strong>&nbsp;Abra conta em uma corretora de valores (muitas das corretoras, atualmente, não cobram taxas de manutenção) e comece a fazer aportes mensais no Tesouro Selic ou em um bom CDB de liquidez diária. Não importa se o valor inicial é pequeno, o importante é criar o hábito de poupar e investir todo mês.</li>
          </ul>
          <p><strong>Importante:</strong> antes de pensar em qualquer tipo de investimento (até a construção da reserva), é importante quitar todas as dívidas! Lembre-se: primeiro, saia do vermelho. Depois, pense em aumentar o patrimônio!</p>
        </div>
        `,
      },
      {
        id: 8,
        title: 'Aula 2: Usando a Renda Fixa para Seus Objetivos de Vida',
        contentHtml: `
        <div class="contentHtml">
          <h4>2.1. Defina o Prazo do Seu Sonho:</h4>
          <p>Depois que a reserva é montada, é possível começar a planejar outros investimentos para diversificar o portifólio e atingir metas. Sabemos que a grande vantagem que a renda fixa oferece é a previsibilidade (e qualquer um pode usar isso ao próprio favor).</p>
          <p>O segredo para investir bem na renda fixa é alinhar o vencimento do título com a data em que você precisará do dinheiro. Para cada objetivo, existe um prazo e, consequentemente, um título mais adequado. Vamos dividi-los em curto, médio e longo prazo.</p>
          
          <h4>2.2. Para Objetivos de Curto e Médio Prazo (até 5 anos):</h4>
          <p>Pense em objetivos como dar entrada em um imóvel, fazer uma viagem especial, trocar de carro ou pagar um curso. Para esses planos, a melhor estratégia é "travar" uma boa taxa de rentabilidade para saber exatamente quanto você terá na data do resgate.</p>
          <ul>
            <li><strong>A melhor escolha:</strong>&nbsp;Títulos Prefixados ou CDBs, LCIs e LCAs com prazo definido.</li>
            <li><strong>Por quê?</strong>&nbsp;Ao comprar um título prefixado, você já sabe no momento da aplicação qual será a sua rentabilidade anual (vimos isso no módulo 2, lembra?). Se você levar o título até o vencimento, receberá exatamente aquela rentabilidade contratada, sem surpresas. Isso te dá a previsibilidade necessária para realizar seus planos sem depender das flutuações do mercado.</li>
          </ul>

          <h4>2.3. Para Objetivos de Longo Prazo (Aposentadoria):</h4>
          <p>Quando pensamos em objetivos para daqui a 10, 20 ou 30 anos, como a aposentadoria, nossa maior preocupação deve ser proteger nosso poder de compra contra a inflação (que é um dos maiores problemas quando se fala em dinheiro em função do tempo); então, a melhor escolha é aquela que rende junto à inflação.</p>
          <ul>
            <li><strong>A melhor escolha:</strong>&nbsp;Tesouro IPCA+.</li>
            <li><strong>Por quê?</strong>&nbsp;Este título tem uma rentabilidade híbrida (conteúdo que abordamos anteriormente): ele paga uma taxa de juros fixa (modelo prefixado) mais a variação da inflação (medida pelo IPCA) no período do investimento. Isso garante um ganho real, porque o dinheiro sempre renderá acima da inflação. Esta é a melhor forma de garantir que, no futuro, o dinheiro acumulado terá poder de compra.</li>
          </ul>
        </div>
        `,
      },
      {
        id: 9,
        title: 'Aula 3: Mantendo o Rumo: Disciplina e Próximos Passos',
        contentHtml: `
        <div class="contentHtml">
          <h4>3.1. Mitos Comuns (Para Você Não Cair em Ciladas):</h4>
          <ul>
            <li><strong>"Renda Fixa é 100% segura" (Mito):</strong>&nbsp;Embora seja a classe de ativos mais segura, existem riscos. O principal é o&nbsp;risco de crédito, que é a chance de o emissor do título (um banco ou empresa) não pagar o que deve. Para se prevenir de casos como esse, é possível usar as estratégias que aprendemos anteriormente – analisar o “rating” da empresa que emitiu o título e buscar títulos que possuem a proteção do FGC. Outro é o&nbsp;risco de mercado, que afeta o preço dos títulos prefixados e IPCA+, mas somente se você precisar vender antes do vencimento.</li>
            <li><strong>"Poupança é Renda Fixa e é melhor que CDB" (Mito, é a pior opção):</strong> Sim, a caderneta de poupança é tecnicamente um investimento de renda fixa. No entanto, seu rendimento é um dos piores do mercado, perdendo frequentemente para a inflação e para opções tão seguras quanto, como o Tesouro Selic (e o próprio CDB).</li>
            <li><strong>"Preciso de muito dinheiro para começar" (Mito):</strong> Essa é uma das maiores barreiras que as pessoas criam para si mesmas. Hoje, é possível começar a investir no CDB com R$ 1! Existem vários bancos que já permitem o investidor a começar com essa quantia. O mais importante é começar e criar o hábito, não importa o valor.</li>
          </ul>

          <h4>3.2. O Segredo do Sucesso: Disciplina e Paciência:</h4>
          <p>O maior motivo de separação dos investidores de sucesso e os demais não é encontrar a "fórmula mágica", but sim a constância nos investimentos.</p>
          <p><strong>O que mais importa:</strong>&nbsp;Fazer aportes regulares, de preferência mensais. É o famoso "pagar-se primeiro". Automatize seus investimentos se possível. E, principalmente, não se desespere com o noticiário econômico. Flutuações de curto prazo são normais, e a renda fixa é muito menos afetada do que a renda variável, que possui títulos diretamente ligados à desempenho das empresas, comércio de commodities entre países, etc.</p>
          <p><strong>Uma dica simples:</strong> Evite a tentação de olhar a rentabilidade da sua carteira todos os dias. Isso pode gerar ansiedade e levar a decisões precipitadas. Uma revisão geral a cada seis meses ou uma vez por ano é mais do que suficiente para garantir que você está no caminho certo.</p>
        </div>
        `,
      },
    ],
    conclusion: {
      title: 'Finalização',
      contentHtml: `
        <p>Parabéns por ter chegado até aqui, investidor(a)! O mais importante que vocês aprenderam é que a educação financeira é um processo contínuo. O mundo dos investimentos está sempre mudando, e se manter informado é fundamental. E lembre-se:</p>
        <p>Continue estudando, lendo, e, acima de tudo, investindo. O poder dos juros compostos trabalha a favor de quem tem disciplina e visão de longo prazo. Você deu já o passo mais importante, que é começar. Agora é só manter o rumo.</p>
      `,
    },
  },
];
