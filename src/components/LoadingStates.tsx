import React from "react";

export const CardSkeleton = () => (
  <div className="bg-stone-100/80 backdrop-blur-sm rounded-2xl border border-stone-300 p-6 animate-pulse">
    {/* Header skeleton */}
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 bg-stone-300 rounded-lg"></div>
      <div className="w-20 h-6 bg-stone-300 rounded-full"></div>
    </div>

    {/* Title skeleton */}
    <div className="h-6 bg-stone-300 rounded mb-3 w-3/4"></div>

    {/* Description skeleton */}
    <div className="space-y-2 mb-4">
      <div className="h-3 bg-stone-300 rounded w-full"></div>
      <div className="h-3 bg-stone-300 rounded w-5/6"></div>
      <div className="h-3 bg-stone-300 rounded w-4/5"></div>
    </div>

    {/* Tech tags skeleton */}
    <div className="flex flex-wrap gap-2 mb-4">
      <div className="w-16 h-6 bg-stone-300 rounded-md"></div>
      <div className="w-20 h-6 bg-stone-300 rounded-md"></div>
      <div className="w-18 h-6 bg-stone-300 rounded-md"></div>
    </div>

    {/* Buttons skeleton */}
    <div className="flex gap-3">
      <div className="flex-1 h-10 bg-stone-300 rounded-lg"></div>
      <div className="flex-1 h-10 bg-stone-300 rounded-lg"></div>
    </div>
  </div>
);

export const TechSkeleton = () => (
  <div className="bg-stone-100/80 backdrop-blur-sm p-6 rounded-xl border border-stone-300 animate-pulse">
    {/* Icon skeleton */}
    <div className="w-12 h-12 bg-stone-300 rounded-lg mb-3 mx-auto"></div>

    {/* Name skeleton */}
    <div className="h-5 bg-stone-300 rounded mb-1 w-3/4 mx-auto"></div>

    {/* Category skeleton */}
    <div className="h-3 bg-stone-300 rounded mb-2 w-1/2 mx-auto"></div>

    {/* Progress bar skeleton */}
    <div className="w-full bg-stone-300 rounded-full h-2 mb-1"></div>
    <div className="h-3 bg-stone-300 rounded w-8 mx-auto"></div>
  </div>
);

export const TextSkeleton = ({ lines = 3, className = "" }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={`h-4 bg-stone-300 rounded animate-pulse ${
          i === lines - 1 ? "w-3/4" : "w-full"
        }`}
      ></div>
    ))}
  </div>
);

export const LoadingSpinner = ({
  size = "md",
}: {
  size?: "sm" | "md" | "lg" | "xl";
}) => {
  const sizeClasses: Record<string, string> = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <div className={`${sizeClasses[size]} relative`}>
      <div className="absolute inset-0 border-4 border-stone-300 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-amber-600 rounded-full border-t-transparent animate-spin"></div>
    </div>
  );
};

export const ShimmerEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="shimmer-wrapper">
      <div className="shimmer"></div>
    </div>
  </div>
);
