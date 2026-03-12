import * as T from "@/components/typography";

type ManualImageProps = {
  alt: string;
  src: string;
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
};

const ManualImage = ({
  alt,
  src,
  width = "100%",
  height = "auto",
  maxWidth = 960,
}: ManualImageProps) => (
  <T.IMG
    alt={alt}
    src={src}
    width={width}
    height={height}
    maxWidth={maxWidth}
    className="my-6 rounded-lg border border-gray-300 bg-white p-1 shadow-[0_0_20px_5px_rgba(0,0,0,0.1)]"
  />
);

export default function ManualPostContent() {
  return (
    <>
      <T.HR />

      <T.H2>1. Introdução</T.H2>

      <T.P>
        Este <T.Strong>manual</T.Strong> tem como objetivo orientar os usuários na{" "}
        <T.Strong>configuração inicial</T.Strong>, <T.Strong>administração</T.Strong> e{" "}
        <T.Strong>utilização completa</T.Strong> do sistema de gestão do Hospital
        Veterinário da UFRPE. Aqui você encontrará instruções detalhadas para
        cadastro, controle de acessos, registro de pacientes, consultas e
        requisições.
      </T.P>

      <T.H2>2. Configuração Inicial e Administração do Sistema</T.H2>

      <T.P>
        A etapa inicial garante que as permissões e funções estejam corretamente
        definidas para que o sistema seja utilizado com segurança e organização.
      </T.P>

      <T.H3>2.1 Criação e Cadastro de Cargos</T.H3>

      <T.P>
        Antes de cadastrar colaboradores (usuários), é necessário criar os cargos
        que representam as funções dos colaboradores dentro do hospital.
      </T.P>

      <T.UL>
        <T.LI>Acesse a <T.Strong>tela inicial</T.Strong>.</T.LI>
        <T.LI>Selecione <T.Strong>Cargos</T.Strong>.</T.LI>
      </T.UL>

      <ManualImage alt="Tela de cargos" src="/manual/image1.png" />

      <T.UL>
        <T.LI>Cadastre cada cargo (ex.: Médico Veterinário, etc.).</T.LI>
        <T.LI>Insira as informações de nome do cargo.</T.LI>
        <T.LI>
          É possível especificar uma permissão para cada recurso do sistema.
        </T.LI>
        <T.LI>
          Selecione a área médica (é possível inserir mais de uma área).
        </T.LI>
      </T.UL>

      <ManualImage alt="Cadastro de cargo" src="/manual/image2.png" />

      <T.H3>2.2 Funções do Cargo de Admin (Administrador do sistema)</T.H3>

      <T.P>
        Um colaborador do hospital é designado pela direção do hospital para o
        cargo de Admin. O administrador possui <T.Strong>responsabilidades essenciais</T.Strong>:
      </T.P>

      <T.UL>
        <T.LI>Cadastro de usuários.</T.LI>
        <T.LI>Atribuição e edição dos cargos de cada usuário.</T.LI>
        <T.LI>
          Controle de permissões: cada cargo determina o que o usuário pode acessar
          e executar no sistema.
        </T.LI>
      </T.UL>

      <T.H3>2.3 Cadastro de Colaboradores (Usuários)</T.H3>

      <T.P>Para cadastrar um novo colaborador:</T.P>

      <T.OL>
        <T.LI>Acesse a <T.Strong>tela inicial</T.Strong>.</T.LI>
        <T.LI>Clique no ícone de <T.Strong>Colaboradores</T.Strong>.</T.LI>
        <T.LI>Preencha os dados obrigatórios.</T.LI>
        <T.LI>Atribua um cargo ao usuário.</T.LI>
        <T.LI>
          CRMV – é possível informar <T.Strong>ZP</T.Strong> (zootecnista) ou{" "}
          <T.Strong>VP</T.Strong> (veterinário).
        </T.LI>
        <T.LI>É possível também inserir a assinatura digital.</T.LI>
        <T.LI>Salve o cadastro.</T.LI>
      </T.OL>

      <ManualImage alt="Cadastro de colaboradores" src="/manual/image4.png" />

      <T.HR />

      <T.H2>3. Fluxo de Cadastro de Pacientes e Pré-requisitos</T.H2>

      <T.P>
        Para registrar consultas, agendamentos ou animais, siga a ordem correta de
        cadastro.
      </T.P>

      <T.H3>3.1 Cadastro do Tutor (Pré-requisito)</T.H3>

      <T.P>Antes de registrar animais ou consultas:</T.P>

      <T.UL>
        <T.LI>Vá até <T.Strong>a tela incial</T.Strong>.</T.LI>
        <T.LI>Clique em <T.Strong>Tutores</T.Strong>.</T.LI>
        <T.LI>
          Preencha os dados básicos (nome, CPF, e-mail, telefone e endereço) e{" "}
          <T.Strong>salve</T.Strong>.
        </T.LI>
      </T.UL>

      <ManualImage alt="Cadastro de tutor" src="/manual/image6.png" />

      <T.H3>3.2 Pesquisa de Tutor</T.H3>

      <T.P>Antes de cadastrar um novo tutor, pesquise para evitar duplicidades:</T.P>

      <T.UL>
        <T.LI>Utilize o <T.Strong>campo de busca</T.Strong>.</T.LI>
        <T.LI>
          A pesquisa pode ser feita por nome, CPF, telefone, entre outros.
        </T.LI>
      </T.UL>

      <ManualImage alt="Pesquisa de tutor" src="/manual/image8.png" />

      <T.H3>3.3 Cadastro de Animais</T.H3>

      <T.P>Após o tutor estar cadastrado:</T.P>

      <T.OL>
        <T.LI>
          Essa tela lista todos os animais cadastrados que são vinculados ao tutor.
          Clique no botão para adicionar um <T.Strong>novo animal</T.Strong> para esse tutor.
        </T.LI>
      </T.OL>

      <ManualImage alt="Lista de animais" src="/manual/image10.png" />

      <T.OL startNumber={2}>
        <T.LI>
          Informe dados como nome, espécie, raça, esterilizado (castrado), sexo,
          data de nascimento.
        </T.LI>
        <T.LI>
          <T.Strong>Salve</T.Strong> o registro.
        </T.LI>
      </T.OL>

      <T.HR />

      <T.H2>4. Registro e Gestão de Consultas</T.H2>

      <T.P>
        O sistema organiza o histórico e permite registrar novas consultas de forma
        prática.
      </T.P>

      <T.H3>4.1 Acesso ao Histórico de Consultas</T.H3>

      <T.UL>
        <T.LI>Acesse <T.Strong>pacientes</T.Strong>.</T.LI>
        <T.LI>Selecione o <T.Strong>animal desejado</T.Strong>.</T.LI>
        <T.LI>
          O sistema exibirá todo o histórico de consultas, procedimentos ou
          requisições realizadas.
        </T.LI>
      </T.UL>

      <ManualImage alt="Histórico de consultas" src="/manual/image12.png" />

      <T.H3>4.2 Criação de Nova Consulta</T.H3>

      <T.P>Para iniciar uma nova consulta:</T.P>

      <T.OL>
        <T.LI>Entre no perfil do paciente.</T.LI>
        <T.LI>Clique em <T.Strong>Registrar</T.Strong>.</T.LI>
        <T.LI>
          Em seguida em <T.Strong>Registrar Consulta.</T.Strong>
        </T.LI>
      </T.OL>

      <ManualImage alt="Nova consulta" src="/manual/image14.png" />

      <T.H3>4.3 Registro da Consulta</T.H3>

      <T.P>Durante o preenchimento:</T.P>

      <T.UL>
        <T.LI>
          Preencha todos os <T.Strong>campos obrigatórios</T.Strong>, como Área, tipo
          de consulta, peso do animal e caso tenha sido uma consulta externa (fora
          do hospital), insira a distância.
        </T.LI>
        <T.LI>
          É possível incluir ou diagnóstico temporário e/ou definitivo da consulta,
          mas é obrigatório inserir ao menos um.
        </T.LI>
        <T.LI>Para inserir as requisições, selecione o ícone.</T.LI>
      </T.UL>

      <ManualImage alt="Registro da consulta" src="/manual/image16.png" />

      <T.H3>4.4 Anamnese e Exame Físico</T.H3>

      <T.UL>
        <T.LI>O sistema permite inserir <T.Strong>textos personalizados</T.Strong>.</T.LI>
        <T.LI>
          Modelos de anamnese e exame físico podem ser utilizados para agilizar o
          processo – veja na secção “Modelos de texto”.
        </T.LI>
      </T.UL>

      <ManualImage alt="Anamnese e exame físico" src="/manual/image18.png" />

      <T.HR />

      <T.H2>5. Requisições e Configuração de Itens</T.H2>

      <T.P>
        As requisições estão integradas ao registro da consulta e incluem exames,
        procedimentos e solicitações internas.
      </T.P>

      <T.H3>5.1 Inclusão de Nova Requisição (Somente Admin)</T.H3>

      <T.P>Se algum item não existir no sistema:</T.P>

      <T.OL>
        <T.LI>
          O administrador deve acessar <T.Strong>Configurações</T.Strong>.
        </T.LI>
        <T.LI>
          Selecionar <T.Strong>Tipo</T.Strong> (ex.: Anestesiologia).
        </T.LI>
        <T.LI>Cadastrar o novo item.</T.LI>
      </T.OL>

      <ManualImage alt="Configurações de requisição" src="/manual/image20.png" />

      <T.UL>
        <T.LI>
          O sistema exibirá todas as requisições disponíveis daquela área.
        </T.LI>
        <T.LI>Novas requisições podem ser adicionadas conforme necessário.</T.LI>
      </T.UL>

      <T.H3>5.2 Inclusão de Novas Áreas</T.H3>

      <T.P>Caso surja uma nova especialidade ou setor:</T.P>

      <T.OL>
        <T.LI>
          Acesse <T.Strong>Configurações</T.Strong>.
        </T.LI>
      </T.OL>

      <ManualImage alt="Configurações" src="/manual/image22.png" />

      <T.OL startNumber={2}>
        <T.LI>Selecione <T.Strong>Áreas</T.Strong>.</T.LI>
        <T.LI>Cadastre a nova área.</T.LI>
      </T.OL>

      <T.HR />

      <T.H2>6. Modelos de Texto</T.H2>

      <T.H3>6.1 O que são Modelos de texto?</T.H3>

      <T.P>
        Os <T.Strong>modelos de texto</T.Strong> permitem agilizar o preenchimento de
        consultas, procedimentos, documentos, receituários e requisições. Eles
        funcionam como textos pré-formatados onde o usuário pode inserir{" "}
        <T.Strong>tags automáticas</T.Strong>, que são preenchidas pelo sistema conforme
        os dados do paciente, tutor ou profissional.
      </T.P>

      <T.UL>
        <T.LI>Selecione <T.Strong>Modelos</T.Strong>.</T.LI>
      </T.UL>

      <ManualImage alt="Modelos de texto" src="/manual/image24.png" />

      <T.UL>
        <T.LI>Escolha o tipo de modelo desejado.</T.LI>
      </T.UL>

      <T.H3>6.2 Utilização de Tags Automáticas</T.H3>

      <T.P>
        Ao criar ou editar um modelo, é possível inserir <T.Strong>tags personalizadas</T.Strong>.
        Essas tags são substituídas automaticamente pelos dados reais quando o
        modelo é utilizado em uma consulta ou procedimento.
      </T.P>

      <T.P>
        As tags ajudam a <T.Strong>padronizar documentos</T.Strong> e <T.Strong>reduzir
          tempo de digitação</T.Strong>.
      </T.P>

      <T.P>Exemplos de tags disponíveis:</T.P>

      <ManualImage alt="Exemplos de tags" src="/manual/image26.png" />

      <T.P>Clique no ícone abaixo para criar:</T.P>

      <T.P>Em seguida, clique no ícone “Atualizar” para verificar o resultado:</T.P>

      <ManualImage alt="Atualizar modelo" src="/manual/image28.png" />
    </>
  );
}
