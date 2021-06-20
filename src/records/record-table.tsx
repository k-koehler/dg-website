import { Table } from "antd";

export interface RecordTableWinterface {
  rank: number;
  time: string;
  player1: string;
  player2?: string;
  player3?: string;
  player4?: string;
  player5?: string;
}

interface Props {
  datasource: RecordTableWinterface[];
}

export default function RecordTable({ datasource }: Props) {
  return (
    <Table
      pagination={false}
      columns={[
        {
          key: "rank",
          dataIndex: "rank",
          title: "Rank",
        },
        {
          key: "time",
          dataIndex: "time",
          title: "Time",
        },
        {
          key: "player1",
          dataIndex: "player1",
          title: "Player 1",
        },
        {
          key: "player2",
          dataIndex: "player2",
          title: "Player 2",
        },
        {
          key: "player3",
          dataIndex: "player3",
          title: "Player 3",
        },
        {
          key: "player4",
          dataIndex: "player4",
          title: "Player 4",
        },
        {
          key: "player5",
          dataIndex: "player5",
          title: "Player 5",
        },
      ]}
      dataSource={datasource}
    />
  );
}
