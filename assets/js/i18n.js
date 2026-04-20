(function () {
  var STORAGE_KEY = "tinyapps-language";
  var FALLBACK_LOCALE = "pt-BR";
  var supportedLocales = ["pt-BR", "es", "en"];

  var translations = {
    "pt-BR": {
      common: {
        languageGroup: "Idioma",
        langPt: "Português do Brasil",
        langEs: "Espanhol",
        langEn: "Inglês",
        home: "Início",
        apps: "Apps",
        allApps: "Todos os apps",
        appPage: "Página do app",
        privacy: "Privacidade",
        terms: "Termos",
        privacyPolicy: "Política de privacidade",
        termsAndConditions: "Termos e condições",
        backToAllApps: "Voltar para todos os apps"
      },
      home: {
        title: "Tiny Apps, Huge Ideas",
        description: "Tiny Apps, Huge Ideas reúne uma calculadora de fita de papel, um jogo de quebra-cabeça colorido e um relógio de xadrez limpo.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegação principal",
        appsLink: "Apps",
        heroEyebrow: "Tiny Apps, Huge Ideas",
        heroTitle: "Aplicativos úteis com muita personalidade.",
        heroLead: "Se você quer uma forma melhor de conferir contas, encaixar uma partida rápida de quebra-cabeça ou manter uma partida de xadrez no ritmo certo, estes apps foram feitos para parecer simples, focados e divertidos desde o primeiro toque.",
        heroPrimary: "Ver os apps",
        heroSecondary: "Começar pela Calculadora Mecânica",
        checkItems: [
          "Ferramentas úteis e diversão rápida em um só lugar.",
          "Feitos para parecer rápidos, claros e fáceis de revisitar.",
          "Três apps, três estilos, zero bagunça."
        ],
        sectionEyebrow: "Escolha seu próximo app",
        sectionTitle: "Três tarefas diferentes. Uma ideia simples: fazer as pequenas coisas muito bem.",
        sectionLead: "Escolha a calculadora, o jogo de quebra-cabeça ou o relógio de xadrez que combina com o seu momento.",
        calculatorBadge: "Utilitário",
        calculatorTitle: "Calculadora Mecânica",
        calculatorLead: "Se você gosta de ver cada etapa, este app mantém uma fita de papel em estilo recibo para os cálculos e ainda adiciona ferramentas integradas para conversões, cenários de juros e divisão de conta.",
        calculatorFeatures: [
          "Memória em fita de papel que registra entradas e resultados",
          "Calculadora com suporte completo a operadores e funcionalidade de porcentagem",
          "Ferramenta Divisor de Conta para dividir custos com distribuição uniforme ou desigual, incluindo gorjeta",
          "Conversor de Unidades com suporte a comprimento, peso, volume e conversões de temperatura",
          "Calculadora de Juros com múltiplos modos: simples, retroativo, composto e cenários de poupança",
          "Gerador de Números para criar sequências de números e valores aleatórios",
          "Efeitos opcionais de impressão e sons adicionam sensação de calculadora mecânica",
          "Modo paisagem e opções de exportação (TXT, CSV, PNG, JPG, PDF) facilitam revisar e compartilhar resultados"
        ],
        calculatorAppPage: "Página do app",
        calculatorPrivacy: "Privacidade",
        calculatorTerms: "Termos",
        columnsBadge: "Jogo",
        columnsTitle: "Columns Classic",
        columnsLead: "Quando você quer uma pausa rápida estilo arcade, Columns Classic oferece ação rápida de blocos, combinações em cadeia e muita energia de pontuação alta.",
        columnsFeatures: [
          "4 níveis de dificuldade e 3 tamanhos de grade",
          "Combinações horizontais, verticais e diagonais",
          "Controles por gesto e botões na tela opcionais",
          "Placar separado com top 20 por modo e tamanho de grade"
        ],
        columnsAppPage: "Página do app",
        columnsPrivacy: "Privacidade",
        columnsTerms: "Termos",
        chessBadge: "Ferramenta",
        chessTitle: "Chess Timer",
        chessLead: "Para jogos presenciais, este relógio de xadrez mantém os turnos claros, a configuração fácil e a partida mais fluida para os dois jogadores.",
        chessFeatures: [
          "Troca rápida de turno para jogos de dois jogadores na mesa",
          "Controles de tempo predefinidos e horas, minutos e segundos personalizados",
          "Pausar, retomar, reiniciar e pausa automática opcional",
          "Seletor de cor do tema, sons e modo paisagem opcional"
        ],
        chessAppPage: "Página do app",
        chessPrivacy: "Privacidade",
        chessTerms: "Termos",
        whyEyebrow: "Por que eles são bons de usar",
        whyTitle: "Fáceis de aprender, fáceis de manter e feitos para não atrapalhar",
        madeTitle: "Feitos para momentos reais",
        madeText: "Estes apps são pensados para aquelas situações pequenas que acontecem o tempo todo: conferir números, passar alguns minutos com um jogo ou controlar uma partida ao vivo.",
        privacyTitle: "Claros sobre privacidade",
        privacyText: "Os dados principais dos apps ficam no dispositivo sempre que possível. Se os anúncios estiverem ativados, as páginas de privacidade explicam exatamente o que isso significa.",
        simpleTitle: "Simples por design",
        simpleText: "Os apps mantêm a bagunça longe, e este site faz o mesmo. O que você precisa fica fácil de encontrar, sem um labirinto de menus ou ruído de marketing.",
        footerText: "Três apps Android focados, feitos para serem rápidos, claros e agradáveis de usar.",
        footerApps: "Apps",
        footerStart: "Começar pela Calculadora Mecânica",
        calculatorAlt: "Ícone da Calculadora Mecânica",
        columnsAlt: "Ícone do Columns Classic",
        chessAlt: "Ícone do Chess Timer",
        getItOnGooglePlay: "Obtenha na Google Play",
        comingSoon: "Em breve"
      },
      mechanicalCalculatorIndex: {
        title: "Calculadora Mecânica | Tiny Apps, Huge Ideas",
        description: "A Calculadora Mecânica combina uma calculadora de fita de papel com exportações, conversor de unidades, divisão de conta e ferramentas de juros em um app com clima clássico.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegação principal",
        allApps: "Todos os apps",
        privacy: "Privacidade",
        terms: "Termos",
        breadcrumbsHome: "Início",
        breadcrumbsApp: "Calculadora Mecânica",
        badge: "Utilitário Android",
        titleText: "Calculadora Mecânica",
        lead: "Quer uma calculadora que permita ver cada etapa? A Calculadora Mecânica mantém a fita de papel em estilo recibo e o visual de impressão clássico, e ainda adiciona ferramentas integradas para conversão de unidades, divisão de conta e cálculos de juros.",
        privacyButton: "Política de privacidade",
        termsButton: "Termos e condições",
        backButton: "Voltar para todos os apps",
        whyTitle: "Por que você vai gostar",
        whyItems: [
          "O histórico em fita de papel registra entradas, operações e resultados como um recibo.",
          "A animação de impressão opcional e os efeitos sonoros reforçam o clima de calculadora mecânica.",
          "As ferramentas integradas cobrem conversão de unidades, divisão de conta e cálculos de juros.",
          "O modo de juros inclui abas de juros simples, retroativos, compostos e poupança.",
          "O Divisor de Conta aceita divisão igual ou desigual, com gorjeta opcional.",
          "O modo paisagem e as opções de exportação facilitam revisar ou compartilhar resultados."
        ],
        whenTitle: "Ótima quando você quer...",
        whenText1: "Conferir cálculos da escola, do trabalho ou de casa sem perder o rastro de como chegou ao resultado.",
        whenText2: "É especialmente útil quando você quer um histórico visível, uma conversão rápida, uma forma de comparar cenários de juros ou uma divisão mais fácil de uma conta compartilhada sem trocar de app.",
        privacyAtGlance: "Privacidade em resumo",
        privacyItems: [
          "Nenhuma conta é necessária.",
          "Os cálculos, o histórico da fita e os dados das ferramentas ficam no dispositivo.",
          "Os anúncios opcionais usam o Google AdMob e podem ser desativados em Configurações.",
          "As exportações são geradas localmente antes da abertura da folha de compartilhamento do Android."
        ],
        detailsTitle: "Precisa dos detalhes?",
        detailsParagraph: "Quer a política ou os termos oficiais antes de usar ou compartilhar o app? Os dois links estão aqui.",
        footerTitle: "Calculadora Mecânica",
        footerText: "Uma calculadora de fita de papel com ferramentas extras para o dia a dia.",
        footerPrivacy: "Privacidade",
        footerTerms: "Termos",
        footerHome: "Início",
        getItOnGooglePlay: "Obtenha na Google Play"
      },
      mechanicalCalculatorPrivacy: {
        title: "Política de Privacidade da Calculadora Mecânica | Tiny Apps, Huge Ideas",
        description: "Política de Privacidade da Calculadora Mecânica da Tiny Apps, Huge Ideas.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegação principal",
        appPage: "Página do app",
        terms: "Termos",
        breadcrumbsHome: "Início",
        breadcrumbsApp: "Calculadora Mecânica",
        breadcrumbsSection: "Privacidade",
        eyebrow: "Política de privacidade hospedada",
        heading: "Política de Privacidade da Calculadora Mecânica",
        effectiveDate: "Data de vigência: 2026-02-26",
        callout: "A Calculadora Mecânica não exige conta. Os cálculos e o histórico da fita ficam no dispositivo. Anúncios de banner opcionais podem ser exibidos por meio do Google AdMob quando os anúncios estiverem ativados.",
        whoTitle: "A quem esta política se aplica",
        whoText: "Esta Política de Privacidade explica como o app móvel Calculadora Mecânica lida com informações quando você o usa.",
        infoTitle: "Informações que você fornece",
        infoText: "Os números inseridos na calculadora, o histórico da fita e o conteúdo exportado da fita são processados localmente dentro do app. O app não oferece um recurso para enviar esses dados a servidores operados pela desenvolvedora.",
        exportsTitle: "Exportações e compartilhamento",
        exportsText: "Quando você exporta a fita em TXT, CSV, PNG, JPG ou PDF, o arquivo é gerado localmente, normalmente no armazenamento ou cache do app. Se você compartilhar essa exportação com outro app, serviço ou pessoa, o destinatário tratará o arquivo conforme as próprias políticas.",
        deviceTitle: "Informações armazenadas no dispositivo",
        deviceText: "O app salva preferências localmente para lembrar configurações como o modo de exibição decimal, o tamanho da fonte da fita, o preset de cor dos botões, a preferência de som, a posição do teclado em modo paisagem e se os anúncios são exibidos.",
        adsTitle: "Publicidade",
        adsText1: "A Calculadora Mecânica pode exibir anúncios de banner usando o Google AdMob. Quando os anúncios estão ativados, o Google pode processar informações como identificadores do dispositivo, endereço IP, localização aproximada inferida do IP, detalhes do dispositivo, informações da versão do app e dados de interação ou diagnóstico dos anúncios.",
        adsText2: "Saiba mais:",
        googlePrivacy: "Política de Privacidade do Google",
        googlePartner: "Política de sites parceiros do Google",
        permissionsTitle: "Permissões e acesso à rede",
        permissionsText: "O acesso à rede só é necessário para carregar anúncios quando eles estiverem ativados. O app não exige permissões de contatos, câmera, microfone ou localização precisa.",
        retentionTitle: "Retenção de dados",
        retentionItems: [
          "As configurações permanecem no dispositivo até que o armazenamento do app seja apagado ou o app seja removido.",
          "As exportações permanecem onde você as salvar ou compartilhar.",
          "A retenção relacionada aos anúncios é regida pelas políticas do Google."
        ],
        securityTitle: "Segurança",
        securityText: "O app foi projetado para manter os dados localmente sempre que possível, mas nenhum mecanismo de armazenamento é perfeitamente seguro. Os usuários são responsáveis por proteger seus próprios dispositivos e os serviços de terceiros que escolherem para compartilhar arquivos exportados.",
        changesTitle: "Alterações nesta política",
        changesText: "Esta política pode ser atualizada para refletir mudanças no app ou exigências legais. A data de vigência no topo da página será revisada quando isso acontecer.",
        contactTitle: "Contato",
        contactText: "Para suporte ou dúvidas sobre esta política, use o canal de suporte fornecido com a distribuição do app ou com a listagem da loja."
      },
      mechanicalCalculatorTerms: {
        title: "Termos e Condições da Calculadora Mecânica | Tiny Apps, Huge Ideas",
        description: "Termos e Condições da Calculadora Mecânica da Tiny Apps, Huge Ideas.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegação principal",
        appPage: "Página do app",
        privacy: "Privacidade",
        breadcrumbsHome: "Início",
        breadcrumbsApp: "Calculadora Mecânica",
        breadcrumbsSection: "Termos",
        eyebrow: "Termos hospedados",
        heading: "Termos e Condições da Calculadora Mecânica",
        effectiveDate: "Data de vigência: 2026-03-17",
        callout: "Estes termos regem o uso das versões distribuídas do app Calculadora Mecânica e das páginas de suporte hospedadas para o app. O licenciamento do código-fonte, quando publicado, continua regido pela licença do repositório.",
        acceptanceTitle: "Aceitação dos termos",
        acceptanceText: "Ao baixar, instalar ou usar a Calculadora Mecânica, você concorda com estes Termos e Condições. Se não concordar, não use o app.",
        licenseTitle: "Licença de uso do app",
        licenseText: "Você pode usar o app para fins pessoais, educacionais e internos de negócios em dispositivos que você controla, sujeito a estes termos e às regras impostas pela loja ou plataforma usada para obter o app.",
        behaviorTitle: "Comportamento do app e conteúdo do usuário",
        behaviorText: "A Calculadora Mecânica armazena o histórico de cálculos e as preferências localmente no seu dispositivo. Se você exportar ou compartilhar conteúdo gerado pelo app, você é responsável pelo destino escolhido e pelas informações incluídas nessas exportações.",
        adsTitle: "Publicidade e serviços de terceiros",
        adsText: "O app pode exibir anúncios opcionais por meio do Google AdMob. Serviços de terceiros são regidos pelos próprios termos e políticas de privacidade. O uso continuado desses serviços é uma escolha sua.",
        restrictionsTitle: "Restrições",
        restrictionsItems: [
          "Não use o app para fins ilícitos.",
          "Não interfira no funcionamento normal do app ou dos serviços relacionados.",
          "Não deturpe o app, seu publicador ou a origem do conteúdo exportado."
        ],
        availabilityTitle: "Disponibilidade e atualizações",
        availabilityText: "Os recursos podem mudar, melhorar ou ser removidos ao longo do tempo. O app também pode deixar de ser distribuído a qualquer momento sem aviso prévio.",
        warrantyTitle: "Sem garantia",
        warrantyText: "A Calculadora Mecânica é fornecida no estado em que se encontra e conforme disponível, sem garantias de qualquer tipo, expressas ou implícitas, incluindo adequação a um propósito específico, disponibilidade e não violação, na máxima extensão permitida por lei.",
        liabilityTitle: "Limitação de responsabilidade",
        liabilityText: "Na máxima extensão permitida por lei, a desenvolvedora não será responsável por danos indiretos, incidentais, consequenciais ou especiais decorrentes ou relacionados ao uso do app, incluindo perda de dados, interrupção de negócios ou confiança em informações exportadas.",
        changesTitle: "Alterações nestes termos",
        changesText: "Estes termos podem ser atualizados de tempos em tempos. A versão publicada nesta página é a versão vigente.",
        contactTitle: "Contato",
        contactText: "Dúvidas sobre estes termos devem ser encaminhadas pelo canal de suporte fornecido com a distribuição do app ou com a listagem da loja."
      },
      columnsClassicIndex: {
        title: "Columns Classic | Tiny Apps, Huge Ideas",
        description: "Columns Classic oferece ação rápida de quebra-cabeça com blocos caindo, combinações em cadeia coloridas e desafio de jogadas rápidas que você pode aproveitar offline.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegação principal",
        allApps: "Todos os apps",
        privacy: "Privacidade",
        terms: "Termos",
        breadcrumbsHome: "Início",
        breadcrumbsApp: "Columns Classic",
        badge: "Jogo de quebra-cabeça Android",
        titleText: "Columns Classic",
        lead: "Procurando uma dose rápida de quebra-cabeça? Columns Classic oferece ação rápida de blocos caindo, combinações em cadeia coloridas e muita energia de pontuação alta sem precisar de conexão online.",
        privacyButton: "Política de privacidade",
        termsButton: "Termos e condições",
        backButton: "Voltar para todos os apps",
        whyTitle: "Por que você vai gostar",
        whyItems: [
          "Combine 3 ou mais blocos na horizontal, vertical ou diagonal.",
          "Escolha entre 4 níveis de dificuldade e 3 tamanhos de tabuleiro.",
          "Aproveite 4 estilos visuais para as peças, incluindo variações quadrada e em losango.",
          "As reações em cadeia recompensam boas montagens e decisões rápidas."
        ],
        whenTitle: "Ótima quando você quer...",
        whenItems: [
          "Entrar em uma disputa rápida por pontuação sem aprender um sistema complicado.",
          "Jogar offline no trem, no sofá ou em qualquer outro lugar.",
          "Usar controles por gesto que parecem rápidos e responsivos.",
          "Ajustar a sensação com botões opcionais, controles de sensibilidade e modo sazonal."
        ],
        privacyTitle: "Privacidade em resumo",
        privacyItems: [
          "O jogo foi projetado para funcionar offline.",
          "Configurações, estado salvo da partida e pontuações altas ficam armazenados localmente no dispositivo.",
          "Os anúncios são opcionais e são tratados pelo Google AdMob quando ativados.",
          "Não é necessário um sistema de contas nem um backend operado pela desenvolvedora."
        ],
        detailsTitle: "Precisa dos detalhes?",
        detailsParagraph: "Quer conferir a política ou os termos oficiais antes de jogar? As duas páginas estão aqui.",
        footerTitle: "Columns Classic",
        footerText: "Um jogo de quebra-cabeça colorido feito para partidas rápidas e aquela vontade de tentar mais uma vez.",
        footerPrivacy: "Privacidade",
        footerTerms: "Termos",
        footerHome: "Início",
        comingSoon: "Em breve"
      },
      columnsClassicPrivacy: {
        title: "Política de Privacidade de Columns Classic | Tiny Apps, Huge Ideas",
        description: "Política de Privacidade de Columns Classic da Tiny Apps, Huge Ideas.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegação principal",
        appPage: "Página do app",
        terms: "Termos",
        breadcrumbsHome: "Início",
        breadcrumbsApp: "Columns Classic",
        breadcrumbsSection: "Privacidade",
        eyebrow: "Política de privacidade hospedada",
        heading: "Política de Privacidade de Columns Classic",
        effectiveDate: "Data de vigência: 2026-02-26",
        callout: "Columns Classic foi projetado para funcionar offline. As configurações, os jogos salvos e as pontuações altas ficam no dispositivo. Anúncios opcionais podem ser exibidos por meio do Google AdMob quando o usuário mantém os anúncios ativados.",
        whoTitle: "A quem esta política se aplica",
        whoText: "Esta Política de Privacidade explica como o app móvel Columns Classic lida com informações quando você o usa.",
        localTitle: "Informações armazenadas localmente no seu dispositivo",
        localText: "O app armazena configurações do jogo, estado salvo da partida, pontuações altas e a preferência de anúncios localmente no seu dispositivo para que o jogo possa continuar corretamente e manter o progresso pessoal disponível offline.",
        namesTitle: "Nomes do placar",
        namesText: "Se você digitar um nome para os placares locais, esse valor fica armazenado apenas no seu dispositivo. O app não envia essas entradas locais para um serviço operado pela desenvolvedora.",
        adsTitle: "Publicidade",
        adsText: "Se os anúncios estiverem ativados, o app usa o Google Mobile Ads SDK (AdMob). O Google e seus parceiros podem processar identificadores, endereço IP, localização aproximada, interações com o app, informações de desempenho dos anúncios e sinais de diagnóstico para veicular e medir anúncios.",
        adsLinksText: "Saiba mais:",
        googlePrivacy: "Política de Privacidade do Google",
        googleAdmob: "Informações do Google AdMob",
        notCollectedTitle: "Informações que o app não coleta intencionalmente",
        notCollectedItems: [
          "Nenhum dado de conta é necessário para jogar.",
          "Nenhuma localização GPS precisa é necessária.",
          "Nenhum acesso a contatos, fotos, microfone ou câmera é necessário.",
          "Nenhuma informação de pagamento é coletada por esta descrição hospedada do app."
        ],
        choicesTitle: "Suas escolhas e controles",
        choicesItems: [
          "Você pode desativar os anúncios dentro do app.",
          "Você pode apagar o armazenamento do app ou desinstalá-lo para remover os dados locais.",
          "As preferências de publicidade também podem ser controladas pelas configurações do Android e do Google."
        ],
        retentionTitle: "Retenção de dados",
        retentionText: "Os dados locais permanecem no dispositivo até que você apague o armazenamento do app ou remova o app. A retenção relacionada aos anúncios é regida pelas políticas do Google.",
        securityTitle: "Segurança e crianças",
        securityText: "O app não coleta intencionalmente informações pessoais de crianças. Assim como acontece com qualquer dado de jogo armazenado apenas localmente, a segurança dos dados também depende de como o próprio dispositivo é protegido.",
        changesTitle: "Alterações nesta política",
        changesText: "Esta política pode mudar conforme o app ou as exigências legais mudem. A data de vigência nesta página será atualizada quando uma revisão for publicada.",
        contactTitle: "Contato",
        contactText: "Para dúvidas sobre privacidade, use o canal de suporte fornecido com a distribuição do app ou com a listagem da loja."
      },
      columnsClassicTerms: {
        title: "Termos e Condições de Columns Classic | Tiny Apps, Huge Ideas",
        description: "Termos e Condições de Columns Classic da Tiny Apps, Huge Ideas.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegação principal",
        appPage: "Página do app",
        privacy: "Privacidade",
        breadcrumbsHome: "Início",
        breadcrumbsApp: "Columns Classic",
        breadcrumbsSection: "Termos",
        eyebrow: "Termos hospedados",
        heading: "Termos e Condições de Columns Classic",
        effectiveDate: "Data de vigência: 2026-03-17",
        callout: "Estes termos regem o uso do app distribuído Columns Classic e das páginas de suporte hospedadas para ele. Se o código-fonte for publicado separadamente, a licença do repositório continuará a se aplicar a esse código.",
        acceptanceTitle: "Aceitação dos termos",
        acceptanceText: "Ao instalar ou usar Columns Classic, você concorda com estes Termos e Condições. Se não concordar, não use o app.",
        licenseTitle: "Licença de uso do app",
        licenseText: "Você pode usar o app para entretenimento pessoal e fins legais em dispositivos compatíveis que você possua ou controle.",
        gameplayTitle: "Dados de jogo e armazenamento local",
        gameplayText: "As configurações, os dados salvos da partida, as pontuações altas e os nomes locais inseridos para os placares ficam armazenados no seu dispositivo para que o jogo funcione offline e recupere o progresso.",
        adsTitle: "Publicidade e terceiros",
        adsText: "O app pode exibir anúncios opcionais por meio do Google AdMob. Os serviços de terceiros são controlados pelos próprios termos e regras de privacidade, e você é responsável pelas suas interações com eles.",
        acceptableTitle: "Uso aceitável",
        acceptableItems: [
          "Use o app apenas de formas permitidas por lei.",
          "Não tente interromper a funcionalidade do app ou dos serviços de anúncios relacionados.",
          "Não sugira falsamente endosso, autoria ou propriedade do app."
        ],
        updatesTitle: "Atualizações e disponibilidade",
        updatesText: "O equilíbrio do jogo, os recursos, os visuais e os dispositivos compatíveis podem mudar com o tempo. O app pode ser atualizado, pausado ou descontinuado sem aviso prévio.",
        warrantyTitle: "Sem garantia",
        warrantyText: "Columns Classic é fornecido no estado em que se encontra e conforme disponível, sem garantias de qualquer tipo, na máxima extensão permitida por lei.",
        liabilityTitle: "Limitação de responsabilidade",
        liabilityText: "Na máxima extensão permitida por lei, a desenvolvedora não será responsável por danos indiretos, incidentais ou consequenciais relacionados ao uso do app, compatibilidade do dispositivo, perda de pontuação ou interrupções.",
        changesTitle: "Alterações nestes termos",
        changesText: "Versões revisadas podem ser publicadas nesta página de tempos em tempos. A versão desta página é a versão atual.",
        contactTitle: "Contato",
        contactText: "Dúvidas sobre estes termos devem ser encaminhadas pelo canal de suporte fornecido com a distribuição do app ou com a listagem da loja."
      },
      chessTimerIndex: {
        title: "Chess Timer | Tiny Apps, Huge Ideas",
        description: "Chess Timer oferece um relógio de xadrez limpo para dois jogadores, com configuração rápida, mudanças de turno claras e uma sensação calma para partidas presenciais.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegação principal",
        allApps: "Todos os apps",
        privacy: "Privacidade",
        terms: "Termos",
        breadcrumbsHome: "Início",
        breadcrumbsApp: "Chess Timer",
        badge: "Ferramenta Android",
        titleText: "Chess Timer",
        lead: "Precisa de um relógio de xadrez limpo que não atrapalhe a partida? Chess Timer mantém as trocas de turno óbvias, a configuração simples e a sessão mais fluida para os dois jogadores.",
        privacyButton: "Política de privacidade",
        termsButton: "Termos e condições",
        backButton: "Voltar para todos os apps",
        whyTitle: "Por que você vai gostar",
        whyItems: [
          "Layout para dois jogadores que é fácil de ler de qualquer lado do tabuleiro.",
          "Controles de tempo predefinidos e horas, minutos e segundos totalmente personalizados.",
          "Pausar, retomar, reiniciar e feedback claro do estado do turno.",
          "Pausa automática opcional quando o app fica em segundo plano ou é fechado."
        ],
        whenTitle: "Ótima quando você quer...",
        whenItems: [
          "Começar uma partida blitz, rapid ou casual em segundos.",
          "Passar o turno com clareza com um toque após cada lance.",
          "Personalizar a aparência com cor do tema e configurações de som.",
          "Usar um layout que continue confortável em tablets e no modo paisagem."
        ],
        privacyTitle: "Privacidade em resumo",
        privacyItems: [
          "Não há contas nem fluxo de login.",
          "Os nomes dos jogadores e as configurações ficam no dispositivo.",
          "Nenhum SDK de análise de terceiros ou de relatórios de falhas está integrado.",
          "Anúncios de banner opcionais podem aparecer por meio do Google AdMob e podem ser desativados."
        ],
        detailsTitle: "Precisa dos detalhes?",
        detailsParagraph: "Se você quiser as páginas oficiais de privacidade ou termos antes de usar o app, os dois links estão fáceis de abrir daqui.",
        footerTitle: "Chess Timer",
        footerText: "Um relógio de xadrez feito para permanecer calmo enquanto a partida esquenta.",
        footerPrivacy: "Privacidade",
        footerTerms: "Termos",
        footerHome: "Início",
        comingSoon: "Em breve"
      },
      chessTimerPrivacy: {
        title: "Política de Privacidade do Chess Timer | Tiny Apps, Huge Ideas",
        description: "Política de Privacidade do Chess Timer da Tiny Apps, Huge Ideas.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegação principal",
        appPage: "Página do app",
        terms: "Termos",
        breadcrumbsHome: "Início",
        breadcrumbsApp: "Chess Timer",
        breadcrumbsSection: "Privacidade",
        eyebrow: "Política de privacidade hospedada",
        heading: "Política de Privacidade do Chess Timer",
        effectiveDate: "Data de vigência: 2026-02-26",
        callout: "Chess Timer não exige conta. Os nomes dos jogadores e as configurações do relógio ficam armazenados localmente no dispositivo. Anúncios de banner opcionais podem ser exibidos por meio do Google AdMob.",
        whoTitle: "A quem esta política se aplica",
        whoText: "Esta Política de Privacidade explica como o app móvel Chess Timer lida com informações quando você o usa.",
        infoTitle: "Informações que você fornece",
        infoText: "Os nomes dos jogadores e as configurações do relógio, como tempo inicial, sons e cor do tema, ficam armazenados apenas no seu dispositivo. Eles não são transmitidos à desenvolvedora como parte da operação normal do app.",
        adsTitle: "Publicidade",
        adsText: "Se os anúncios estiverem ativados, o app usa o Google Mobile Ads SDK (AdMob) para exibir banners. O AdMob pode processar identificadores, endereço IP, informações do dispositivo e do app, idioma, impressões, cliques e sinais de diagnóstico de acordo com as políticas do Google.",
        adsLinksText: "Saiba mais:",
        googlePrivacy: "Política de Privacidade do Google",
        googleAds: "Publicidade do Google",
        networkTitle: "Acesso à rede e diagnósticos",
        networkText: "O acesso à internet pode ser usado para carregar anúncios. A funcionalidade principal do relógio funciona sem conexão de rede. O app não integra SDKs de análise de terceiros ou de relatório de falhas.",
        useTitle: "Como as informações são usadas",
        useItems: [
          "Para fornecer o comportamento do relógio e preservar as preferências locais.",
          "Para exibir e medir anúncios quando os anúncios estiverem ativados.",
          "Para cumprir obrigações legais quando aplicável."
        ],
        sharingTitle: "Compartilhamento e retenção",
        sharingText: "Os nomes dos jogadores e as configurações do relógio armazenados localmente não são compartilhados com terceiros pela desenvolvedora. As configurações no dispositivo permanecem até que o armazenamento do app seja apagado ou o app seja desinstalado. A retenção relacionada aos anúncios é regida pelo Google.",
        childrenTitle: "Crianças e uso internacional",
        childrenText: "O app não coleta intencionalmente informações pessoais de crianças. Se os anúncios estiverem ativados, provedores de terceiros como o Google podem processar dados em sistemas localizados em outros países.",
        changesTitle: "Alterações nesta política",
        changesText: "Esta política pode ser atualizada de tempos em tempos. A data de vigência no topo da página refletirá a versão publicada mais recente.",
        contactTitle: "Contato",
        contactText: "Se você tiver dúvidas sobre privacidade, use o canal de suporte fornecido com a distribuição do app ou com a listagem da loja."
      },
      chessTimerTerms: {
        title: "Termos e Condições do Chess Timer | Tiny Apps, Huge Ideas",
        description: "Termos e Condições do Chess Timer da Tiny Apps, Huge Ideas.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegação principal",
        appPage: "Página do app",
        privacy: "Privacidade",
        breadcrumbsHome: "Início",
        breadcrumbsApp: "Chess Timer",
        breadcrumbsSection: "Termos",
        eyebrow: "Termos hospedados",
        heading: "Termos e Condições do Chess Timer",
        effectiveDate: "Data de vigência: 2026-03-17",
        callout: "Estes termos regem o uso do app distribuído Chess Timer e das páginas hospedadas que o suportam. Qualquer repositório de código-fonte publicado separadamente continua sujeito à própria licença.",
        acceptanceTitle: "Aceitação dos termos",
        acceptanceText: "Ao instalar ou usar Chess Timer, você concorda com estes Termos e Condições. Se não concordar, não use o app.",
        licenseTitle: "Licença de uso do app",
        licenseText: "Você pode usar Chess Timer para partidas pessoais e de clube, dentro da lei, em dispositivos compatíveis que você possua ou controle.",
        localTitle: "Dados locais e preferências",
        localText: "Os nomes dos jogadores, as predefinições de tempo, as configurações de som, as preferências de tema e outras escolhas locais ficam armazenados no seu dispositivo para que o app ofereça uma experiência fluida.",
        adsTitle: "Publicidade e serviços de terceiros",
        adsText: "Anúncios opcionais podem ser exibidos por meio do Google AdMob. Esses serviços de anúncios operam sob seus próprios termos e políticas de privacidade e estão fora do controle direto da desenvolvedora.",
        acceptableTitle: "Uso aceitável",
        acceptableItems: [
          "Use o app apenas para fins legais.",
          "Não interrompa o funcionamento normal do app ou dos serviços relacionados.",
          "Não use o app de forma que sugira falsamente patrocínio ou endosso."
        ],
        updatesTitle: "Atualizações e suporte",
        updatesText: "Recursos, aparência, compatibilidade e comportamento do som podem mudar ao longo do tempo. O app pode ser atualizado, suspenso ou descontinuado sem aviso.",
        warrantyTitle: "Sem garantia",
        warrantyText: "Chess Timer é fornecido no estado em que se encontra e conforme disponível, sem garantias de qualquer tipo, na máxima extensão permitida por lei.",
        liabilityTitle: "Limitação de responsabilidade",
        liabilityText: "Na máxima extensão permitida por lei, a desenvolvedora não é responsável por quaisquer danos indiretos ou consequenciais decorrentes do uso do app, disputas de tempo, incompatibilidade do dispositivo, perda de dados ou interrupções.",
        changesTitle: "Alterações nestes termos",
        changesText: "Termos atualizados podem ser publicados nesta página de tempos em tempos. O uso continuado após uma atualização significa que você aceita os termos revisados.",
        contactTitle: "Contato",
        contactText: "Dúvidas sobre estes termos devem ser encaminhadas pelo canal de suporte fornecido com a distribuição do app ou com a listagem da loja."
      }
    },
    es: {
      common: {
        languageGroup: "Idioma",
        langPt: "Portugués de Brasil",
        langEs: "Español",
        langEn: "Inglés",
        home: "Inicio",
        apps: "Aplicaciones",
        allApps: "Todas las apps",
        appPage: "Página de la app",
        privacy: "Privacidad",
        terms: "Términos",
        privacyPolicy: "Política de privacidad",
        termsAndConditions: "Términos y condiciones",
        backToAllApps: "Volver a todas las apps"
      },
      home: {
        title: "Tiny Apps, Huge Ideas",
        description: "Tiny Apps, Huge Ideas reúne una calculadora de cinta de papel, un juego de rompecabezas colorido y un reloj de ajedrez limpio.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegación principal",
        appsLink: "Aplicaciones",
        heroEyebrow: "Tiny Apps, Huge Ideas",
        heroTitle: "Aplicaciones útiles con mucha personalidad.",
        heroLead: "Si quieres una mejor forma de revisar cálculos, encajar una partida rápida de rompecabezas o mantener una partida de ajedrez en ritmo, estas apps están hechas para sentirse simples, enfocadas y divertidas desde el primer toque.",
        heroPrimary: "Ver las apps",
        heroSecondary: "Empezar con la Calculadora Mecánica",
        checkItems: [
          "Herramientas útiles y diversión rápida en un solo lugar.",
          "Diseñadas para sentirse rápidas, claras y fáciles de volver a abrir.",
          "Tres apps, tres estilos, cero desorden."
        ],
        sectionEyebrow: "Elige tu próxima app",
        sectionTitle: "Tres tareas distintas. Una idea simple: hacer muy bien las cosas pequeñas.",
        sectionLead: "Elige la calculadora, el juego de rompecabezas o el reloj de ajedrez que mejor encaje con tu momento.",
        calculatorBadge: "Utilidad",
        calculatorTitle: "Calculadora Mecánica",
        calculatorLead: "Si te gusta ver cada paso, esta app mantiene una cinta de papel tipo recibo para los cálculos y además añade herramientas integradas para conversiones, escenarios de intereses y división de cuentas.",
        calculatorFeatures: [
          "Memoria en cinta de papel que registra entradas y resultados",
          "Herramientas integradas de conversión de unidades, intereses y división de cuentas",
          "Exportación de resultados de la calculadora y de las herramientas en TXT, CSV, PNG, JPG y PDF",
          "Efectos de impresión opcionales y controles del teclado en modo horizontal"
        ],
        calculatorAppPage: "Página de la app",
        calculatorPrivacy: "Privacidad",
        calculatorTerms: "Términos",
        columnsBadge: "Juego",
        columnsTitle: "Columns Classic",
        columnsLead: "Cuando quieres una pausa rápida estilo arcade, Columns Classic ofrece acción rápida de bloques que caen, combinaciones en cadena y mucha energía de puntuación alta.",
        columnsFeatures: [
          "4 niveles de dificultad y 3 tamaños de cuadrícula",
          "Coincidencias horizontales, verticales y diagonales",
          "Controles por gestos y botones en pantalla opcionales",
          "Marcador separado con top 20 por modo y tamaño de cuadrícula"
        ],
        columnsAppPage: "Página de la app",
        columnsPrivacy: "Privacidad",
        columnsTerms: "Términos",
        chessBadge: "Herramienta",
        chessTitle: "Chess Timer",
        chessLead: "Para partidas presenciales, este reloj de ajedrez mantiene los turnos claros, la configuración fácil y toda la sesión más fluida para ambos jugadores.",
        chessFeatures: [
          "Cambio rápido de turno para juegos de dos jugadores sobre la mesa",
          "Controles de tiempo preestablecidos y horas, minutos y segundos personalizados",
          "Pausar, reanudar, reiniciar y pausa automática opcional",
          "Selector de color del tema, sonidos y modo horizontal opcional"
        ],
        chessAppPage: "Página de la app",
        chessPrivacy: "Privacidad",
        chessTerms: "Términos",
        whyEyebrow: "Por qué se sienten bien de usar",
        whyTitle: "Fáciles de aprender, fáciles de conservar y hechas para no estorbar",
        madeTitle: "Hechas para momentos reales",
        madeText: "Estas apps están pensadas para esas situaciones pequeñas que pasan todo el tiempo: revisar números, pasar unos minutos con un juego o llevar una partida en vivo.",
        privacyTitle: "Claridad sobre privacidad",
        privacyText: "Los datos principales de las apps permanecen en el dispositivo siempre que sea posible. Si los anuncios están activados, las páginas de privacidad explican exactamente qué significa eso.",
        simpleTitle: "Sencillas por diseño",
        simpleText: "Las apps mantienen el desorden al mínimo, y este sitio hace lo mismo. Lo que necesitas es fácil de encontrar, sin un laberinto de menús ni ruido de marketing.",
        footerText: "Tres apps Android enfocadas, creadas para ser rápidas, claras y agradables de usar.",
        footerApps: "Aplicaciones",
        footerStart: "Empezar con la Calculadora Mecánica",
        calculatorAlt: "Ícono de la Calculadora Mecánica",
        columnsAlt: "Ícono de Columns Classic",
        chessAlt: "Ícono de Chess Timer",
        getItOnGooglePlay: "Obtén en Google Play",
        comingSoon: "Próximamente"
      },
      mechanicalCalculatorIndex: {
        title: "Calculadora Mecánica | Tiny Apps, Huge Ideas",
        description: "La Calculadora Mecánica combina una calculadora de cinta de papel con exportaciones, un convertidor de unidades, un divisor de cuentas y herramientas de intereses en una app con sensación clásica.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegación principal",
        allApps: "Todas las apps",
        privacy: "Privacidad",
        terms: "Términos",
        breadcrumbsHome: "Inicio",
        breadcrumbsApp: "Calculadora Mecánica",
        badge: "Utilidad Android",
        titleText: "Calculadora Mecánica",
        lead: "¿Quieres una calculadora que te deje ver cada paso? La Calculadora Mecánica mantiene la cinta de papel tipo recibo y el aspecto clásico de impresión, y además añade herramientas integradas para conversiones de unidades, división de cuentas y cálculos de intereses.",
        privacyButton: "Política de privacidad",
        termsButton: "Términos y condiciones",
        backButton: "Volver a todas las apps",
        whyTitle: "Por qué te gustará",
        whyItems: [
          "El historial en cinta de papel registra entradas, operaciones y resultados como un recibo.",
          "Calculadora con soporte completo de operadores y funcionalidad de porcentaje.",
          "Herramienta Divisor de Cuentas para dividir costos con distribución equitativa o desigual, incluyendo propinas.",
          "Conversor de Unidades con soporte para conversiones de longitud, peso, volumen y temperatura.",
          "Calculadora de Intereses con múltiples modos: simple, retroactivo, compuesto y escenarios de ahorro.",
          "Generador de Números para crear secuencias de números y valores aleatorios.",
          "La animación de impresión opcional y los efectos de sonido refuerzan la sensación de calculadora mecánica.",
          "El modo horizontal y las opciones de exportación (TXT, CSV, PNG, JPG, PDF) facilitan revisar o compartir resultados."
        ],
        whenTitle: "Excelente cuando quieres...",
        whenText1: "Revisar cálculos de la escuela, del trabajo o de casa sin perder el rastro de cómo llegaste al resultado.",
        whenText2: "Es especialmente útil cuando quieres un historial visible, una conversión rápida, una forma de comparar escenarios de intereses o una división más fácil de una cuenta compartida sin saltar entre apps.",
        privacyAtGlance: "Privacidad en resumen",
        privacyItems: [
          "No se requiere cuenta.",
          "Los cálculos, el historial de la cinta y los datos de las herramientas permanecen en el dispositivo.",
          "Los anuncios opcionales usan Google AdMob y pueden desactivarse en Configuración.",
          "Las exportaciones se generan localmente antes de abrir la hoja de compartir de Android."
        ],
        detailsTitle: "¿Necesitas los detalles?",
        detailsParagraph: "¿Quieres la política o los términos oficiales antes de usar o compartir la app? Ambos enlaces están aquí.",
        footerTitle: "Calculadora Mecánica",
        footerText: "Una calculadora de cinta de papel con herramientas extra para el día a día.",
        footerPrivacy: "Privacidad",
        footerTerms: "Términos",
        footerHome: "Inicio",
        getItOnGooglePlay: "Obtén en Google Play"
      },
      mechanicalCalculatorPrivacy: {
        title: "Política de Privacidad de la Calculadora Mecánica | Tiny Apps, Huge Ideas",
        description: "Política de Privacidad de la Calculadora Mecánica de Tiny Apps, Huge Ideas.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegación principal",
        appPage: "Página de la app",
        terms: "Términos",
        breadcrumbsHome: "Inicio",
        breadcrumbsApp: "Calculadora Mecánica",
        breadcrumbsSection: "Privacidad",
        eyebrow: "Política de privacidad alojada",
        heading: "Política de Privacidad de la Calculadora Mecánica",
        effectiveDate: "Fecha de entrada en vigor: 2026-02-26",
        callout: "La Calculadora Mecánica no requiere una cuenta. Los cálculos y el historial de la cinta permanecen en el dispositivo. Los anuncios de banner opcionales pueden mostrarse mediante Google AdMob cuando los anuncios están activados.",
        whoTitle: "A quién cubre esta política",
        whoText: "Esta Política de Privacidad explica cómo la app móvil Calculadora Mecánica maneja la información cuando la usas.",
        infoTitle: "Información que proporcionas",
        infoText: "Los números introducidos en la calculadora, el historial de la cinta y el contenido exportado de la cinta se procesan localmente dentro de la app. La app no ofrece una función para subir esos datos a servidores operados por la desarrolladora.",
        exportsTitle: "Exportaciones y uso compartido",
        exportsText: "Cuando exportas la cinta como TXT, CSV, PNG, JPG o PDF, el archivo se genera localmente, normalmente en el almacenamiento o la caché de la app. Si compartes esa exportación con otra app, servicio o persona, el destinatario manejará el archivo según sus propias políticas.",
        deviceTitle: "Información almacenada en el dispositivo",
        deviceText: "La app guarda preferencias localmente para recordar ajustes como el modo de visualización decimal, la escala de fuente de la cinta, el preset de color de los botones, la preferencia de sonido, la posición del teclado en modo horizontal y si se muestran anuncios.",
        adsTitle: "Publicidad",
        adsText1: "La Calculadora Mecánica puede mostrar anuncios de banner usando Google AdMob. Cuando los anuncios están activados, Google puede procesar información como identificadores del dispositivo, dirección IP, ubicación aproximada inferida a partir de la IP, detalles del dispositivo, información de la versión de la app y datos de interacción o diagnóstico de anuncios.",
        adsText2: "Más información:",
        googlePrivacy: "Política de Privacidad de Google",
        googlePartner: "Política de sitios asociados de Google",
        permissionsTitle: "Permisos y acceso a la red",
        permissionsText: "El acceso a la red solo se necesita para cargar anuncios cuando están activados. La app no requiere permisos de contactos, cámara, micrófono ni ubicación precisa.",
        retentionTitle: "Conservación de datos",
        retentionItems: [
          "Los ajustes permanecen en el dispositivo hasta que se borra el almacenamiento de la app o se elimina la app.",
          "Las exportaciones permanecen donde decidas guardarlas o compartirlas.",
          "La conservación relacionada con anuncios se rige por las políticas de Google."
        ],
        securityTitle: "Seguridad",
        securityText: "La app está diseñada para mantener los datos locales siempre que sea posible, pero ningún mecanismo de almacenamiento es perfectamente seguro. Los usuarios son responsables de proteger sus propios dispositivos y los servicios de terceros que elijan para compartir archivos exportados.",
        changesTitle: "Cambios en esta política",
        changesText: "Esta política puede actualizarse para reflejar cambios en la app o requisitos legales. La fecha de entrada en vigor en la parte superior de la página se revisará cuando eso ocurra.",
        contactTitle: "Contacto",
        contactText: "Para soporte o preguntas sobre esta política, usa el canal de soporte proporcionado con la distribución de la app o con el listado de la tienda."
      },
      mechanicalCalculatorTerms: {
        title: "Términos y Condiciones de la Calculadora Mecánica | Tiny Apps, Huge Ideas",
        description: "Términos y Condiciones de la Calculadora Mecánica de Tiny Apps, Huge Ideas.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegación principal",
        appPage: "Página de la app",
        privacy: "Privacidad",
        breadcrumbsHome: "Inicio",
        breadcrumbsApp: "Calculadora Mecánica",
        breadcrumbsSection: "Términos",
        eyebrow: "Términos alojados",
        heading: "Términos y Condiciones de la Calculadora Mecánica",
        effectiveDate: "Fecha de entrada en vigor: 2026-03-17",
        callout: "Estos términos rigen el uso de las versiones publicadas de la app Calculadora Mecánica y de las páginas de soporte alojadas para la app. La licencia del código fuente, cuando se publique, sigue regida por la licencia del repositorio.",
        acceptanceTitle: "Aceptación de los términos",
        acceptanceText: "Al descargar, instalar o usar la Calculadora Mecánica, aceptas estos Términos y Condiciones. Si no estás de acuerdo, no uses la app.",
        licenseTitle: "Licencia de uso de la app",
        licenseText: "Puedes usar la app con fines personales, educativos y de negocios internos en dispositivos que controles, sujeto a estos términos y a las reglas impuestas por la tienda o plataforma que uses para obtener la app.",
        behaviorTitle: "Comportamiento de la app y contenido del usuario",
        behaviorText: "La Calculadora Mecánica almacena localmente en tu dispositivo el historial de cálculos y las preferencias. Si exportas o compartes contenido generado por la app, eres responsable del destino que elijas y de la información incluida en esas exportaciones.",
        adsTitle: "Publicidad y servicios de terceros",
        adsText: "La app puede mostrar anuncios opcionales mediante Google AdMob. Los servicios de terceros se rigen por sus propios términos y políticas de privacidad. El uso continuado de esos servicios depende de tu decisión.",
        restrictionsTitle: "Restricciones",
        restrictionsItems: [
          "No uses la app con fines ilícitos.",
          "No interfieras con el funcionamiento normal de la app o de los servicios relacionados.",
          "No tergiverses la app, su publicador o el origen del contenido exportado."
        ],
        availabilityTitle: "Disponibilidad y actualizaciones",
        availabilityText: "Las funciones pueden cambiar, mejorar o eliminarse con el tiempo. La app también puede dejar de distribuirse en cualquier momento sin previo aviso.",
        warrantyTitle: "Sin garantía",
        warrantyText: "La Calculadora Mecánica se ofrece tal como está y según disponibilidad, sin garantías de ningún tipo, ya sean expresas o implícitas, incluida la adecuación para un propósito específico, la disponibilidad y la no infracción en la máxima medida permitida por la ley.",
        liabilityTitle: "Limitación de responsabilidad",
        liabilityText: "En la máxima medida permitida por la ley, la desarrolladora no será responsable de daños indirectos, incidentales, consecuenciales o especiales que surjan o estén relacionados con el uso de la app, incluida la pérdida de datos, interrupción del negocio o confianza en información exportada.",
        changesTitle: "Cambios en estos términos",
        changesText: "Estos términos pueden actualizarse de vez en cuando. La versión publicada en esta página es la versión vigente.",
        contactTitle: "Contacto",
        contactText: "Las preguntas sobre estos términos deben dirigirse a través del canal de soporte proporcionado con la distribución de la app o con el listado de la tienda."
      },
      columnsClassicIndex: {
        title: "Columns Classic | Tiny Apps, Huge Ideas",
        description: "Columns Classic ofrece acción rápida de rompecabezas con bloques que caen, combinaciones en cadena coloridas y un desafío de partidas rápidas que puedes disfrutar sin conexión.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegación principal",
        allApps: "Todas las apps",
        privacy: "Privacidad",
        terms: "Términos",
        breadcrumbsHome: "Inicio",
        breadcrumbsApp: "Columns Classic",
        badge: "Juego de rompecabezas Android",
        titleText: "Columns Classic",
        lead: "¿Buscas una dosis rápida de rompecabezas? Columns Classic ofrece acción rápida de bloques que caen, combinaciones en cadena coloridas y mucha energía de puntuación alta sin necesidad de conexión en línea.",
        privacyButton: "Política de privacidad",
        termsButton: "Términos y condiciones",
        backButton: "Volver a todas las apps",
        whyTitle: "Por qué te gustará",
        whyItems: [
          "Combina 3 o más bloques en horizontal, vertical o diagonal.",
          "Elige entre 4 niveles de dificultad y 3 tamaños de tablero.",
          "Disfruta de 4 estilos visuales para las piezas, incluidas variantes cuadrada y en rombo.",
          "Las reacciones en cadena recompensan las buenas configuraciones y las decisiones rápidas."
        ],
        whenTitle: "Genial cuando quieres...",
        whenItems: [
          "Entrar en una carrera rápida por puntos sin aprender un sistema complicado.",
          "Jugar sin conexión en el tren, en el sofá o en cualquier otro lugar.",
          "Usar controles por gestos que se sienten rápidos y responsivos.",
          "Ajustar la experiencia con botones opcionales, controles de sensibilidad y modo estacional."
        ],
        privacyTitle: "Privacidad en resumen",
        privacyItems: [
          "El juego está diseñado para funcionar sin conexión.",
          "Los ajustes, el estado guardado de la partida y las puntuaciones altas se almacenan localmente en el dispositivo.",
          "Los anuncios son opcionales y se gestionan a través de Google AdMob cuando están activados.",
          "No se necesita un sistema de cuentas ni un backend operado por la desarrolladora."
        ],
        detailsTitle: "¿Necesitas los detalles?",
        detailsParagraph: "¿Quieres revisar la política o los términos oficiales antes de jugar? Ambas páginas están aquí.",
        footerTitle: "Columns Classic",
        footerText: "Un juego de rompecabezas colorido creado para partidas rápidas y energía de 'una más'.",
        footerPrivacy: "Privacidad",
        footerTerms: "Términos",
        footerHome: "Inicio",
        comingSoon: "Próximamente"
      },
      columnsClassicPrivacy: {
        title: "Política de Privacidad de Columns Classic | Tiny Apps, Huge Ideas",
        description: "Política de Privacidad de Columns Classic de Tiny Apps, Huge Ideas.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegación principal",
        appPage: "Página de la app",
        terms: "Términos",
        breadcrumbsHome: "Inicio",
        breadcrumbsApp: "Columns Classic",
        breadcrumbsSection: "Privacidad",
        eyebrow: "Política de privacidad alojada",
        heading: "Política de Privacidad de Columns Classic",
        effectiveDate: "Fecha de entrada en vigor: 2026-02-26",
        callout: "Columns Classic está diseñado para funcionar sin conexión. Los ajustes, las partidas guardadas y las puntuaciones altas permanecen en el dispositivo. Los anuncios opcionales pueden mostrarse mediante Google AdMob cuando el usuario mantiene los anuncios activados.",
        whoTitle: "A quién cubre esta política",
        whoText: "Esta Política de Privacidad explica cómo la app móvil Columns Classic maneja la información cuando la usas.",
        localTitle: "Información almacenada localmente en tu dispositivo",
        localText: "La app almacena localmente los ajustes del juego, el estado guardado de la partida, las puntuaciones altas y la preferencia de anuncios en tu dispositivo para que el juego pueda reanudarse correctamente y mantener el progreso personal disponible sin conexión.",
        namesTitle: "Nombres del marcador",
        namesText: "Si escribes un nombre para los marcadores locales, ese valor se almacena solo en tu dispositivo. La app no envía esas entradas locales a un servicio operado por la desarrolladora.",
        adsTitle: "Publicidad",
        adsText: "Si los anuncios están activados, la app usa Google Mobile Ads SDK (AdMob). Google y sus socios pueden procesar identificadores, dirección IP, ubicación aproximada, interacciones con la app, información de rendimiento de anuncios y señales de diagnóstico para mostrar y medir anuncios.",
        adsLinksText: "Más información:",
        googlePrivacy: "Política de Privacidad de Google",
        googleAdmob: "Información de Google AdMob",
        notCollectedTitle: "Información que la app no recopila intencionalmente",
        notCollectedItems: [
          "No se requieren datos de cuenta para jugar.",
          "No se necesita ubicación GPS precisa.",
          "No se requiere acceso a contactos, fotos, micrófono ni cámara.",
          "No se recopila información de pago por esta descripción alojada de la app."
        ],
        choicesTitle: "Tus opciones y controles",
        choicesItems: [
          "Puedes desactivar los anuncios dentro de la app.",
          "Puedes borrar el almacenamiento de la app o desinstalarla para eliminar los datos locales.",
          "Las preferencias de publicidad también pueden controlarse desde la configuración de Android y Google."
        ],
        retentionTitle: "Conservación de datos",
        retentionText: "Los datos locales permanecen en el dispositivo hasta que borres el almacenamiento de la app o elimines la app. La conservación relacionada con anuncios se rige por las políticas de Google.",
        securityTitle: "Seguridad y niños",
        securityText: "La app no recopila intencionalmente información personal de niños. Como ocurre con cualquier dato de juego almacenado solo localmente, la seguridad de los datos también depende de cómo esté protegido el propio dispositivo.",
        changesTitle: "Cambios en esta política",
        changesText: "Esta política puede cambiar a medida que cambie la app o los requisitos legales. La fecha de entrada en vigor en esta página se actualizará cuando se publique una revisión.",
        contactTitle: "Contacto",
        contactText: "Para preguntas sobre privacidad, usa el canal de soporte proporcionado con la distribución de la app o con el listado de la tienda."
      },
      columnsClassicTerms: {
        title: "Términos y Condiciones de Columns Classic | Tiny Apps, Huge Ideas",
        description: "Términos y Condiciones de Columns Classic de Tiny Apps, Huge Ideas.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegación principal",
        appPage: "Página de la app",
        privacy: "Privacidad",
        breadcrumbsHome: "Inicio",
        breadcrumbsApp: "Columns Classic",
        breadcrumbsSection: "Términos",
        eyebrow: "Términos alojados",
        heading: "Términos y Condiciones de Columns Classic",
        effectiveDate: "Fecha de entrada en vigor: 2026-03-17",
        callout: "Estos términos rigen el uso de la app distribuida Columns Classic y de las páginas de soporte alojadas para ella. Si el código fuente se publica por separado, la licencia del repositorio seguirá aplicándose a ese código.",
        acceptanceTitle: "Aceptación de los términos",
        acceptanceText: "Al instalar o usar Columns Classic, aceptas estos Términos y Condiciones. Si no estás de acuerdo, no uses la app.",
        licenseTitle: "Licencia de uso de la app",
        licenseText: "Puedes usar la app para entretenimiento personal y fines legales en dispositivos compatibles que poseas o controles.",
        gameplayTitle: "Datos de partida y almacenamiento local",
        gameplayText: "Los ajustes, los datos guardados de la partida, las puntuaciones altas y los nombres locales introducidos para los marcadores se almacenan en tu dispositivo para que el juego funcione sin conexión y restaure el progreso.",
        adsTitle: "Publicidad y terceros",
        adsText: "La app puede mostrar anuncios opcionales mediante Google AdMob. Los servicios de terceros se rigen por sus propios términos y reglas de privacidad, y eres responsable de tus interacciones con ellos.",
        acceptableTitle: "Uso aceptable",
        acceptableItems: [
          "Usa la app solo de formas permitidas por la ley.",
          "No intentes interrumpir la funcionalidad de la app ni de los servicios de anuncios relacionados.",
          "No sugieras falsamente respaldo, autoría o propiedad de la app."
        ],
        updatesTitle: "Actualizaciones y disponibilidad",
        updatesText: "El equilibrio del juego, las funciones, los aspectos visuales y los dispositivos compatibles pueden cambiar con el tiempo. La app puede actualizarse, pausarse o dejar de estar disponible sin previo aviso.",
        warrantyTitle: "Sin garantía",
        warrantyText: "Columns Classic se ofrece tal como está y según disponibilidad, sin garantías de ningún tipo, en la máxima medida permitida por la ley.",
        liabilityTitle: "Limitación de responsabilidad",
        liabilityText: "En la máxima medida permitida por la ley, la desarrolladora no será responsable de daños indirectos, incidentales o consecuenciales relacionados con el uso de la app, la compatibilidad del dispositivo, la pérdida de puntuación o interrupciones.",
        changesTitle: "Cambios en estos términos",
        changesText: "Las versiones revisadas pueden publicarse en esta página de vez en cuando. La versión de esta página es la versión actual.",
        contactTitle: "Contacto",
        contactText: "Las preguntas sobre estos términos deben dirigirse a través del canal de soporte proporcionado con la distribución de la app o con el listado de la tienda."
      },
      chessTimerIndex: {
        title: "Chess Timer | Tiny Apps, Huge Ideas",
        description: "Chess Timer ofrece un reloj de ajedrez limpio para dos jugadores, con configuración rápida, cambios de turno claros y una sensación tranquila para partidas sobre el tablero.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegación principal",
        allApps: "Todas las apps",
        privacy: "Privacidad",
        terms: "Términos",
        breadcrumbsHome: "Inicio",
        breadcrumbsApp: "Chess Timer",
        badge: "Herramienta Android",
        titleText: "Chess Timer",
        lead: "¿Necesitas un reloj de ajedrez limpio que no estorbe la partida? Chess Timer mantiene claros los cambios de turno, sencilla la configuración y más fluida toda la sesión para ambos jugadores.",
        privacyButton: "Política de privacidad",
        termsButton: "Términos y condiciones",
        backButton: "Volver a todas las apps",
        whyTitle: "Por qué te gustará",
        whyItems: [
          "Diseño para dos jugadores que es fácil de leer desde el otro lado del tablero.",
          "Controles de tiempo preestablecidos y horas, minutos y segundos totalmente personalizados.",
          "Pausar, reanudar, reiniciar y una señal clara del estado del turno.",
          "Pausa automática opcional cuando la app queda en segundo plano o se cierra."
        ],
        whenTitle: "Genial cuando quieres...",
        whenItems: [
          "Empezar una partida blitz, rapid o casual en segundos.",
          "Pasar el turno con claridad con un toque después de cada jugada.",
          "Personalizar el aspecto con color del tema y ajustes de sonido.",
          "Usar un diseño que siga siendo cómodo en tabletas y en modo horizontal."
        ],
        privacyTitle: "Privacidad en resumen",
        privacyItems: [
          "No hay cuentas ni flujo de inicio de sesión.",
          "Los nombres de los jugadores y los ajustes permanecen en el dispositivo.",
          "No hay SDKs de analítica de terceros ni de informes de fallos integrados.",
          "Pueden aparecer anuncios de banner opcionales mediante Google AdMob y pueden desactivarse."
        ],
        detailsTitle: "¿Necesitas los detalles?",
        detailsParagraph: "Si quieres ver las páginas oficiales de privacidad o términos antes de usar la app, ambos enlaces están aquí y son fáciles de abrir.",
        footerTitle: "Chess Timer",
        footerText: "Un reloj de ajedrez creado para mantenerse tranquilo mientras la partida se pone intensa.",
        footerPrivacy: "Privacidad",
        footerTerms: "Términos",
        footerHome: "Inicio",
        comingSoon: "Próximamente"
      },
      chessTimerPrivacy: {
        title: "Política de Privacidad de Chess Timer | Tiny Apps, Huge Ideas",
        description: "Política de Privacidad de Chess Timer de Tiny Apps, Huge Ideas.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegación principal",
        appPage: "Página de la app",
        terms: "Términos",
        breadcrumbsHome: "Inicio",
        breadcrumbsApp: "Chess Timer",
        breadcrumbsSection: "Privacidad",
        eyebrow: "Política de privacidad alojada",
        heading: "Política de Privacidad de Chess Timer",
        effectiveDate: "Fecha de entrada en vigor: 2026-02-26",
        callout: "Chess Timer no requiere una cuenta. Los nombres de los jugadores y los ajustes del reloj se guardan localmente en el dispositivo. Los anuncios de banner opcionales pueden mostrarse mediante Google AdMob.",
        whoTitle: "A quién cubre esta política",
        whoText: "Esta Política de Privacidad explica cómo la app móvil Chess Timer maneja la información cuando la usas.",
        infoTitle: "Información que proporcionas",
        infoText: "Los nombres de los jugadores y los ajustes del reloj, como el tiempo inicial, los sonidos y el color del tema, se almacenan solo en tu dispositivo. No se transmiten a la desarrolladora como parte del funcionamiento normal de la app.",
        adsTitle: "Publicidad",
        adsText: "Si los anuncios están activados, la app usa Google Mobile Ads SDK (AdMob) para mostrar banners. AdMob puede procesar identificadores, dirección IP, información del dispositivo y de la app, idioma, impresiones, clics y señales de diagnóstico de acuerdo con las políticas de Google.",
        adsLinksText: "Más información:",
        googlePrivacy: "Política de Privacidad de Google",
        googleAds: "Publicidad de Google",
        networkTitle: "Acceso a la red y diagnósticos",
        networkText: "Se puede usar acceso a internet para cargar anuncios. La funcionalidad principal del reloj puede funcionar sin conexión de red. La app no integra SDKs de analítica de terceros ni de informes de fallos.",
        useTitle: "Cómo se usa la información",
        useItems: [
          "Para proporcionar el comportamiento del reloj y conservar las preferencias locales.",
          "Para mostrar y medir anuncios cuando los anuncios están activados.",
          "Para cumplir obligaciones legales cuando corresponda."
        ],
        sharingTitle: "Compartir y conservación",
        sharingText: "Los nombres de jugadores y los ajustes del reloj almacenados localmente no se comparten con terceros por parte de la desarrolladora. Los ajustes en el dispositivo permanecen hasta que se borre el almacenamiento de la app o se desinstale la app. La conservación relacionada con anuncios se rige por Google.",
        childrenTitle: "Niños y uso internacional",
        childrenText: "La app no recopila conscientemente información personal de niños. Si los anuncios están activados, proveedores de terceros como Google pueden procesar datos en sistemas ubicados en otros países.",
        changesTitle: "Cambios en esta política",
        changesText: "Esta política puede actualizarse de vez en cuando. La fecha de entrada en vigor en la parte superior de la página reflejará la versión publicada más reciente.",
        contactTitle: "Contacto",
        contactText: "Si tienes preguntas sobre privacidad, usa el canal de soporte proporcionado con la distribución de la app o con el listado de la tienda."
      },
      chessTimerTerms: {
        title: "Términos y Condiciones de Chess Timer | Tiny Apps, Huge Ideas",
        description: "Términos y Condiciones de Chess Timer de Tiny Apps, Huge Ideas.",
        brand: "Tiny Apps, Huge Ideas",
        primaryNav: "Navegación principal",
        appPage: "Página de la app",
        privacy: "Privacidad",
        breadcrumbsHome: "Inicio",
        breadcrumbsApp: "Chess Timer",
        breadcrumbsSection: "Términos",
        eyebrow: "Términos alojados",
        heading: "Términos y Condiciones de Chess Timer",
        effectiveDate: "Fecha de entrada en vigor: 2026-03-17",
        callout: "Estos términos rigen el uso de la app distribuida Chess Timer y de las páginas alojadas que la respaldan. Cualquier repositorio de código fuente publicado por separado sigue sujeto a su propia licencia.",
        acceptanceTitle: "Aceptación de los términos",
        acceptanceText: "Al instalar o usar Chess Timer, aceptas estos Términos y Condiciones. Si no estás de acuerdo, no uses la app.",
        licenseTitle: "Licencia de uso de la app",
        licenseText: "Puedes usar Chess Timer para partidas personales y de club, dentro de la ley, en dispositivos compatibles que poseas o controles.",
        localTitle: "Datos locales y preferencias",
        localText: "Los nombres de los jugadores, los preajustes de tiempo, los ajustes de sonido, las preferencias de tema y otras opciones locales se almacenan en tu dispositivo para que la app ofrezca una experiencia fluida.",
        adsTitle: "Publicidad y servicios de terceros",
        adsText: "Los anuncios opcionales pueden mostrarse mediante Google AdMob. Esos servicios publicitarios operan bajo sus propios términos y políticas de privacidad y están fuera del control directo de la desarrolladora.",
        acceptableTitle: "Uso aceptable",
        acceptableItems: [
          "Usa la app solo con fines legales.",
          "No interrumpas el funcionamiento normal de la app ni de los servicios relacionados.",
          "No uses la app de una manera que sugiera falsamente patrocinio o respaldo."
        ],
        updatesTitle: "Actualizaciones y soporte",
        updatesText: "Las funciones, la apariencia, la compatibilidad y el comportamiento del sonido pueden cambiar con el tiempo. La app puede actualizarse, suspenderse o dejar de publicarse sin aviso.",
        warrantyTitle: "Sin garantía",
        warrantyText: "Chess Timer se ofrece tal como está y según disponibilidad, sin garantías de ningún tipo, en la máxima medida permitida por la ley.",
        liabilityTitle: "Limitación de responsabilidad",
        liabilityText: "En la máxima medida permitida por la ley, la desarrolladora no es responsable de ningún daño indirecto o consecuencial que surja del uso de la app, disputas de tiempo, incompatibilidad del dispositivo, pérdida de datos o interrupciones.",
        changesTitle: "Cambios en estos términos",
        changesText: "Se pueden publicar términos actualizados en esta página de vez en cuando. El uso continuado después de una actualización significa que aceptas los términos revisados.",
        contactTitle: "Contacto",
        contactText: "Las preguntas sobre estos términos deben dirigirse a través del canal de soporte proporcionado con la distribución de la app o con el listado de la tienda."
      }
    }
  };

  var pageConfigs = {
    home: {
      text: [
        { selector: ".brand", values: { "pt-BR": "Tiny Apps, Huge Ideas", es: "Tiny Apps, Huge Ideas" } },
        { selector: ".nav-links a[href=\"#apps\"]", values: { "pt-BR": "Apps", es: "Aplicaciones" } },
        { selector: ".hero .eyebrow", values: { "pt-BR": "Tiny Apps, Huge Ideas", es: "Tiny Apps, Huge Ideas" } },
        { selector: ".hero h1", values: { "pt-BR": "Aplicativos úteis com muita personalidade.", es: "Aplicaciones útiles con mucha personalidade." } },
        { selector: ".hero .lead", values: { "pt-BR": "Se você quer uma forma melhor de conferir contas, encaixar uma partida rápida de quebra-cabeça ou manter uma partida de xadrez no ritmo certo, estes apps foram feitos para parecer simples, focados e divertidos desde o primeiro toque.", es: "Si quieres una mejor forma de revisar cálculos, encajar una partida rápida de rompecabezas o mantener una partida de ajedrez en ritmo, estas apps están hechas para sentirse simples, enfocadas y divertidas desde el primer toque." } },
        { selector: ".hero .button-primary", values: { "pt-BR": "Ver os apps", es: "Ver las apps" } },
        { selector: ".hero .button-secondary", values: { "pt-BR": "Começar pela Calculadora Mecânica", es: "Empezar con la Calculadora Mecánica" } },
        { selector: ".check-list li", values: { "pt-BR": ["Ferramentas úteis e diversão rápida em um só lugar.", "Feitos para parecer rápidos, claros e fáceis de revisitar.", "Três apps, três estilos, zero bagunça."], es: ["Herramientas útiles y diversión rápida en un solo lugar.", "Diseñadas para sentirse rápidas, claras y fáciles de volver a abrir.", "Tres apps, tres estilos, cero desorden."] } },
        { selector: "#apps .eyebrow", values: { "pt-BR": "Escolha seu próximo app", es: "Elige tu próxima app" } },
        { selector: "#apps .section-heading h2", values: { "pt-BR": "Três tarefas diferentes. Uma ideia simples: fazer as pequenas coisas muito bem.", es: "Tres tareas distintas. Una idea simple: hacer muy bien las cosas pequeñas." } },
        { selector: "#apps .section-heading p", values: { "pt-BR": "Escolha a calculadora, o jogo de quebra-cabeça ou o relógio de xadrez que combina com o seu momento.", es: "Elige la calculadora, el juego de rompecabezas o el reloj de ajedrez que mejor encaje con tu momento." } },
        { selector: ".card-grid .card:nth-of-type(1) .card-badge", values: { "pt-BR": "Utilitário", es: "Utilidad" } },
        { selector: ".card-grid .card:nth-of-type(1) h3", values: { "pt-BR": "Calculadora Mecânica", es: "Calculadora Mecánica" } },
        { selector: ".card-grid .card:nth-of-type(1) > p", values: { "pt-BR": "Se você gosta de ver cada etapa, este app mantém uma fita de papel em estilo recibo para os cálculos e ainda adiciona ferramentas integradas para conversões, cenários de juros e divisão de conta.", es: "Si te gusta ver cada paso, esta app mantiene una cinta de papel tipo recibo para los cálculos y además añade herramientas integradas para conversiones, escenarios de intereses y división de cuentas." } },
        { selector: ".card-grid .card:nth-of-type(1) .feature-list li", values: { "pt-BR": ["Memória em fita de papel que registra entradas e resultados", "Calculadora com suporte completo a operadores e funcionalidade de porcentagem", "Ferramenta Divisor de Conta para dividir custos com distribuição uniforme ou desigual, incluindo gorjeta", "Conversor de Unidades com suporte a comprimento, peso, volume e conversões de temperatura", "Calculadora de Juros com múltiplos modos: simples, retroativo, composto e cenários de poupança", "Gerador de Números para criar sequências de números e valores aleatórios", "Efeitos opcionais de impressão e sons adicionam sensação de calculadora mecânica", "Modo paisagem e opções de exportação (TXT, CSV, PNG, JPG, PDF) facilitam revisar e compartilhar resultados"], es: ["Memoria en cinta de papel que registra entradas y resultados", "Calculadora con soporte completo de operadores y funcionalidad de porcentaje", "Herramienta Divisor de Cuentas para dividir costos con distribución equitativa o desigual, incluyendo propinas", "Conversor de Unidades con soporte para conversiones de longitud, peso, volumen y temperatura", "Calculadora de Intereses con múltiples modos: simple, retroactivo, compuesto y escenarios de ahorro", "Generador de Números para crear secuencias de números y valores aleatorios", "La animación de impresión opcional y los efectos de sonido refuerzan la sensación de calculadora mecánica", "El modo horizontal y las opciones de exportación (TXT, CSV, PNG, JPG, PDF) facilitan revisar o compartir resultados"] } },
        { selector: ".card-grid .card:nth-of-type(1) .button-primary", values: { "pt-BR": "Página do app", es: "Página de la app" } },
        { selector: ".card-grid .card:nth-of-type(1) .button-row a:nth-of-type(2)", values: { "pt-BR": "Privacidade", es: "Privacidad" } },
        { selector: ".card-grid .card:nth-of-type(1) .button-row a:nth-of-type(3)", values: { "pt-BR": "Termos", es: "Términos" } },
        { selector: ".card-grid .card:nth-of-type(2) .card-badge", values: { "pt-BR": "Jogo", es: "Juego" } },
        { selector: ".card-grid .card:nth-of-type(2) h3", values: { "pt-BR": "Columns Classic", es: "Columns Classic" } },
        { selector: ".card-grid .card:nth-of-type(2) > p", values: { "pt-BR": "Quando você quer uma pausa rápida estilo arcade, Columns Classic oferece ação rápida de blocos, combinações em cadeia e muita energia de pontuação alta.", es: "Cuando quieres una pausa rápida estilo arcade, Columns Classic ofrece acción rápida de bloques que caen, combinaciones en cadena y mucha energía de puntuación alta." } },
        { selector: ".card-grid .card:nth-of-type(2) .feature-list li", values: { "pt-BR": ["4 níveis de dificuldade e 3 tamanhos de grade", "Combinações horizontais, verticais e diagonais", "Controles por gesto e botões na tela opcionais", "Placar separado com top 20 por modo e tamanho de grade"], es: ["4 niveles de dificultad y 3 tamaños de cuadrícula", "Coincidencias horizontales, verticales y diagonales", "Controles por gestos y botones en pantalla opcionales", "Marcador separado con top 20 por modo y tamaño de cuadrícula"] } },
        { selector: ".card-grid .card:nth-of-type(2) .button-primary", values: { "pt-BR": "Página do app", es: "Página de la app" } },
        { selector: ".card-grid .card:nth-of-type(2) .button-row a:nth-of-type(2)", values: { "pt-BR": "Privacidade", es: "Privacidad" } },
        { selector: ".card-grid .card:nth-of-type(2) .button-row a:nth-of-type(3)", values: { "pt-BR": "Termos", es: "Términos" } },
        { selector: ".card-grid .card:nth-of-type(2) .button-row a.google-play-coming-soon", values: { "pt-BR": "Em breve", es: "Próximamente" } },
        { selector: ".card-grid .card:nth-of-type(3) .card-badge", values: { "pt-BR": "Ferramenta", es: "Herramienta" } },
        { selector: ".card-grid .card:nth-of-type(3) h3", values: { "pt-BR": "Chess Timer", es: "Chess Timer" } },
        { selector: ".card-grid .card:nth-of-type(3) > p", values: { "pt-BR": "Para jogos presenciais, este relógio de xadrez mantém os turnos claros, a configuração fácil e a partida mais fluida para os dois jogadores.", es: "Para partidas presenciales, este reloj de ajedrez mantiene los turnos claros, la configuración fácil y toda la sesión más fluida para ambos jugadores." } },
        { selector: ".card-grid .card:nth-of-type(3) .feature-list li", values: { "pt-BR": ["Troca rápida de turno para jogos de dois jogadores na mesa", "Controles de tempo predefinidos e horas, minutos e segundos personalizados", "Pausar, retomar, reiniciar e pausa automática opcional", "Seletor de cor do tema, sons e modo paisagem opcional"], es: ["Cambio rápido de turno para juegos de dos jugadores sobre la mesa", "Controles de tiempo preestablecidos y horas, minutos y segundos personalizados", "Pausar, reanudar, reiniciar y pausa automática opcional", "Selector de color del tema, sonidos y modo horizontal opcional"] } },
        { selector: ".card-grid .card:nth-of-type(3) .button-primary", values: { "pt-BR": "Página do app", es: "Página de la app" } },
        { selector: ".card-grid .card:nth-of-type(3) .button-row a:nth-of-type(2)", values: { "pt-BR": "Privacidade", es: "Privacidad" } },
        { selector: ".card-grid .card:nth-of-type(3) .button-row a:nth-of-type(3)", values: { "pt-BR": "Termos", es: "Términos" } },
        { selector: ".card-grid .card:nth-of-type(3) .button-row a.google-play-coming-soon", values: { "pt-BR": "Em breve", es: "Próximamente" } },
        { selector: ".section-muted .eyebrow", values: { "pt-BR": "Por que eles são bons de usar", es: "Por qué se sienten bien de usar" } },
        { selector: ".section-muted .section-heading h2", values: { "pt-BR": "Fáceis de aprender, fáceis de manter e feitos para não atrapalhar", es: "Fáciles de aprender, fáciles de conservar y hechas para no estorbar" } },
        { selector: ".highlight-grid .highlight-card:nth-of-type(1) h3", values: { "pt-BR": "Feitos para momentos reais", es: "Hechas para momentos reales" } },
        { selector: ".highlight-grid .highlight-card:nth-of-type(1) p", values: { "pt-BR": "Estes apps são pensados para aquelas situações pequenas que acontecem o tempo todo: conferir números, passar alguns minutos com um jogo ou controlar uma partida ao vivo.", es: "Estas apps están pensadas para esas situaciones pequeñas que pasan todo el tiempo: revisar números, pasar unos minutos con un juego o llevar una partida en vivo." } },
        { selector: ".highlight-grid .highlight-card:nth-of-type(2) h3", values: { "pt-BR": "Claros sobre privacidade", es: "Claridad sobre privacidad" } },
        { selector: ".highlight-grid .highlight-card:nth-of-type(2) p", values: { "pt-BR": "Os dados principais dos apps ficam no dispositivo sempre que possível. Se os anúncios estiverem ativados, as páginas de privacidade explicam exatamente o que isso significa.", es: "Los datos principales de las apps permanecen en el dispositivo siempre que sea posible. Si los anuncios están activados, las páginas de privacidad explican exactamente qué significa eso." } },
        { selector: ".highlight-grid .highlight-card:nth-of-type(3) h3", values: { "pt-BR": "Simples por design", es: "Sencillas por diseño" } },
        { selector: ".highlight-grid .highlight-card:nth-of-type(3) p", values: { "pt-BR": "Os apps mantêm a bagunça longe, e este site faz o mesmo. O que você precisa fica fácil de encontrar, sem um labirinto de menus ou ruído de marketing.", es: "Las apps mantienen el desorden al mínimo, y este sitio hace lo mismo. Lo que necesitas es fácil de encontrar, sin un laberinto de menús ni ruido de marketing." } },
        { selector: ".site-footer strong", values: { "pt-BR": "Tiny Apps, Huge Ideas", es: "Tiny Apps, Huge Ideas" } },
        { selector: ".site-footer p", values: { "pt-BR": "Três apps Android focados, feitos para serem rápidos, claros e agradáveis de usar.", es: "Tres apps Android enfocadas, creadas para ser rápidas, claras y agradables de usar." } },
        { selector: ".site-footer .footer-links a[href=\"#apps\"]", values: { "pt-BR": "Apps", es: "Aplicaciones" } },
        { selector: ".site-footer .footer-links a[href=\"apps/mechanical-calculator/index.html\"]", values: { "pt-BR": "Começar pela Calculadora Mecânica", es: "Empezar con la Calculadora Mecánica" } }
      ],
      html: [],
      attrs: [
        { selector: ".site-header .nav", attr: "aria-label", values: { "pt-BR": "Navegação principal", es: "Navegación principal" } },
        { selector: ".lang-switch", attr: "aria-label", values: { "pt-BR": "Idioma", es: "Idioma" } },
        { selector: ".card-grid .card:nth-of-type(1) .card-backdrop", attr: "alt", values: { "pt-BR": "Ícone da Calculadora Mecânica", es: "Ícono de la Calculadora Mecánica" } },
        { selector: ".card-grid .card:nth-of-type(2) .card-backdrop", attr: "alt", values: { "pt-BR": "Ícone do Columns Classic", es: "Ícono de Columns Classic" } },
        { selector: ".card-grid .card:nth-of-type(3) .card-backdrop", attr: "alt", values: { "pt-BR": "Ícone do Chess Timer", es: "Ícono de Chess Timer" } },
        { selector: ".card-grid .card:nth-of-type(1) .button-row a.google-play-button img", attr: "src", values: { "pt-BR": "assets/googlePlay/GetItOnGooglePlay_Badge_Web_color_Portuguese-Brazil.png", es: "assets/googlePlay/GetItOnGooglePlay_Badge_Web_color_Spanish.png" } }
      ]
    }
  };

  function pair(pt, es) {
    return { "pt-BR": pt, es: es };
  }

  function buildAppIndexConfig(pageKey) {
    var pt = translations["pt-BR"][pageKey];
    var es = translations.es[pageKey];

    return {
      text: [
        { selector: ".brand", values: pair(pt.brand, es.brand) },
        { selector: ".nav-links a[href=\"../../index.html#apps\"]", values: pair(pt.allApps, es.allApps) },
        { selector: ".nav-links a[href=\"privacy.html\"]", values: pair(pt.privacy, es.privacy) },
        { selector: ".nav-links a[href=\"terms.html\"]", values: pair(pt.terms, es.terms) },
        { selector: ".breadcrumbs a[href=\"../../index.html\"]", values: pair(pt.breadcrumbsHome, es.breadcrumbsHome) },
        { selector: ".breadcrumbs a[href=\"index.html\"]", values: pair(pt.breadcrumbsApp, es.breadcrumbsApp) },
        { selector: ".page-hero .badge", values: pair(pt.badge, es.badge) },
        { selector: ".page-hero h1", values: pair(pt.titleText, es.titleText) },
        { selector: ".page-hero .page-lead", values: pair(pt.lead, es.lead) },
        { selector: ".page-hero .button-primary", values: pair(pt.privacyButton, es.privacyButton) },
        { selector: ".page-hero .button-row a:nth-of-type(2)", values: pair(pt.termsButton, es.termsButton) },
        { selector: ".page-hero .button-row a:nth-of-type(3)", values: pair(pt.backButton, es.backButton) },
        { selector: ".page-hero .button-row a.google-play-coming-soon", values: pair(pt.comingSoon, es.comingSoon) },
        { selector: ".detail-grid .content-card:nth-of-type(1) h3", values: pair(pt.whyTitle, es.whyTitle) },
        { selector: ".detail-grid .content-card:nth-of-type(1) li", values: pair(pt.whyItems, es.whyItems) },
        { selector: ".detail-grid .content-card:nth-of-type(2) h3", values: pair(pt.whenTitle, es.whenTitle) },
        { selector: ".detail-grid .content-card:nth-of-type(2) p", values: pair([pt.whenText1, pt.whenText2], [es.whenText1, es.whenText2]) },
        { selector: ".detail-grid .content-card:nth-of-type(3) h3", values: pair(pt.privacyTitle, es.privacyTitle) },
        { selector: ".detail-grid .content-card:nth-of-type(3) li", values: pair(pt.privacyItems, es.privacyItems) },
        { selector: ".detail-grid .content-card:nth-of-type(4) h3", values: pair(pt.detailsTitle, es.detailsTitle) },
        { selector: ".detail-grid .content-card:nth-of-type(4) .inline-links a[href=\"privacy.html\"]", values: pair(pt.privacyButton, es.privacyButton) },
        { selector: ".detail-grid .content-card:nth-of-type(4) .inline-links a[href=\"terms.html\"]", values: pair(pt.termsButton, es.termsButton) },
        { selector: ".detail-grid .content-card:nth-of-type(4) p", values: pair(pt.detailsParagraph, es.detailsParagraph) },
        { selector: ".site-footer strong", values: pair(pt.footerTitle || pt.brand, es.footerTitle || es.brand) },
        { selector: ".site-footer p", values: pair(pt.footerText, es.footerText) },
        { selector: ".site-footer .footer-links a[href=\"privacy.html\"]", values: pair(pt.footerPrivacy, es.footerPrivacy) },
        { selector: ".site-footer .footer-links a[href=\"terms.html\"]", values: pair(pt.footerTerms, es.footerTerms) },
        { selector: ".site-footer .footer-links a[href=\"../../index.html\"]", values: pair(pt.footerHome, es.footerHome) }
      ],
      html: [],
      attrs: [
        { selector: ".site-header .nav", attr: "aria-label", values: pair(pt.primaryNav, es.primaryNav) },
        { selector: ".lang-switch", attr: "aria-label", values: pair(translations["pt-BR"].common.languageGroup, translations.es.common.languageGroup) },
        { selector: ".page-hero .button-row a.google-play-button img", attr: "src", values: { "pt-BR": "../../assets/googlePlay/GetItOnGooglePlay_Badge_Web_color_Portuguese-Brazil.png", es: "../../assets/googlePlay/GetItOnGooglePlay_Badge_Web_color_Spanish.png" } }
      ]
    };
  }

  function buildLegalConfig(pageKey) {
    var pt = translations["pt-BR"][pageKey];
    var es = translations.es[pageKey];
    var headingValuesPt = [];
    var headingValuesEs = [];
    var paragraphValuesPt = [];
    var paragraphValuesEs = [];
    var itemValuesPt = [];
    var itemValuesEs = [];

    if (pageKey === "mechanicalCalculatorPrivacy") {
      headingValuesPt = [pt.whoTitle, pt.infoTitle, pt.exportsTitle, pt.deviceTitle, pt.adsTitle, pt.permissionsTitle, pt.retentionTitle, pt.securityTitle, pt.changesTitle, pt.contactTitle];
      headingValuesEs = [es.whoTitle, es.infoTitle, es.exportsTitle, es.deviceTitle, es.adsTitle, es.permissionsTitle, es.retentionTitle, es.securityTitle, es.changesTitle, es.contactTitle];
      paragraphValuesPt = [
        pt.whoText,
        pt.infoText,
        pt.exportsText,
        pt.deviceText,
        pt.adsText1,
        pt.adsText2 + ' <a href="https://policies.google.com/privacy">' + pt.googlePrivacy + "</a> e <a href=\"https://policies.google.com/technologies/partner-sites\">" + pt.googlePartner + "</a>.",
        pt.permissionsText,
        pt.securityText,
        pt.changesText,
        pt.contactText
      ];
      paragraphValuesEs = [
        es.whoText,
        es.infoText,
        es.exportsText,
        es.deviceText,
        es.adsText1,
        es.adsText2 + ' <a href="https://policies.google.com/privacy">' + es.googlePrivacy + "</a> y <a href=\"https://policies.google.com/technologies/partner-sites\">" + es.googlePartner + "</a>.",
        es.permissionsText,
        es.securityText,
        es.changesText,
        es.contactText
      ];
      itemValuesPt = pt.retentionItems;
      itemValuesEs = es.retentionItems;
    } else if (pageKey === "mechanicalCalculatorTerms") {
      headingValuesPt = [pt.acceptanceTitle, pt.licenseTitle, pt.behaviorTitle, pt.adsTitle, pt.restrictionsTitle, pt.availabilityTitle, pt.warrantyTitle, pt.liabilityTitle, pt.changesTitle, pt.contactTitle];
      headingValuesEs = [es.acceptanceTitle, es.licenseTitle, es.behaviorTitle, es.adsTitle, es.restrictionsTitle, es.availabilityTitle, es.warrantyTitle, es.liabilityTitle, es.changesTitle, es.contactTitle];
      paragraphValuesPt = [pt.acceptanceText, pt.licenseText, pt.behaviorText, pt.adsText, pt.availabilityText, pt.warrantyText, pt.liabilityText, pt.changesText, pt.contactText];
      paragraphValuesEs = [es.acceptanceText, es.licenseText, es.behaviorText, es.adsText, es.availabilityText, es.warrantyText, es.liabilityText, es.changesText, es.contactText];
      itemValuesPt = pt.restrictionsItems;
      itemValuesEs = es.restrictionsItems;
    } else if (pageKey === "columnsClassicPrivacy") {
      headingValuesPt = [pt.whoTitle, pt.localTitle, pt.namesTitle, pt.adsTitle, pt.notCollectedTitle, pt.choicesTitle, pt.retentionTitle, pt.securityTitle, pt.changesTitle, pt.contactTitle];
      headingValuesEs = [es.whoTitle, es.localTitle, es.namesTitle, es.adsTitle, es.notCollectedTitle, es.choicesTitle, es.retentionTitle, es.securityTitle, es.changesTitle, es.contactTitle];
      paragraphValuesPt = [
        pt.whoText,
        pt.localText,
        pt.namesText,
        pt.adsText,
        pt.adsLinksText + ' <a href="https://policies.google.com/privacy">' + pt.googlePrivacy + "</a> e <a href=\"https://support.google.com/admob/\">" + pt.googleAdmob + "</a>.",
        pt.retentionText,
        pt.securityText,
        pt.changesText,
        pt.contactText
      ];
      paragraphValuesEs = [
        es.whoText,
        es.localText,
        es.namesText,
        es.adsText,
        es.adsLinksText + ' <a href="https://policies.google.com/privacy">' + es.googlePrivacy + "</a> y <a href=\"https://support.google.com/admob/\">" + es.googleAdmob + "</a>.",
        es.retentionText,
        es.securityText,
        es.changesText,
        es.contactText
      ];
      itemValuesPt = pt.notCollectedItems.concat(pt.choicesItems);
      itemValuesEs = es.notCollectedItems.concat(es.choicesItems);
    } else if (pageKey === "columnsClassicTerms") {
      headingValuesPt = [pt.acceptanceTitle, pt.licenseTitle, pt.gameplayTitle, pt.adsTitle, pt.acceptableTitle, pt.updatesTitle, pt.warrantyTitle, pt.liabilityTitle, pt.changesTitle, pt.contactTitle];
      headingValuesEs = [es.acceptanceTitle, es.licenseTitle, es.gameplayTitle, es.adsTitle, es.acceptableTitle, es.updatesTitle, es.warrantyTitle, es.liabilityTitle, es.changesTitle, es.contactTitle];
      paragraphValuesPt = [pt.acceptanceText, pt.licenseText, pt.gameplayText, pt.adsText, pt.updatesText, pt.warrantyText, pt.liabilityText, pt.changesText, pt.contactText];
      paragraphValuesEs = [es.acceptanceText, es.licenseText, es.gameplayText, es.adsText, es.updatesText, es.warrantyText, es.liabilityText, es.changesText, es.contactText];
      itemValuesPt = pt.acceptableItems;
      itemValuesEs = es.acceptableItems;
    } else if (pageKey === "chessTimerPrivacy") {
      headingValuesPt = [pt.whoTitle, pt.infoTitle, pt.adsTitle, pt.networkTitle, pt.useTitle, pt.sharingTitle, pt.childrenTitle, pt.changesTitle, pt.contactTitle];
      headingValuesEs = [es.whoTitle, es.infoTitle, es.adsTitle, es.networkTitle, es.useTitle, es.sharingTitle, es.childrenTitle, es.changesTitle, es.contactTitle];
      paragraphValuesPt = [
        pt.whoText,
        pt.infoText,
        pt.adsText,
        pt.adsLinksText + ' <a href="https://policies.google.com/privacy">' + pt.googlePrivacy + "</a> e <a href=\"https://policies.google.com/technologies/ads\">" + pt.googleAds + "</a>.",
        pt.networkText,
        pt.sharingText,
        pt.childrenText,
        pt.changesText,
        pt.contactText
      ];
      paragraphValuesEs = [
        es.whoText,
        es.infoText,
        es.adsText,
        es.adsLinksText + ' <a href="https://policies.google.com/privacy">' + es.googlePrivacy + "</a> y <a href=\"https://policies.google.com/technologies/ads\">" + es.googleAds + "</a>.",
        es.networkText,
        es.sharingText,
        es.childrenText,
        es.changesText,
        es.contactText
      ];
      itemValuesPt = pt.useItems;
      itemValuesEs = es.useItems;
    } else if (pageKey === "chessTimerTerms") {
      headingValuesPt = [pt.acceptanceTitle, pt.licenseTitle, pt.localTitle, pt.adsTitle, pt.acceptableTitle, pt.updatesTitle, pt.warrantyTitle, pt.liabilityTitle, pt.changesTitle, pt.contactTitle];
      headingValuesEs = [es.acceptanceTitle, es.licenseTitle, es.localTitle, es.adsTitle, es.acceptableTitle, es.updatesTitle, es.warrantyTitle, es.liabilityTitle, es.changesTitle, es.contactTitle];
      paragraphValuesPt = [pt.acceptanceText, pt.licenseText, pt.localText, pt.adsText, pt.updatesText, pt.warrantyText, pt.liabilityText, pt.changesText, pt.contactText];
      paragraphValuesEs = [es.acceptanceText, es.licenseText, es.localText, es.adsText, es.updatesText, es.warrantyText, es.liabilityText, es.changesText, es.contactText];
      itemValuesPt = pt.acceptableItems;
      itemValuesEs = es.acceptableItems;
    }

    return {
      text: [
        { selector: ".brand", values: pair(pt.brand, es.brand) },
        { selector: ".nav-links a[href=\"index.html\"]", values: pair(pt.appPage, es.appPage) },
        { selector: ".nav-links a[href=\"privacy.html\"]", values: pair(pt.privacy || "Privacidade", es.privacy || "Privacidad") },
        { selector: ".nav-links a[href=\"terms.html\"]", values: pair(pt.terms, es.terms) },
        { selector: ".breadcrumbs a[href=\"../../index.html\"]", values: pair(pt.breadcrumbsHome, es.breadcrumbsHome) },
        { selector: ".breadcrumbs a[href=\"index.html\"]", values: pair(pt.breadcrumbsApp, es.breadcrumbsApp) },
        { selector: ".legal-doc .eyebrow", values: pair(pt.eyebrow, es.eyebrow) },
        { selector: ".legal-doc h1", values: pair(pt.heading, es.heading) },
        { selector: ".legal-doc .legal-meta", values: pair(pt.effectiveDate, es.effectiveDate) },
        { selector: ".legal-doc .callout", values: pair(pt.callout, es.callout) },
        { selector: ".legal-doc h2", values: pair(headingValuesPt, headingValuesEs) },
        { selector: ".legal-doc li", values: pair(itemValuesPt, itemValuesEs) }
      ],
      html: [
        { selector: ".legal-doc > p:not(.eyebrow):not(.legal-meta)", values: pair(paragraphValuesPt, paragraphValuesEs) }
      ],
      attrs: [
        { selector: ".site-header .nav", attr: "aria-label", values: pair(pt.primaryNav, es.primaryNav) },
        { selector: ".lang-switch", attr: "aria-label", values: pair(translations["pt-BR"].common.languageGroup, translations.es.common.languageGroup) }
      ]
    };
  }

  pageConfigs.mechanicalCalculatorIndex = buildAppIndexConfig("mechanicalCalculatorIndex");
  pageConfigs.mechanicalCalculatorPrivacy = buildLegalConfig("mechanicalCalculatorPrivacy");
  pageConfigs.mechanicalCalculatorTerms = buildLegalConfig("mechanicalCalculatorTerms");
  pageConfigs.columnsClassicIndex = buildAppIndexConfig("columnsClassicIndex");
  pageConfigs.columnsClassicPrivacy = buildLegalConfig("columnsClassicPrivacy");
  pageConfigs.columnsClassicTerms = buildLegalConfig("columnsClassicTerms");
  pageConfigs.chessTimerIndex = buildAppIndexConfig("chessTimerIndex");
  pageConfigs.chessTimerPrivacy = buildLegalConfig("chessTimerPrivacy");
  pageConfigs.chessTimerTerms = buildLegalConfig("chessTimerTerms");

  function getLocale() {
    var stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      stored = null;
    }
    var locale = stored || FALLBACK_LOCALE;
    locale = locale.toString();
    if (locale.toLowerCase() === "pt-br" || locale.toLowerCase() === "pt_br") {
      return "pt-BR";
    }
    if (locale.toLowerCase() === "es" || locale.toLowerCase() === "es-es") {
      return "es";
    }
    if (locale.toLowerCase() === "en" || locale.toLowerCase() === "en-us") {
      return "en";
    }
    return FALLBACK_LOCALE;
  }

  function setStoredLocale(locale) {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch (error) {
      // Ignore storage failures in restricted browser contexts.
    }
  }

  function getPageKey() {
    return document.body && document.body.dataset.page ? document.body.dataset.page : "home";
  }

  function getPageConfig() {
    var pageKey = getPageKey();
    return pageConfigs[pageKey] || null;
  }

  function getOriginalBucket(node) {
    var bucket = originalBucket.get(node);
    if (!bucket) {
      bucket = {
        text: node.textContent,
        html: node.innerHTML,
        attrs: {}
      };
      originalBucket.set(node, bucket);
    }
    return bucket;
  }

  function getOriginal(node, kind, attr) {
    var bucket = getOriginalBucket(node);
    if (kind === "text") {
      return bucket.text;
    }
    if (kind === "html") {
      return bucket.html;
    }
    if (!Object.prototype.hasOwnProperty.call(bucket.attrs, attr)) {
      bucket.attrs[attr] = node.hasAttribute(attr) ? node.getAttribute(attr) : null;
    }
    return bucket.attrs[attr];
  }

  function applyEntry(entry, locale, kind) {
    var nodes = document.querySelectorAll(entry.selector);
    if (!nodes.length) {
      return;
    }
    var localized = locale === "en" ? null : entry.values[locale];
    for (var i = 0; i < nodes.length; i += 1) {
      var node = nodes[i];
      var value;
      if (locale === "en") {
        value = getOriginal(node, kind, entry.attr);
      } else if (Array.isArray(localized)) {
        value = localized[i];
      } else {
        value = localized;
      }
      if (typeof value === "undefined") {
        continue;
      }
      if (kind === "html") {
        node.innerHTML = value;
      } else if (kind === "attr") {
        if (value === null) {
          node.removeAttribute(entry.attr);
        } else {
          node.setAttribute(entry.attr, value);
        }
      } else {
        node.textContent = value;
      }
    }
  }

  function applyPage(locale) {
    var config = getPageConfig();
    if (!config) {
      return;
    }

    document.documentElement.lang = locale;
    var pageKey = getPageKey();
    var pageCopy = locale === "en" ? null : translations[locale] && translations[locale][pageKey];

    if (locale === "en") {
      if (config.titleNode) {
        document.title = getOriginal(config.titleNode, "text");
      }
      if (config.descriptionNode) {
        config.descriptionNode.setAttribute("content", getOriginal(config.descriptionNode, "attr", "content"));
      }
    } else {
      if (pageCopy && pageCopy.title) {
        document.title = pageCopy.title;
      }
      if (pageCopy && pageCopy.description && config.descriptionNode) {
        config.descriptionNode.setAttribute("content", pageCopy.description);
      }
    }

    for (var i = 0; i < config.text.length; i += 1) {
      applyEntry(config.text[i], locale, "text");
    }

    for (var j = 0; j < config.html.length; j += 1) {
      applyEntry(config.html[j], locale, "html");
    }

    for (var k = 0; k < config.attrs.length; k += 1) {
      applyEntry(config.attrs[k], locale, "attr");
    }

    updateLanguageButtons(locale);
    setStoredLocale(locale);
  }

  function updateLanguageButtons(locale) {
    var buttons = document.querySelectorAll("[data-lang]");
    for (var i = 0; i < buttons.length; i += 1) {
      var button = buttons[i];
      var isActive = button.dataset.lang === locale;
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    }
  }

  function cachePageNodes() {
    var config = getPageConfig();
    if (!config) {
      return;
    }

    config.titleNode = document.querySelector("title");
    config.descriptionNode = document.querySelector('meta[name="description"]');

    if (config.titleNode) {
      getOriginalBucket(config.titleNode);
    }
    if (config.descriptionNode) {
      getOriginalBucket(config.descriptionNode);
    }

    var allEntries = []
      .concat(config.text)
      .concat(config.html)
      .concat(config.attrs);

    for (var i = 0; i < allEntries.length; i += 1) {
      var entry = allEntries[i];
      var nodes = document.querySelectorAll(entry.selector);
      for (var j = 0; j < nodes.length; j += 1) {
        getOriginalBucket(nodes[j]);
        if (entry.attr) {
          getOriginal(nodes[j], "attr", entry.attr);
        }
      }
    }
  }

  function init() {
    cachePageNodes();

    var locale = getLocale();
    var buttons = document.querySelectorAll("[data-lang]");
    for (var i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener("click", function (event) {
        var target = event.currentTarget;
        applyPage(target.dataset.lang);
      });
    }

    applyPage(locale);
  }

  var originalBucket = new WeakMap();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
