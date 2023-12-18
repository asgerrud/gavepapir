"use client";

import { useEffect, useState } from "react";
import Input from "@/components/Input";
import { Dimensions } from "@/types/Dimensions";

interface DimensionsFormProps {
  onSubmit: (dimensions: Dimensions) => void;
}

const Form = ({ onSubmit }: DimensionsFormProps) => {
  const [length, setLength] = useState<string>("10");
  const [width, setWidth] = useState<string>("10");
  const [height, setHeight] = useState<string>("10");

  useEffect(() => {
    onSubmit({
      length: Number(length),
      width: Number(width),
      height: Number(height)
    });
  }, [length, width, height]);

  return (
    <div className="flex flex-col space-y-4">
      <Input label="Length (cm)" value={length} onChange={setLength} />
      <Input label="Width (cm)" value={width} onChange={setWidth} />
      <Input label="Height (cm)" value={height} onChange={setHeight} />
    </div>
  );
};

export default Form;
