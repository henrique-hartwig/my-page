type StageProps = {
  name: string
  title: string
  institute: string
  tags: Array<string>
}

export const Stage = ({ name, title, institute, tags }: StageProps) => {
  return (
    <div>
      <div>{name}</div>
      <div>{title}</div>
      <div>{institute}</div>
      <div>
        TAGS:
        {tags.map((tag) => (
          <strong>{tag}</strong>
        ))}
      </div>
    </div>
  )
}
