"use client";
import { useState } from "react";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import dynamic from 'next/dynamic';

const World = dynamic(() => import("@/components/ui/globe").then(mod => ({ default: mod.World })), {
  ssr: false,
});

export default function Page() {
  const [activeView, setActiveView] = useState<"map" | "globe">("map");

  const globeData = [
    { order: 1, startLat: 39.9042, startLng: 116.4074, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 2, startLat: 31.2304, startLng: 121.4737, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 3, startLat: 30.2741, startLng: 120.1551, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 4, startLat: 37.7749, startLng: -122.4194, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 5, startLat: 43.8256, startLng: 87.6168, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 6, startLat: 30.5728, startLng: 104.0668, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 7, startLat: 22.3193, startLng: 114.1694, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 8, startLat: 23.1291, startLng: 113.2644, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 9, startLat: 22.5431, startLng: 114.0579, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 10, startLat: 45.7420, startLng: 126.6610, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 11, startLat: 51.5074, startLng: -0.1278, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 12, startLat: 40.8183, startLng: 111.7652, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 13, startLat: 38.4872, startLng: 106.2309, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 14, startLat: 20.0174, startLng: 110.3492, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 15, startLat: 22.5176, startLng: 113.3925, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 16, startLat: 28.2282, startLng: 112.9388, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 17, startLat: 32.0603, startLng: 118.7969, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 18, startLat: 31.2989, startLng: 120.5853, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 19, startLat: 36.2048, startLng: 138.2529, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 20, startLat: 35.9078, startLng: 127.7669, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 21, startLat: 26.8206, startLng: 30.8025, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 22, startLat: 25.5969, startLng: 100.2679, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 23, startLat: 36.5979, startLng: 114.4823, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 24, startLat: 30.5928, startLng: 114.3055, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 25, startLat: 24.4798, startLng: 118.0894, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
    { order: 26, startLat: 26.0745, startLng: 119.2965, endLat: 29.56301, endLng: 106.55156, arcAlt: 0.2, color: "#0EA5EA" },
  ];

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <div className="py-20 dark:bg-black bg-white min-h-screen flex flex-col items-center">

      {/* 内容区域 */}
      <div className="w-full max-w-7xl">
        {activeView === "map" && (
          <WorldMap
            dots={[
              { start: { lat: 39.9042, lng: 116.4074 }, end: { lat: 29.56301, lng: 106.55156, label: 'CQMU' } }, // 北京 → 重庆
              { start: { lat: 31.2304, lng: 121.4737 }, end: { lat: 29.56301, lng: 106.55156 } }, // 上海 → 重庆
              { start: { lat: 30.2741, lng: 120.1551 }, end: { lat: 29.56301, lng: 106.55156 } }, // 杭州 → 重庆
              { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 29.56301, lng: 106.55156 } }, // 旧金山 → 重庆
              { start: { lat: 43.8256, lng: 87.6168 }, end: { lat: 29.56301, lng: 106.55156 } }, // 新疆（乌鲁木齐） → 重庆
              { start: { lat: 30.5728, lng: 104.0668 }, end: { lat: 29.56301, lng: 106.55156 } }, // 成都 → 重庆
              { start: { lat: 22.3193, lng: 114.1694 }, end: { lat: 29.56301, lng: 106.55156 } }, // 香港 → 重庆
              { start: { lat: 23.1291, lng: 113.2644 }, end: { lat: 29.56301, lng: 106.55156 } }, // 广州 → 重庆
              { start: { lat: 22.5431, lng: 114.0579 }, end: { lat: 29.56301, lng: 106.55156 } }, // 深圳 → 重庆
              { start: { lat: 45.7420, lng: 126.6610 }, end: { lat: 29.56301, lng: 106.55156 } }, // 黑龙江（哈尔滨） → 重庆
              { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 29.56301, lng: 106.55156 } }, // 伦敦 → 重庆
              { start: { lat: 40.8183, lng: 111.7652 }, end: { lat: 29.56301, lng: 106.55156 } }, // 内蒙古（呼和浩特） → 重庆
              { start: { lat: 38.4872, lng: 106.2309 }, end: { lat: 29.56301, lng: 106.55156 } }, // 宁夏（银川） → 重庆
              { start: { lat: 20.0174, lng: 110.3492 }, end: { lat: 29.56301, lng: 106.55156 } }, // 海南（海口） → 重庆
              { start: { lat: 22.5176, lng: 113.3925 }, end: { lat: 29.56301, lng: 106.55156 } }, // 中山 → 重庆
              { start: { lat: 28.2282, lng: 112.9388 }, end: { lat: 29.56301, lng: 106.55156 } }, // 长沙 → 重庆
              { start: { lat: 32.0603, lng: 118.7969 }, end: { lat: 29.56301, lng: 106.55156 } }, // 南京 → 重庆
              { start: { lat: 31.2989, lng: 120.5853 }, end: { lat: 29.56301, lng: 106.55156 } }, // 苏州 → 重庆
              { start: { lat: 36.2048, lng: 138.2529 }, end: { lat: 29.56301, lng: 106.55156 } }, // 日本（东京） → 重庆
              { start: { lat: 35.9078, lng: 127.7669 }, end: { lat: 29.56301, lng: 106.55156 } }, // 韩国（首尔附近） → 重庆
              { start: { lat: 26.8206, lng: 30.8025 }, end: { lat: 29.56301, lng: 106.55156 } }, // 埃及（开罗附近） → 重庆
              { start: { lat: 25.5969, lng: 100.2679 }, end: { lat: 29.56301, lng: 106.55156 } }, // 大理 → 重庆
              { start: { lat: 36.5979, lng: 114.4823 }, end: { lat: 29.56301, lng: 106.55156 } }, // 邯郸 → 重庆
              { start: { lat: 30.5928, lng: 114.3055 }, end: { lat: 29.56301, lng: 106.55156 } }, // 武汉 → 重庆
              { start: { lat: 24.4798, lng: 118.0894 }, end: { lat: 29.56301, lng: 106.55156 } }, // 厦门 → 重庆
              { start: { lat: 26.0745, lng: 119.2965 }, end: { lat: 29.56301, lng: 106.55156 } }, // 福州 → 重庆
            ]}
          />
        )}

        {activeView === "globe" && (
          <div className="h-[600px] w-full">
            <World globeConfig={globeConfig} data={globeData} />
          </div>
        )}
      </div>
      {/* 切换按钮 */}
      <div className="mb-8 flex gap-4">
        <button
          className={`px-4 py-2 rounded ${activeView === "map" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-800"}`}
          onClick={() => setActiveView("map")}
        >
          Map
        </button>
        <button
          className={`px-4 py-2 rounded ${activeView === "globe" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-800"}`}
          onClick={() => setActiveView("globe")}
        >
          Globe
        </button>
      </div>
    </div>
  );
}
