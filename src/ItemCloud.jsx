import { useEffect, useState } from 'react'
import { TagCloud } from 'react-tagcloud'
import { getTrendingItems } from './items'

const alignments = ['center', 'flex-start', 'flex-end']

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const Cloud = ({ elements }) => {}

// custom renderer is function which has tag, computed font size and
// color as arguments, and returns react component which represents tag
const customRenderer = ({ objectID }, size, color) => {
  console.log('color', color)
  return (
    <span
      key={objectID}
      style={{
        width: `${size * 20}px`,
        height: `${size * 20}px`,
        border: `2px solid ${color}`,
        borderRadius: '50%',
        margin: '3px',
        padding: '3px',
        display: 'inline-block',
        color: 'white',
      }}
    ></span>
  )
}

export const ItemCloud = () => {
  const [trendingItems, setTrendingItems] = useState(null)
  useEffect(() => {
    getTrendingItems().then(setTrendingItems).catch(console.error)
  }, [])
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {trendingItems?.map(({ objectID, images, favouriteCount }) => {
        return (
          <div
            key={objectID}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: alignments[getRandomInt(0, alignments.length - 1)],
            }}
          >
            <div
              style={{
                width: `${favouriteCount * 3}px`,
                height: `${favouriteCount * 3}px`,
                border: `2px solid black`,
                borderRadius: '50%',
                margin: '3px',
                padding: '3px',
                display: 'inline-block',
                color: 'white',
              }}
            ></div>
          </div>
        )
      })}
    </div>
  )
}
