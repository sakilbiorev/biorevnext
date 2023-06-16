import React from 'react';

function footer() {
  return (
    <div className="grid grid-cols-4 bg-[#1A1A1A] px-40 py-[100px]">
      <div>
        <img src="/logo-footer.svg" alt="" />
        <p>
          We provide a full range of Architectural Design/ Virtual 3D Services.
        </p>
        <ul>
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
      <div>
        <h4>Contacts</h4>
        <ul>
          <li>400 E Royal Lane, Suite #290, Irving, Tx - 75039</li>
          <li>info@biorev.us</li>
          <li>+1 (770) 572-1828</li>
        </ul>
      </div>
      <div>
        <h4>Useful Links</h4>
        <ul>
          <li>Life@Biorev</li>
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h4>Subscibe</h4>
        <input type="email" placeholder="Your Email" />
        <p>
          Follow our newsletter to stay updated about offers and our services.
        </p>
      </div>
    </div>
  );
}

export default footer;
