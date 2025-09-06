"use client";
import Converter from "@/components/Converter";
import { converters } from "@/data/converters";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-12">
        All-in-One File Converter
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {converters.map((c) => (
          <Converter key={c.endpoint} title={c.title} endpoint={c.endpoint} accept={c.accept} />
        ))}
      </div>
    </div>
  );
}
