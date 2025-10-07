'use client';
import React from "react";

interface Props {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | null;
  required?: boolean;
}

const TextInput = ({ id, label, type, value, onChange, error, required }: Props) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <label htmlFor={id}>
        {label} {required ? <span aria-hidden> *</span> : null}
      </label>

      <input 
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />

      {error && (
        <p>
          {error}
        </p>
      )}
    </div>
  )
}

export default TextInput;