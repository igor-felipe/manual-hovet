import * as T from "@/components/typography";

export default function CronogramaContent() {
  return (
    <>
      <T.HR />
      <T.P>
        Documento de referência para funcionalidades planejadas e melhorias
        previstas do projeto.
      </T.P>

      <T.HR />

      <T.P>Ainda sem data prevista</T.P>

      <T.UL>
        <T.LI>
          <T.Strong>Registro de internações</T.Strong>.
        </T.LI>
        <T.LI>
          <T.Strong>Módulo de gestão de farmácia</T.Strong>.
        </T.LI>
        <T.LI>
          <T.Strong>Modulo de agendamento</T.Strong>.
        </T.LI>
        <T.LI>
          <T.Strong>Ponto eletrônico</T.Strong>.
        </T.LI>
      </T.UL>
    </>
  );
}
