function customCard({title, description, price}) {
  return (
    <div>
        <div>{description}</div>
        <div>{title}</div>
        <div>{price}</div>
    </div>
  )
}

export default customCard;