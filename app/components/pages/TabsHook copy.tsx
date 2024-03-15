import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Image,
} from "@nextui-org/react";
import FormLink from "./FormLink";
import FormQR from "./FormQR";

export default function TabsHook() {
  let tabs = [
    {
      id: "links",
      label: (
        <div className="flex items-center space-x-2">
          <Image src="svgexport-6.svg" alt="linkIcon" />
          <span className="text-[20px]">Links</span>
        </div>
      ),
      content: <FormLink />,
    },
    {
      id: "qr",
      label: (
        <div className="flex items-center space-x-2">
          <Image src="svgexport-7.svg" alt="linkIcon" />
          <span className="text-[20px]">QR</span>
        </div>
      ),
      content: <FormQR />,
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        color="default"
        className="flex justify-center "
      >
        {(item) => (
          <Tab key={item.id} title={item.label} className="px-[52px] py-[30px]">
            <Card className="px-[40px] py-[30px]">
              <CardBody>{item.content}</CardBody>
              <div className="text-[20px] leading-[22px] flex flex-col justify-center items-center mt-[10px]">
                <p>
                  <strong>
                    No credit card required. Your free plan includes:
                  </strong>
                </p>
                <ul className="flex mt-[10px] list-none">
                  <li className="flex justify-center items-center px-[10px]">
                    <Image src="svgexport-10.svg" alt="" />
                    Short links
                  </li>
                  <li className="flex justify-center items-center px-[10px]">
                    <Image src="svgexport-10.svg" alt="" />
                    QR Codes
                  </li>
                </ul>
              </div>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
