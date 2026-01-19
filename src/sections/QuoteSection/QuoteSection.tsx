import type { FC } from "react";
import "./QuoteSection.css";

const QuoteSection: FC = () => {
  return (
    <div className="quote-section">
      <div className="container">
        <p>
          “Tools and processes can help, but it’s people that make projects
          succeed.”
        </p>
        <p>
          <em>― said every great team ever.</em>
        </p>
      </div>
    </div>
  );
};
export default QuoteSection;
