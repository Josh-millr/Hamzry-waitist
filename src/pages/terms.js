import { PageMargin } from "@/components/PageMargin/PageMargin";

function Terms() {
  return (
    <PageMargin>
      <div className="mb-8 mt-24 grid gap-y-8">
        <div className="grid gap-2 lg:gap-4">
          <h1 className="text-4xl lg:text-5xl">Terms and Conditions</h1>
          <p className="text-base text-gray-400">
            Last updated: March 27, 2023
          </p>
        </div>

        <p className="font-sans text-base">
          Please read these terms and conditions carefully before using Our
          Service.
        </p>
      </div>

      {/* Interpretation and Definitions */}
      <div className="mb-8 grid text-start">
        <h2 className="pb-8 text-2xl lg:text-3xl">
          Interpretation and Definitions
        </h2>

        <div className="grid gap-4 pb-8">
          <h3 className="text-lg font-bold">Interpretation</h3>
          <p className="text-base">
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
        </div>

        <div className="">
          <div className="grid gap-2 pb-4">
            <h3 className="text-lg font-bold">Definitions</h3>
            <p className="text-sm">
              For the purposes of these Terms and Conditions:
            </p>
          </div>

          <div className="">
            {/* bullet points  goes here... */}
            <ul class="grid list-disc gap-y-4 pl-8">
              <li>
                <b>Affiliate</b> means an entity that controls, is controlled by
                or is under common control with a party, where {"control"} means
                ownership of 50% or more of the shares, equity interest or other
                securities entitled to vote for election of directors or other
                managing authority.
              </li>

              <li>
                <b>Country</b> refers to: Nigeria
              </li>

              <li>
                <b>Company</b> (referred to as either {"the Company"}, {"We"},{" "}
                {"Us"} or {"Our"} in this Agreement) refers to Hamzry, Royal
                Apartment, Durumi, Area 1, Abuja.
              </li>

              <li>
                <b>Device</b> means any device that can access the Service such
                as a computer, a cellphone or a digital tablet.
              </li>

              <li>
                <b>Service</b> refers to the Website.
              </li>

              <li>
                <b>Terms and Conditions</b> (also referred as {"Terms"}) mean
                these Terms and Conditions that form the entire agreement
                between You and the Company regarding the use of the Service.
                This Terms and Conditions agreement has been created with the
                help of the Free Terms and Conditions Generator.
              </li>

              <li>
                <b>Website</b> refers to Hamzry, accessible from{" "}
                <a className="text-blue-700" href="https://hamzry.com/">
                  https://hamzry.com/
                </a>
              </li>

              <li>
                <b>You</b> means the individual accessing or using the Service,
                or the company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Acknowledgment */}
      <div className="mb-8 grid text-start">
        <h2 className="pb-8 text-2xl lg:text-3xl">Acknowledgment</h2>

        <div className="text-base">
          <div className="mb-4">
            <p>
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </p>
          </div>
          <div className="mb-4">
            <p>
              Your access to and use of the Service is conditioned on Your
              acceptance of and compliance with these Terms and Conditions.
              These Terms and Conditions apply to all visitors, users and others
              who access or use the Service.
            </p>
          </div>
          <div className="mb-4">
            <p>
              By accessing or using the Service You agree to be bound by these
              Terms and Conditions. If You disagree with any part of these Terms
              and Conditions then You may not access the Service.{" "}
            </p>
          </div>
          <div className="mb-4">
            <p>
              You represent that you are over the age of 18. The Company does
              not permit those under 18 to use the Service.
            </p>
          </div>
          <div className="mb-4">
            <p>
              Your access to and use of the Service is also conditioned on Your
              acceptance of and compliance with the Privacy Policy of the
              Company. Our Privacy Policy describes Our policies and procedures
              on the collection, use and disclosure of Your personal information
              when You use the Application or the Website and tells You about
              Your privacy rights and how the law protects You. Please read Our
              Privacy Policy carefully before using Our Service.
            </p>
          </div>
        </div>
      </div>

      {/* Links to Other Websites */}
      <div className="mb-8 grid text-start">
        <h2 className="pb-8 text-2xl lg:text-3xl">Links to Other Websites</h2>

        <div className="text-base">
          <div className="mb-4">
            <p>
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by the Company.
            </p>
          </div>
          <div className="mb-4">
            <p>
              The Company has no control over, and assumes no responsibility
              for, the content, privacy policies, or practices of any third
              party web sites or services. You further acknowledge and agree
              that the Company shall not be responsible or liable, directly or
              indirectly, for any damage or loss caused or alleged to be caused
              by or in connection with the use of or reliance on any such
              content, goods or services available on or through any such web
              sites or services.
            </p>
          </div>
          <div className="mb-4">
            <p>
              We strongly advise You to read the terms and conditions and
              privacy policies of any third-party web sites or services that You
              visit.
            </p>
          </div>
        </div>
      </div>

      {/* Termination */}
      <div className="mb-8 grid text-start">
        <h2 className="pb-8 text-2xl lg:text-3xl">Termination</h2>

        <div className="text-base">
          <div className="mb-4">
            <p>
              We may terminate or suspend Your access immediately, without prior
              notice or liability, for any reason whatsoever, including without
              limitation if You breach these Terms and Conditions.
            </p>
          </div>
          <div className="mb-4">
            <p>
              Upon termination, Your right to use the Service will cease
              immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Limitation of Liability */}
      <div className="mb-8 grid text-start">
        <h2 className="pb-8 text-2xl lg:text-3xl">Limitation of Liability</h2>

        <div className="text-base">
          <div className="mb-4">
            <p>
              Notwithstanding any damages that You might incur, the entire
              liability of the Company and any of its suppliers under any
              provision of this Terms and Your exclusive remedy for all of the
              foregoing shall be limited to the amount actually paid by You
              through the Service or 100 USD if You {"haven't"} purchased
              anything through the Service.
            </p>
          </div>
          <div className="mb-4">
            <p>
              To the maximum extent permitted by applicable law, in no event
              shall the Company or its suppliers be liable for any special,
              incidental, indirect, or consequential damages whatsoever
              (including, but not limited to, damages for loss of profits, loss
              of data or other information, for business interruption, for
              personal injury, loss of privacy arising out of or in any way
              related to the use of or inability to use the Service, third-party
              software and/or third-party hardware used with the Service, or
              otherwise in connection with any provision of this Terms), even if
              the Company or any supplier has been advised of the possibility of
              such damages and even if the remedy fails of its essential
              purpose.
            </p>
          </div>
          <div className="mb-4">
            <p>
              Some states do not allow the exclusion of implied warranties or
              limitation of liability for incidental or consequential damages,
              which means that some of the above limitations may not apply. In
              these states, each {"party's"} liability will be limited to the
              greatest extent permitted by law.
            </p>
          </div>
        </div>
      </div>

      {/* "AS IS" and "AS AVAILABLE" Disclaimer */}
      <div className="mb-8 grid text-start">
        <h2 className="pb-8 text-2xl lg:text-3xl">
          {'"AS IS"'} and {'"AS AVAILABLE"'} Disclaimer
        </h2>

        <div className="text-base">
          <div className="mb-4">
            <p>
              The Service is provided to You {'"AS IS"'} and {'"AS AVAILABLE"'}{" "}
              and with all faults and defects without warranty of any kind. To
              the maximum extent permitted under applicable law, the Company, on
              its own behalf and on behalf of its Affiliates and its and their
              respective licensors and service providers, expressly disclaims
              all warranties, whether express, implied, statutory or otherwise,
              with respect to the Service, including all implied warranties of
              merchantability, fitness for a particular purpose, title and
              non-infringement, and warranties that may arise out of course of
              dealing, course of performance, usage or trade practice. Without
              limitation to the foregoing, the Company provides no warranty or
              undertaking, and makes no representation of any kind that the
              Service will meet Your requirements, achieve any intended results,
              be compatible or work with any other software, applications,
              systems or services, operate without interruption, meet any
              performance or reliability standards or be error free or that any
              errors or defects can or will be corrected.
            </p>
          </div>
          <div className="mb-4">
            <p>
              Without limiting the foregoing, neither the Company nor any of the
              {"company's"} provider makes any representation or warranty of any
              kind, express or implied: (i) as to the operation or availability
              of the Service, or the information, content, and materials or
              products included thereon; (ii) that the Service will be
              uninterrupted or error-free; (iii) as to the accuracy,
              reliability, or currency of any information or content provided
              through the Service; or (iv) that the Service, its servers, the
              content, or e-mails sent from or on behalf of the Company are free
              of viruses, scripts, trojan horses, worms, malware, timebombs or
              other harmful components. purpose.
            </p>
          </div>
          <div className="mb-4">
            <p>
              Some jurisdictions do not allow the exclusion of certain types of
              warranties or limitations on applicable statutory rights of a
              consumer, so some or all of the above exclusions and limitations
              may not apply to You. But in such a case the exclusions and
              limitations set forth in this section shall be applied to the
              greatest extent enforceable under applicable law.
            </p>
          </div>
        </div>
      </div>

      {/* Governing Law */}
      <div className="mb-8 grid text-start">
        <h2 className="pb-8 text-2xl lg:text-3xl">
          {'"AS IS"'} and {'"AS AVAILABLE"'} Disclaimer
        </h2>

        <div className="text-base">
          <div className="mb-4">
            <p>
              The laws of the Country, excluding its conflicts of law rules,
              shall govern this Terms and Your use of the Service. Your use of
              the Application may also be subject to other local, state,
              national, or international laws.
            </p>
          </div>
        </div>
      </div>

      {/* Disputes Resolution */}
      <div className="mb-8 grid text-start">
        <h2 className="pb-8 text-2xl lg:text-3xl">Disputes Resolution</h2>

        <div className="text-base">
          <div className="mb-4">
            <p>
              If You have any concern or dispute about the Service, You agree to
              first try to resolve the dispute informally by contacting the
              Company.
            </p>
          </div>
        </div>
      </div>

      {/* For European Union (EU) Users */}
      <div className="mb-8 grid text-start">
        <h2 className="pb-8 text-2xl lg:text-3xl">
          For European Union (EU) Users
        </h2>

        <div className="text-base">
          <div className="mb-4">
            <p>
              If You are a European Union consumer, you will benefit from any
              mandatory provisions of the law of the country in which you are
              resident in.
            </p>
          </div>
        </div>
      </div>

      {/* United States Legal Compliance */}
      <div className="mb-8 grid text-start">
        <h2 className="pb-8 text-2xl lg:text-3xl">
          United States Legal Compliance
        </h2>

        <div className="text-base">
          <div className="mb-4">
            <p>
              You represent and warrant that (i) You are not located in a
              country that is subject to the United States government embargo,
              or that has been designated by the United States government as a
              {'"terrorist supporting"'} country, and (ii) You are not listed on
              any United States government list of prohibited or restricted
              parties.
            </p>
          </div>
        </div>
      </div>

      {/* Severability and Waiver */}
      <div className="mb-8 grid text-start">
        <p className="pb-4 text-2xl lg:text-3xl">Severability and Waiver</p>

        <div className="text-base">
          <div className="mb-4">
            <h4 className="my-4 text-lg font-bold">Severability</h4>
            <p>
              If any provision of these Terms is held to be unenforceable or
              invalid, such provision will be changed and interpreted to
              accomplish the objectives of such provision to the greatest extent
              possible under applicable law and the remaining provisions will
              continue in full force and effect.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="my-4 text-lg font-bold">Waiver</h4>
            <p>
              Except as provided herein, the failure to exercise a right or to
              require performance of an obligation under these Terms shall not
              effect a {"party's"} ability to exercise such right or require
              such performance at any time thereafter nor shall the waiver of a
              breach constitute a waiver of any subsequent breach.
            </p>
          </div>
        </div>
      </div>

      {/* Changes to These Terms and Conditions */}
      <div className="mb-8 grid text-start">
        <p className="pb-4 text-2xl lg:text-3xl">Severability and Waiver</p>

        <div className="text-base">
          <div className="mb-4">
            <p>
              We reserve the right, at Our sole discretion, to modify or replace
              these Terms at any time. If a revision is material We will make
              reasonable efforts to provide at least 30 {"days'"} notice prior
              to any new terms taking effect. What constitutes a material change
              will be determined at Our sole discretion.
            </p>
          </div>

          <div className="mb-4">
            <p>
              By continuing to access or use Our Service after those revisions
              become effective, You agree to be bound by the revised terms. If
              You do not agree to the new terms, in whole or in part, please
              stop using the website and the Service.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="mb-8 grid text-start">
        <p className="pb-4 text-2xl lg:text-3xl">Contact Us</p>

        <div className="text-base">
          <div className="mb-4">
            <p>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
          </div>
        </div>

        <ul class="grid list-disc pl-8">
          <li>
            <a href="mailto:info@hamzry.com" className="text-blue-600">
              By email: info@hamzry.com
            </a>
          </li>
        </ul>
      </div>
    </PageMargin>
  );
}

export default Terms;
