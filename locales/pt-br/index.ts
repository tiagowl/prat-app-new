
export default {
    back: 'Voltar',
    postNotFound: 'Publicação não encontrada',
    bottomTabDialogTitle: 'Ação necessária',
    bottomTabDialogDescription: 'Crie sua conta rapidamente para poder utilizar todos os recursos',
    bottomTabDialogButton: 'Criar minha conta',
    pageCreateTypes: 'Tipo de página',
    welcome: {
      buttonAppreciation: 'Conhecer o aplicativo',
      buttonSignup: 'Criar minha conta',
      buttonSignin: 'Já tenho uma conta',
      footerOne: '”Sede',
      footerTwo: 'praticantes',
      footerThree: 'da Palavra e não\nsomente ouvintes...” Tiago 1.22',
    },
    menu: {
      feed: 'Feed',
      explore: 'Explorar',
      publish: 'Publicar',
      notifications: 'Notificações',
      profile: 'Perfil',
    },
    general: {
      scheduled: 'Agendado para ',
      reportTitle: 'Denuncia enviada!',
      reportMessage: 'Vamos analisar o conteúdo\ndesta publicação',
      reportSendMail: 'Explicar sua denúncia',
      reportClose: 'Voltar a publicações',
      tags: 'Tags',
      notag: '(sem tag)',
      newComment: 'Deixe um comentário...',
      answerTo: 'Respondendo para ',
      updateYourComment: 'Editando seu comentário',
      suggestionFollow: 'Deseja seguir ',
      new: 'Novo'
    },
    locales: {
      english: 'Inglês',
      portuguese: 'Português'
    },
    terms: {
      title: 'Termos de uso'
    },
    confession: {
      title: 'Declaração de fé',
      text: 'Creio no Deus eterno, criador de todas as coisas, em Jesus Cristo - filho de Deus e no Espírito Santo. Creio que não há outro Deus. \n\nCreio que a Bíblia é a imutável Palavra de Deus. \n\nCreio que Jesus Cristo é o caminho, a verdade e a vida; o único mediador através do qual podemos nos reconciliar com Deus. \n\nCreio que Jesus é um ser eterno, se tornou homem, viveu aqui na terra uma vida irrepreensível, morreu para remissão dos nossos pecados, ressuscitou, foi exaltado à destra de Deus, e voltará em poder e glória. \n\nCreio em Jesus Cristo como Senhor e Salvador da minha vida. \n\nCreio na habitação do Espírito Santo em minha vida.',
      button: 'Amém, eu concordo!'
    },
    signIn: {
      title: 'Entre com seus dados',
      formHeader: 'Preencha os campos abaixo ou use\nseu Facebook/Gmail para acessar sua conta',
      formFooter: 'Ou acesse com',
      inputs: {
        email: 'Seu e-mail',
        password: 'Sua senha'
      },
      buttons: {
        first: 'Entrar',
        second: 'Esqueci minha senha'
      },
      signUp: {
        regular: 'Não está cadastrado?',
        bold: 'Crie sua conta!'
      }
    },
    recovery: {
      title: 'Esqueci minha senha',
      header: {
        first: 'Ops! Acontece!',
        second: 'Mas não se preocupe, você pode redefinir sua senha por aqui.'
      },
      inputs: {
        email: 'E-mail'
      },
      buttons: {
        first: 'Enviar e-mail'
      },
      messages: {
        emailSuccess: 'E-mail enviado com sucesso.',
        emailFail: 'Não foi possível enviar o e-mail de renovação. Por favor, tente mais tarde.'
      }
    },
    signUp: {
      title: 'Crie sua conta',
      login: 'Entrar',
      formHeader: 'Preencha os campos abaixo ou use\nseu Facebook/Gmail para criar sua conta',
      formFooter: 'Ou acesse com',
      inputs: {
        name: 'Nome completo',
        email: 'Seu e-mail',
        password: 'Defina uma senha'
      },
      buttons: {
        first: 'Criar conta'
      },
      terms: {
        first: 'Ao clicar em uma das opções acima, você está de acordo com os',
        second: 'termos de uso',
        third: 'do Praticantes.'
      }
    },
    validations: {
      min: {
        plural: value => `Mínimo de ${value} caracteres.`,
        singular: value => `Mínimo de ${value} caractere.`
      },
      max: {
        plural: value => `Máximo de ${value} caracteres.`,
        singular: value => `Máximo de ${value} caractere.`
      },
      required: 'Este campo é obrigatório',
      email: 'Por favor, digite um e-mail válido',
      emailInvalid: 'Este e-mail é inválido',
      emailAlreadyUse: 'Este e-mail já está sendo usado',
      password: 'Sua senha deve ter no mínimo 6 caracteres',
      passwordInvalid: 'A senha informada é inválida',
      passwordWeak: 'A senha informada é muito fraca',
      userDisabled: 'Este usuário foi desativado',
      userNotFound: 'Este usuário não foi encontrado',
      userDeleted: 'Essa conta foi deletada do Praticantes',
      userAttempts: 'Você excedeu o limite máximo de tentativas, por favor, tente novamente em 1 hora',
      facebookError: 'Não foi possível entrar usando sua conta do Facebook',
      googleError: 'Não foi possível entrar usando sua conta do Google',
      appleError: 'Não foi possível entrar usando sua conta da Apple',
      signinError: 'Não foi possível autenticar sua conta',
      signupError: 'Não foi possível cadastrar seus dados',
    },
    verification: {
      title: 'Ativação de cadastro',
      header: {
        first: 'Seu cadastro está aguardando ativação',
        second: 'Você recebeu um e-mail de ativação quando criou sua conta. Caso não tenha recebido, confira a caixa de spam ou envie novamente.'
      },
      buttons: {
        first: 'Enviar e-mail novamente'
      }
    },
    location: {
      title: 'Endereço',
      header: {
        bold: 'Vamos começar!',
        light: 'Preencha sua cidade e estado para melhorarmos a sua experiência no aplicativo.'
      },
      default: {
        city: 'Digite sua cidade',
        state: 'UF'
      },
      buttons: {
        first: 'Salvar'
      }
    },
    username: {
      title: 'Nome de usuário',
      subtitle: 'Informe seu nome de usuário',
      description: 'Você poderá alterá-lo depois',
      input: 'Nome de usuário',
      error: 'Não foi possível alterar o nome de usuário',
    },
    profilePicture: {
      title: 'Foto de perfil',
      header: {
        first: 'Agora vamos definir sua foto para o seu perfil'
      },
      buttons: {
        first: 'Finalizar sem foto',
        second: 'Salvar'
      },
      cameraOptions: {
        title: 'Definir foto do perfil:',
        takePicture: 'Tirar foto',
        pickPicture: 'Escolher foto da galeria'
      }
    },
    feed: {
      title: 'Feed',
      suggested: 'Publicação sugerida',
      sponsored: 'Patrocinado',
      updated: 'Editado',
      welcomeTitle: 'Bem-vindo ao Praticantes!',
      welcomeDescription: 'Você já está seguindo alguns perfis sugeridos (parceiros Praticantes), e pode gerenciar suas inscrições a qualquer momento. Deus abençoe sua vida!',
      welcomeButton: 'Entendi',
      localeTitle: 'Novidade!',
      localeDescription: 'Escolha em qual idioma você gostaria de ler e publicar no Praticantes.\nVocê ainda poderá ver as publicações no idioma original, não se preocupe.',
      userSuggestions: 'Sugestões para você',
      post: {
        options: {
          title: 'O que você deseja fazer?',
          follow: 'Seguir usuário',
          unfollow: 'Deixar de seguir',
          delete: 'Deletar publicação',
          block: 'Bloquear publicação',
          edit: 'Editar publicação',
          report: 'Denunciar publicação',
          sponsor: 'Sobre os anúncios',
          statistics: 'Ver informações',
          confirmTitle: 'Tem certeza?',
          confirmDescription: 'Esta ação não poderá ser desfeita'
        },
        actions: {
          like: 'Curtir',
          comment: 'Comentar',
          share: 'Compartilhar',
          save: 'Salvar'
        },
        more: 'Mais',
        likes: {
          plural: value => `${value} curtidas`,
          singular: value => `${value} curtida`
        },
        comments: {
          plural: value => `${value} comentários`,
          singular: value => `${value} comentário`
        },
        views: {
          plural: value => `${value} visualizações`,
          singular: value => `${value} visualização`
        },
        clicks: {
          plural: value => `${value} cliques`,
          singular: value => `${value} clique`,
        },
        plays: {
          plural: value => `${value} ouviram`,
          singular: value => `${value} ouviu`
        },
        bookmarks: {
          plural: value => `${value} favoritos`,
          singular: value => `${value} favorito`
        },
        downloads: {
          plural: value => `${value} downloads`,
          singular: value => `${value} download`
        }
      },
      comments: {
        title: 'Comentários',
        input: 'Adicione um comentário...',
        send: 'Enviar',
        cancel: 'Cancelar',
        update: 'Atualizar'
      },
      headerMessage: 'Criando sua publicação',
      shareMessage: 'App Praticantes, compartilhando Vida de irmãos para irmãos! '
    },
    explore: {
      title: 'Explorar',
      loading: 'Carregando',
      search: 'Buscar',
      searchUsers: 'Buscar usuários',
      searchPosts: 'Buscar publicações',
      searchHashtags: 'Buscar hashtags',
      users: 'Usuários',
      posts: 'Publicações',
      hashtags: 'Hashtags',
      shareMessage: 'Convide irmãos para o Praticantes',
      shareButton: 'Convidar',
      shareText: 'Você recebeu uma indicação para conhecer o Praticantes. O aplicativo gratuito focado em compartilhamento de conteúdo cristão e vida prática da igreja de Cristo.',
      sort: {
        date: 'Mais recentes',
        popularity: 'Mais populares'
      }
    },
    actions: {
      search: 'Buscar',
      follow: 'Seguir',
      unfollow: 'Deixar de seguir',
      send: 'Enviar',
      see: 'Ver',
      save: 'Salvar',
      update: 'Atualizar',
      select: 'Selecionar',
      logout: 'Sair',
      edit: 'Editar',
      delete: 'Excluir',
      deleteProfile: "Deletar perfil",
      deactivate: 'Desativar',
      confirm: 'Confirmar',
      report: 'Denunciar',
      reportProfile: 'Denunciar perfil',
      blockProfile: 'Bloquear perfil',
      reply: 'Responder',
      remove: 'Remover',
      more: 'Mais',
      subscribe: 'Ser notificado',
      unsubscribe: 'Não ser notificado ',
      close: 'Fechar',
      exit: 'Sair',
      exitMessage: 'Sair sem salvar as alterações?',
      cancel: 'Cancelar',
      clear: 'Limpar',
      readMore: 'Continuar lendo',
      seeMore: 'Saiba mais',
      recommend: 'Recomendar',
      bookmark: 'Salvar',
      share: 'Compartilhar',
      shareProfile: "Compartilhar perfil",
      shareTestimony: "Compartilhar testemunho",
      openCamera: 'Capturar foto',
      openPicker: 'Escolher foto da galeria',
      sendMail: 'Enviar e-mail',
      seeTranslation: 'Ver tradução',
      seeOriginal: 'Ver original',
      configure: 'Configurações',
      support: 'Suporte',
      create: 'Criar',
      refresh: 'Refresh',
      tryAgain: 'Tentar novamente'
    },
    newPost: {
      title: 'Publicar',
      editTitle: 'Editar',
      action: 'Publicar',
      posts: {
        plural: value => `${value} publicações`,
        singular: value => `${value} publicação`
      },
      schedule: 'Agendar publicação',
      removeSchedule: 'Remover agendamento',
      scheduledNow: 'Esta publicação não possui agendamento',
      scheduled: 'Publicação agendada!',
      scheduledDesc: 'Sua publicação ficará visível a partir da data agendada!\nVocê ainda pode editá-la antes de sua publicação.',
      inputs: {
        description: 'Toque aqui para escrever'
      },
      tagAlert: 'Por favor, utilize a tag "necessidade" somente se for um pedido de ajuda, assim o aplicativo fica mais organizado, obrigado!',
      wantAdvertise: 'Classificados',
      wantAdvertiseDescription: 'Você pode usar a funcionalidade de classificados para anunciar seus produtos ou serviços.',
      wantAdvertiseYes: 'Ir para os classificados',
      wantAdvertiseNo: 'Continuar com a publicação',
      wantSchedule: "Agendar publicação",
      wantScheduleDescription: "Você já realizou uma publicação hoje, deseja agendar essa publicação? Isso costuma gerar mais visibilidade!",
      wantScheduleYes: "Quero agendar",
      wantScheduleNo: "Não, obrigado",
      notificationProgressTitle: "Praticantes",
      notificationProgressDescription: "Enviando seus arquivos",
      publishProcessing: "Processando sua publicação",
      publishSent: "Sua publicação foi enviada",
      publishCancel: "Cancelar publicação",
    },
    search: {
      title: 'Buscar usuários',
      cancel: 'Cancelar'
    },
    post: {
      title: 'Publicação'
    },
    postStatistics: {
      title: 'Informações',
      descriptionPost: 'Informações da publicação',
      descriptionAttachments: 'Informações relacionadas aos anexos da publicação',
      likes: {
        plural: () => `Curtidas`,
        singular: () => `Curtida`,
      },
      comments: {
        plural: () => `Comentários`,
        singular: () => `Comentário`,
      },
      bookmarks: {
        plural: () => `Salvos`,
        singular: () => `Salvo`,
      },
      views: {
        plural: () => `Visualizações`,
        singular: () => `Visualização`,
      },
      clicksLink: {
        plural: () => `Cliques em links`,
        singular: () => `Clique em links`,
      },
      clicksPlay: {
        plural: () => `Cliques para ouvir`,
        singular: () => `Clique para ouvir`,
      },
      clicksView: {
        plural: () => `Cliques para assistir`,
        singular: () => `Clique para assistir`,
      },
      clicksDownload: {
        plural: () => `Cliques para baixar`,
        singular: () => `Clique para baixar`,
      },
    },
    likes: {
      title: 'Curtidas',
      messagePost: 'Irmãos que curtiram essa publicação',
      messageComment: 'Irmãos que curtiram esse comentário'
    },
    list: {
      loading: 'Carregando',
      empty: 'Não há nada para mostrar'
    },
    aboutPartners: {
      title: 'Sobre os anúncios',
      subtitle: 'Você quer impulsionar\numa publicação no Praticantes?',
    description: 'Os posts patrocinados têm o objetivo de impulsionar uma postagem, aumentando a divulgação e a visibilidade da publicação.\n\nAo impulsionar um post, você irá alcançar mais pessoas, ou seja, mais visualizações para seu conteúdo. O valor (R$) investido ao patrocinar uma publicação irá auxiliar em manter o App gratuito para a igreja.\n\nEssa nova funcionalidade permite que você tenha destaque/preferência no menu explorar/feed dos usuários, possibilitando inclusive que aumente o numero de seus seguidores.\n\nFicou interessado e quer mais informações? Entre em contato pelo e-mail marketing@praticantes.org com o assunto PATROCINADO',
      button: 'Entre em contato conosco'
    },
    notifications: {
      title: 'Notificações',
      empty: 'Você não possui nenhuma notificação',
      loading: 'Carregando'
    },
    profile: {
      title: 'Perfil',
      following: 'Seguindo',
      followers: 'Seguidores',
      username: 'Nome de usuário',
      posts: 'Publicações',
      edit: 'Editar perfil',
      sex: 'Sexo',
      birthday: 'Aniversário',
      birthdayMessage: 'O ano não ficará visível para outros usuários.',
      church: 'Igreja',
      churchDesc: 'A igreja que você frequenta.',
      pastor: 'Sou pastor/líder de congregação',
      pastorDesc: 'Essa identificação ficará visível em seu perfil. Em breve, os usuários poderão fazer uma busca por pastores e localidades, o que ajudará as pessoas a encontrarem sua igreja',
      bio: 'Bio',
      bioDesc: 'Conte um pouco mais sobre você.',
      testimony: 'Testemunho pessoal',
      testimonyDesc: 'Conte o que Deus fez na sua vida para animar os irmãos e glorificar a Deus!',
      website: 'Site',
      websiteDesc: 'Divulgue sua presença online.',
      city: 'Cidade/Estado',
      bookmarks: 'Publicações salvas',
      seeAwards: 'Ver minhas conquistas',
      seeBookmarks: 'Ver minhas publicações salvas',
      pictureDesc: 'Selecione uma foto para o seu perfil',
      locationDesc: 'Selecione sua cidade',
      select: 'Selecione',
      male: 'Masculino',
      female: 'Feminino',
      shareText: {
        one: 'Visite o perfil de  ',
        two: ' no Praticantes! O aplicativo gratuito focado no compartilhamento de conteúdo cristão e vida prática na Igreja de Cristo.',
      },
    },
    profileChurch: {
      title: 'Igreja',
      subtitle: 'Informe a sua igreja',
      description: 'Diga aos irmãos a igreja que você congrega',
      placeholder: 'Preencha sua igreja',
    },
    profileAwards: {
      title: 'Minhas conquistas',
      subtitle: 'Veja a lista completa das conquistas que você alcançou até agora ao abençoar irmãos.',
      description: 'Aqui você verá algumas conquistas que estão abençoando irmãos dentro do aplicativo, na forma de troféus. Ao criar postagens e interagir no Praticantes, você pode acumular conquistas, desbloquear funcionalidades exclusivas e até ganhar prêmios.',
      postsMadeBronze: 'Publicador bronze',
      postsMadeBronzeDesc: 'Criou sua primeira publicação',
      postsMadeSilver: 'Publicador prata',
      postsMadeSilverDesc: 'Criou ao menos 15 publicações',
      postsMadeGold: 'Publicador ouro',
      postsMadeGoldDesc: 'Criou ao menos 50 publicações',
      likesMadeBronze: 'Apreciador bronze',
      likesMadeBronzeDesc: 'Primeira curtida realizada',
      likesMadeSilver: 'Apreciador prata',
      likesMadeSilverDesc: 'Curtiu ao menos 30 publicações',
      likesMadeGold: 'Apreciador ouro',
      likesMadeGoldDesc: 'Curtiu ao menos 100 publicações',
      commentsMadeBronze: 'Engajador bronze',
      commentsMadeBronzeDesc: 'Primeiro comentário realizado',
      commentsMadeSilver: 'Engajador prata',
      commentsMadeSilverDesc: 'Deixou ao menos 10 comentários em publicações',
      commentsMadeGold: 'Engajador ouro',
      commentsMadeGoldDesc: 'Deixou ao menos 30 comentários em publicações',
      likesReceivedSamePostBronze: 'Boa publicação',
      likesReceivedSamePostBronzeDesc: 'Primeira curtida recebida',
      likesReceivedSamePostSilver: 'Ótima publicação',
      likesReceivedSamePostSilverDesc: 'Recebeu ao menos 5 curtidas em uma única publicação',
      likesReceivedSamePostGold: 'Excelente publicação',
      likesReceivedSamePostGoldDesc: 'Recebeu ao menos 30 curtidas em uma única publicação',
      commentsReceivedSamePostBronze: 'Bom tópico',
      commentsReceivedSamePostBronzeDesc: 'Primeiro comentário recebido',
      commentsReceivedSamePostSilver: 'Ótimo tópico',
      commentsReceivedSamePostSilverDesc: 'Recebeu ao menos 4 comentários em uma única publicação',
      commentsReceivedSamePostGold: 'Excelente tópico',
      commentsReceivedSamePostGoldDesc: 'Recebeu ao menos 10 comentários em uma única publicação',
      viewsReceivedSamePostBronze: 'Bom alcance',
      viewsReceivedSamePostBronzeDesc: 'Primeira publicação com ao menos 20 visualizações',
      viewsReceivedSamePostSilver: 'Ótimo alcance',
      viewsReceivedSamePostSilverDesc: 'Obteve ao menos 200 visualizações em uma única publicação',
      viewsReceivedSamePostGold: 'Excelente alcance',
      viewsReceivedSamePostGoldDesc: 'Obteve ao menos 1000 visualizações em uma única publicação',
      contentCreatorBronze: 'Criador de conteúdo bronze',
      contentCreatorBronzeDesc: 'Conquistou 10 publicações com mais de 5 curtidas',
      contentCreatorSilver: 'Criador de conteúdo prata',
      contentCreatorSilverDesc: 'Conquistou 20 publicações com mais de 10 curtidas',
      contentCreatorGold: 'Criador de conteúdo ouro',
      contentCreatorGoldDesc: 'Conquistou 30 publicações com mais de 20 curtidas',
      sharerBronze: 'Divulgador bronze',
      sharerBronzeDesc: 'Trouxe 1 irmão para o Praticantes',
      sharerSilver: 'Divulgador prata',
      sharerSilverDesc: 'Trouxe ao menos 3 irmãos para o Praticantes',
      sharerGold: 'Divulgador ouro',
      sharerGoldDesc: 'Trouxe ao menos 5 irmãos para o Praticantes',
    },
    profileSettings: {
      title: 'Configurações',
      languageTitle: 'Alterar idioma',
      languageDescription: 'Selecione o idioma que você deseja ler o conteúdo',
      suggestionsTitle: 'Publicações sugeridas',
      suggestionsDescription: 'Você pode optar por não receber publicações sugeridas no feed',
      suggestionsDescriptionEnable: 'Quero receber publicações sugeridas',
      dataSavingTitle: 'Economia de dados',
      dataSavingDescription: 'Você pode optar pela economia de dados, os videos não serão carregados antecipadamente no feed',
      dataSavingDescriptionEnable: 'Quero habilitar a economia de dados',
      deleteTitle: 'Excluir meu perfil',
      deleteDescription: 'Seu perfil Praticantes será totalmente excluído e não poderá mais ser recuperado.',
      deleteButton: 'Excluir meu perfil',
      deletedMessage: 'Sua conta foi excluída com sucesso!',
      deletedButton: 'Ir para a tela inicial',
    },
    pagesCreateTitle: 'Criar página',
    pagesCreateTypesTitle: 'Tipo',
    pagesCreateTypesDescription: 'Selecione o tipo de página que você deseja criar',
    pagesCreateSubmit: 'Criar página',
    reports: {
      postSubject: 'Denúncia de publicação',
      postBody: 'Gostaria de realizar essa denúncia no aplicativo Praticantes.\n\n--Por favor, informe o motivo aqui--',
      profileSubject: 'Denúncia de perfil',
      profileBody: 'Gostaria de realizar essa denúncia no aplicativo Praticantes.\n\n--Por favor, informe o motivo aqui--',
      partnersSubject: 'Publicação patrocinada',
      partnersBody: 'Gostaria de saber mais sobre publicações patrocinadas no aplicativo Praticantes.\n\n--Por favor, continue aqui--'
    },
    support: {
      title: 'Suporte',
      helpTitle: 'Precisa de ajuda?',
      helpDescription: 'Entre em contato conosco atráves dos nossos canais de atendimento',
      descriptionEmail: 'Entre em contato por e-mail',
      descriptionEmailButton: 'Suporte por e-mail',
      descriptionWhatsapp: 'Entre em contato por Whatsapp',
      descriptionWhatsappButton: 'Suporte por Whatsapp',
    }
  }
  