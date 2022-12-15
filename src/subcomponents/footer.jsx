import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="mt-[90rem] md:mt-[85rem] lg:mt-[400px]">
        <footer id="footer" className="footer">
          <div className="container mt-4">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>Tammy</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/impact-bootstrap-business-website-template/ */}
              Designed by Tammy
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
