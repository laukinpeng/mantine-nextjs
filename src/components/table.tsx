"use client";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

type Car = {
  make: string;
  model: string;
  price: number;
  electric: boolean;
};

ModuleRegistry.registerModules([AllCommunityModule]);

export default function SampleTable() {
  const [rowData] = useState<Car[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  const [colDefs] = useState<import("ag-grid-community").ColDef<Car>[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <AgGridReact<Car>
        rowData={rowData}
        columnDefs={colDefs}
      />
    </div>
  );
}
