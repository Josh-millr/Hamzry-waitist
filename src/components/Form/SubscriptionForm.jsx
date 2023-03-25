import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { StoreContext } from "@/context/Store";

function CustomForm({ value, formElements, status, onValidated }) {
  const { setLoading } = useContext(StoreContext);
  const router = useRouter();

  console.log(status);

  useEffect(() => {
    if (status === "error") setLoading(false);
    if (status === "sending") setLoading(true);
    if (status === "success") router.push("/success");
  }, [router, setLoading, status]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.indexOf("@") > -1) {
      // Submits Form to Mailchimp
      onValidated({ EMAIL: value });
    }
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-2 md:flex-row"
      >
        {formElements}
      </form>
    </div>
  );
}

// Mailchimp Wrapper Form
export function SubscriptionForm({ children, value }) {
  let u = process.env.MAILCHIMP_U;
  let id = process.env.MAILCHIMP_ID;

  const postUrl = `https://hamzry.us8.list-manage.com/subscribe/post?u=${u}&id=${id}`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          value={value}
          status={status}
          formElements={children}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}
