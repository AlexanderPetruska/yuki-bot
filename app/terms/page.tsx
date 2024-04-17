import { Button } from "@/components/ui/button";
import Link from "next/link";

const Temrs = () => {
  return (
    <main className="justify-top container flex h-full max-w-6xl flex-1 flex-col items-center gap-5">
      <div>
        <h1 className="mb-1 text-center text-3xl font-bold">
          Temrs of Service
        </h1>
        <p className="mb-10 max-w-80 overflow-auto text-center text-sm font-light text-gray-300 md:max-w-full">
          Effective Date: 4th day of July, 2024
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="items-left flex w-full flex-col md:align-middle">
          <h2 className="text-left  font-black text-primary md:max-w-2xl">
            INTRODUCTION
          </h2>
          <div className="ml-6">
            <ul className="list-disc pl-4 font-light">
              Thanks for choosing Yuki Network (&quot;we&quot;, &quot;us&quot;,
              &quot;our&quot;, &quot;Network&quot;). These Terms of Service
              (collectively, the &quot;Terms&quot;) outline the rules and
              regulations for the use of Our Services (including, but not
              limited to, &quot;Yuki Network&quot;, &quot;Neko Maid Cafe
              Discord&quot;). By using Our Services you implicitly agree to our
              terms. You may stop using the service at any time if you no longer
              agree to these terms. Some of Our Services require an agreement to
              another Terms of Services, and you agree to follow those Terms of
              Service along with our terms.
            </ul>
          </div>
        </div>
        <div className="items-left flex w-full flex-col md:align-middle">
          <h2 className="font-black text-primary md:max-w-2xl">YOUR PRIVACY</h2>
          <div className="ml-6 ">
            <p className=" text-left font-light">
              Your privacy does mater and we are committed to that. These Terms,
              together with our{" "}
              <Link href="/privacy">
                <Button variant="link" className="m-0 p-0 text-primary">
                  Privacy Policy
                </Button>
              </Link>
              , and any individual policies of any of the Services, constitute
              the whole agreement between you and the Company regrading the use
              of any of the Services, and completely replace any prior
              agreements between you and the Company relating to your use of any
              of the Services.
            </p>
          </div>
        </div>
        <div className="items-left flex w-full flex-col md:align-middle">
          <h2 className="font-black text-primary md:max-w-2xl">
            RULES TO YUKI NETWORK
          </h2>
          <div className="ml-6">
            <p>
              Any actions performed to gain an unfair advantage over other users
              are explicitly against the rules. This includes but is not limited
              to:
              <ul className="list-disc pl-10 font-light">
                <li>
                  <span className="font-bold">Using macros, scripts, etc.</span>
                </li>
                <li>
                  <span className="font-bold"> Using multiple accounts.</span>
                </li>
                <li>
                  <span className="font-bold">
                    Trading any items within the Service outside of the Service
                    itself.
                  </span>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="items-left flex w-full flex-col md:align-middle">
          <h2 className="font-black text-primary md:max-w-2xl">
            YOUR RESPONSIBILITY
          </h2>
          <div className="ml-6">
            <p className=" text-lef font-light">
              We know things happen, however you automatically assume full
              responsibility for any actions that is done on your account.
              <br />
              <br />
              <span className="font-bold">
                Do not share your Discord account credentials or allow any form
                of access to your Discord account that may result in violation
                of the rules.
              </span>
            </p>
          </div>
        </div>
        <div className="items-left flex w-full flex-col md:align-middle">
          <h2 className="font-black text-primary md:max-w-2xl">
            ANALYTICAL DATA
          </h2>
          <div className="ml-6">
            <p>
              Some of our Services will collect analytical data for the sole
              purporse of error tracking, usage information, and how the Service
              can be improved. To access or delete your data, please visit the{" "}
              <Link href="/privacy">
                <Button variant="link" className="m-0 p-0 text-primary">
                  Privacy Policy
                </Button>
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="items-left flex w-full flex-col md:align-middle">
          <h2 className="font-black text-primary md:max-w-2xl">TERMINATION</h2>
          <div className="ml-6">
            <p>
              If a breach of these rules is suspected any and all users
              associated with the rule(s) violation may result in any account(s)
              created on this bot terminated and/or blacklist from any of our
              Services. All provisions of the Terms which by their nature should
              survive termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability. Following termination, you must
              discontinue all forms of use on such Service or Services.
            </p>
          </div>
        </div>
        <div className="items-left mb-10 flex w-full flex-col md:align-middle">
          <h2 className="font-black text-primary md:max-w-2xl">
            OTHER THERMS AND CONDITIONS
          </h2>
          <div className="ml-6">
            <p>
              We reserve the right to update or modify these Terms at any time
              without prior notice. Please review these Terms periodically, and
              especially before you access, interact, or by any way, shape, or
              form utilize the Services. These Terms were last updated on the
              date indicated at the top of this document. Your continued use of
              any of the Services after any changes or revisions shall indicate
              your agreement with the terms of revised Terms.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Temrs;
