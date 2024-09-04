import { Stage } from "./Education/Stage"

const Education = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div>Educação</div>

      <Stage
        name="Pós Graduação"
        title="Arquitetura de Soluções"
        institute="FIAP + Alura"
        tags={["DDD", "Docker"]}
      />

      <section>Graduação</section>
      <section>
        <header>Curso Técnico integrado ao Ensimo Médio</header>
        <body>Curso de Eletrônica</body>
      </section>
    </div>
  )
}

export default Education
