import { Metadata } from 'next';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@mcsph/ui/components/accordion';
import { AspectRatio } from '@mcsph/ui/components/aspect-ratio';
import { Card } from '@mcsph/ui/components/card';
import { Separator } from '@mcsph/ui/components/separator'; // Adjust the import path based on your project structure

export const metadata: Metadata = {
  title: 'About Us | Man Cave Supplies PH, Inc.',
};

export default function AboutUs() {
  return (
    <div style={{ margin: '50px auto', maxWidth: '800px' }}>
      <h1 className="text-3xl font-bold mb-4 text-center">Who we are</h1>
      <p className="text-lg mb-4">
        Man Cave Supplies PH, Inc. is a forward-thinking supply retailer committed to delivering exceptional service and cutting-edge solutions. 
        As a leader in the industry, we recognize the importance of an efficient ordering management system (OMS) in today's dynamic marketplace. 
        Our goal is to streamline operations, optimize inventory levels, and enhance customer satisfaction through innovative technology.
      </p>
      <Separator className="my-4" />
      <h1 className="text-3xl font-bold mb-4">Common Questions:</h1>
      <Separator className="my-4" />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="question-1">
          <AccordionTrigger>What is the purpose of the web-based ordering management system?</AccordionTrigger>
          <AccordionContent>
            The purpose of the system is to provide better efficiency, enhanced productivity, and increased precision in ordering. Clients can place orders online, and the system automates the order fulfillment process, reducing errors and the need for manual intervention.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="question-2">
          <AccordionTrigger>How does the system improve customer satisfaction?</AccordionTrigger>
          <AccordionContent>
            The system allows customers to monitor the status of their orders from placement to delivery, providing transparency. This feature enhances customer satisfaction and reduces the need for customer service inquiries.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="question-3">
          <AccordionTrigger>What real-time reports does the system generate?</AccordionTrigger>
          <AccordionContent>
            The system generates real-time reports on inventory levels, sales trends, and customer preferences. This enables data-driven decisions to optimize operations and maximize profits.
          </AccordionContent>
        </AccordionItem>
        {/* Add more questions and answers as needed */}
      </Accordion>
    </div>
  );
}
