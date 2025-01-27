import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const TreeNode = ({ data, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(level < 1);
  
  const getColorClass = (level) => {
    const colors = {
      0: 'bg-purple-100',
      1: 'bg-blue-100',
      2: 'bg-green-100',
      3: 'bg-orange-100'
    };
    return colors[level] || 'bg-gray-100';
  };

  if (!data.children) {
    return (
      <div className="pl-6 py-2 text-sm">
        {data.name}
      </div>
    );
  }

  return (
    <div>
      <div 
        className={`flex items-center cursor-pointer p-2 my-1 rounded ${getColorClass(level)}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 
          <ChevronDown className="w-4 h-4 mr-2" /> : 
          <ChevronRight className="w-4 h-4 mr-2" />
        }
        <span className="font-medium">{data.name}</span>
      </div>
      {isOpen && (
        <div className="ml-4">
          {data.children.map((child, index) => (
            <TreeNode key={index} data={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const BuddhistThemeHierarchy = () => {
  const data = {
    name: "四聖諦",
    children: [
      {
        name: "苦諦",
        children: [
          {
            name: "五蘊",
            children: [
              {
                name: "色蘊",
                children: [
                  { name: "デジタル依存" },
                  { name: "身体執着" }
                ]
              },
              {
                name: "受蘊",
                children: [
                  { name: "感覚的快楽" },
                  { name: "情報過多" }
                ]
              },
              {
                name: "想蘊",
                children: [
                  { name: "認識の歪み" },
                  { name: "イメージ執着" }
                ]
              },
              {
                name: "行蘊",
                children: [
                  { name: "業的行為" },
                  { name: "習慣的反応" }
                ]
              },
              {
                name: "識蘊",
                children: [
                  { name: "意識の混乱" },
                  { name: "妄想分別" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "集諦",
        children: [
          {
            name: "十二因縁",
            children: [
              {
                name: "無明",
                children: [
                  { name: "認識の誤り" },
                  { name: "価値観の混乱" }
                ]
              },
              {
                name: "行",
                children: [
                  { name: "習慣的行動" },
                  { name: "無意識の反応" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "滅諦",
        children: [
          {
            name: "三解脱門",
            children: [
              {
                name: "空",
                children: [
                  { name: "執着からの解放" },
                  { name: "固定観念の超越" }
                ]
              },
              {
                name: "無相",
                children: [
                  { name: "形にとらわれない" },
                  { name: "本質の理解" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "道諦",
        children: [
          {
            name: "八正道",
            children: [
              {
                name: "正見",
                children: [
                  { name: "正しい理解" },
                  { name: "智慧の開発" }
                ]
              },
              {
                name: "正思",
                children: [
                  { name: "正しい思考" },
                  { name: "判断力" }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <TreeNode data={data} />
    </div>
  );
};

export default BuddhistThemeHierarchy;
