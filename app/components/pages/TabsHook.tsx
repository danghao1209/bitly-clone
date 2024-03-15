import React from "react";
import FormLink from "./FormLink";
import FormQR from "./FormQR";
import { Tabs } from "antd";
import { Image } from "antd";
export default function TabsHook() {
  const onChange = (key: string) => {
    console.log(key);
  };

  let tabs = [
    {
      id: "links",
      label: (
        <div className="flex items-center space-x-2">
          <Image src="svgexport-6.svg" alt="linkIcon" preview={false} />
          <span className="text-[20px]">Links</span>
        </div>
      ),
      content: <FormLink />,
    },
    {
      id: "qr",
      label: (
        <div className="flex items-center space-x-2">
          <Image src="svgexport-7.svg" alt="linkIcon" preview={false} />
          <span className="text-[20px]">QR</span>
        </div>
      ),
      content: <FormQR />,
    },
  ];

  return (
    <div>
      <Tabs
        onChange={onChange}
        type="card"
        items={tabs.map((item, i) => ({
          label: item.label,
          key: i.toString(),
          children: item.content,
          style: { marginBottom: 0 },
        }))}
        centered
      />
    </div>
  );
}
