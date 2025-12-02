import React from "react";

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const CoursePageTemplate: React.FC<Props> = ({ title, description, children }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
        <p className="text-gray-700 mb-10">{description}</p>

        <div className="prose prose-lg text-gray-800">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CoursePageTemplate;
