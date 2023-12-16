"use client";

import { useEffect, useState } from "react";
import Input from "@/components/Input";
import { Dimensions } from "@/types/Dimensions";

interface DimensionsFormProps {
  onSubmit: (dimensions: Dimensions) => void;
}

const DimensionsForm = ({ onSubmit }: DimensionsFormProps) => {
  const [length, setLength] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");

  const overlap: number = 2; // cm

  useEffect(() => {
    onSubmit({
      length: Number(length),
      width: Number(width),
      height: Number(height)
    });
  }, [length, width, height]);

  return (
    <div className="flex flex-col space-y-3">
      <Input label="Length (cm)" value={length} onChange={setLength} />
      <Input label="Width (cm)" value={width} onChange={setWidth} />
      <Input label="Height (cm)" value={height} onChange={setHeight} />
    </div>
  );
};

export default DimensionsForm;
