import React, { useState, useCallback } from "react";
import {
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
  Handle,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const CustomNode = ({ data }) => {
  const [name, setName] = useState(data?.name || "");
  const [roll, setRoll] = useState(data?.roll || "");

  return (
    <div className="border p-2 rounded bg-white shadow">
      <Handle
        type="target"
        position="top"
        className="w-10 h-10 bg-blue-500 rounded-full"
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-1 w-full"
      />
      <input
        type="text"
        placeholder="Roll"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
        className="border p-1 w-full mt-1"
      />
      <Handle
        type="source"
        position="bottom"
        className="w-10 h-10 bg-red-500 rounded-full"
      />
    </div>
  );
};

const nodeTypes = { custom: CustomNode };

const FlowComponent = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: "1",
      type: "custom",
      position: { x: 100, y: 100 },
      data: { name: "", roll: "" },style: { strokeWidth: 2, stroke: "black" }
    },
  ]);

  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const addNode = useCallback(() => {
    const newNode = {
      id: `${nodes.length + 1}`,
      type: "custom",
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { name: "", roll: "" },
    };
    setNodes((nds) => [...nds, newNode]);
  }, [nodes, setNodes]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({...params,style: { strokeWidth: 3, stroke: "black" }}, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-[800px]">
      <button
        onClick={addNode}
        className="bg-slate-600 rounded-3xl px-4 text-white p-2  mb-2 absolute top-5 left-5 z-[9999]"
      >
        Add Node
      </button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowComponent;
