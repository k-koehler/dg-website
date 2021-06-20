import { Winterface } from "./types";

// TODO: REMOVE
export function randomWinterface(numPlayers: number): Winterface {
  console.log(numPlayers);
  const pool = [
    "Fine by me",
    "Q p",
    "L2ggs",
    "Eminam",
    "Ruste200",
    "Dreadnaut",
    "Skrumpf",
    "BlazyDays",
    "Trout 43",
    "El Bomb",
    "Carlos DG",
    "Cant be fkd",
    "Tranquilty1",
    "Scapeprof",
    "Degana",
    "Warfare52",
    "BardockObama",
    "Prisoner",
    "Lourens",
    "Levi is 69",
    "Thym",
    "Brlicluk",
    "Sniffling",
    "Argn",
    "Clubsrule",
    "Ayl",
    "Snowmister",
    "Fee",
    "Occ",
    "Butterfree",
    "Dat James",
    "Pgt",
    "Frits",
    "The Mage Utd",
    "Repot",
    "nu11",
    "Minesweeper",
    "P U P",
    "Mixmasterbob",
    "Why",
    "Untimed",
    "Brush",
    "Rixa",
    "Kui",
    "Joris",
    "Miles",
    "Satvik",
    "Pierce",
    "RickSH69",
    "Fiery001",
    "cl0wt",
    "iNacho",
    "Bao",
    "Maxguild",
    "Ack Bar",
    "Davicii",
  ];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return {
    timeInSeconds: Math.floor(Math.random() * 500 + 100),
    players: pool
      .slice(0, numPlayers)
      .map((rsn, i) => ({ user: { rsn }, playerNumber: i + 1 })),
  };
}
