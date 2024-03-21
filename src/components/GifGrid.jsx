import { GifItem } from "./GifItem"

export const GifGrid = ({category}) => {
  return (
    <>
      <h3>{category}</h3>
      <div>
        {
          images.map((image) => (
            <GifItem key={image.id}
            {...image}
            />
          ))
        }
      </div>
    </>
  )
}
