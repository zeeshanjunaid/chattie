import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-gray-50 flex justify-center items-center">
      {children}
    </div>
  );
}
