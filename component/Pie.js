import { ResponsivePie } from "@nivo/pie";
import { _tr } from "../services/translate"

export const data = [
  {
    id: "Private sale",
    label: "Private sale",
    value: 4.8,
    color: "#6414f9",
  },
  {
    id: "Presale",
    label: "Presale",
    value: 27.78,
    color: "#7438be",
  },
  {
    id: "Liquidity Pool",
    label: "Liquidity Pool",
    value: 30.4,
    color: "#00a6f9",
  },
  {
    id: "Staking Pool",
    label: "Staking Pool",
    value: 10,
    color: "#234856",
  },
  {
    id: "Development",
    label: "Development",
    value: 7.52,
    color: "#A938D3",
  },
  {
    id: "Marketing",
    label: "Marketing",
    value: 8.5,
    color: "#ABCDEF",
  },
  {
    id: "Airdrops",
    label: "Airdrops",
    value: 1,
    color: "#78B32A",
  },
  {
    id: "Team",
    label: "Team",
    value: 10,
    color: "#AAA123",
  },
];


const MyResponsivePie = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 45, right: 90, bottom: 45, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={15}
        activeOuterRadiusOffset={25}
        colors={["#6414f9","#7438be","#00a6f9","#234856","#A938D3","#ABCDEF","#78B32A","#AAA123"]}
        borderWidth={2}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.3'
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#FFFFFF"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        motionConfig="wobbly"
    />
);

export default MyResponsivePie;