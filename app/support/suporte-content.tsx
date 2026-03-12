import * as T from "@/components/typography";

export default function SuporteContent() {
  return (
    <>
      <T.HR />

      <T.P>
        Este canal destina-se ao registro de problemas técnicos, dúvidas
        operacionais e solicitações relacionadas ao uso.
      </T.P>

      <T.HR />

      <T.H2>Quando acionar o suporte</T.H2>

      <T.P>Utilize o suporte para:</T.P>
      <T.UL>
        <T.LI>Erros ou falhas de funcionamento</T.LI>
        <T.LI>Dúvidas sobre uso de funcionalidades</T.LI>
        <T.LI>Problemas com dados ou visualizações</T.LI>
        <T.LI>Relato de comportamento inesperado</T.LI>
      </T.UL>

      <T.HR />

      <T.H2>Como registrar uma solicitação</T.H2>

      <T.P>Ao entrar em contato, informe preferencialmente:</T.P>
      <T.UL>
        <T.LI>Descrição clara do problema</T.LI>
        <T.LI>Passos para reproduzir (se aplicável)</T.LI>
        <T.LI>Área afetada (Funcionalidade / Dados / Infraestrutura)</T.LI>
        <T.LI>Ambiente (navegador, dispositivo, versão)</T.LI>
        <T.LI>Evidências (prints, logs, links)</T.LI>
      </T.UL>

      <T.HR />

      <T.H2>Canal de contato</T.H2>

      <T.P>
        Email: suporte@exemplo.com
        <T.BR />
        Ou: link para formulário / issue tracker
      </T.P>

      <T.HR />
    </>
  );
}
