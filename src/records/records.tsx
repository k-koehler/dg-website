import { Divider } from "antd";
import { useMemo } from "react";
import { randomWinterface } from "../helpers";
import RecordTable, { RecordTableWinterface } from "./record-table";

enum Theme {
  Overall = "Overall",
  Frozen = "Frozen",
  Ab1 = "Abandoned (1)",
  Furnished = "Furnished",
  Ab2 = "Abandoned (2)",
  Occult = "Occult",
  Warped = "Warped",
}

export default function Records() {
  const data = Object.values(Theme)
    .filter((theme) => typeof theme === "string")
    .map((theme) => ({
      theme,
      winterfaces: new Array(5).fill(0).map(() => randomWinterface(5)),
    }));
  const transformedData: {
    theme: Theme;
    winterfaces: RecordTableWinterface[];
  }[] = useMemo(
    () =>
      data.map(({ theme, winterfaces }) => ({
        theme,
        winterfaces: winterfaces
          .sort(({ timeInSeconds: a }, { timeInSeconds: b }) => a - b)
          .map(({ timeInSeconds, players }, i) => ({
            rank: i + 1,
            time: new Date(timeInSeconds * 1000)
              .toISOString()
              .substring(14, 19),
            ...players.reduce(
              (acc, { playerNumber, user: { rsn } }) => ({
                ...acc,
                [`player${playerNumber}`]: rsn,
              }),
              {} as { player1: string }
            ),
          })),
      })),
    [data]
  );
  return (
    <>
      {transformedData.map(({ theme, winterfaces }) => (
        <div>
          <div>
            <strong>{theme}</strong>
          </div>
          <div>
            <RecordTable datasource={winterfaces} />
          </div>
          <Divider />
        </div>
      ))}
    </>
  );
}
