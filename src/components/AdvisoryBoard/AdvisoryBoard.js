import React, { useState } from "react"
import "./AdvisoryBoard.css"

const AdvisoryBoard = () => {
  return (
    <section className="advisory-board-wrapper" id="meet-our-advisory-panel">
      <div className="inner-content">
        <h2>Advisory Board</h2>
        <div className="advisory-board__grid">
          <div class="advisory-board-member">
            <div class="advisory-board-member__image">
              <img src="https://via.placeholder.com/150" />
            </div>
            <div class="advisory-board-member__name">Bob Ross</div>
            <div class="advisory-board-member__title">Happy Tree Designer</div>
          </div>

          <div class="advisory-board-member">
            <div class="advisory-board-member__image">
              <img src="https://via.placeholder.com/150" />
            </div>
            <div class="advisory-board-member__name">Bob Ross</div>
            <div class="advisory-board-member__title">Happy Tree Designer</div>
          </div>

          <div class="advisory-board-member">
            <div class="advisory-board-member__image">
              <img src="https://via.placeholder.com/150" />
            </div>
            <div class="advisory-board-member__name">Bob Ross</div>
            <div class="advisory-board-member__title">Happy Tree Designer</div>
          </div>

          <div class="advisory-board-member">
            <div class="advisory-board-member__image">
              <img src="https://via.placeholder.com/150" />
            </div>
            <div class="advisory-board-member__name">Bob Ross</div>
            <div class="advisory-board-member__title">Happy Tree Designer</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvisoryBoard