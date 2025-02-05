// import { color } from "d3";

const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export const initialNodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: (
        <div className="flex gap-3 justify-between items-center p-.5">
          <div className="bg-white p-1 rounded-md shadow-md">
            <img className="w-5 h-5" src="/WebScrapingPreview.svg" alt="" />
          </div>
          <p className="font-medium text-[#AB5200] text-xs">Scrape Website</p>
        </div>
      ),
    },
    position: { x: 280, y: 40 },
    extent: [
      [80, 40],
      [250, 50],
    ],
    style: {
      width: 'auto',
      height: 'auto',
      backgroundColor: "#FFE9CC",
      border: "3px solid #fff",
      borderRadius: "12px",
      color: "#333",
      padding: "10px",
      // textAlign: 'center',
    },
  },
  {
    id: "2",
    data: {
      label: (
        <div className="flex gap-3 justify-between items-center">
          <div className="bg-white p-1 rounded-md shadow-md">
            <img className="w-5 h-5" src="/OpenAIPreview.svg" alt="" />
          </div>
          <p className="font-bold text-[#6552AD]">Ask AI</p>
        </div>
      ),
    },
    position: { x: 5, y: 120 },
    extent: [
      [5, 110],
      [15, 120],
    ],
    style: {
      width: 'auto',
      height: 'auto',
      backgroundColor: "#EFEBFD",
      border: "3px solid #fff",
      borderRadius: "12px",
      color: "#333",
      padding: "10px",
      // textAlign: 'center',
    },
  },
  {
    id: "2a",
    data: {
      label: (
        <div className="flex gap-3 justify-between items-center">
          <div className="bg-white p-1 rounded-md shadow-md">
            <img className="w-5 h-5" src="/gsheets.webp" alt="" />
          </div>
          <p className="font-bold text-[#12855B]">Write to Google Sheet</p>
        </div>
      ),
    },
    position: { x: 220, y: 180 },
    extent: [
      [220, 180],
      [250, 195],
    ],
    style: {
      width: "auto",
      height: 'auto',
      backgroundColor: "#DAF4E8",
      border: "3px solid #fff",
      borderRadius: "12px",
      color: "#333",
      padding: "10px",
      // textAlign: 'center',
    },
  },
];

export const initialEdges = [
  {
    id: "e12",
    source: "1",
    target: "2",
    type: edgeType,
    animated: true,
    style: { strokeWidth: 2.5 },
  },

  {
    id: "e22a",
    source: "2",
    target: "2a",
    type: edgeType,
    animated: true,
    style: { strokeWidth: 2.5 },
  },
];
