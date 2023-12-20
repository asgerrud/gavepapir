"use client";

import { useEffect, useState } from "react";
import Input from "@/components/Input";
import { Dimensions } from "@/types/Dimensions";

interface DimensionsFormProps {
  initialValues: Dimensions;
  onSubmit: (dimensions: Dimensions) => void;
}

const Form = ({ initialValues, onSubmit }: DimensionsFormProps) => {
  const [length, setLength] = useState<string>(`${initialValues.length}`);
  const [width, setWidth] = useState<string>(`${initialValues.width}`);
  const [height, setHeight] = useState<string>(`${initialValues.height}`);

  useEffect(() => {
    onSubmit({
      length: Number(length),
      width: Number(width),
      height: Number(height)
    });
  }, [length, width, height]);

  return (
    <div className="flex flex-col space-y-4 pb-10">
      <Input label="Length (cm)" value={length} onChange={setLength} />
      <Input label="Width (cm)" value={width} onChange={setWidth} />
      <Input label="Height (cm)" value={height} onChange={setHeight} />
    </div>
  );
};

export default Form;
