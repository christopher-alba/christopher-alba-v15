import type { FC } from "react";
import "./QuoteSection.css";

const QuoteSection: FC = () => {
  return (
    <div className="quote-section">
      <div>
        <div className="quote-content">
          <span>
            “Tools and processes can help, but it’s people that make projects
            succeed.”
          </span>
          <p>
            <em>― said every great team ever.</em>
          </p>
        </div>
      </div>
    </div>
  );
};
export default QuoteSection;
