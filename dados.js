let dados = [
  {
    nome: "Gemini",
    funcao: "Modelo de IA desenvolvido pelo Google com foco em processamento de linguagem natural e assistência contextualizada.",
    link: "https://gemini.google.com/app/1ad6b8c4169b23eb",
    tags: "Processamento de Linguagem Natural Assistência Contextual IA Conversacional Google"
  },
  {
    nome: "ChatGPT",
    funcao: "Modelo de linguagem natural para gerar textos, responder perguntas e realizar tarefas complexas de conversação.",
    link: "https://chat.openai.com/",
    tags: "Modelo de Linguagem Conversação Respostas Automáticas OpenAI"
  },
  {
    nome: "DALL·E",
    funcao: "Modelo de IA para gerar imagens a partir de descrições textuais.",
    link: "https://openai.com/dall-e",
    tags: "Geração de Imagens Descrição Textual Arte Digital OpenAI"
  },
  {
    nome: "MidJourney",
    funcao: "Ferramenta de IA para gerar imagens de alta qualidade a partir de prompts textuais.",
    link: "https://www.midjourney.com/",
    tags: "Imagens de Alta Qualidade Geração de Imagens Prompts Textuais Criatividade"
  },
  {
    nome: "Stable Diffusion",
    funcao: "Gerador de imagens de código aberto que cria imagens a partir de texto.",
    link: "https://stability.ai/",
    tags: "Código Aberto Geração de Imagens Texto para Imagem IA Criativa"
  },
  {
    nome: "Runway ML",
    funcao: "Plataforma que usa IA para edição de vídeo e imagem, oferecendo recursos como remoção de fundo e edição assistida por IA.",
    link: "https://runwayml.com/",
    tags: "Edição de Vídeo Remoção de Fundo IA Criativa Imagens e Vídeos"
  },
  {
    nome: "DeepL",
    funcao: "Serviço de tradução baseado em IA, reconhecido por sua precisão em várias línguas.",
    link: "https://www.deepl.com/",
    tags: "Tradução Línguas IA de Tradução Precisão Linguística"
  },
  {
    nome: "Jasper AI",
    funcao: "Gerador de conteúdo de IA focado em marketing e criação de textos de alta qualidade.",
    link: "https://www.jasper.ai/",
    tags: "Criação de Conteúdo Marketing Textos de Alta Qualidade Geração de Texto"
  },
  {
    nome: "Synthesia",
    funcao: "Ferramenta de criação de vídeos com avatares baseados em IA que falam o texto inserido pelo usuário.",
    link: "https://www.synthesia.io/",
    tags: "Criação de Vídeo Avatares IA de Vídeo Texto para Vídeo"
  },
  {
    nome: "Grammarly",
    funcao: "Assistente de escrita que ajuda a corrigir gramática, ortografia e estilo de textos.",
    link: "https://www.grammarly.com/",
    tags: "Correção Gramatical Estilo de Escrita Ortografia Assistente de Escrita"
  },
  {
    nome: "Replika",
    funcao: "Companhia de chatbot de IA que oferece conversas personalizadas para seus usuários.",
    link: "https://replika.com/",
    tags: "Chatbot Conversas Personalizadas Companhia Digital IA Conversacional"
  },
  {
      nome: "Bard",
      funcao: "Modelo de IA criado pelo Google para conversas naturais e assistências em diversos tópicos.",
      link: "https://bard.google.com/",
      tags: "Conversação Assistência Tópicos Variados IA Google"
  },
  {
      nome: "Lobe",
      funcao: "Ferramenta da Microsoft que permite criar modelos de IA sem a necessidade de código.",
      link: "https://www.lobe.ai/",
      tags: "Criação de IA Sem Código Microsoft Simplicidade"
  },
  {
      nome: "Socratic",
      funcao: "IA de apoio a estudantes, fornecendo explicações e respostas baseadas em fotos de questões.",
      link: "https://socratic.org/",
      tags: "Educação Estudantes Resolução de Questões IA para Estudo"
  },
  {
      nome: "QuillBot",
      funcao: "Ferramenta de reescrita de texto baseada em IA, auxiliando na melhoria de frases.",
      link: "https://quillbot.com/",
      tags: "Reescrita de Texto Melhoramento Frases IA de Escrita"
  },
  {
      nome: "Copy.ai",
      funcao: "Gerador de textos publicitários e de marketing automatizados com IA.",
      link: "https://www.copy.ai/",
      tags: "Marketing Texto Automático Criação de Conteúdo IA"
  },
  {
      nome: "Looka",
      funcao: "IA para criar logotipos e identidade visual para marcas.",
      link: "https://looka.com/",
      tags: "Design de Marca Criação de Logotipo Identidade Visual IA Criativa"
  },
  {
      nome: "Descript",
      funcao: "Editor de áudio e vídeo que transcreve automaticamente, permitindo edições textuais.",
      link: "https://www.descript.com/",
      tags: "Edição de Áudio Edição de Vídeo Transcrição IA"
  },
  {
      nome: "Krisp",
      funcao: "Aplicativo que utiliza IA para remover ruído de fundo em chamadas de áudio e vídeo.",
      link: "https://krisp.ai/",
      tags: "Remoção de Ruído Chamadas de Áudio Vídeo Conferências IA"
  },
  {
      nome: "Pictory",
      funcao: "Ferramenta de IA que transforma roteiros de texto em vídeos curtos de forma automatizada.",
      link: "https://pictory.ai/",
      tags: "Geração de Vídeo Automática IA para Vídeo Texto para Vídeo"
  },
  {
      nome: "Lumen5",
      funcao: "Plataforma que converte artigos de blog ou roteiros em vídeos envolventes com IA.",
      link: "https://www.lumen5.com/",
      tags: "Geração de Vídeos Blog para Vídeo IA Criativa"
  },
  {
      nome: "Replica Studios",
      funcao: "IA que gera vozes realistas para personagens em vídeo e animações.",
      link: "https://replicastudios.com/",
      tags: "Geração de Voz IA para Áudio Animação Voz Realista"
  },
  {
      nome: "CopySmith",
      funcao: "IA focada na criação de conteúdo para e-commerce e marketing.",
      link: "https://www.copysmith.ai/",
      tags: "E-commerce Marketing Criação de Conteúdo IA"
  },
  {
      nome: "Fotor",
      funcao: "Editor de fotos baseado em IA que permite ajustes e melhorias automáticas.",
      link: "https://www.fotor.com/",
      tags: "Edição de Fotos IA Fotografia Melhoria Automática"
  },
  {
      nome: "Beautiful.ai",
      funcao: "Plataforma para criação de apresentações automatizadas e elegantes com IA.",
      link: "https://www.beautiful.ai/",
      tags: "Criação de Apresentações Design Automático IA"
  },
  {
      nome: "Fireflies",
      funcao: "Assistente de IA para reuniões, grava e transcreve conversas automaticamente.",
      link: "https://fireflies.ai/",
      tags: "Reuniões Transcrição Gravação Assistente IA"
  },
  {
      nome: "Rasa",
      funcao: "Framework de código aberto para criar chatbots e assistentes virtuais avançados.",
      link: "https://rasa.com/",
      tags: "Chatbot Assistente Virtual Código Aberto IA Conversacional"
  },
  {
      nome: "Tome",
      funcao: "IA que cria apresentações interativas a partir de inputs textuais.",
      link: "https://tome.app/",
      tags: "Apresentações Interativas Texto para Slides IA para Apresentações"
  },
  {
      nome: "Heyday",
      funcao: "Assistente de IA que organiza automaticamente informações relevantes ao usuário durante a navegação.",
      link: "https://heyday.xyz/",
      tags: "Assistente de Navegação Organização de Informações IA para Produtividade"
  },
  {
      nome: "Writesonic",
      funcao: "Gerador de texto que ajuda a criar conteúdo para blogs, anúncios e redes sociais com IA.",
      link: "https://writesonic.com/",
      tags: "Criação de Texto Blogs Redes Sociais IA de Escrita"
  },
  {
      nome: "Designify",
      funcao: "Editor de imagens automático que remove o fundo e melhora a qualidade das fotos.",
      link: "https://designify.com/",
      tags: "Remoção de Fundo Edição de Imagem IA para Design"
  },
  {
      nome: "Clarifai",
      funcao: "Plataforma de IA que analisa imagens e vídeos para identificar objetos e cenas.",
      link: "https://www.clarifai.com/",
      tags: "Análise de Imagem Reconhecimento de Objetos IA Visual"
  },
  {
      nome: "Zoho Zia",
      funcao: "Assistente de IA integrada ao ecossistema Zoho que ajuda na análise de dados e otimização de processos.",
      link: "https://www.zoho.com/zia.html",
      tags: "Análise de Dados Assistente de Processos IA Empresarial"
  },
  {
      nome: "Timely",
      funcao: "Aplicativo de IA que rastreia automaticamente o tempo gasto em atividades para melhor gestão de produtividade.",
      link: "https://timelyapp.com/",
      tags: "Rastreamento de Tempo Gestão de Produtividade IA para Trabalho"
  },
  {
      nome: "Aiva",
      funcao: "IA que compõe música original, sendo utilizada para trilhas sonoras de filmes e games.",
      link: "https://www.aiva.ai/",
      tags: "Composição Musical IA para Música Trilhas Sonoras"
  },
  {
      nome: "DeepMind AlphaFold",
      funcao: "IA da DeepMind que previu a estrutura de proteínas, revolucionando a biologia molecular.",
      link: "https://www.deepmind.com/research/case-studies/alphafold",
      tags: "Biologia Molecular Previsão de Proteínas Pesquisa Científica IA"
  },
  {
      nome: "Patterned.ai",
      funcao: "Gera padrões e texturas visuais personalizadas com base em descrições.",
      link: "https://www.patterned.ai/",
      tags: "Geração de Padrões Design Texturas IA Criativa"
  },
  {
      nome: "Wordtune",
      funcao: "Ferramenta de escrita que ajuda a reformular e melhorar a clareza e estilo de frases.",
      link: "https://www.wordtune.com/",
      tags: "Reformulação de Texto Clareza Estilo IA de Escrita"
  },
  {
      nome: "Murphy AI",
      funcao: "Chatbot que responde a perguntas hipotéticas e baseadas em cenários.",
      link: "https://www.murphy.ai/",
      tags: "Chatbot Cenários Hipotéticos Perguntas IA Conversacional"
  },
  {
      nome: "DeepDream",
      funcao: "Ferramenta de IA que transforma imagens aplicando efeitos artísticos psicodélicos.",
      link: "https://deepdreamgenerator.com/",
      tags: "Efeitos Artísticos Imagens Psicodélicas IA Criativa"
  },
  {
      nome: "Auphonic",
      funcao: "Plataforma de IA para pós-produção de áudio, melhorando a qualidade de som automaticamente.",
      link: "https://auphonic.com/",
      tags: "Áudio Melhoramento Automático Pós-Produção IA para Áudio"
  }
  ];  