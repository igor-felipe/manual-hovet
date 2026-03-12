import * as T from "@/components/typography";

export default function ReleasesContent() {
  return (
    <>

      <T.HR />

      <T.P>
        <T.EM>Publicado em 18/02/2026</T.EM>
      </T.P>

      <T.H3>Novos Recursos</T.H3>

      <T.UL>
        <T.LI>
          <T.Strong>Tags de Imagem:</T.Strong> Adição de 10 tags (0 a 9) que são
          substituídas automaticamente por imagens em anexo, desde que os nomes
          dos arquivos correspondam às tags.
        </T.LI>
        <T.LI>
          <T.Strong>Visualizador de Imagens:</T.Strong> Agora, ao clicar em uma imagem
          anexada, ela será exibida e terá suporte a <T.Strong>zoom</T.Strong>.
        </T.LI>
        <T.LI>
          <T.Strong>Redimensionamento Automático configurável:</T.Strong> Para otimizar o
          armazenamento do sistema, agora as imagens em anexo são redimensionadas
          automaticamente no momento da seleção. Utilizando modelos é possível criar
          configurações específicas de Largura Máxima, Altura Máxima e Qualidade
          para cada tipo de exame de imagem.
        </T.LI>
      </T.UL>

      <T.H3>Mudanças</T.H3>

      <T.UL>
        <T.LI>
          <T.Strong>Fluxo de Salvamento:</T.Strong> Ao salvar cadastros (paciente,
          tutor, colaborador, consulta, etc.), o sistema <T.Strong>não redireciona</T.Strong>{" "}
          mais para a página anterior, mantendo o usuário na página atual.
        </T.LI>
      </T.UL>

      <T.H3>Correção de Bugs</T.H3>

      <T.UL>
        <T.LI>
          Corrigido o erro que exigia um novo login para que a assinatura
          atualizada ficasse disponível.
        </T.LI>
        <T.LI>
          Resolvida a falha onde imagens ocasionalmente não apareciam nos
          documentos impressos.
        </T.LI>
        <T.LI>Corrigido o erro que impedia <T.Strong>renomear</T.Strong> arquivos anexados.</T.LI>
        <T.LI>
          Resolvido o problema de sincronia onde anexos recém-enviados não
          apareciam imediatamente na lista.
        </T.LI>
      </T.UL>
    </>
  );
}
