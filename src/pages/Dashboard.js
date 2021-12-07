import React from "react";
import cardblack from "../assets/Front - Black.png"

import style from './styles/Dashboard.module.css';

import Budget from "./Budget";


// DASHBOARD
export default function Dashboard() {
  return (
    <>
      <main className={style.mainDash}>
        <div className={style.dashboard}>
          <h2>Welcome to <span className={style.banknameStyling}>BANK OF NEW MAHARLIKA</span></h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore esse quasi facere ratione impedit consequuntur iste tenetur officia cum ipsum. Accusamus, quibusdam provident voluptates natus velit fugit vero minus, praesentium eaque mollitia officiis delectus quia amet vel, obcaecati veritatis sunt laborum explicabo. Reiciendis recusandae, officia animi, natus accusantium et cumque quod perferendis veniam adipisci velit reprehenderit veritatis, ipsa id magni? Nulla id quis recusandae ea facere temporibus suscipit rerum quibusdam error, eveniet distinctio earum voluptatibus aut beatae! Fugit sed quam suscipit deserunt minus hic recusandae et tenetur sit libero corporis quisquam alias quaerat voluptatem nulla nostrum mollitia, cumque amet placeat?</p>
        </div>
        <div className={style.dashboard2}>
          <img className={style.cardblack} src={cardblack} alt="bnm" />
        </div>
      </main>
      <Budget />
    </>
  );
}