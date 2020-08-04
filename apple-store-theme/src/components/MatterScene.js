import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import Matter from 'matter-js'

import appleUk from './apple-sprite-uk.png'
import appleUs from './apple-sprite-us.png'

const STATIC_DENSITY = 15
const PARTICLE_SIZE = 16
const PARTICLE_BOUNCYNESS = 0.9

export const MatterScene = ({ particleTrigger, storeCurrency }) => {
  const boxRef = useRef(null)
  const canvasRef = useRef(null)

  const [constraints, setContraints] = useState()
  const [scene, setScene] = useState()

  const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect())
  }

  useEffect(() => {
    let Engine = Matter.Engine
    let Render = Matter.Render
    let World = Matter.World

    let engine = Engine.create({})

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        background: 'transparent',
        wireframes: false,
      },
    })

    const floor = Matter.Bodies.rectangle(0, 0, 0, STATIC_DENSITY, {
      isStatic: true,
      label: 'floor',
      render: {
        fillStyle: 'transparent',
      },
    })

    World.add(engine.world, [floor])

    Engine.run(engine)
    Render.run(render)

    setContraints(boxRef.current.getBoundingClientRect())
    setScene(render)

    window.addEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  /*eslint-disable */
  useEffect(() => {
    if (scene) {
      let { width, height } = constraints
      let randomX = Math.floor(Math.random() * -width) + width
      let randomRotation = Math.floor(Math.random() * 0 + 45)

      Matter.World.add(
        scene.engine.world,
        Matter.Bodies.circle(randomX, -PARTICLE_SIZE, PARTICLE_SIZE, {
          restitution: PARTICLE_BOUNCYNESS,
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
  }, [particleTrigger])
  /*eslint-enable */

  useEffect(() => {
    if (constraints) {
      let { width, height } = constraints

      // Dynamically update canvas and bounds
      scene.bounds.max.x = width
      scene.bounds.max.y = height
      scene.options.width = width
      scene.options.height = height
      scene.canvas.width = width
      scene.canvas.height = height

      // Dynamically update floor
      const floor = scene.engine.world.bodies[0]

      Matter.Body.setPosition(floor, {
        x: width / 2,
        y: height + STATIC_DENSITY / 2,
      })

      Matter.Body.setVertices(floor, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY },
      ])
    }
  }, [scene, constraints])

  return (
    <Box
      ref={boxRef}
      sx={{
        position: 'absolute',
        overflow: 'hidden',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 'matterCanvas',
      }}
    >
      <canvas ref={canvasRef} />
    </Box>
  )
}

MatterScene.propTypes = {
  /** Arbitrary prop to trigger re-render */
  particleTrigger: PropTypes.any,
  /** The store currency value */
  storeCurrency: PropTypes.string,
}
