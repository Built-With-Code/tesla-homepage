/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import React from 'react'

import Scroll from '../assets/scroll.svg';

const sectionStyles = css`
width: 100vw;
height: 100vh;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

scroll-snap-align: start;

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
}

.header {
  padding-top: calc(16vh + 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;

  h1 {
    width: fit-content;
    font-size: 2.5rem;
    font-weight: 500;
    padding: 4px 0;
    color: rgba(57, 60, 65, 1);
  }
  p {
    width: fit-content;
    font-size: 0.875rem;
    color: rgba(92, 94, 98, 1);
  }
}

.btn-group {
  display: flex;
  margin-bottom: 14vh;

  button {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 500;
    width: 256px;
    height: 40px;
    padding: 5px 40px;
    margin: 0 8px;
    border-radius: 100px;
    border: none;
    outline: none;
    cursor: pointer;

    &.left {
      background: rgba(23, 26, 32, 0.8);
      color: #fff;
    }

    &.right {
      background: rgba(255, 255, 255, 0.5);
      color: #000;
    }
  }
}

.scroll-indicator {
  position: absolute;
  width: 24px;
  bottom: 5vh;
  animation: float 1.5s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translate(-50%, -40%)
  }
  30% {
    transform: translate(-50%, -20%)
  }
  60% {
    transform: translate(-50%, -50%)
  }
  80% {
    transform: translate(-50%, -40%)
  }
  100% {
    transform: translate(-50%, -40%)
  }
}

`

const Section = ({ title, description, image, leftButton, rightButton, scrollIndicator }) => {
  return (
    <section css={sectionStyles}>
      <div className="header">
        <h1>{title}</h1>
        {description ? (
          <p>{description}</p>
        ) : (
            <p>Order Online for Touchless Delivery</p>
          )}
      </div>
      <div className="btn-group">
        {leftButton && (
          <button class="left">{leftButton}</button>
        )}
        {rightButton && (
          <button class="right">{rightButton}</button>
        )}
      </div>
      <img src={image} alt="" className="bg-image" />
      {scrollIndicator && (
        <img src={Scroll} alt="Scroll Down" className="scroll-indicator" />
      )}
    </section>
  )
}

export default Section
