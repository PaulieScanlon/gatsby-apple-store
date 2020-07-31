import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import Matter from 'matter-js'

import appleUk from './apple-sprite-uk.png'
import appleUs from './apple-sprite-us.png'

export const MatterWorld = ({ sizeProps, matterTrigger, storeCurrency }) => {
  const { width, height } = sizeProps || { width: 0, height: 0 }

  const boxRef = useRef(null)
  const canvasRef = useRef(null)

  const [matterScene, setMatterScene] = useState()

  useEffect(() => {
    let Engine = Matter.Engine
    let Render = Matter.Render
    let World = Matter.World
    let Bodies = Matter.Bodies

    let engine = Engine.create({})

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 500,
        height: 400,
        background: 'transparent',
        wireframes: false,
      },
    })

    World.add(engine.world, [
      Bodies.rectangle(350, 410, 300, 20, { isStatic: true }),
    ])

    Engine.run(engine)
    Render.run(render)

    setMatterScene(render)
  }, [])

  /*eslint-disable */
  useEffect(() => {
    let randomX = Math.floor(Math.random() * 270) + 170
    let randomY = Math.floor(Math.random() * 100) + 50
    let randomRotation = Math.floor(Math.random() * 0 + 45)
    if (matterScene) {
      Matter.World.add(
        matterScene.engine.world,
        Matter.Bodies.circle(randomX, randomY, 16, {
          restitution: 0.8,
          angle: randomRotation,
          render: {
            sprite: {
              texture: storeCurrency === '£' ? appleUk : appleUs,
              xScale: 0.35,
              yScale: 0.35,
            },
          },
        })
      )
    }
  }, [matterTrigger])
  /*eslint-enable */

  return (
    <Box
      ref={boxRef}
      sx={{
        position: 'absolute',
        overflow: 'hidden',
        width: width,
        height: height,
        zIndex: 'matterCanvas',
        canvas: {
          position: 'absolute',
          bottom: 0,
          right: 0,
        },
      }}
    >
      <canvas ref={canvasRef} />
    </Box>
  )
}

MatterWorld.propTypes = {
  /** The boundingRec props for the image */
  sizeProps: PropTypes.any,
  /** Arbitrary prop to trigger re-render */
  matterTrigger: PropTypes.bool,
  /** The store currency value */
  storeCurrency: PropTypes.string,
}