"use client";

export default function PrintButton() {
  return (
    <button className="print-btn" onClick={() => window.print()} type="button">
      ↧ Save as PDF
    </button>
  );
}
