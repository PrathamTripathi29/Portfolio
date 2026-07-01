import React from "react";
import PageTitle from "./PageTitle";

export default function PageHeading({ title, children }) {
  return (
    <div className="text-center max-w-[576px]  mx-auto px-4 py-6">
      <PageTitle title={title} />
      <p className="font-primary leading-6 text-gray-600 dark:text-gray-300">{children}</p>
    </div>
  );
}

// This works the same as well
// export default function PageHeading(props) {
//   return (
//     <div className="page-heading-container">
//       <PageTitle title={props.title} />
//       <p className="page-heading-paragraph">{props.children}</p>
//     </div>
//   )
// }
